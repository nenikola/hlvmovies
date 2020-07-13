import { action, observable, computed } from "mobx";

class ObservableStore {
  @observable movies = [];
  @observable moviesDetailsLoaded = false;

  @action setMovies(movies) {
    this.movies = movies;
    this.moviesDetailsLoaded = false;
  }
  @action updateMovies(movies) {
    this.movies = movies;
    this.moviesDetailsLoaded = true;
  }
  @action addMovie(movie) {
    this.movies.push(movie);
  }
  @computed get hasMovies() {
    return this.movies.length > 0;
  }
  @computed get getMovies() {
    return this.movies;
  }
}

const observableStore = new ObservableStore();
export default observableStore;
