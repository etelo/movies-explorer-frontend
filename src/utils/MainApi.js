import { API_URL_MAIN } from "../utils/constants"

class MainApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.headers = {
      "Content-Type": "application/json",
    };
  }

  getUserInfo(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._handleResponse);
  }

  updateUserInfo(token, name, email) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._handleResponse);
  }

  getSavedMovies(token) {
    return fetch(`${this.baseUrl}/movies`, {
      method: "GET",
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._handleResponse);
  }

  saveMovie(token, data) {
    const {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      id,
      nameRU,
      nameEN,
    } = data;

    return fetch(`${this.baseUrl}/movies`, {
      method: "POST",
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: "https://api.nomoreparties.co" + image.url,
        trailerLink,
        thumbnail: "https://api.nomoreparties.co" + image.formats.thumbnail.url,
        movieId: id,
        nameRU,
        nameEN,
      }),
    }).then(this._handleResponse);
  }

  unSaveMovie(token, _id) {
    console.log(`_id: ` + _id)
    return fetch(`${this.baseUrl}/movies/${_id}`, {
      method: "DELETE",
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._handleResponse);
  }

  signup(name, email, password) {
    return fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then(this._handleResponse);
  }

  signin(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._handleResponse);
  }

  async _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    const error = await res.json();
    throw new Error(error.message);
  }
}

const mainApi = new MainApi(API_URL_MAIN);

export default mainApi;
