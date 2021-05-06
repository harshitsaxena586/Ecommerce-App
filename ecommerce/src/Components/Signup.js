import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useApp } from "../context/App-context";

export default function SignUp() {
  const [userName, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [userCredentials, setUserCredentials] = useState([]);
  const { dispatch } = useApp();
  const loginHandler = (event) => {
    event.preventDefault();
    if (password == rePassword) {
      setUserCredentials(userName, password);
      serverLogin();
    } else toast.error("Both passwords don't match ");
  };

  async function serverLogin() {
    await axios({
      method: "post",
      url: "https://jainwin.herokuapp.com/users/s",
      data: {
        userName: userName,
        password: password
      }
    })
      .then(function (response) {
        console.log(response.data);
        toast.success("succesfully Signed Up Welcome !");
      })
      .catch(function (error) {
        console.log(error.response);
        toast.error("Invalid Username or Password");
      });
  }

  console.log(userCredentials);
  return (
    <div className="login-div">
      <form className="auth-form" onSubmit={loginHandler}>
        <h1>Sign Up</h1>
        <div className="">
          <label for="username" className="auth-labels">
            Username
          </label>

          <input
            onChange={(e) => setUsername(() => e.target.value)}
            type="text"
            className="input-primary"
            placeholder="Username "
          />
        </div>

        <div classNam="">
          <label for="password " className="auth-labels py-5">
            Password
          </label>
          <input
            onChange={(e) => setpassword(() => e.target.value)}
            type="password"
            className="input-primary"
            placeholder="Password"
            id="password"
          />
        </div>

        <div className="">
          <label for="rePassword" className="auth-labels">
            Confirm Password
          </label>
          <input
            onChange={(e) => setRePassword(() => e.target.value)}
            type="password"
            className="input-primary"
            placeholder="Confirm Password"
            id="rePassword"
          />
        </div>

        <button type="submit" className="login Cta-Cart">
          Sign Up
        </button>
      </form>
    </div>
  );
}
