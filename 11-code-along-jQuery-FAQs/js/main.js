$('#answer1').hide();
$('#question1').click(toggleFAQ1);

$('#answer2').hide();
$('#question2').click(toggleFAQ2);

$('#answer3').hide();
$('#question3').click(toggleFAQ3);

function toggleFAQ1(){
  $('#answer1').toggle();
}

function toggleFAQ2(){
  $('#answer2').fadeToggle();
}

function toggleFAQ3(){

  $('#answer3').slideToggle();
}
