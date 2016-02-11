// pseudo code
// loop heatlist based on total heats
// for each set manipulate html
// concatenate "heat" + index
// add array index in a <li> display in HTML

// set array collection based on heat number input
// for (var i = 0; i <10; i++) {document.write('<li>Heat ' + i + '</li>' );}

// BUGS to resolve
// if user changes # of heats, it needs to reset the heat output
// initial heat generation adds Heat 0

  var counter = 0 //counter index
  var seconds = 0 // holder to convert time to seconds

// Triggers

$("#generateButton").click(calculateHeats);
$("#resetButton").click(reset);

// Functions

function calculateHeats () {

  var totalHeats = $("#heats").val();//create counter off heat value to create array
  var heatList = []; //set an empty array that'll be filled via counter loop
  var eventDuration = $("#eventDuration").val();
  var transitionTime = $("#transitionTime").val();
  var var_startTime = $("#startTime").val();
  var eventLength


  while (counter < totalHeats) {
    // normalize startTime to minutes split HH from MM, HH = 60 minutes + MM


    // startSeconds = startTime.split(':');


    // startTime + eventDuration + transitionTime

    counter++; //increment counter
    heatList.push('<li>Heat ' + counter + '</li>'); //add counter to array group
    $("#heatTimes").html(heatList);  //write to html doc

  };

  eventLength = eventDuration + transitionTime;

  console.log("eventDuration is: "+ eventDuration);
  console.log("transitionTime is: "+ transitionTime);
  console.log("startTime is: "+ var_startTime);
  console.log("eventDuration + transitionTime is: "+ eventLength);

};

function reset (){
  counter = 0;
  heatList = [];
  $("input[id=heats]").val("");
  $("input[id=startTime").val("");
  $("input[id=eventDuration]").val("");
  $("input[id=transitionTime]").val("");
  $("#heatTimes li").remove();
}
