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

var totalHeats = $("#heats").val();//create counter off heat value to create array
var heatList = []; //set an empty array that'll be filled via counter loop
var counter = 0 //counter index

// Triggers

$("#generateButton").click(calculateHeats);
$("#resetButton").click(reset);

// Functions

function calculateHeats () {

  while (counter <= totalHeats) {
    heatList.push('<li>Heat ' + counter + '</li>'); //add counter to array group
    counter++; //increment counter
    $("#heatTimes").html('<li>Heat ' + heatList + '</li>' );  //write to html doc
  };
};

function reset (){
  counter = 0;
  heatList = [];
  $("input[id=heats]").val("");
  $("input[id=startTime").val("");
  $("input[id=eventDuration]").val("");
  $("input[id=transitionTime]").val("");
}
