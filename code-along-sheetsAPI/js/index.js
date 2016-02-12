// Using Sheetsu.com to great a very simple API on top of a Google Spreadsheet
// Keep your spreadsheets safe and make a new Gmail account for sheetsu
var url = 'https://sheetsu.com/apis/eba1a014';
getData();

// POST form data to Google Spreadsheet
$('form').submit(function(e) {
    e.preventDefault();
    var created_at = new Date();

    $.ajax(url, {
        type: 'POST',
        data: {
            name: $('#form-name').val(),
            email: $('#form-email').val(),
            id: created_at.getTime(),
            created_at: created_at
        },
        success: function(resp) {
            console.log(resp);
            getData(); 
        }
    });
});

// PART 2
var people = $('#people');

// GET data from google spreadsheet and draw onto page

function getData(){
$.ajax(url, {
    method: 'GET', // default
    success: function(data) {
        console.log(data);

        people.html('');
        var rows = data.result;

        rows.forEach(function(person, index, array) {
            var html = '<div class="person"><h2>' + person.name + '</h2><p>' + person.age + '</p></div>';
            people.append(html);
        });
    }
});
}

// More advanced options if Sheetsu isn't enough:
//
// 1. fieldbook.com (medium difficult, not Google but acts more like a true database with spreadsheet functionality. Ability to delete and update rows)
// 2. stamplay.com (most difficult, powerful, allows you to build a simple server with database, online storage, automated email, etc.)
