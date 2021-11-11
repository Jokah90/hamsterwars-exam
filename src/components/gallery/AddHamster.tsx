
import { useState } from "react";
import { addOne } from "../helperFunctions/Helpers";

const AddHamster = () => {
	
// Man ska kunna lägga till en ny hamster via ett formulär. Formuläret ska använda validering.

	//gör state till recoil kom ihåg
	const [name, setName] = useState('');
	const handleNameChange = (e: string | any ) => setName(e.target.value);

	const [age, setAge] = useState(0);
	const handleAgeChange = (e: number | any ) => {
	if (e.target.valueAsNumber >= 0)
		
		setAge(e.target.valueAsNumber)
	}
		
	

	const [favFood, setFaveFood] = useState('');
	const handleFaveFoodChange = (e: string | any ) => setFaveFood(e.target.value);

	const [loves, setLoves] = useState('');
	const handleLovesChange = (e: string | any ) => setLoves(e.target.value);

	const [imgName, setImgName] = useState('');
	const handleImgNameChange = (e: string | any ) => setImgName(e.target.value);
  
  const data = {
    name: name,
    age: age,
    favFood: favFood,
    loves: loves,
    imgName: imgName,
    wins: 0,
    defeats: 0,
    games: 0,
  };

  return (
    <div>
      <section>
        <h3>Add another warrior to the arena?</h3>

        <form onSubmit={() => addOne(data)}>
          <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
          <input type="number" placeholder="Age" value={age} onChange={handleAgeChange} />
          <input type="text" placeholder="Food" value={favFood} onChange={handleFaveFoodChange} />
          <input type="text" placeholder="Loves" value={loves} onChange={handleLovesChange} />
          <input type="text" placeholder="Picture" value={imgName} onChange={handleImgNameChange} />
          <button type="submit">🖊️</button>
        </form>
      </section>
    </div>
  );
};

export default AddHamster;
