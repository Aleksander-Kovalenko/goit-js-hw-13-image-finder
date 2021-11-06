import { createClient } from 'pexels';
const API_KEY = '563492ad6f9170000100000101800fb516634d29b30df44f4511fa37';
const client = createClient(`${API_KEY}`);

class getImage {
  constructor() {
    this.searchImage = null;
    this.page = 1;
  }
  fetchImage(searchImage) {
    return client.photos
      .search({ query: searchImage, page: this.page, per_page: 12 })
      .then(r => r.photos);
  }
  nextPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}

export default getImage;
