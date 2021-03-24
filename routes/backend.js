const express = require('express');
const appRoutes = express.Router();
const path = require('path');// localizing path package from node. 
const customPath = require('../utils/path');// importing the custom path variable from utils to set the app root automatically.


appRoutes.get('/',(req, res, next) =>{
    console.log("server started, now listening on port: 5000");
    res.sendFile(path.join(customPath,"views", "index.html"));

});

module.exports = appRoutes; // exporting all the routes to the server.js file 