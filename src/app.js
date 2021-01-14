const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/index.routes');


app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.use('/api', router);

module.exports = app;