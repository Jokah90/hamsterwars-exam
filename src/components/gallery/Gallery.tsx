import AddHamster from "./AddHamster";
import GalleryCard from "./GalleryCard";
import styles from "../../styles/gallery.module.css";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import allHamsters from "../../atoms/allHamsters";
import { Hamster } from "../../models/models";
// Galleri
// Här ska appen visa alla hamstrars namn och bild, i ett CSS grid. KLAR

// Man ska kunna ta bort en hamster från galleriet. KLAR

// Tänk på att inte visa för mycket information direkt. Låt användaren klicka/hovra över en bild för att visa mer information.

const Gallery = () => {
  const [data, setData] = useRecoilState<Hamster[]>(allHamsters);
  const [toggle, setToggle] = useState<boolean>(false);
  useEffect(() => {
    sendRequest(setData);
  }, [setData]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3>Add another warrior to the arena?</h3>

        <button onClick={() => setToggle(!toggle)}>ADD HAMSTER</button>
        {toggle && <AddHamster />}
      </header>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          {data
            ? data.map((hamster) => (
                <GalleryCard
                  hamster={hamster}
                  key={Math.floor(Math.random() * 100) + hamster.id}
                />
              ))
            : "Loading"}
        </div>
      </main>
    </div>
  );
};

async function sendRequest(setData: any) {
  const response = await fetch("/hamsters");
  const data = await response.json();
  setData(data);
  console.log(data);
}

export default Gallery;
