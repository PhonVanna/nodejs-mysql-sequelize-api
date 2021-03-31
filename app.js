const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');
const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');

dotenv.config({ path: './.env'});

app.use(bodyParser.json());

app.use("/users", usersRoute);
app.use("/posts", postsRoute);

module.exports = app;