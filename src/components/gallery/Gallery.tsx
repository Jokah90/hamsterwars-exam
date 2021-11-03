import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Hamster } from "../../models/models";
import { allHamsters } from "../../atoms/atoms";
import "./Gallery.css";
import AddHamster from "./AddHamster";

// Galleri
// Här ska appen visa alla hamstrars namn och bild, i ett CSS grid. KLAR

// Man ska kunna lägga till en ny hamster via ett formulär. Formuläret ska använda validering.

// Man ska kunna ta bort en hamster från galleriet.

// Tänk på att inte visa för mycket information direkt. Låt användaren klicka/hovra över en bild för att visa mer information.

const Gallery = () => {
  const [data, setData] = useRecoilState<Hamster[] | null>(allHamsters)

  useEffect(() => {
    sendRequest(setData);
  }, []);

  return (
    <main>
		<AddHamster />

	  <section className="grid-container">
      {data
        ? data.map((hamster) => (
			<figure className="hamster-cards" key={hamster.id}>
              <p>{hamster.name}</p>
              <img src={`/img/${hamster.imgName}`} alt={hamster.name} />
            </figure>
          ))
		  : "Loading fighters..."}
	</section>
    </main>
  );
};

async function sendRequest(saveData: any) {
  const response = await fetch("/hamsters");
  const data = await response.json();
  saveData(data);
  console.log(data);
}

export default Gallery;
