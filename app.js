const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');
const imagesRoute =  require('./routes/images');

dotenv.config({ path: './.env'});

app.use(bodyParser.json());
const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use("/users", usersRoute);
app.use("/posts", postsRoute);
app.use("/images", imagesRoute);

module.exports = app;