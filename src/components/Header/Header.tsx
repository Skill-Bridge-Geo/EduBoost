import { useState } from "react";
import "./header.css";
import hamburger from "../../assets/hamburger.svg";
import logo from "../../assets/Logo.svg";
import cart from "../../assets/icon-shopping-cart.svg";
import notifications from "../../assets/icon-notifications.svg";
import search from "../../assets/icon-search.svg";
import arrow from "../../assets/icon-arrow.svg";
import avatar from "../../assets/avatar.png";
import Login from "../Login/Login";
import iconSignUp from "../../assets/icon-sign-up.svg";

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };
  return (
    <>
      <header>
        <div className="left-side-wrap">
          <div className="company-info-wrap">
            <img className="hamburger-icon" src={hamburger} alt="menu icon" />
            <img className="logo-icon" src={logo} alt="Logo" />
            <h3 className="company-name">MyCourse.io</h3>
          </div>
          <div className="browse-div">
            <span className="browse-text">Browse</span>
            <img className="icon-arrow" src={arrow} alt="expand more icon" />
          </div>
        </div>
        <div className="input-div">
          <input
            className="search-input"
            type="text"
            placeholder="Search for course"
          />
          <img className="icon-search" src={search} alt="search icon" />
        </div>
        {isLoggedIn ? (
          <div className="right-side-wrap">
            <span className="offer-text">Become Instructor</span>
            <img className="icon-cart" src={cart} alt="cart icon" />
            <img
              className="icon-notifications"
              src={notifications}
              alt="notifications icon"
            />
            <img src={avatar} alt="avatar" className="avatar" />
          </div>
        ) : (
          <div className="right-side-wrap-logged-out">
            <button
              // onClick={() => setIsLoggedIn(!isLoggedIn)}
              onClick={toggleLogin}
              className="log-in-button"
            >
              Login
            </button>
            {isLoginOpen && (
              <div className="login_modal_overlay">
                {/* <Login/> */}
                <Login onClose={() => setIsLoginOpen(false)} />
              </div>
            )}
            <button className="sign-up-button">
              <img
                className="sign-up-icon"
                src={iconSignUp}
                alt="sign up icon"
              />{" "}
              Sign Up
            </button>
          </div>
        )}

        {/* <div className="login_button_container">
          <button onClick={toggleLogin}>Log In</button>
          {isLoginOpen && <Login />}
        </div> */}
      </header>
    </>
  );
}
