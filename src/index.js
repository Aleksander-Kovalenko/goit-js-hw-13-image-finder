import './css/common.css';

import ImagesServer from './apiService.js';
import getRefs from './referentsHTML.js';

const refs = new getRefs();
const API = new ImagesServer();

refs.form.addEventListener('submit', onSearch);
refs.submit.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  API.query = e.currentTarget.elements.query.value;
  API.onFetchArticles();
}

function onLoadMore() {
  API.onFetchArticles();
}
