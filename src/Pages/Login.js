import { useState } from "react";
import LoginComponent from "../Components/Login";
import SignUp from "../Components/Signup";
export default function Login() {
  const userId = localStorage.getItem("userId");
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="login-body">
      {showLogin ? <LoginComponent /> : <SignUp />}

      <button className="login-state" onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Sign Up" : "Login"}
      </button>
    </div>
  );
}
