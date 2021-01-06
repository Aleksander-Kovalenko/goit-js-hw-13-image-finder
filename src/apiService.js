export default class ImagesServer {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }
  onFetchArticles() {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '19724495-11683e473f3bf588d4ff86f50';
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
    // this.searchQuery = '';
    console.log('search', this.searchQuery);
    fetch(url)
      .then(response => response.json())
      .then(date => {
        this.incrementPage();
        return date.hits;
      });
  }
  incrementPage() {
    this.page += 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
