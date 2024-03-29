const express = require('express');
const apiMocker = require('connect-api-mocker');
var cors = require('cors');
var fs = require('fs');

const port = 9000;
const app = express();
 
app.use('/api', apiMocker('mock-api'));
app.use(cors());
app.options('*', cors());

app.listen(port);