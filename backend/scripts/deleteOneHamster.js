const { db } = require("../database.js");


const HAMSTERS = "hamsters";

deleteOne();

async function deleteOne(id) {
  console.log("Deleting a document...");
  const docId = id || "X90v5YvT8bAQ3PmzmXjU";

  const docRef = db.collection(HAMSTERS).doc(docId);
  const docSnapshot = await docRef.get();

  if (!docSnapshot.exists) {
    return null;
  }
  docRef.delete();
}
