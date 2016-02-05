$(document).ready(function(){
    $('#image').attr('src', images[0])
}); //wait for page to load before running this statement


var index = 0 //similar to var total = 0 on cash register exercise
var images = ["images/animal1.jpg", "images/animal2.jpg", "images/animal3.jpg", "images/animal4.jpg", "images/animal5.jpg", "images/animal6.jpg", "images/animal7.jpg"]
var newSrc;
var lastIndex = images.length - 1; //this checks how many are in the array

$('#next').click(nextImage);
$('#previous').click(prevImage);

function nextImage(){
// increment index by 1
// grab image from array
// change src tag in html


if (index < lastIndex) {
  $('#previous').show();
  console.log('nextImage fired');
  index += 1;  //increments by 1
  newSrc = images[index];

  $('#image').attr('src', newSrc);} else {
    $('#next').hide();
  }
}

function prevImage(){
// increment index by -1
// grab image from array
// change src tag in html

var lastIndex = images.length; //this checks how many are in the array

if (index > 0){
  $('#next').show();
  console.log('prevImage fired');

  index += -1;  //increments by 1
  newSrc = images[index];

  $('#image').attr('src', newSrc);} else {
    $('#previous').hide();
  }
}
