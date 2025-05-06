import { useState } from "react";
import Image1 from "../../assets/registration/reg-img1.png";
import Image2 from "../../assets/registration/reg-img2.png";
import Profile from "../../assets/registration/profile.svg";
import Profile2 from "../../assets/registration/profile2.svg";
import Logo from "../../assets/registration/Logo.svg";
import Facebook from "../../assets/registration/Facebook.svg";
import Apple from "../../assets/registration/Apple.svg";
import Google from "../../assets/registration/Google.svg";
import { MdMailOutline } from "react-icons/md";
import { IoMdLock, IoMdUnlock } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import "./Login.css";

type FormData = {
  email?: string;
  password?: string;
};

const Login = ({ email, password }: FormData) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login_registration_container">
      <div className="login_registration">
        <div className="image_container">
          <img src={isLoginView ? Image1 : Image2} alt="Decoration" />
          <div className="reg_info">
            <div className="logo_image">
              <img
                src={isLoginView ? Profile : Profile2}
                alt="Logo"
                className="logo"
              />
            </div>
            <div className="reg_texts">
              <h2 className="reg_name">
                {isLoginView ? "Jane Kitani" : "Joe Kitanoe"}
              </h2>
              <p className="reg_text">
                {isLoginView ? "Graphic Designer" : "Software Developer"}
              </p>
            </div>
          </div>
        </div>

        <div className="login_registration_form">
          <div className="logo_image">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
          <div className="close">
            <IoClose />
          </div>
          <p className="login_head">
            Join us and get more benefits. We promise to keep your data safely.
          </p>
          {isLoginView ? (
            <div className="login_container">
              <div className="email">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="email_input"
                  value={email}
                />
                <div className="icon">
                  <MdMailOutline />
                </div>
              </div>
              <div className="password">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="password_input"
                  value={password}
                />
                <div className="icon" onClick={passwordVisibility}>
                  {showPassword ? <IoMdUnlock /> : <IoMdLock />}
                </div>
              </div>
              <button id="log_in">Login</button>
              <p className="choose_question">or you can</p>
              <button className="facebook_account">
                <img src={Facebook} alt="Facebook" /> Continue with Facebook
              </button>
              <button className="apple_account">
                <img src={Apple} alt="Apple" />
                Continue with Apple
              </button>
              <button className="google_account">
                <img src={Google} alt="Google" />
                Continue with Google
              </button>
              <div className="account_question">
                <p className="question">Need an Account?</p>
                <p
                  className={`sign_up ${isLoginView ? "active" : ""}`}
                  onClick={() => setIsLoginView(false)}
                >
                  Sign Up
                </p>
              </div>
            </div>
          ) : (
            <div className="registration_container">
              <button className="facebook_account">
                <img src={Facebook} alt="Facebook" /> Sign Up with Facebook
              </button>
              <button className="apple_account">
                <img src={Apple} alt="Apple" />
                Sign Up with Apple
              </button>
              <button className="google_account">
                <img src={Google} alt="Google" />
                Sign Up with Google
              </button>
              <p className="choose_question">or you can</p>
              <div className="email">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="email_input"
                  value={email}
                />
                <div className="icon">
                  <MdMailOutline />
                </div>
              </div>
              <div className="password">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="password_input"
                  value={password}
                />
                <div className="icon" onClick={passwordVisibility}>
                  {showPassword ? <IoMdUnlock /> : <IoMdLock />}
                </div>
              </div>
              <button id="creat_account">Creat Account</button>
              <div className="account_question">
                <p className="question">Already have an Account?</p>
                <p className="sign_up" onClick={() => setIsLoginView(true)}>
                  Sign Up
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
