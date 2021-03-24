const express = require('express'); // pulling in express
const server = express();// localizing express


server.get('/',(req, res, next) =>{
     console.log("server started, now listening on port: 5000");
     res.send('<h1>Now viewing server root...</h1>');

});


server.listen(5000);// setting up server on port 5000.