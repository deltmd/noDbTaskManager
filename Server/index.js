const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 8001;
var Test = require('./Controllers/Test')

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '../public'));



app.get("/app/test", Test.test);

app.listen(port, () => console.log('listening on port ', port));