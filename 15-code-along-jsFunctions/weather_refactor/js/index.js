$('#submit').click(handleSubmit);

function handleSubmit() {
    console.log('submitted!');

    var input = $('#celsius-input');
    var celsius = parseFloat(input.val());

    if (isNaN(celsius)) {

        alert('Please enter a valid temperature.');
        input.val('');

    } else { // is valid

        var farenheit = (celsius * 9/5) + 32;
        $('#farenheit').html(farenheit.toFixed(2) + '&deg;F');

        if (farenheit < 45) {
            makeCold();
        } else if (farenheit >= 45 && farenheit < 90) {
            makeMild();
        } else {
            makeHot();
        }

    }
}

function makeCold() {
    resetClasses();
    $('body').addClass('cold');
}

function makeMild() {
    resetClasses();
    $('body').addClass('mild');
}

function makeHot() {
    resetClasses();
    $('body').addClass('hot');
}

function resetClasses() {
    $('body').removeClass();
}
