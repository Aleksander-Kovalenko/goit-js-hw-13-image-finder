export default class ImagesServer {
  constructor() {
    this.BASE_URL = 'https://pixabay.com/api/';
    this.API_KEY = '19724495-11683e473f3bf588d4ff86f50';
    this.page = 1;
    this.searchQuery = '';
  }
  onFetchArticles(searchQuery) {
    fetch(
      `${this.BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.API_KEY}`,
    )
      .then(response => response.json())
      .then(date => {
        this.incrementPage();
      });
  }
  incrementPage() {
    this.page += 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newSearch) {
    this.searchQuery = newSearch;
  }
}
