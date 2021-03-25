const express = require('express');
const appRoutes = express.Router();
const path = require('path');// localizing path package from node. 
const customPath = require('../utils/path');// importing the custom path variable from utils to set the app root automatically.


const userData = []; //hold the incoming data from the request body. 

appRoutes.get('/',(req, res, next) =>{
    
    console.log("server started, now listening on port: 5000");
    res.render("./ejs/index.ejs", {DocTitle:"App index page"});


});




appRoutes.post('/users', (req, res, next) =>{
    console.log("Now acessing the users route...[VIA POST METHOD REQUEST]");
   
    userData.push(req.body.username);// puts the entered data into the user data array.
    console.log(userData); 
    res.render("./ejs/users.ejs", 
    {
    DocTitle: "Added User names",
    userNames: userData 
    /* 
    userNames has all the data passed into the array (userData)
    from the request body that was captured from the form on the index page.
    Now that being passed into the users.pug file can used in the view.
    */
    }
        

    );
});


appRoutes.use((req, res, next) =>{
    console.log("ERROR - URL cannot be found.");
    res.status(404).render( "./ejs/404.ejs", {DocTitle: "This 404 Error page was generated in EJS!"});
    //Use the .use() function as a catch for any routes that aren't specified in the site/app.
});

module.exports = appRoutes; // exporting all the routes to the server.js file 