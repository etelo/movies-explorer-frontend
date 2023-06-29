import { Switch, Route, Navigate } from "react-router-dom";
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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header isLoggedIn={false} />
          <Main />
          <Footer />
        </Route>

        <Route exact path="/movies">
          <Header isLoggedIn={true} />
          <Movies />
          <Footer />
        </Route>

        <Route path="/saved-movies">
          <Header isLoggedIn={true} />
          <SavedMovies />
          <Footer />
        </Route>

        <Route path="/profile">
          <Header isLoggedIn={true} />
          <Profile />
        </Route>

        <Route exact path="/signup">
          <Register />
        </Route>

        <Route exact path="/signin">
          <Login />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
