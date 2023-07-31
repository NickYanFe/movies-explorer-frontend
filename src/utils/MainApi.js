import { mainApiConfig } from "../components/constants/constants";
import { BEATFILM_URL } from "../components/constants/constants";
// export const BEATFILM_URL = 'https://api.nomoreparties.co';

class MainApi {
  constructor(config) {
    this._baseURL = config.baseURL;
  }

  // export const BASE_URL = "http://localhost:3000";
  // export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";
  // export const BASE_URL = "https://api.nickyanfediploma.nomoredomains.rocks";

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register(name, email, password) {
    return fetch(`${this._baseURL}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then((res) => this._checkResponse(res));
  }

  signin(email, password) {
    return fetch(`${this._baseURL}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => this._checkResponse(res))
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        return data;
      });
  }

  getUserInfo() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseURL}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkResponse(res));
  }

  checkToken(token) {
    return fetch(`${this._baseURL}/users/me`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then((res) => this._checkResponse(res));
  }

  setUserInfo(obj) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseURL}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: obj.name,
        email: obj.email,
      }),
    }).then((res) => this._checkResponse(res));
  }

  // добавление фильма в сохраненные, POST-запрос
  addSavedMovie(movie) {
    // const imageBaseURL = "https://api.nomoreparties.co";
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseURL}/movies`, {
      method: "POST",
      credentials: "include",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: BEATFILM_URL + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: BEATFILM_URL + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRu: movie.nameRU,
        nameEng: movie.nameEN,
      }),
    }).then((res) => this._checkResponse(res));
  }

  // сохраненные фильмы
  getSavedMovies() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseURL}/movies`, {
      method: "GET",
      credentials: "include",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  // удаление сохраненного фильма, DELETE-запрос
  deleteSavedMovie(movieId) {
    const token = localStorage.getItem("jwt");
    // console.log('movieId =>', movieId)
    return fetch(`${this._baseURL}/movies/${movieId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((res) => this._checkResponse(res));
  }
}
export const mainApi = new MainApi(mainApiConfig);
