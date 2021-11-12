import { useEffect } from "react";
import { useRecoilState } from "recoil";
import allHamsters from "../../atoms/allHamsters";
import { Hamster } from "../../models/models";
import styles from "../../styles/home.module.css";
// Startsida
// Här ska du förklara för användaren hur man använder appen. Länka till vyerna Tävla och Galleri. (Med React Router-länkar, <Link />.)

// Visa den hamster som vunnit mest. Vi räknar (antal vinster) - (antal förluster). Om det är oavgjort mellan flera hamstrar, ska appen slumpa en av dem. (Backend endpoint /hamsters/cutest.)

// Om det av någon anledning inte går att nå backend-servern så ska du visa ett användarvänligt felmeddelande här. Användaren ska också få möjligheten att försöka igen.

const Home = () => {
  const [cutest, setCutest] = useRecoilState<Hamster[]>(allHamsters);
  console.log(cutest);

  useEffect(() => {
    sendRequest(setCutest);
  }, [setCutest]);

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1> Welcome </h1>
        <p>Are you ready to battle it out?</p>
      </header>
      <main className={styles.flexbox}>
        <article>
          <h3> Instructions </h3>
          <p>
            You just got summoned to the game and are about to enter the
            ultimate gladiatorpit! But first, you need instructions.
            <br />
            Use the navigationbar at the top to explore the mighty arena!
          </p>
          <h3> Good luck! </h3>
        </article>

        {cutest
          ? cutest.map((hamster) => (
              <section className={styles.card} key={Math.random() + hamster.id}>
                <img
                  src={`/img/${hamster.imgName}`}
                  alt={hamster.name}
                  className="card__img"
                />
                <div className={styles.card__body}>
                  <h2 className={styles.card__title}>{hamster.name}</h2>
                  <p>is currently the cutest hamster, but things can change!</p>
                  <p>Winning streak: {hamster.wins}!</p>
                </div>
              </section>
            ))
          : "Loading"}
      </main>
    </section>
  );
};
async function sendRequest(setCutest: any) {
  try {
    const response = await fetch("/hamsters/cutest");
    const data = await response.json();
    setCutest(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export default Home;
