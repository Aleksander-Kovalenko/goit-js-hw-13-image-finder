// import { createClient } from 'pexels';
// const API_KEY = '563492ad6f9170000100000101800fb516634d29b30df44f4511fa37';
// const client = createClient(`${API_KEY}`);

// class getImage {
//   constructor() {
//     this.searchImage = null;
//     this.page = 1;
//   }
//   fetchImage(searchImage) {
//     return client.photos
//       .search({ query: searchImage, page: this.page, per_page: 12 })
//       .then(r => r.photos);
//   }
//   nextPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }
// }

// export default getImage;

// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ

export default class getImage {
  constructor() {
    this.query = '';
    this.page = 1;
  }

  getImage() {
    const API_KEY = '24200561-e33c219a52f08aa11179044b0';
    const BASE_URL = 'https://pixabay.com/api';
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${API_KEY}`;
    return fetch(url)
      .then(r => r.json())
      .then(data => {
        this.nextPage();

        return data.hits;
      });
  }

  nextPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
  get newQuery() {
    return this.query;
  }
  set newQuery(searchImage) {
    this.query = searchImage;
  }
}
