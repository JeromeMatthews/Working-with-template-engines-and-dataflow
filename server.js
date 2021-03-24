const express = require('express'); // pulling in express
const server = express();// localizing express
const path = require('path');// localizing path package from node. 
const customPath = require('./utils/path');// importing the custom path variable from utils to set the app root automatically.
const appRoutes = require('./routes/backend');// importing the routes variable from routes.

const bodyParser = require('body-parser');// pulling in the body-parser from the npm package install done. 

server.use(bodyParser.urlencoded({extended: false})); // parsing the html data from the request body into text.
//must happen before any of the middleware functions are accessed. So must be called before server.use(appRoutes).
//================================================================


server.use(appRoutes)// outsourced routes for the app. 


server.listen(5000);// setting up server on port 5000.