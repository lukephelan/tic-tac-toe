// Flick between players

var icon = ['X', 'O'];

var playerOne = icon[0];
var playerTwo = icon[1];

var iconText = ('.square');


// When you click the square, add the text.

$('.square').click(function(){
    $(this).append('<h3>' + playerOne + '</h3>');
    console.log("CLICKED");
});
