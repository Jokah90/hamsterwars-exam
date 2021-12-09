import { Link } from "react-router-dom";
import styles from "../../styles/navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbarWrapper}>
      <Link to="/" className={styles.link}>
        <h1 className={styles.headLine}>
          HAMSTER <span className={styles.diffColor}>WARS</span>
        </h1>
      </Link>

      <Link to="/Home" className={styles.link}>
        {" "}
        Home{" "}
      </Link>
      <Link to="/Tournament" className={styles.link}>
        {" "}
        Tournament{" "}
      </Link>
      <Link to="/Gallery" className={styles.link}>
        {" "}
        Gallery{" "}
      </Link>
    </nav>
  );
};

export default NavBar;
