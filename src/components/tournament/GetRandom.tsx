import { useEffect, useState } from "react";
import { Hamster } from "../../models/models";
import styles from "../../styles/getrandom.module.css";
import { updateMatch } from "../helperFunctions/Helpers";

const GetRandom = () => {
  const [competitorOne, setCompetitorOne] = useState<Hamster | null>(null);
  const [competitorTwo, setCompetitorTwo] = useState<Hamster | null>(null);
  const [overlay, setOverlay] = useState<boolean>(false);

  useEffect(() => {
    sendRequestOne(setCompetitorOne);
    sendRequestTwo(setCompetitorTwo);
  }, [setCompetitorOne, setCompetitorTwo]);

  useEffect(() => {
    if (competitorOne === null || competitorTwo === null) return;
    else if (competitorOne.id === competitorTwo.id) {
      sendRequestTwo(setCompetitorTwo);
      console.log("Same hamster, try again");
    }
  }, [competitorOne, competitorTwo]);

  const newGame = () => {
    setOverlay(false);
    sendRequestOne(setCompetitorOne);
    sendRequestTwo(setCompetitorTwo);
  };

  const handleClick = (winner: Hamster, loser: Hamster) => {
    updateMatch(winner, loser);
    setOverlay(true);
  };


  const handleRandom = () => {
    newGame();
  };

  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        {competitorOne && competitorTwo ? (
          <div
            onClick={() => handleClick(competitorOne, competitorTwo)}
            className={styles.card}
          >
            <img
              src={`/img/${competitorOne.imgName}`}
              alt={competitorOne.name}
            />

            <div className={styles.card__body}>
            </div>
            {overlay ? (
              <div className={styles.test}>
                <p>Wins: {competitorOne.wins}</p>
                <p>Defeats: {competitorOne.defeats}</p>
				<p>Games: {competitorOne.games}</p>

               
              </div>
            ) : (
				<div className={styles.test}>
				<h2 className={styles.card__title}>{competitorOne.name}</h2>
              </div>
            )}
          </div>
        ) : (
          <p> No data </p>
        )}

        <span className={styles.battle}>⚔️</span>

        {competitorTwo && competitorOne ? (
          <div
            onClick={() => handleClick(competitorTwo, competitorOne)}
            className={styles.card}
          >
            <img
              src={`/img/${competitorTwo.imgName}`}
              alt={competitorTwo.name}
            />

            <div className={styles.card__body}>
            </div>
			{overlay ? (
              <div className={styles.test}>
                <p>Wins: {competitorTwo.wins}</p>
                <p>Defeats: {competitorTwo.defeats}</p>
				<p>Games: {competitorTwo.games}</p>


               
              </div>
            ) : (
				<div className={styles.test}>
				<h2 className={styles.card__title}>{competitorTwo.name}</h2>
              </div>
            )}
          </div>
        ) : (
          <p> No data </p>
        )}
      </section>

      <button onClick={() => handleRandom()} className={styles.btn}>
        Battle!
      </button>
    </div>
  );
};

async function sendRequestOne(setCompetitorOne: any) {
  const firstResponse = await fetch("hamsters/random");
  const competitorOne = await firstResponse.json();
  setCompetitorOne(competitorOne);
}
async function sendRequestTwo(setCompetitorTwo: any) {
  const secondResponse = await fetch("hamsters/random");
  const competitorTwo = await secondResponse.json();
  setCompetitorTwo(competitorTwo);
}

export default GetRandom;
