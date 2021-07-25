import { Link } from "react-router-dom";
import { useApp } from "../Context/AppContextProvider";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function Navbar() {
  const { state, disptach } = useApp();
  const userId = state.userId;
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    navigate("/logout");
    disptach({ type: "LOGGEDOUTUSER" });

    toast.success("logged out succesfully");
  };
  return (
    <nav>
      <div className="logo">
        <img
          src="https://ik.imagekit.io/harshit/Group_512218__1__lwDeEZs6Y.svg"
          alt="logo"
        />
      </div>

      <ul class="list-tag">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="products">Products </Link>
        </li>
        <li>
          {" "}
          <Link to="cart">Cart </Link>
        </li>
        {userId ? (
          <li className="login-nav">
            <Link to="" onClick={() => logoutHandler()}>
              Logout
            </Link>
          </li>
        ) : (
          <li className="login-nav">
            <Link to="/login">Login </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
