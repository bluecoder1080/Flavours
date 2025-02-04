import logo from "../../assets/Logo.jpeg";
import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Header = () => {
  const [btnname, setbtnname] = useState("login");
  const navigate = useNavigate();
  return (
    <div className="flex justify-between bg-slate-300 shadow-lg">
      <img className="w-36 mx-20 cursor-pointer" src={logo} alt="Logo" onClick={() => navigate("/")} />
      <div className="nav-items">
        <ul className="flex justify-between m-6 p-4 space-x-12 text-lg font-semibold py-10 ">
          <li className="hover:text-orange-600 ">
            <Link to="/"> Home </Link>
          </li>
          <li className="hover:text-orange-600">
            <Link to="/About">About Us</Link>
          </li>
          <li className="hover:text-orange-600">
            <Link to="/Groceries">Groceries</Link>
          </li>
          <li className="hover:text-orange-600">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="hover:text-orange-600">Cart</li>
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
