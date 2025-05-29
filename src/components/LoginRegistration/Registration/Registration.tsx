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
import { useAuth } from "../AouthContext/AouthContext";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

type FormData = {
  email: string;
  password: string;
};
type RegistrationProps = {
  onSwitchToLogin: () => void;
};
const Registration = ({ onSwitchToLogin }: RegistrationProps) => {
  const [isLoginView] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { register: registrationUser } = useAuth();
  const navigate = useNavigate();

  const userSchema: ZodType<FormData> = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password too short" }).max(20),
  });

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
  const onSubmit = async (data: FormData) => {
    console.log(isLoginView ? "Logging in:" : "Signing up:", data);
    // reset();
    try {
      await registrationUser(data);
      navigate("/Profile");
      console.log("Successfully registered:", data);
      reset();
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  const registerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.3 } },
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AnimatePresence mode="wait">
        <motion.div
          className="registration_container"
          key="register"
          variants={registerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
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
              className={`email_input ${errors.email ? "error_border" : ""}`}
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
              className="login"
              type="button"
              // onClick={() => setIsLoginView(true)}
              onClick={onSwitchToLogin}
            >
              Login
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </form>
  );
};

export default Registration;
