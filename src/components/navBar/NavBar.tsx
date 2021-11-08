import { Link } from "react-router-dom";
import style from '../../styles/navbar.module.css';

const NavBar = () => {
  return (
	<nav className={style.navbarWrapper}>
         
			  <Link to="/home" className={style.link}> Home </Link>
			  <Link to="/Tournament"className={style.link}> Tournament </Link>
			  <Link to="/Gallery"className={style.link}> Gallery </Link>
			  <Link to="/Stats"className={style.link}> Stats </Link>
			  <Link to="/History"className={style.link}> History </Link>
			
      </nav>
  );
};

export default NavBar;
