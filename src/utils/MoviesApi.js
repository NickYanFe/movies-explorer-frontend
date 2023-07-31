import { BEATFILM_config } from "../components/constants/constants";

class MoviesApi {
  constructor(config) {
    this._baseURL = config.baseURL;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка в запросе: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._baseURL}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkResponse(res));
  }
}

const moviesApi = new MoviesApi(BEATFILM_config);

export default moviesApi;

