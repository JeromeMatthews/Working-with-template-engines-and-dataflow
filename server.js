const express = require('express'); // pulling in express
const server = express();// localizing express
const path = require('path');// localizing path package from node. 
const customPath = require('./utils/path');// importing the custom path variable from utils to set the app root automatically.

server.get('/',(req, res, next) =>{
     console.log("server started, now listening on port: 5000");
     res.sendFile(path.join(customPath,"views", "index.html"));

});


server.listen(5000);// setting up server on port 5000.