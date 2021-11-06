import './sass/main.scss';
const Handlebars = require('handlebars');
import cards from './templates/cards.hbs';

import GetFetch from './js/apiService.js';
import getRefs from './js/getRef.js';

const refs = getRefs();
const API = new GetFetch();

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  refs.gallery.innerHTML = '';
  let query = e.currentTarget.elements.query.value;

  if (!query.trim()) return;

  API.fetchImage(query.trim()).then(render).catch(console.log);
  refs.input.value = '';
});

function render(list) {
  console.log(list);
  refs.gallery.insertAdjacentHTML(
    'beforeend',
    list.map(item => cards({ item })),
  );
}
