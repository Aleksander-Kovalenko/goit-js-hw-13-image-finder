import './css/common.css';

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { info, error } from '@pnotify/core';

// LODASH
import { debounce } from 'debounce';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import card from './template/photoCard.hbs';

import LoadMoreBtn from './load-more-bnt.js';
import ImagesServer from './apiService.js';
import getRefs from './referentsHTML.js';

const refs = getRefs();
const API = new ImagesServer();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

refs.form.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  API.query = e.currentTarget.elements.query.value;
  if (API.query === '') {
    return info({
      text: 'Напиши мне и я куплю тебе клавиатуру',
      delay: 3000,
    });
  }

  onClearRender();
  API.onFetchArticles().then(resp => {
    if (resp.length === 0) {
      return error({
        text: 'Шерлок Холмc видимо с меня не получиться. Извините',
        delay: 3000,
      });
    }
    refs.cardList.insertAdjacentHTML('beforeend', card(resp));
    loadMoreBtn.show();
  });
}

function onLoadMore() {
  let currentHeight = refs.height + pageYOffset;
  window.scrollBy(0, currentHeight);
  loadMoreBtn.disable();

  API.onFetchArticles().then(resp => {
    loadMoreBtn.enable();
    refs.cardList.insertAdjacentHTML('beforeend', card(resp));
  });
}

function onClearRender() {
  refs.cardList.innerHTML = '';
}

function onLoadScroll() {
  let delay = 0;
  window.scrollY(delay);
  delay += 500;
}
