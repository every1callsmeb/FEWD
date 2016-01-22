// Variables - global scope)

  var result;  //declaring the variable results, this global variable is accessible in all functions.

// Functions
  function reset(){
    //local scope
    result = 0;
    $("#currentScore").html(result);  //manipulates the html with the current result
}

  function plusFive(){
    result = result + 5;
    $("#currentScore").html(result);
  }

  function plusOne(){
    result = result + 1;
    $("#currentScore").html(result);
  }

  function minusFive(){
    result = result - 5;
    $("#currentScore").html(result);
  }

  function minusOne(){
    result = result - 1;
    $("#currentScore").html(result);
  }

// Setting Triggers

$("#addOne").click(plusOne);
$("#subtractOne").click(minusOne);
$("#addFive").click(plusFive);
$("#subtractFive").click(minusFive);
$("#resetButton").click(reset);



// General Notes
// var always start with lower case
// .html ()
// .css () if we pass 1 argument, it just returns the value.
