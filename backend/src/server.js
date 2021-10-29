// importera paket
const express = require('express')
const app = express()
const router = require('./routes/router.js')
const routerMatches = require('./routes/routesMatches.js')
const cors = require('cors')

let count = 0;

// konfigurera
const PORT = process.env.PORT || 1337;
app.use(cors());

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use( express.static(__dirname + '/../../build') ) 
// Lägg till map för bilderna KOM IHÅG


//Logger
app.use((req, res, next) => {
  count++;
  console.log(`${count} ${req.method}  ${req.url}`, req.body);

  next();
});



// routes / endpoints
app.use('/hamsters', router)
app.use('/matches', routerMatches);


app.get('*', (req, res) => {
	res.sendFile(__dirname + '/../../build/index.html')
})

// starta servern
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
})