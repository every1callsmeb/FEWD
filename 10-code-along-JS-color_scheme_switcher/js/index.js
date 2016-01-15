$('#grayButton').click(switchGray);

// document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('paragraph').onclick = switchParagraph;

function switchParagraph() {
  document.body.style.backgroundColor = 'red';
  document.body.style.color = 'white';
  document.getElementById('paragraph').style.color ='yellow';
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
