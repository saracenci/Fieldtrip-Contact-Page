//In order to make the boxes pop up, you had to specify what box you wanted to open using #//

$("#name").on('input', function(){
  $("#email-item").show();
});

$("#email-item").on('input', function(){
  $("#unique-item").show();
});
