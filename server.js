// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var firebase = require('firebase');
var bodyParser = require("body-parser");


//=========================
//Configure Firebase
//===========================
var firebaseConfig = {
  apiKey: "AIzaSyCr9oczno46O1MykSGRoM_awKlGc20_IMk",
  authDomain: "soccer-wed.firebaseapp.com",
  databaseURL: "https://soccer-wed.firebaseio.com",
  projectId: "soccer-wed",
  storageBucket: "soccer-wed.appspot.com",
  messagingSenderId: "145212261700",
  appId: "1:145212261700:web:e5c2553810d0ac7d"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.database();

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app, db);
require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});