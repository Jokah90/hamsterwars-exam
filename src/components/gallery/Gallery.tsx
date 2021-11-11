import AddHamster from "./AddHamster";
import GalleryCard from "./GalleryCard";
import styles from "../../styles/gallery.module.css"
// Galleri
// Här ska appen visa alla hamstrars namn och bild, i ett CSS grid. KLAR


// Man ska kunna ta bort en hamster från galleriet. KLAR

// Tänk på att inte visa för mycket information direkt. Låt användaren klicka/hovra över en bild för att visa mer information.

const Gallery = () => {


  return (
	  <div>
		<header>
		</header>
    	<main className={styles.main}>
			<GalleryCard  />
    	</main>

	  </div>
  );
};


export default Gallery;
