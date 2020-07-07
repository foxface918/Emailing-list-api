const express = require('express');
const users = require('./API/Endpoints/Users');
const app = express();
app.use('/users', users);
module.exports = app;