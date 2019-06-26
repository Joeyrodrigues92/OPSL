  //Your web app's Firebase configuration 
$( document ).ready(function(){

//FIREBASE
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

//GLOBAL VAR
  let list = $('#list');
  let players = [];
  let playerCount=0;


  // var d = new Date();

  // console.log('TIME', d)


//HIDE LIST FULL DIV
$('.listFull').hide();

//ON SUBMIT FORM
$('#submit').on('click', function(){
    
    event.preventDefault()

    let person = {
        first: '',
        last: ''
    };
     let firstName = $('#firstName').val();
     let lastName = $('#lastName').val()

     if (firstName == '' || lastName == ''){
          alert('Please Fill Out Form')
     } else{
      person.first = $('#firstName').val()
      person.last = $('#lastName').val()

      $('#firstName').val('');
      $('#lastName').val('');
      db.ref().push(person)
     }

});


//FIREBASE PULL DATA
db.ref().on("child_added", function(childSnapshot){
  let player = {
    firstName: '',
    lastName: ''
  }

    player.firstName = childSnapshot.val().first;
    player.lastName = childSnapshot.val().last;
    playerCount++;
    $('#list').append('<p>', playerCount + '. ' + player.firstName + ' ' + player.lastName, '</p>')
    
    players.push(player)
    checkLimit();

});


//CHECK IF LIST IS FULL
function checkLimit(){
  // players.length = 10;
  if (players.length == 10){
    $('.listFull').show();
    $('#formDiv').hide()
  }
}

});



