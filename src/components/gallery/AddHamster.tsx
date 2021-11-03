
import { useState } from "react";

const AddHamster = () => {
	
	const [name, setName] = useState('');
	const handleNameChange = (e: string | any ) => setName(e.target.value);

	const [age, setAge] = useState(0);
	const handleAgeChange = (e: number | any ) => {
	if (e.target.valueAsNumber)
		
		setAge(e.target.valueAsNumber)
	}
		
	//mer validering

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

  const addOne = () => {
    fetch("/hamsters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <section>
        <h3>Add another warrior to the arena?</h3>

        <form onSubmit={addOne}>
          <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
          <input type="number" placeholder="Age" value={age} onChange={handleAgeChange} />
          <input type="text" placeholder="Food" value={favFood} onChange={handleFaveFoodChange} />
          <input type="text" placeholder="Loves" value={loves} onChange={handleLovesChange} />
          <input type="text" placeholder="Picture" value={imgName} onChange={handleImgNameChange} />
          <button type="submit">X</button>
        </form>
      </section>
    </div>
  );
};

export default AddHamster;
