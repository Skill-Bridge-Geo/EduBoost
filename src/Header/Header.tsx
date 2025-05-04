import "./header.css";
import hamburger from "/hamburger.svg";
import logo from "/Logo.svg";
import cart from "/icon-shopping-cart.svg";
import notifications from "/icon-notifications.svg";

export default function Header() {
  return (
    <>
      <header>
        <div className="left-side-wrap">
          <img className="hamburger-icon" src={hamburger} alt="menu icon" />
          <img className="logo-icon" src={logo} alt="Logo" />
          <h3 className="company-name">MyCourse.io</h3>
        </div>
        <div className="right-side-wrap">
          <img className="icon-cart" src={cart} alt="cart icon" />
          <img
            className="icon-notifications"
            src={notifications}
            alt="notifications icon"
          />
        </div>
      </header>
    </>
  );
}
