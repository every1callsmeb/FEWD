$('#grayButton').click(switchGray);
// document.getElementById('grayButton').onclick = switchGray;
$('#whiteButton').click(switchWhite);
// document.getElementById('whiteButton').onclick = switchWhite;
$('#blueButton').click(switchBlue);
// document.getElementById('blueButton').onclick = switchBlue;
$('#paragraph').click(switchParagraph);
// document.getElementById('paragraph').onclick = switchParagraph;

function switchParagraph() {
  document.body.style.backgroundColor = 'red';
  document.body.style.color = 'white';
  document.getElementById('paragraph').style.color ='blue';
}

function switchGray() {
 document.body.style.backgroundColor = 'gray';
 document.body.style.color = 'white';
 document.getElementById('paragraph').style.color ='yellow';
}

function switchWhite() {
  // Console pushes action that this function was triggered
  console.log('switchWhiteCalled');
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
  document.getElementById('paragraph').style.color ='red'
}

function switchBlue() {
  document.body.style.backgroundColor = 'blue';
  document.body.style.color = 'white';
  document.getElementById('paragraph').style.color ='red'
}

console.log()
