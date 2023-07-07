import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import "./App.css";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { filterMovies } from "../../utils/FilterMovies";
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);

  const [isSearched, setIsSearched] = useState(false);

  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [errSavedMovies, setErrSavedMovies] = useState(false);

  const [resulBySerchSaveMovies, setResulBySerchSaveMovies] = useState([]);
  const [isSearchedSavedMovies, setIsSearchedSavedMovies] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const [responsProfileChange, setResponsProfileChange] = useState({ text: "", isError: false });

  // Register
  const [errorMessageRegister, setErrorMessageRegister] = useState("");
  const handleRegister = (name, email, password) => {
    setIsLoading(true);
    mainApi
      .signup(name, email, password)
      .then((res) => {
        handleLogin(email, password);
      })
      .catch((err) => {
        setErrorMessageRegister(err.message || "Произошла ошибка");
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };
  // Login
  const [errorMessageLogin, setErrorMessageLogin] = useState("");
  const handleLogin = (email, password) => {
    setIsLoading(true);
    mainApi
      .signin(email, password)
      .then((res) => {
        localStorage.clear();
        setIsLoggedIn(true);
        localStorage.setItem("token", res.token);
        history.push("/movies");
        getSavedMoviesOnServer();
      })
      .catch((err) => {
        setErrorMessageLogin(err.message || "Произошла ошибка");
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    setIsSearchedSavedMovies(false);
  }, [location.pathname]);

  useEffect(() => {
    const favoriteMovies = loadFromLocalStorage("favoriteMovies");
    if (favoriteMovies) {
      setFavoriteMovies(favoriteMovies);
    }

    const savedSearchMovies = loadFromLocalStorage("savedSearchMovies");
    if (savedSearchMovies) {
      setIsSearched(true);
      setSearchResults(savedSearchMovies);
    }
  }, []);

  const handleSearch = (keyword, isShortFilm) => {
    setIsLoading(true);
    moviesApi
      .GetMovies()
      .then((res) => {

        const filteredMovies = filterMovies(res, keyword, isShortFilm);
        saveToLocalStorage("savedSearchMovies", filteredMovies);
        setSearchResults(filteredMovies);
        setIsSearched(true);

        // console.log("saved search movies:");
        // console.log();
      })
      .catch((err) => {
        setError(true);
        console.log("err: " + err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSearchSavedMovies = (keyword, isShortFilm) => {
    const token = localStorage.getItem("token");
    setIsLoading(true);
    mainApi
      .getSavedMovies(token)
      .then((movies) => {
        const filteredMovies = filterMovies(movies, keyword, isShortFilm);
        setResulBySerchSaveMovies(filteredMovies);
        setIsSearchedSavedMovies(true);
      })
      .catch((err) => {
        setErrSavedMovies(true);
        console.log("err b5w: " + err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  function handleProfileChange(name, email) {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi
        .updateUserInfo(token, name, email)
        .then((updatedUser) => {
          setCurrentUser(updatedUser);
          setResponsProfileChange({ text: "Данные обновлены", isError: false });
        })
        .catch((err) => {
          setResponsProfileChange({ text: err.message, isError: true });
          console.log(err.message);
        });
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoading(true);
      mainApi
        .getUserInfo(token)
        .then(data => {
          if (data) {
            setCurrentUser(data);
          }
        })
        .catch(err => {
          console.log("erro: " + err)
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isLoggedIn]);


  function getSavedMoviesOnServer() {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoading(true);
      mainApi
        .getSavedMovies(token)
        .then((movies) => {
          setFavoriteMovies(movies);
          // console.log("getSavedMovies:");
          // console.log(movies);
        })
        .catch((err) => {
          setErrSavedMovies(true);
          console.log("err b5w: " + err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  useEffect(() => {
    getSavedMoviesOnServer();
  }, []);

  const handleDeleteSavedClick = (movie) => {
    const token = localStorage.getItem("token");

    setIsLoading(true);
    mainApi
      .unSaveMovie(token, movie._id)
      .then((newMovie) => {
        const updatedFavoriteMovies = favoriteMovies.filter((item) => {
          return item._id !== movie._id;
        });
        setFavoriteMovies(updatedFavoriteMovies);
        saveToLocalStorage("favoriteMovies", updatedFavoriteMovies);
        setResulBySerchSaveMovies(resulBySerchSaveMovies.filter((item) => {
          return item._id !== movie._id;
        }));

      })
      .catch((err) => {
        console.log("err unSaveMovie : " + err);
      })
      .finally(() => setIsLoading(false));
  }


  const handleFavoriteClick = (movie) => {
    const token = localStorage.getItem("token");

    const savedMovie = favoriteMovies.find(
      (savedMovie) => savedMovie.movieId === movie.id);

    if (savedMovie) {
      setIsLoading(true);
      mainApi
        .unSaveMovie(token, savedMovie._id)
        .then((newMovie) => {
          const updatedFavoriteMovies = favoriteMovies.filter((item) => {
            return item.movieId !== movie.id;
          });
          setFavoriteMovies(updatedFavoriteMovies);        
          saveToLocalStorage("favoriteMovies", updatedFavoriteMovies);
          // console.log("handleFavoriteClick updatedFavoriteMovies: ");
          // console.log(updatedFavoriteMovies);
        })
        .catch((err) => {
          console.log("err unSaveMovie : " + err);
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(true);
      mainApi
        .saveMovie(token, movie)
        .then((newMovie) => {
          if (
            !favoriteMovies.find((item) => {
              return item.movieId === newMovie.movieId;
            })
          ) {
            const newSavedMovies = [...favoriteMovies, newMovie];
            setFavoriteMovies(newSavedMovies);
            saveToLocalStorage("favoriteMovies", newSavedMovies);
            console.log("save saveMovie new: ");
            console.log(newSavedMovies);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    }
  };

  function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function loadFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setSearchResults([]);
    setIsSearched(false);
    setFavoriteMovies([]);
    setResulBySerchSaveMovies([]);
    setIsSearchedSavedMovies(false);

    setIsLoggedIn(false);
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Header isLoggedIn={isLoggedIn} />
            <Main />
            <Footer />
          </Route>

          <Route exact path="/movies">
            <Header isLoggedIn={isLoggedIn} />
            <ProtectedRoute
              path="/movies"
              isLoggedIn={isLoggedIn}
              component={Movies}
              isLoading={isLoading}
              error={error}
              searchResults={searchResults}
              handleSearch={handleSearch}
              isSearched={isSearched}
              handleFavoriteClick={handleFavoriteClick}
              favoriteMovies={favoriteMovies}
            />
            <Footer />
          </Route>

          <Route path="/saved-movies">
            <Header isLoggedIn={isLoggedIn} />
            <ProtectedRoute
              path="/saved-movies"
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
              favoriteMovies={favoriteMovies}
              component={SavedMovies}
              errSavedMovies={errSavedMovies}
              handleFavoriteClick={handleDeleteSavedClick}
              handleSearch={handleSearchSavedMovies}
              resulBySerchSaveMovies={resulBySerchSaveMovies}
              isSearchedSavedMovies={isSearchedSavedMovies}
            />
            <Footer />
          </Route>

          <Route path="/profile">
            <Header isLoggedIn={isLoggedIn} />
            <ProtectedRoute path="/profile"
              isLoggedIn={isLoggedIn}
              component={Profile}
              handleSignOut={handleSignOut}
              handleProfileChange={handleProfileChange}
              responsProfileChange={responsProfileChange}
            />
          </Route>

          <Route exact path="/signup">
            <Register
              isLoggedIn={isLoggedIn}
              handleRegister={handleRegister}
              errorMessageRegister={errorMessageRegister}
              setErrorMessageRegister={setErrorMessageRegister}
              isLoading={isLoading}
            />
          </Route>

          <Route exact path="/signin">
            <Login
              isLoggedIn={isLoggedIn}
              handleLogin={handleLogin}
              errorMessageLogin={errorMessageLogin}
              setErrorMessageLogin={setErrorMessageLogin}
              isLoading={isLoading}
            />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
