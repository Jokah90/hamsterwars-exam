import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
      <nav>
          <li className="nav-bar">
			  <Link to="/home"> Home </Link>
			  <Link to="/Tournament"> Tournament </Link>
			  <Link to="/Gallery"> Gallery </Link>
			  <Link to="/History"> History </Link>
		  </li>
      </nav>
  );
};

export default NavBar;
