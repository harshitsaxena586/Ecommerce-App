import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useApp } from "../Context/AppContextProvider";
import { useNavigate } from "react-router-dom";

export function setGuestLoginData() {
  localStorage.setItem(
    "authToken",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Imd1c3RVc2VyTG9naW4iLCJpZCI6IjYxMGE4YThjNTAyYWMzMDAxNWUxOTA4OCIsImlhdCI6MTYyODA4MDc4MywiZXhwIjoxNjI4OTQ0NzgzfQ.ii9IiDxEtkHsdEwAUr36xJjPxRgE2TVMYIDyc73YiPI"
  );
  localStorage.setItem("userId", "610a8a8c502ac30015e19088");
}
export default function LoginComponent() {
  const navigate = useNavigate();
  const [userName, setUsername] = useState();
  const [password, setpassword] = useState();
  const { dispatch } = useApp();
  const loginHandler = (event) => {
    event.preventDefault();
    serverLogin();
  };

  async function serverLogin() {
    try {
      const response = await axios({
        method: "post",
        url: "https://jainwin-backend.herokuapp.com/users",
        data: {
          userName: userName,
          password: password,
        },
      });
      toast.success("succesfully logged in");
      const { token, userId } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("userId", userId);
      dispatch({ type: "LOGGEDINUSER", payload: { userId } });
      navigate("/products");
    } catch (error) {
      console.log(error.response);
      toast.error("Invalid Username or Password");
    }
  }

  return (
    <div className="login-div">
      <form className="auth-form" onSubmit={loginHandler}>
        <h1>Login</h1>
        <div>
          <label for="Username" className="auth-labels">
            Username
          </label>
          <input
            onChange={(e) => setUsername(() => e.target.value)}
            type="text"
            className="input-primary"
            placeholder=""
            id="Username"
          />
        </div>
        <div>
          <label for="Password" className="auth-labels">
            Password
          </label>
          <input
            onChange={(e) => setpassword(() => e.target.value)}
            type="password"
            className="input-primary"
            placeholder=""
            id="Password"
          />
        </div>
        <button type="submit" className="login pointer Cta-primary">
          Log in
        </button>
      </form>
    </div>
  );
}
