const express = require('express'); // pulling in express
const server = express();// localizing express
const path = require('path');// localizing path package from node. 
const customPath = require('./utils/path');// importing the custom path variable from utils to set the app root automatically.
const appRoutes = require('./routes/backend');// importing the routes variable from routes.





server.use(appRoutes)// outsourced routes for the app. 


server.listen(5000);// setting up server on port 5000.