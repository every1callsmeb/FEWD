// pseudo code
// loop heatlist based on total heats
// for each set manipulate html
// concatenate "heat" + index
// add array index in a <li> display in HTML

// set array collection based on heat number input
// for (var i = 0; i <10; i++) {document.write('<li>Heat ' + i + '</li>' );}
// Reset Variables

// var heatList = [1,2,3]
// var totalHeats

// Triggers

$("#generateButton").click(calculateHeats);

// Functions

function calculateHeats () {

  var totalHeats = $("#heats").val();

  //create counter off heat value to create array

  var heatList = [];
  var counter = -1 //counter index

  while (counter <= totalHeats) {
    heatList.push('<li>Heat ' + counter + '</li>');
    counter++; //increment counter
    $("#heatTimes").html('<li>Heat ' + heatList + '</li>' );  //write to html doc
  };


    console.log(index);










// convert input into proper data type
