import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { allHamsters } from "../../atoms/atoms";
import { Hamster } from "../../models/models";
import styles from "../../styles/gallerycard.module.css"


const GalleryCard = () => {
  const [data, setData] = useRecoilState<Hamster[] | null>(allHamsters);

  useEffect(() => {
    sendRequest(setData);
  }, []);

  return (
	  <div className={styles.wrapper}>

	<section className={styles.card}>

      {data
        ? data.map((hamster) => (
			
           	<><img
				src={`/img/${hamster.imgName}`}
				alt={hamster.name}
				key={hamster.id}
				className="card__img" />
				<div className={styles.card__body}>
					<h2 className={styles.card__title}>{hamster.name}</h2>
					<p className={styles.card__description}>{hamster.loves}</p>
					<button className={styles.card__delete}>❌</button>
					<button className={styles.card__edit}>🖊️</button>
				</div></>

          ))
        : "Loading"}
	</section>
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
