var express = require('express');

var app = express();
var usersRouter = require('./users');
var indexRouter = require('./index');

app.use('/', indexRouter);
app.use('/users', usersRouter);
