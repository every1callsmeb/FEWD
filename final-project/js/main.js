// pseudo code
// loop heatlist based on total heats
// for each set manipulate html
// concatenate "heat" + index
// add array index in a <li> display in HTML

// set array collection based on heat number input
// for (var i = 0; i <10; i++) {document.write('<li>Heat ' + i + '</li>' );}
// Reset Variables

var heatList
var totalHeats


// Triggers

$("#generateButton").click(calculateHeats);

// Functions

function calculateHeats () {

  var totalHeats = $("#heats").val();

  // Loops until totalHeat value is reached

  for (var i = 0; i < totalHeats; i++) {


    $("#heatTimes").html('<li>Heat ' + i + '</li>' );


  }

  // while (i <= totalHeats) {
  //   i = i + 1
  //   heatList = '<li>Heat ' + i + '</li>';
  //   i++;
  // }

  console.log(heatList);

  // Write to HTML doc

  $("#heatTimes").html(heatList);
};







// convert input into proper data type
