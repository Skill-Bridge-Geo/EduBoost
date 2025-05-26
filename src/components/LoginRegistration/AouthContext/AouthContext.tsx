import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { loginUser, registrationUser, userProfile } from "../Api/userApi";

interface User {
  email: string;
  username?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  register: (data: RegisterForm) => Promise<void>;
  login: (data: RegisterForm) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

interface RegisterForm {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("accessToken")
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      fetchUserProfile(token);
    }
  }, [token]);

  const fetchUserProfile = async (jwt: string) => {
    try {
      setLoading(true);
      const data = await userProfile(jwt);
      setUser(data);
    } catch (err) {
      console.error("Profile fetch error:", err);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const register = async (form: RegisterForm) => {
    try {
      setLoading(true);
      const data = await registrationUser(form);
      const accessToken = data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      setToken(accessToken);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const login = async (form: RegisterForm) => {
    try {
      setLoading(true);
      const accessToken = await loginUser(form);
      localStorage.setItem("token", accessToken);
      setToken(accessToken);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, register, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
