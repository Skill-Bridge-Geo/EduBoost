import { useState } from "react";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Facebook from "../../../assets/registration/Facebook.svg";
import Apple from "../../../assets/registration/Apple.svg";
import Google from "../../../assets/registration/Google.svg";
import { MdMailOutline } from "react-icons/md";
import { IoMdLock, IoMdUnlock } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import "./Login.css";

type FormData = {
  email: string;
  password: string;
};
type LoginProps = {
  onSwitchToSignup: () => void;
};
const Login = ({ onSwitchToSignup }: LoginProps) => {
  const [isLoginView] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const userSchema: ZodType<FormData> = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password too short" }).max(20),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(userSchema),
  });
  const onSubmit = (data: FormData) => {
    console.log(isLoginView ? "Logging in:" : "Signing up:", data);
    reset();
  };
  const loginVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 100, transition: { duration: 0.3 } },
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AnimatePresence mode="wait">
        <motion.div
          className="login_container"
          key="login"
          variants={loginVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="email">
            <input
              type="email"
              placeholder="Enter Your Email"
              className={`email_input ${errors.email ? "error_border" : ""}`}
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
              onClick={onSwitchToSignup}
              // onSubmit={handleSubmit(submitData)}
            >
              Sign Up
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </form>
  );
};

export default Login;
