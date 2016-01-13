document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;

function switchGray() {
 document.body.style.backgroundColor = 'gray';
 document.body.style.color = 'white';
}

function switchWhite() {
  // Console pushes action that this function was triggered
  console.log('switchWhiteCalled');
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}

function switchBlue() {
  document.body.style.backgroundColor = 'blue';
  document.body.style.color = 'white';
}

console.log()
