// pseudo code
// loop heatlist based on total heats
// for each set manipulate html
// concatenate "heat" + index
// add array index in a <li> display in HTML
// set array collection based on heat number input
// for (var i = 0; i <10; i++) {document.write('<li>Heat ' + i + '</li>' );}

// BUGS to resolve
// if user changes # of heats, it needs to reset the heat output


//FEATURES
// add field validation

  var counter = 0 //counter index
  var seconds = 0 // holder to convert time to seconds

// Triggers

$("#generateButton").click(calculateHeats);
$("#resetButton").click(reset);

// Functions

function convertTime() {
  var stringStartTime = $("#startTime").val();

  parseTime = stringStartTime.split(":");
  hour = parseTime[0];
  minutes = parseTime[1];

  totalMinutes = (parseInt(hour)*60) + parseInt(minutes);
  // console.log(totalMinutes);
}

function calculateHeats () {

  var totalHeats = $("#heats").val();//create counter off heat value to create array
  var heatList = []; //set an empty array that'll be filled via counter loop
  var eventDuration = $("#eventDuration").val();
  var transitionTime = $("#transitionTime").val();
  var var_startTime = $("#startTime").val();
  var totalDuration;

  var stringStartTime = $("#startTime").val();


  // convert stringTime to integer so I can calculate the values

  parseTime = stringStartTime.split(":");
  hour = parseTime[0];
  minutes = parseTime[1];

  // normalize startTime to millseconds split HH from MM, HH = 60 minutes + MM

  totalMilliseconds = (parseInt(hour)*3600000) + (parseInt(minutes)*60000);

    // console.log("hours"+parseInt(hour)*3600000);
    // console.log("minutes"+parseInt(minutes)*60000);
    // console.log(totalMilliseconds);

  while (counter < totalHeats) {

    totalDuration = totalMilliseconds + parseInt(eventDuration)*60000 + parseInt(transitionTime)*60000;
    var newDate = new Date(totalDuration);

    // i need to convert millseconds back into time into the newHeatTime
    var newHeatTime = newDate.getUTCHours() + ":" + newDate.getUTCMinutes()

    counter++; //increment heat number
    heatList.push('<li>Heat ' + counter + ': <span class= \"heatPadding\" >'+ newHeatTime +'</span></li>'); //add counter to array group
    $("#heatTimes").html(heatList);  //write to html doc

    // reassign totalMilliseconds to newHeatTime 
    totalMilliseconds = (parseInt(newDate.getUTCHours())*3600000) + (parseInt(newDate.getUTCMinutes())*60000);

  };
  //
  // console.log("eventDuration is: "+ eventDuration);
  // console.log("transitionTime is: "+ transitionTime);
  // console.log("startTime is: "+ var_startTime);

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
