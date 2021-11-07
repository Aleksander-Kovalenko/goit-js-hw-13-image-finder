function getRefs() {
  return {
    form: document.querySelector('.js-form'),
    gallery: document.querySelector('.js-gallery'),
    input: document.querySelector('.js-input'),
    submitForm: document.querySelector('.js-button'),
    anchor: document.querySelector('.js-anchor'),
    lightbox: document.querySelector('.js-lightbox'),
    image: document.querySelector('.lightbox__image'),
  };
}

export default getRefs;
