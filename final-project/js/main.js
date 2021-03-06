// pseudo code
// loop heatlist based on total heats
// for each set manipulate html
// concatenate "heat" + index
// add array index in a <li> display in HTML
// set array collection based on heat number input
// for (var i = 0; i <10; i++) {document.write('<li>Heat ' + i + '</li>' );}

// BUGS to resolve


//FEATURES
// add field validation

  var counter = 0 //counter index
  var seconds = 0 // holder to convert time to seconds

// Triggers

$("#instructions").hide();
$("#heatTimes").hide();
$("#generateButton").click(calculateHeats);
$("#resetButton").click(reset);
$("#help p").click(help);

// Functions

function help () {
  $("#instructions").slideToggle();
}

function calculateHeats () {

  var totalHeats = $("#heats").val();//create counter off heat value to create array
  var heatList = []; //set an empty array that'll be filled via counter loop
  var eventDuration = $("#eventDuration").val();
  var transitionTime = $("#transitionTime").val();
  var var_startTime = $("#startTime").val();
  var totalDuration;

  var stringStartTime = $("#startTime").val();
  counter = 0;
  // convert stringTime to integer so I can calculate the values

  parseTime = stringStartTime.split(":");
  hour = parseTime[0];
  minutes = parseTime[1];

  // normalize startTime to milliseconds

  totalMilliseconds = (parseInt(hour)*3600000) + (parseInt(minutes)*60000);

    // console.log("hours"+parseInt(hour)*3600000);
    // console.log("minutes"+parseInt(minutes)*60000);
    // console.log(totalMilliseconds);

  while (counter < totalHeats) {

    totalDuration = (totalMilliseconds + parseInt(eventDuration)*60000 + parseInt(transitionTime)*60000);
    var newDate = new Date(totalDuration);
    var newHour = newDate.getUTCHours();
    var newMinute = newDate.getUTCMinutes();

    // need to convert int to string so I can add leading zero for anything < 10

    var newMinuteStr = newMinute.toString();
    if (newMinuteStr.length < 2){newMinuteStr = "0"+newMinuteStr} else {newMinuteStr};

    var newHourStr = newHour.toString();
    if (newHourStr.length < 2){newHourStr = "0"+newHourStr} else {newHourStr};

    var newHeatTime = newHourStr + ":" + newMinuteStr;

    counter++; //increment heat number

    var counterStr = counter.toString();
    if (counterStr.length < 2){counterStr = "0"+counterStr} else {counterStr};

    heatList.push('<li>Heat ' + counterStr + ': <span class= \"heatPadding\" >'+ newHeatTime +'</span></li>'); //add counter to array group
    $("#heatTimes").html(heatList);  //write to html doc

    // reassign totalMilliseconds to newHeatTime
    totalMilliseconds = (parseInt(newDate.getUTCHours())*3600000) + (parseInt(newDate.getUTCMinutes())*60000);
  };
    $("#heatTimes").slideDown(1000);
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

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}
