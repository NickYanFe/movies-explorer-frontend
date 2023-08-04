import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { mainApi } from "../../utils/MainApi";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import Preloader from "../Movies/Preloader/Preloader";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

import InfoToolTip from "../InfoToolTip/Infotooltip";
import RegistrationSuccess from "../../images/RegistrationSuccess.svg";
import RegistrationNotSuccess from "../../images/RegistrationNotSuccess.svg";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(null);
  const [infoToolTipData, setInfoToolTipData] = useState({
    title: "",
    logo: "",
  });
  const [savedMovies, setSavedMovies] = useState([]);

  const handleOpenInfoToolTipPopup = () => {
    setIsInfoToolTipOpen(true);
  };

  function closeInfoToolTip() {
    setIsInfoToolTipOpen(null);
  }

  const isAnyPopupOpened = isInfoToolTipOpen;

  useEffect(() => {
    function closeAllPopupsEscapeClick(evt) {
      if (evt.key === "Escape") {
        closeInfoToolTip();
      }
    }
    if (isAnyPopupOpened) {
      document.addEventListener("keydown", closeAllPopupsEscapeClick);
      return () => {
        document.removeEventListener("keydown", closeAllPopupsEscapeClick);
      };
    }
  }, [isAnyPopupOpened]);

  const closeAllPopupsOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      closeInfoToolTip();
    }
  };

  function handleRegisterUser({ name, email, password }) {
    // setIsLoading(true);
    mainApi
      .register(name, email, password)
      .then((userData) => {
        if (userData) {
          setInfoToolTipData({
            logo: RegistrationSuccess,
            title: "Вы успешно зарегистрировались!",
          });
          handleSignin({ email, password });
        }
      })
      .catch((err) => {
        setInfoToolTipData({
          logo: RegistrationNotSuccess,
          title: "Что-то пошло не так! Попробуйте ещё раз.",
        });
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
        handleOpenInfoToolTipPopup(true);
      });
  }

  function handleSignin({ email, password }) {
    // setIsLoading(true);
    mainApi
      .signin(email, password)
      .then((data) => {
        if (data.token) {
          setInfoToolTipData({
            logo: RegistrationSuccess,
            title: "Вы успешно вошли!",
          });
          setCurrentUser(data.data);
          setIsLoggedIn(true);
          localStorage.setItem("jwt", data.token);
          navigate("/movies");
        }
      })
      .catch((err) => {
        setInfoToolTipData({
          logo: RegistrationNotSuccess,
          title: "Что-то пошло не так! Попробуйте ещё раз.",
        });
        console.log(err);
      })
      .finally(() => {
        // setIsLoading(false);
        handleOpenInfoToolTipPopup(true);
      });
  }

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi
        .getUserInfo(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            // console.log("isLoggedIn status from getuserinfo = ", isLoggedIn);
          }
        })
        .catch((err) => console.log(err));
      mainApi
        .getSavedMovies(jwt)
        .then(setSavedMovies)
        .catch((err) => {
          console.log(err);
        });
    }
  }, [navigate, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getUserInfo()
        .then((data) => {
          setCurrentUser(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    mainApi
      .checkToken(token)
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch((err) => console.log(err));
  }, [isTokenChecked]);

  function handleSignOut() {
    localStorage.clear();
    setIsLoggedIn(false);
    setCurrentUser({ name: "", email: "" });
    navigate("/");
  }

  function handleUserUpdate(inputData) {
    console.log("inputData handleuserupdate=> ", inputData);
    // setIsLoading(true);
    mainApi
      .setUserInfo(inputData)
      .then((res) => {
        console.log(res);
        setCurrentUser(res.data);
        setInfoToolTipData({
          logo: RegistrationSuccess,
          title: "Данные пользователя успешно обновлены!",
        });
      })
      .catch((err) => {
        setInfoToolTipData({
          logo: RegistrationNotSuccess,
          title: "Что-то пошло не так! Попробуйте ещё раз.",
        });
        console.log(err);
      })
      .finally(() => {
        // setIsLoading(false);
        handleOpenInfoToolTipPopup();
      });
  }

  function handleSaveMovie(movie) {
    mainApi
      .addSavedMovie(movie)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies]);
        setInfoToolTipData({
          logo: RegistrationSuccess,
          title: `Фильм "${movie.nameEng}" добавлен в "Сохраненные"!`,
        });
        console.log(`Фильм "${movie.nameEng}" добавлен в сохраненные`);
        console.log([movie]);
      })
      .catch((err) => {
        setInfoToolTipData({
          logo: RegistrationNotSuccess,
          title: "Что-то пошло не так! Попробуйте ещё раз.",
        });
        console.log(err);
      })
      .finally(() => {
        // setIsLoading(false);
        handleOpenInfoToolTipPopup(true);
      });
  }

  function handleDeleteMovie(movie) {
    mainApi
      .deleteSavedMovie(movie._id)
      .then(() => {
        setSavedMovies((prevMovies) =>
          prevMovies.filter((item) => item._id !== movie._id)
        );
        setInfoToolTipData({
          logo: RegistrationSuccess,
          title: `Фильм "${movie.nameEng}" удален из "Сохраненных"!`,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // setIsLoading(false);
        handleOpenInfoToolTipPopup(true);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/" element={<Main isLoggedIn={true} />} />
                <Route
                  path="/movies"
                  element={
                    <Movies
                      isLoggedIn={isLoggedIn}
                      savedMovies={savedMovies}
                      handleSaveMovie={handleSaveMovie}
                      handleDeleteMovie={handleDeleteMovie}
                      isLoading={isLoading}
                    />
                  }
                />
                <Route
                  path="/saved-movies"
                  element={
                    <SavedMovies
                      isLoggedIn={isLoggedIn}
                      savedMovies={savedMovies}
                      handleDeleteMovie={handleDeleteMovie}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <Profile
                      onUpdateUser={handleUserUpdate}
                      onSignOut={handleSignOut}
                      isLoggedIn={isLoggedIn}
                    />
                  }
                />
              </>
            ) : (
              <>
                <Route
                  path="/signup"
                  element={
                    <Register
                      onRegister={handleRegisterUser}
                      isLoggedIn={isLoggedIn}
                      // isLoading={isLoading}
                    />
                  }
                />
                <Route
                  path="/signin"
                  element={
                    <Login
                      onLogin={handleSignin}
                      isLoggedIn={isLoggedIn}
                      // isLoading={isLoading}
                    />
                  }
                />
              </>
            )}
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<Main isLoggedIn={false} />} />
          </Routes>
          <InfoToolTip
            isOpen={isInfoToolTipOpen}
            title={infoToolTipData.title}
            logo={infoToolTipData.logo}
            buttonText={""}
            onClose={closeInfoToolTip}
            onOverlayClose={closeAllPopupsOverlayClick}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
