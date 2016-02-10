// pseudo code
// set array index based on Heat input
// for each set manipulate html
// concatenate "heat" + index
// add array index in a <li> display in HTML

// set array collection based on heat number input

// Reset Variables

var i = 0 //set counter to 0
var heatList
var totalHeats = $("#heats").val();

// Triggers

$("#generateButton").click(calculateHeats);

// Functions

function calculateHeats () {

  var totalHeats = $("#heats").val();

  while (i <= totalHeats) {
    i = i + 1
    heatList = '<li>Heat ' + i + '</li>';
    i++;
  }
  console.log(heatList);
  $("#heatTimes").html(heatList);
};







// convert input into proper data type
