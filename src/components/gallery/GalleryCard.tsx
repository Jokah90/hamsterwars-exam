import { useState } from "react";
import { useRecoilState } from "recoil";
import allHamsters from "../../atoms/allHamsters";
import { Hamster } from "../../models/models";
import styles from "../../styles/gallerycard.module.css";
import { DeleteHamster } from "../helperFunctions/Helpers";

// Gör ett interface för Hamster

interface HamsterCard {
  hamster: Hamster;
}

const GalleryCard = ({ hamster }: HamsterCard) => {
  // const [data, setData] = useRecoilState<Hamster[]>(allHamsters);
  const [showName, setShowName] = useState<string>("block");
  const [showText, setShowText] = useState(false);
  const [, setData] = useRecoilState<Hamster[]>(allHamsters);

  const handleMouseEnter = () => {
    setShowName("none");
    setShowText(true);
  };
  const handleMouseLeave = () => {
    setShowName("block");
    setShowText(false);
  };

  //   useEffect(() => {
  //     sendRequest(setData);
  //   }, [setData]);

  const removeHamsterObject = (hamsterId: string) => {
    setData((h) => h.filter((hamsterObject) => hamsterObject.id !== hamsterId));
  };

  return (
    <div>
      <section
        className={styles.card}
        key={Math.random() + hamster.id}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {hamster.imgName.startsWith("hamster") ? (
          <img
            src={`/img/${hamster.imgName}`}
            alt={hamster.name}
            key={hamster.id}
            className="card__img"
          />
        ) : (
          <img
            src={`https://2.bp.blogspot.com/-pouqaw_aiRU/TqljDfGtkDI/AAAAAAAAB_M/kIpYg8Y_on4/s400/ugly-hamsters2.jpg`}
            alt={hamster.name}
            key={hamster.id}
            className="card__img"
          />
        )}
        <div className={styles.card__body}>
          <h2 className={styles.card__title} style={{ display: `${showName}` }}>
            {hamster.name}
          </h2>

          <div>
            {showText && (
              <>
                <section className={styles.card__section__details}>
                  <p>
                    Age: <span>{hamster.age}</span>
                  </p>
                  <p>
                    FavFood: <span>{hamster.favFood}</span>
                  </p>
                  <p>
                    Loves: <span>{hamster.loves}</span>
                  </p>
                  <p>
                    Wins: <span>{hamster.wins}</span>
                  </p>
                  <p>
                    Defeats: <span>{hamster.defeats}</span>
                  </p>
                  <p>
                    Games: <span>{hamster.games}</span>
                  </p>
                </section>
                <button
                  className={styles.card__delete}
                  onClick={() => {
                    DeleteHamster(hamster.id);
                    removeHamsterObject(hamster.id);
                  }}
                >
                  Delete?
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

// async function sendRequest(setData: any) {
//   const response = await fetch("/hamsters");
//   const data = await response.json();
//   setData(data);
//   console.log(data);
// }

export default GalleryCard;
