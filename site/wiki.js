const search = document.querySelector('#app-search');
const groups = [...document.querySelectorAll('.app-group')];
const noResults = document.querySelector('.no-results');
search?.addEventListener('input', () => {
  const query = search.value.trim().toLowerCase();
  let count = 0;
  for (const group of groups) {
    const matches = group.dataset.name.includes(query);
    group.hidden = !matches;
    if (matches) count++;
  }
  noResults.hidden = count !== 0;
});
