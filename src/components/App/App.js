import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const navigate = useNavigate();
  const CurrentUserContext = React.createContext();

  // function handleSignOut() {
  //   localStorage.removeItem("jwt");
  //   navigate("/signin");
  // }

  // function handleSignIn() {
  //   navigate("/signin");
  // }

  // function handleSignUp() {
  //   navigate("/signup");
  // }

  // function handleRegisterUser(email, password) {
  //   navigate("/signin");
  // }

  // // О Проекте
  // function handleAboutProject() {
  //   navigate("/");
  // }
  // // по роуту /movies отображается страница «Фильмы»;

  // function handleMovies() {
  //   navigate("/movies");
  // }

  // // по роуту /saved-movies отображается страница «Сохранённые фильмы»;

  // function handleSavedMovies() {
  //   navigate("/saved-movies");
  // }

  // // по роуту /profile отображается страница с профилем пользователя;

  // function handleProfile() {
  //   navigate("/profile");
  // }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<Main />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
