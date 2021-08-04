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
          <Link to="/">
            <div className="desktop-links">Home</div>
            <img className="mobile-icons" src="/assets/Home.svg" alt="home" />
          </Link>
        </li>
        <li>
          {" "}
          <Link to="products">
            <div className="desktop-links">Products</div>
            <img
              className="mobile-icons"
              src="/assets/Shop.svg"
              alt="producst"
            />
          </Link>
        </li>
        <li>
          {" "}
          <Link to="cart">
            <div className="desktop-links">Cart</div>
            <img
              className="mobile-icons"
              src="/assets/Shopping-cart.svg"
              alt="cart"
            />
          </Link>
        </li>
        {userId ? (
          <li className="login-nav">
            <Link to="" onClick={() => logoutHandler()}>
              <div className="desktop-links"> Logout</div>
              <img
                className="mobile-icons"
                src="/assets/logout.svg"
                alt="home"
              />
            </Link>
          </li>
        ) : (
          <li className="login-nav">
            <Link to="/login">
              <div className="desktop-links"> Login</div>
              <img className="mobile-icons" src="/assets/User.svg" alt="home" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
