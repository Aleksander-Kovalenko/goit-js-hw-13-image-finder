export default function getRefs() {
  return {
    form: document.querySelector('.search-form'),
    cardList: document.querySelector('.gallery'),
    query: document.querySelector('.search-query'),
    submit: document.querySelector('.btn'),
  };
}
