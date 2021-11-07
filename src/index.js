import './sass/main.scss';
const Handlebars = require('handlebars');
import cards from './templates/cards.hbs';
const debounce = require('lodash.debounce');

import './js/modal-window';
import GetFetch from './js/apiService';
import getRefs from './js/getRef';

const refs = getRefs();
const API = new GetFetch();

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  API.newQuery = e.currentTarget.elements.query.value;
  if (!API.newQuery.trim()) return;

  clearList();

  API.resetPage();
  // API.newQuery(query);
  // API.getImage().then(render);
  observer.observe(refs.anchor);
});

function render(list) {
  const card = list.map(item => cards({ item }));
  refs.gallery.insertAdjacentHTML('beforeend', card.join(''));
}

function clearList() {
  refs.gallery.innerHTML = '';
}

const observer = new IntersectionObserver(observerHandler, {
  rootMargin: '160px',
});

// observer.observe(refs.anchor);

function observerHandler([entries]) {
  if (entries.isIntersecting && API.newQuery) {
    API.getImage().then(render);
  }
}
