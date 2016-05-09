// Flick between players

var icon = ['X', 'O'];

var playerOne = icon[0];
var playerTwo = icon[1];
var player = playerOne;


// When you click the square, add the text.

$('.square').click(function(){
    if (player === playerOne) {
        $(this).append('<h3>' + playerOne + '</h3>');
        player = playerTwo;
    } else if (player === playerTwo) {
        $(this).append('<h3>' + playerTwo + '</h3>');
        player = playerOne;
    };

});
