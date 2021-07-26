import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useApp } from "../Context/AppContextProvider";
import { useNavigate } from "react-router-dom";

// auth Token =eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Imd1ZXN0VXNlciIsImlkIjoiNjBmZDRkMjBhNjBmOTgwMDE1NWMxYjBmIiwiaWF0IjoxNjI3MjEzMDk0LCJleHAiOjE2MjgwNzcwOTR9.LU1152I24XcT9YMuu3RaMT9MaD9BHRAoAqArrsUbEp4
// userId = 60fd4d20a60f9800155c1b0f
export function setGuestLoginData() {
  localStorage.setItem(
    "authToken",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Imd1ZXN0VXNlciIsImlkIjoiNjBmZDRkMjBhNjBmOTgwMDE1NWMxYjBmIiwiaWF0IjoxNjI3MjEzMDk0LCJleHAiOjE2MjgwNzcwOTR9.LU1152I24XcT9YMuu3RaMT9MaD9BHRAoAqArrsUbEp4"
  );
  localStorage.setItem("userId", "60fd4d20a60f9800155c1b0f");
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
