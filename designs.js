// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(){
  makeGrid();
}); //create listener for form submission

function makeGrid() {
// Your code goes here!
  event.preventDefault(); //prevent auto browser refresh
  $('#pixel_canvas tr').remove();//clear table on resubmission
  let height = $("#input_height").val();//declare row variable
  let width = $("#input_width").val();//delcare column variable

  for(let i = 0; i < height; i++){
    $('#pixel_canvas').find('tbody').append('<tr></tr>');
  }//end row for loop

  for(let i = 0; i < width; i++){
    $('#pixel_canvas').find('tr').append('<td></td>');
  }//column loop

} //end makeGrid
