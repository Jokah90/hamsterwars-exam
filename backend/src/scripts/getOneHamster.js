const database = require('../database.js')
const connect = database.connect
const db = connect()

const HAMSTERS = 'hamsters'

//anropar
getOne();



// Hämta hamster från databasen
async function getOne(id) {
    console.log('Looking for one hamster...');
    const docId = id || "NG1ATK9p6UthKsIyy4lt";

    const docSnapshot = await db.collection(HAMSTERS).doc(docId).get()

    if (!docSnapshot.exists) {
        console.log('Could not find it!');
        return
    }
    const data = await docSnapshot.data()
    console.log('Found: ', data);
    return data
}


