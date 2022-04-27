const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express()

const palindromicRouter = require('./routes/palindromic');

app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/api/palindromic', palindromicRouter);

module.exports = app