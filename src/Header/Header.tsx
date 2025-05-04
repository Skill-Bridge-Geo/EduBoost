import "./header.css";
import hamburger from "/hamburger.svg";
import logo from "/Logo.svg";
import cart from "/icon-shopping-cart.svg";
import notifications from "/icon-notifications.svg";
import search from "/icon-search.svg";
import arrow from "/icon-arrow.svg";
import avatar from "/avatar.png";

export default function Header() {
  return (
    <>
      <header>
        <div className="left-side-wrap">
          <img className="hamburger-icon" src={hamburger} alt="menu icon" />
          <img className="logo-icon" src={logo} alt="Logo" />
          <h3 className="company-name">MyCourse.io</h3>
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
          <img className="icon-cart" src={cart} alt="cart icon" />
          <img
            className="icon-notifications"
            src={notifications}
            alt="notifications icon"
          />
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
      </header>
    </>
  );
}
