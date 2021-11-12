import { Link } from "react-router-dom";
import styles from "../../styles/landingpage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroImg}>
     

		<img
          src="./assets/title.png"
          alt="black background"
        />

        <img
          src="./assets/iconImg.png"
          alt="black background"
        />

        <Link to="/home">
        <button className={styles.startBtn}>
		<img
            src="./assets/startBtn.png"
            alt="black background"
			/>
		</button>
       
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
