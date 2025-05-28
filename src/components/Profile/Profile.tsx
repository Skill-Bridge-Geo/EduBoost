import { useAuth } from "../LoginRegistration/AouthContext/AouthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personalisation");
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="user_profile_container">
      <h2 className="my_account">My Account</h2>
      <nav className="profile_navigation">
        <ul className="navigation_settings">
          <li
            className={`stng personalisation ${
              activeTab === "personalisation" ? "active" : ""
            }`}
            onClick={() => setActiveTab("personalisation")}
          >
            Personalisation
          </li>
          <li
            className={`stng account ${
              activeTab === "account" ? "active" : ""
            }`}
            onClick={() => setActiveTab("account")}
          >
            Account
          </li>
          <li
            className={`stng payment ${
              activeTab === "payment" ? "active" : ""
            }`}
            onClick={() => setActiveTab("payment")}
          >
            Payment Methods
          </li>
          <li className="stng notifications">Notifications</li>
          <li className="stng privacy">Privacy</li>
        </ul>
      </nav>
      <div className="prifile_photo"></div>
      <form action="user_profile" className="user_profile">
        <div className="input_cont">
          <input type="text" name="first_name" />
          <label htmlFor="First Name">First Name</label>
        </div>

        <div className="input_cont">
          <input type="text" name="last_name" />
          <label htmlFor="Last Name">Last Name</label>
        </div>
        <div className="input_cont">
          <input type="text" name="headline" />
          <label htmlFor="Headline">Headline</label>
        </div>

        <div className="select_cont">
          <label htmlFor="Languege">Languege</label>
          <select name="languege" id="languege">
            <option value="eng">English</option>
            <option value="geo">Georgian</option>
          </select>
        </div>

        <div className="input_cont">
          <input type="url" name="link" />
          <label htmlFor="Link">Link</label>
        </div>

        <button id="save">Save</button>
      </form>

      {/* for test logout*/}
      <button onClick={handleLogout} className="logout-btn">
        Log Out
      </button>
    </div>
  );
};

export default Profile;
