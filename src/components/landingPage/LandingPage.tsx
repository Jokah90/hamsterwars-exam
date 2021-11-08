import { Link } from "react-router-dom";
import styles from "../../styles/landingpage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className="hero-img">
        <img
          className="bg_image"
          src="./assets/bg_image.jpg"
          alt="black background"
        />
		<div>
		<Link to="/home">
          <button>START</button>
        </Link>
		</div>
      </div>
    </div>
  );
};

export default LandingPage;
