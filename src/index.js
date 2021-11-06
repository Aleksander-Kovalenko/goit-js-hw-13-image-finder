import './sass/main.scss';
const Handlebars = require('handlebars');
import cards from './templates/cards.hbs';
const debounce = require('lodash.debounce');

import GetFetch from './js/apiService.js';
import getRefs from './js/getRef.js';

const refs = getRefs();
const API = new GetFetch();
let query = '';

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  query = e.currentTarget.elements.query.value;
  if (!query.trim()) return;
  refs.gallery.innerHTML = '';
  API.resetPage();
  API.newQuery(query);
  API.getImage().then(render);
});

function render(list) {
  const card = list.map(item => cards({ item }));
  refs.gallery.insertAdjacentHTML('beforeend', card.join(''));
}

window.addEventListener('scroll', debounce(scrollHandler, 1000));

function isScrollToBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}
function scrollHandler() {
  if (!isScrollToBottom) return;

  API.getImage().then(render);
}
