import axios from "axios";
import { MOVIES_SERVICE_CONFIG, CREDITS_JOBS } from "./../utils/env";
import { baseQueryParams } from "./../utils/helpers";
class MoviesService {
  /**Fetches movies from API and maps them into
   *  Movie{
   *    key,
   *    title,
   *    releaseDate,
   *    voteRate,
   *    imageURL,
   *    backdropImageURL,
   *    description,
   *   }[]
   *
   * @param {*} numOfMovies Number of movies to return
   */
  getMovies = async (numOfMovies) => {
    return _getMoviesFromTMDB().then((res) => {
      const orgMovies = res.data.results.slice(0, numOfMovies || 10);
      const movies = orgMovies.map((orgMovie) => _remapMovieOrgMovie(orgMovie));
      return movies;
    });
  };

  /**Fetches details for movies from API and maps them into
   *  Movie{
   *    key,
   *    title,
   *    releaseDate,
   *    voteRate,
   *    imageURL,
   *    backdropImageURL,
   *    description,
   *    genres,
   *    credits
   *  }[]
   *
   * @param {*} movies Movies for which details are fetched
   */
  getMoviesDetails = async (movies) => {
    if (!movies || !Array.isArray(movies)) {
      throw new Error("Movies must be defined array");
    }
    const orgMoviesDetailsResponse = await Promise.all(
      movies.map((movie) => _getMovieDetails(movie))
    );
    const moviesDetails = orgMoviesDetailsResponse.map(
      (orgMoviesDetailsResponse, index) => {
        return {
          ...movies[index],
          credits: orgMoviesDetailsResponse.data["credits"]["crew"].filter(
            (member) => CREDITS_JOBS[member["job"]]
          ),
          genres: orgMoviesDetailsResponse.data["genres"],
        };
      }
    );

    return moviesDetails;
  };

  getServiceInstanceID = () => {
    return this.id;
  };
}
const _remapMovieOrgMovie = (orgMovie) => ({
  key: orgMovie["id"],
  title: orgMovie["title"],
  releaseDate: new Date(orgMovie["release_date"]),
  voteRate: orgMovie["vote_average"],
  imageURL: orgMovie["poster_path"],
  backdropImageURL: orgMovie["backdrop_path"],
  description: orgMovie["overview"],
  genres: orgMovie["genre_ids"],
});
const _getMoviesFromTMDB = async () => {
  return axios.get(
    `${MOVIES_SERVICE_CONFIG.API_TMDB_URL}${MOVIES_SERVICE_CONFIG.API_TMDB_URIS.MOVIES}`,
    {
      params: {
        ...baseQueryParams(),
        page: 1,
      },
    }
  );
  // return Promise.reject("NO REASON");
};
const _getMovieDetails = async (movie) => {
  return axios.get(
    `${MOVIES_SERVICE_CONFIG.API_TMDB_URL}${MOVIES_SERVICE_CONFIG.API_TMDB_URIS.MOVIE}${movie.key}`,
    {
      params: {
        ...baseQueryParams(),
        append_to_response: "credits",
      },
    }
  );
};

export default new MoviesService();
