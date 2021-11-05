import './sass/main.scss';
const Handlebars = require('handlebars');

import API from './js/apiService.js';
import getRefs from './js/getRef.js';

const refs = getRefs();

refs.form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  let query = e.currentTarget.elements.query.value;

  if (!query.trim()) return;

  API(query);
  query = '';
  console.log(query);
}
