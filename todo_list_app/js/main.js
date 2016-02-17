// Pseudo Code
// Add
// Complete a To Do
// Remove
// Clear All
// Clear Completed
// re-calculate todo-count

$('form').submit(addTodo);

function  addTodo(e) {   //added e to pull the event object so we can manipulate
  e.preventDefault(); //calling the event object method of preventDfeault()

  console.log('adding todo');

  var input = $('form input');  // get the input
  var itemVal = $('form input').val(); //save the value in a variable
  input.val(''); //clearing the input for the next item to be added

  console.log(itemVal);

  var htmlString = '<li class="todo"><span class="todo-name">'+itemVal+'</span><span class="remove">Remove</span></li>' // add users input into html <li> string

  $('#todos ul').append(htmlString);  //appends string to html
  addRemoveBinding(); // add this in the todo function so the page knows it exist and bounded
  addCompleteBinding();
}

addCompleteBinding();
addRemoveBinding();


function addRemoveBinding() {
$('.remove').click(removeTodo);
}

function addCompleteBinding(){
  $('.todo').click(markCompleted);
}
function removeTodo() {
  console.log(this);
  $(this).parent().remove(); //removes the LI since it's the parent
}

function markCompleted(){
  console.log(this);
  $(this).addClass('complete');
}
