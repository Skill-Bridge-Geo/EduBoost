import { useState } from "react";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image1 from "../../assets/registration/reg-img1.png";
import Image2 from "../../assets/registration/reg-img2.png";
import Profile from "../../assets/registration/profile.svg";
import Profile2 from "../../assets/registration/profile2.svg";
import Logo from "../../assets/registration/Logo.svg";
import Facebook from "../../assets/registration/Facebook.svg";
import Apple from "../../assets/registration/Apple.svg";
import Google from "../../assets/registration/Google.svg";
import { MdMailOutline, MdShoppingCart } from "react-icons/md";
import { IoMdLock, IoMdUnlock, IoMdSearch } from "react-icons/io";
import { IoClose, IoArrowBackOutline } from "react-icons/io5";
import "./Login.css";

type FormData = {
  email: string;
  password: string;
};

type Props = {
  onClose?: () => void;
};

const userSchema: ZodType<FormData> = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password too short" }).max(20),
});

const Login = ({ onClose }: Props) => {
  const [isLoginView, setIsLoginView] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userSchema),
  });
  const onSubmit = (data: FormData) => {
    console.log(isLoginView ? "Logging in:" : "Signing up:", data);
    reset();
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
          <form onSubmit={handleSubmit(onSubmit)}>
            {isLoginView ? (
              <div className="login_container">
                <div className="email">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className={`email_input ${
                      errors.email ? "error_border" : ""
                    }`}
                    {...register("email")}
                  />
                  <div className="icon">
                    <MdMailOutline />
                  </div>
                  {/* {errors.email && <p className="error">{errors.email.message}</p>} */}
                </div>
                <div className="password">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={`password_input ${
                      errors.password ? "error_border" : ""
                    }`}
                    {...register("password")}
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
                  <button
                    className={`sign_up ${isLoginView ? "active" : ""}`}
                    type="button"
                    onClick={() => setIsLoginView(false)}
                    // onSubmit={handleSubmit(submitData)}
                  >
                    Sign Up
                  </button>
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
                    className={`email_input ${
                      errors.email ? "error_border" : ""
                    }`}
                    {...register("email")}
                  />
                  <div className="icon">
                    <MdMailOutline />
                  </div>
                </div>
                <div className="password">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={`password_input ${
                      errors.password ? "error_border" : ""
                    }`}
                    {...register("password")}
                  />
                  <div className="icon" onClick={passwordVisibility}>
                    {showPassword ? <IoMdUnlock /> : <IoMdLock />}
                  </div>
                </div>
                <button id="creat_account">Creat Account</button>
                <div className="account_question">
                  <p className="question">Already have an Account?</p>
                  <button
                    className="sign_up"
                    type="button"
                    onClick={() => setIsLoginView(true)}
                  >
                    Login
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
