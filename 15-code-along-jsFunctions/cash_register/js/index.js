var total = 0;
var newEntry;
var newFloat;

$('#add').click( addToReceipt );

function addToReceipt() {
    newEntry = $('#newEntry').val();
    newFloat = parseFloat(newEntry);

    $('tbody').append('<tr><td></td><td>' + floatDecorator(newFloat) + '</td></tr>');

    total += newFloat;

    $('#total').html( floatDecorator(total) );
}



function floatDecorator(number) {
    return '$' + number.toFixed(2);
}