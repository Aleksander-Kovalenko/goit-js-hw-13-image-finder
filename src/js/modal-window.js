import getRefs from './getRef.js';

const refs = getRefs();

refs.gallery.addEventListener('click', e => {
  e.preventDefault();

  const target = e.target;
  console.log(target);
  if (target.nodeName === 'IMG') {
    refs.lightbox.classList.add('is-open');

    setAttributeOnImage(target.dataset.source, target.alt, target.dataset.id);
  }
});

function setAttributeOnImage(src = '', alt = '', id = '') {
  refs.image.dataset.id = id;
  refs.image.src = src;
  refs.image.alt = alt;
}

document.body.addEventListener('keydown', onKeydown);

function onKeydown(e) {
  if (e.code === 'Escape') {
    refs.lightbox.classList.remove('is-open');
    refs.gallery.removeAttribute('keypress', key);
    setAttributeOnImage();
  }
}

refs.lightbox.addEventListener('click', onClickBtnClose);

function onClickBtnClose(e) {
  const target = e.target;
  if (target.nodeName === 'BUTTON' || target.classList.contains('lightbox__overlay')) {
    refs.lightbox.classList.remove('is-open');
    setAttributeOnImage();
  }
}
