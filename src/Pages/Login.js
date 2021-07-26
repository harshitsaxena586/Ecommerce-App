import { useState } from "react";
import LoginComponent from "../Components/Login";
import SignUp from "../Components/Signup";
import { setGuestLoginData } from "../Components/Login";
import { useApp } from "../Context/AppContextProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export default function Login() {
  const { dispatch } = useApp();
  const navigate = useNavigate();

  const guestLoginHandler = () => {
    const guestUserId = "60fd4d20a60f9800155c1b0f";
    dispatch({ type: "LOGGEDINUSER", payload: { userId: guestUserId } });
    setGuestLoginData();
    toast.success("Logged in successfully as Guest ");
    navigate("/products");
  };
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="login-body">
      {showLogin ? <LoginComponent /> : <SignUp />}
      <div className=" login-state-wrap">
        <button
          className="login-state pointer"
          onClick={() => setShowLogin(!showLogin)}
        >
          {showLogin ? "Sign Up" : "Login"}
        </button>
        <button
          className="login-state pointer"
          onClick={() => guestLoginHandler()}
        >
          Guest Login
        </button>
      </div>
    </div>
  );
}
