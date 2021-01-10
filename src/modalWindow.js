import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

export default function onClickSearch(e) {
  if (e.target.tagName === 'IMG') {
    const fullSizeUrl = e.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${fullSizeUrl}"/>`);
    instance.show();
  }
}
