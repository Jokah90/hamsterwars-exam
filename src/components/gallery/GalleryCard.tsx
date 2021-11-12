import { useEffect } from "react";
import { useRecoilState } from "recoil";
import  allHamsters  from "../../atoms/allHamsters";
import { Hamster } from "../../models/models";
import styles from "../../styles/gallerycard.module.css";
import { DeleteHamster } from "../helperFunctions/Helpers";

const GalleryCard = () => {
  const [data, setData] = useRecoilState<Hamster[]>(allHamsters);

  useEffect(() => {
    sendRequest(setData);
  }, [setData]);

  const removeHamsterObject = (hamsterId: string) => {
    setData((data) =>
      data.filter((hamsterObject) => hamsterObject.id !== hamsterId)
    );
  };

  return (
    <div className={styles.wrapper}>
      {data
        ? data.map((hamster) => (
            <section className={styles.card} key={Math.random() + hamster.id}>
              <img
                src={`/img/${hamster.imgName}`}
                alt={hamster.name}
                key={hamster.id}
                className="card__img"
              />
              <div className={styles.card__body}>
                <h2 className={styles.card__title}>{hamster.name}</h2>
                <button
                  className={styles.card__delete}
                  onClick={() => {DeleteHamster(hamster.id);removeHamsterObject(hamster.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </section>
          ))
        : "Loading"}
    </div>
  );
};

async function sendRequest(setData: any) {
  const response = await fetch("/hamsters");
  const data = await response.json();
  setData(data);
  console.log(data);
}

export default GalleryCard;
