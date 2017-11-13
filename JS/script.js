//In order to make the boxes pop up, you had to specify what box you wanted to open using #//

$("#name").on('input', function(){
  $("#email-item").show();
});

$("#email-item").on('input', function(){
  $("#unique-item").show();
});


// onClick = handleSubmit
//
// function handleSubmit() {
// name = get elements value
// email = get elements value
// unique = get elements value
//
// if ( everything has a value) {
//  alert("thanks! ... Form is not ready")
// } else {
//  alert( "Please fill out all field")
// }
// }
