const path = require('path'); //pulling path from node.
const customPath = path.dirname(process.mainModule.filename);// set the default path to the root of the app. This

module.exports = customPath; //export he path variable to be used in the server.js file
