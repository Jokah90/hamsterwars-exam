const { db } = require("../database.js");


const HAMSTERS = "hamsters";

getRandom();

async function getRandom() {
  const docRef = db.collection(HAMSTERS);
  const docSnapshot = await docRef.get();
  
  const hamsterArray = await getAllHamsters()
  let randomHamster = hamsterArray[Math.floor(Math.random()*hamsterArray.length)
}
