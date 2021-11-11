import { Data } from "../../models/models";

// DELETE
const DeleteHamster = (id: string) => {
  fetch(`/hamsters/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
};

// ADD A NEW HAMSTER
const addOne = (data: Data) => {
  try {
    fetch("/hamsters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
  } catch (error) {
    console.log("Error", error);
  }
};

const getRandom = (data: string) => {
  try {
    fetch("/Hamsters/random", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log("Error", error);
  }
};

const getAll = (data: string) => {
  try {
    fetch("/Hamsters", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log("Error", error);
  }
};

const changeData = (data: string) => {
	try {
	  fetch("/:id", {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	  });
	} catch (error) {
	  console.log("Error", error);
	}
  };
  

export { DeleteHamster, addOne, getRandom, getAll, changeData };
