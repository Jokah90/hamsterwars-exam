import AddHamster from "./AddHamster";
import GalleryCard from "./GalleryCard";

// Galleri
// Här ska appen visa alla hamstrars namn och bild, i ett CSS grid. KLAR

// Man ska kunna lägga till en ny hamster via ett formulär. Formuläret ska använda validering.

// Man ska kunna ta bort en hamster från galleriet.

// Tänk på att inte visa för mycket information direkt. Låt användaren klicka/hovra över en bild för att visa mer information.

const Gallery = () => {


  return (
	  <div>
		<header>
			<AddHamster />
		</header>
    	<main>
			<GalleryCard />
    	</main>

	  </div>
  );
};


export default Gallery;
