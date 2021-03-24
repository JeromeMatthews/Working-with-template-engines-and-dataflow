const express = require('express');
const appRoutes = express.Router();
const path = require('path');// localizing path package from node. 
const customPath = require('../utils/path');// importing the custom path variable from utils to set the app root automatically.


appRoutes.get('/',(req, res, next) =>{
    console.log("server started, now listening on port: 5000");
    res.sendFile(path.join(customPath,"views", "index.html"));


});


appRoutes.get('/users', (req, res, next) =>{
    console.log("Now acessing the users route...");
    res.sendFile(path.join(customPath,"views", "users.html"));
});


appRoutes.use('/', (req, res, next) =>{
    console.log("ERROR - URL cannot be found.");
    res.sendFile(path.join(customPath,"views", "404.html"));
    //Use the .use() function as a catch for any routes that aren't specified in the site/app.
});

module.exports = appRoutes; // exporting all the routes to the server.js file 