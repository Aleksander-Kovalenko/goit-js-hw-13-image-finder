import './css/common.css';

// basicLightbox
import onClickFullImg from './modalWindow.js';

// NOTIFYCATION
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { info, error } from '@pnotify/core';

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

refs.cardList.addEventListener('click', onClickFullImg);
refs.form.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  API.newQuery();
  console.log(API.page);
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
    } else if (resp.length >= 12) {
      loadMoreBtn.show();
    }
    refs.cardList.insertAdjacentHTML('beforeend', card(resp));
  });
}

function onLoadMore() {
  API.onFetchArticles().then(resp => {
    downScroll += refs.height + 742;
    refs.cardList.insertAdjacentHTML('beforeend', card(resp));
    if (resp.length >= 12) {
      loadMoreBtn.enable();
      window.scrollTo({ top: downScroll, behavior: 'smooth' });
    }
  });
}

function onClearRender() {
  refs.cardList.innerHTML = '';
}
