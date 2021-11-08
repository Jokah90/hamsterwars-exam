import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Hamster } from "../../models/models";
import { allHamsters } from "../../atoms/atoms";
import styles from "../../styles/gallerygrid.module.css"

const GalleryGrid = () => {
  const [data, setData] = useRecoilState<Hamster[] | null>(allHamsters)


  useEffect(() => {
    sendRequest(setData);
  }, []);


    return (     
	  <section className={styles.galleryGrid}>
      {data
        ? data.map((hamster) => (
			<figure className={styles.hamsterCards}  key={hamster.id}>
				  <h3>{hamster.name}</h3>
              <img src={`/img/${hamster.imgName}`} alt={hamster.name} />
            </figure>
          ))
		  : "Loading fighters..."}
	</section>
    )
}

async function sendRequest(setData: any) {
	const response = await fetch("/hamsters");
	const data = await response.json();
	setData(data);
	console.log(data);
  }

export default GalleryGrid;