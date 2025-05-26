import { useEffect } from "react";
import { useAuth } from "../LoginRegistration/AouthContext/AouthContext";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !token) {
      navigate("/login");
    }
  }, [user, token, navigate]);

  if (!user || !token) {
    return null;
  }

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <p>Welcome, {user.email}!</p>
      <button onClick={logout} className="logout-btn">
        Log Out
      </button>
    </div>
  );
};

export default Profile;