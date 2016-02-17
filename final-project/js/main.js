// pseudo code
// loop heatlist based on total heats
// for each set manipulate html
// concatenate "heat" + index
// add array index in a <li> display in HTML
// set array collection based on heat number input
// for (var i = 0; i <10; i++) {document.write('<li>Heat ' + i + '</li>' );}

// BUGS to resolve
// add 0 to single digit output
// if users click generate after initial use, heat # continues to increment

//FEATURES
// add field validation

  var counter = 0 //counter index
  var seconds = 0 // holder to convert time to seconds

// Triggers

$("#generateButton").click(calculateHeats);
$("#resetButton").click(reset);

// function convertTime() {
//   var stringStartTime = $("#startTime").val();
//
//   parseTime = stringStartTime.split(":");
//   hour = parseTime[0];
//   minutes = parseTime[1];
//
//   totalMinutes = (parseInt(hour)*60) + parseInt(minutes);
//   // console.log(totalMinutes);
// }

// Functions

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
    var newHour = newDate.getUTCHours();
    var newMinute = newDate.getUTCMinutes();

    // need to convert int to string so I can add leading zero for anything < 10

    var newMinuteStr = newMinute.toString();
    if (newMinuteStr.length < 2){newMinuteStr = "0"+newMinuteStr} else {newMinuteStr};

    var newHeatTime = newHour + ":" + newMinuteStr;

    counter++; //increment heat number

    var counterStr = counter.toString();
    if (counterStr.length < 2){counterStr = "0"+counterStr} else {counterStr};

    heatList.push('<li>Heat ' + counterStr + ': <span class= \"heatPadding\" >'+ newHeatTime +'</span></li>'); //add counter to array group
    $("#heatTimes").html(heatList);  //write to html doc

    // reassign totalMilliseconds to newHeatTime
    totalMilliseconds = (parseInt(newDate.getUTCHours())*3600000) + (parseInt(newDate.getUTCMinutes())*60000);

  };

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
