import logo from "../../assets/Logo.jpeg";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btnname, setbtnname] = useState("login");

  return (
    <div className="header">
      <img className="logo" src={logo} alt="Logo" />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnname === "login" ? setbtnname("logout") : setbtnname("login");
            }}
          >
            {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
}; // Step 2 Header Section

export default Header;
