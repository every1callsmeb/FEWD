var clicks = 0;

$('#blue > button').click(function(d) {
  console.log(d);
    recordClick();
});

$('#red input[type="submit"]').click(function(e) {
    console.log(e);
    recordClick();
    e.preventDefault(); //prevents js from breaking by disabling form defaults.  this has an advantage as the button is tied to enter button.
});


function recordClick() {
    clicks += 1;
    $('#click-count').html(clicks);
}
