// importera paket
console.log('1')
const express = require('express')
const app = express()
const router = require('./routes/router.js')
const routerMatches = require('./routes/routesMatches.js')
const cors = require('cors')

let count = 0;
console.log('2')

// konfigurera
const PORT = process.env.PORT || 1337;
app.use(cors());
console.log('3')

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use( express.static(__dirname + '/../../build') ) 
// Lägg till map för bilderna KOM IHÅG
console.log('4')


//Logger
app.use((req, res, next) => {
  count++;
  console.log(`${count} ${req.method}  ${req.url}`, req.body);

  next();
});
console.log('5')



// routes / endpoints
app.use('/hamsters', router)
console.log('6')

app.use('/matches', routerMatches);
console.log('7')


app.get('*', (req, res) => {
	res.sendFile(__dirname + '/../../build/index.html')
})
console.log('8')

// starta servern
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
})