// import { useState } from "react";
import "./header.css";
import hamburger from "../../assets/hamburger.svg";
import logo from "../../assets/Logo.svg";
import cart from "../../assets/icon-shopping-cart.svg";
import notifications from "../../assets/icon-notifications.svg";
import search from "../../assets/icon-search.svg";
import arrow from "../../assets/icon-arrow.svg";
import avatar from "../../assets/avatar.png";
// import Login from "../Login/Login";

export default function Header() {
  // const [isLoginOpen, setIsLoginOpen] = useState(false);

  // const toggleLogin = () => {
  //   setIsLoginOpen(!isLoginOpen);
  // };
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
            <img src={arrow} alt="expand more icon" />
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

        {/* <div className="login_button_container">
          <button onClick={toggleLogin}>Log In</button>
          {isLoginOpen && <Login />}
        </div> */}
      </header>
    </>
  );
}
