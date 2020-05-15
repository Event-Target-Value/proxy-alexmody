const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
// const routes = require(path.join(__dirname, 'router.js'))

const app = express();

app.use(express.static(path.join(__dirname, "..", "client")));
// app.use("/", routes);

const port = 9005

app.listen(port, () => {console.log('Listening on port: ')})

//WINDOW.LOCATION