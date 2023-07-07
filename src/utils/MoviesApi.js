import { API_URL_MOVIES } from "../utils/constants"

class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _handleResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Error: ${res.status}`);
  }

  GetMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: {
        "Content-type": "application/json",
      },
    }).then(this._handleResponse);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: API_URL_MOVIES,
});

export default moviesApi;
