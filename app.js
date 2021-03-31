const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');

app.use(bodyParser.json());

app.use("/users", usersRoute);
app.use("/posts", postsRoute);

module.exports = app;