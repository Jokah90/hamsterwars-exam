import { Hamster } from "../../models/models";
import styles from "../../styles/getrandom.module.css";

interface Competitor {
  competitor: Hamster;
}

const Card = ({ competitor }: Competitor) => {
  return (
    <div className={styles.test}>
      <h2>{competitor.name}</h2>
      <p>Wins: {competitor.wins}</p>
      <p>Defeats: {competitor.defeats}</p>
      <p>Games: {competitor.games}</p>
    </div>
  );
};

export default Card;
