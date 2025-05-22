import { useState } from "react";
import Image1 from "../../assets/registration/reg-img1.png";
import Image2 from "../../assets/registration/reg-img2.png";
import Profile from "../../assets/registration/profile.svg";
import Profile2 from "../../assets/registration/profile2.svg";
import Logo from "../../assets/registration/Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { IoClose, IoArrowBackOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import "./LoginRegistration.css";

type Props = {
  onClose?: () => void;
};

const LoginRegistration = ({ onClose }: Props) => {
  const [isLoginView, setIsLoginView] = useState<boolean>(true);


  const imageVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="login_registration_container">
      <div className="login_registration">
        <AnimatePresence mode="wait">
          <motion.div
            className="image_container"
            key={isLoginView ? "image-login" : "image-register"}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
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
          </motion.div>
        </AnimatePresence>
        <div className="login_registration_form">
          <div className="logo_image">
            <div className="left_side">
              <button className="return_icon" onClick={onClose}>
                <IoArrowBackOutline />
              </button>
              <img src={Logo} alt="Logo" className="logo" />
            </div>
            <div className="rigth_side">
              <button className="cart_icon">
                <MdShoppingCart />
              </button>
              <button className="search_icon">
                <IoMdSearch />
              </button>
            </div>
          </div>
          <button className="close" onClick={onClose}>
            <IoClose />
          </button>
          <p className="login_head">
            Join us and get more benefits. We promise to keep your data safely.
          </p>
            {isLoginView ? (
              <Login
                key="login"
                onSwitchToSignup={() => setIsLoginView(false)}
              />
            ) : (
              <Registration
                key="registration"
                onSwitchToLogin={() => setIsLoginView(true)}
              />
            )}
        </div>
      </div>
    </div>
  );
};

export default LoginRegistration;
