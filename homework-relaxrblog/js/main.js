// On Load

$("#more-text1, #more-text2, #learn-more").hide();
$(".show-less1, .show-less2").hide();

// Call to Actions

$(".read-more1").click(more1);
$(".read-more2").click(more2);
$(".show-less1").click(less1);
$(".show-less2").click(less2);
$("#learnMore").click(fnlearnMore);

// Functions

function more1(){
  $("#more-text1").slideToggle();
  $(".read-more1").hide();
  $(".show-less1").show();
}

function more2(){
  $("#more-text2").slideToggle();
  $(".read-more2").hide();
  $(".show-less2").show();
}

function less1(){
  $("#more-text1").slideToggle();
  $(".read-more1").slideToggle();
  $(".show-less1").hide();
}

function less2(){
  $("#more-text2").slideToggle();
  $(".read-more2").slideToggle();
  $(".show-less2").hide();
}

function fnlearnMore(){
  $("#learn-more").slideToggle();
  $("#learnMore").hide();
}
