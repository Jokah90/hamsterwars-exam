import AddHamster from "./AddHamster";
import GalleryCard from "./GalleryCard";
import styles from "../../styles/gallery.module.css";
import { useState } from "react";
// Galleri
// Här ska appen visa alla hamstrars namn och bild, i ett CSS grid. KLAR

// Man ska kunna ta bort en hamster från galleriet. KLAR

// Tänk på att inte visa för mycket information direkt. Låt användaren klicka/hovra över en bild för att visa mer information.

const Gallery = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3>Add another warrior to the arena?</h3>

        <button onClick={() => setToggle(!toggle)}>ADD HAMSTER</button>
        {toggle && <AddHamster />}
      </header>
      <main className={styles.main}>
        <GalleryCard />
      </main>
    </div>
  );
};

export default Gallery;
