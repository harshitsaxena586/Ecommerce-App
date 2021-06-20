import { Link } from "react-router-dom";
import { useApp } from "../Context/AppContextProvider";
export default function Navbar() {
  const { state } = useApp();
  const userId = state.userId;
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
            <Link to="/logout">Logout </Link>
          </li>
        ) : (
          <li className="login-nav">
            <Link to="login">Login </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
