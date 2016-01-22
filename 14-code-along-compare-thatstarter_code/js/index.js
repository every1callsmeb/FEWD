// Pseudo Code

// user provides 2 numeric values
// store values into variables
// user clicks compare
// if user provides an alpha, alert user it must be a numeric
// if usr provides only 1 value, alert user to provide second value
// if values are numeric, then compare function called to evaluate value a to value b
// output compare operator
// if a === undefined && b === undefined

//Global Variables



//Functions

function compareValues(){

  var valueA = $("#a").val();
  var valueB = $("#b").val();

  if(valueA > valueB){
    $("#comparison").html(">")
  } else if(valueA < valueB){
    $("#comparison").html("<")
  }  else {
    $("#comparison").html("=")
  }
};

//Triggers

$("#submit").click(compareValues);
