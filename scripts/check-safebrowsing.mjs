// Reports Google's Safe Browsing verdict for a site and fails when it is listed. Google publishes
// the same verdict that drives Chrome's warning at the Transparency Report, without an API key:
// the body is an XSSI-prefixed JSON row of
// [key, status, harmful redirects, malware, phishing, hosts malware, uncommon downloads, updated,
// site, ...]. Status 3 means only some pages are listed, so the site keeps working while Chrome
// still warns on the affected URLs; treat it as a failure rather than a quiet pass.
const STATUS = {
  1: 'No unsafe content found',
  2: 'This site is unsafe',
  3: 'Some pages on this site are unsafe',
  4: 'Large site with mixed content',
  5: 'Hosts files that are not commonly downloaded',
  6: 'No available data',
};

const LISTED = new Set([2, 3, 5]);
const sites = process.argv.slice(2);

if (!sites.length) sites.push('craft.wiki');

const check = async (site) => {
  const endpoint = `https://transparencyreport.google.com/transparencyreport/api/v3/safebrowsing/status?site=${encodeURIComponent(site)}`;
  const response = await fetch(endpoint, { headers: { 'User-Agent': 'craft-wiki-safebrowsing-check' } });

  if (!response.ok) throw new Error(`${site}: status request failed with HTTP ${response.status}`);

  const body = (await response.text()).replace(/^\)\]\}'\s*/, '');
  const row = JSON.parse(body)?.[0];

  if (!Array.isArray(row) || row[0] !== 'sb.ssr') throw new Error(`${site}: unexpected response`);

  const [, status, redirects, malware, phishing, hosting, downloads, updated, scanned] = row;
  const flags = [
    ['sends visitors to harmful sites', redirects],
    ['installs unwanted or malicious software', malware],
    ['tricks visitors into sharing personal information (phishing)', phishing],
    ['hosts malicious or unwanted software', hosting],
    ['serves files that are not commonly downloaded', downloads],
  ].filter(([, on]) => on === true);

  console.log(`${scanned ?? site}: ${STATUS[status] ?? `unknown status ${status}`} (last updated ${new Date(updated).toISOString()})`);
  for (const [label] of flags) console.log(`  - ${label}`);

  return LISTED.has(status);
};

let listed = false;

for (const site of sites) {
  try {
    if (await check(site)) listed = true;
  } catch (error) {
    console.error(error.message);
    process.exitCode = 2;
  }
}

if (listed) {
  console.error('Safe Browsing lists this site. Check Security issues in Search Console and request a review.');
  process.exitCode = 1;
}
