// Syntax on making a API request $.ajax(url, object);
// you must have a success and error function
// AJAX makes a request to another webpage and returns data as JSON
// JSON can then be injected in a properly formatted markup
// http://openweathermap.org/api

console.log('JS Loaded');

var url = 'http://api.openweathermap.org/data/2.5/weather?q=Santa+Monica&appid=44db6a862fba0b067b1930da0d769e98'

$('button').click(function(){
  var city=$('#city').val();
  var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=44db6a862fba0b067b1930da0d769e98';
  console.log('url is', url);

  $.ajax(url, {
    success: function(data){
      console.log('done fetching story');
      console.log(data);  //pulls object data out for me to extract data into markup

      var kelvin = data.main.temp  //this pulls from nested data in "temp" field
      var f = (kelvin * 9/5)- 459.67;
      $('#location').html(city);
      $('#current-temp').html('The curent weather in ' + city + ' is ' + f + ' *f');
    },
    error: function(data){
      console.log('Something bad happened');
    }
  });

});


// go to URL, when URL is finished loading, call the success function
