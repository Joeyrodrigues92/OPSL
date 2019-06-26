// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

// var tableData = require("../data/tableData");
// var waitListData = require("../data/waitinglistData");
const players=[];

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app, db) {

   // PULLING ALL CHILD FROM FIREBASE
    db.ref().on("child_added", function(childSnapshot){
        players.push(childSnapshot.val())
    })

  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/players", function(req, res) {
    res.json(players)
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/players", function(req, res) {
        let player = req.body;
        db.ref().push(player)
  });


};

