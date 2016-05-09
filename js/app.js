// Flick between players

var icon = ['X', 'O'];

var playerOne = icon[0];
var playerTwo = icon[1];
var player = playerOne;

var SQ1 = 0;
var SQ2 = 0;
var SQ3 = 0;
var SQ4 = 0;
var SQ5 = 0;
var SQ6 = 0;
var SQ7 = 0;
var SQ8 = 0;
var SQ9 = 0;




// When you click the square, add the text.

$('.square').click(function(){
    if (player === playerOne) {
        $(this).append('<h3>' + playerOne + '</h3>');

        var square = $(this).map(function(){ return this.id }).get().join(', ');
        console.log(square);
        if (square === "SQ1") {
            SQ1 = 1;
        } else if (square === "SQ2") {
            SQ2 = 1;
        } else if (square === "SQ3") {
            SQ3 = 1;
        } else if (square === "SQ4") {
            SQ4 = 1;
        } else if (square === "SQ5") {
            SQ5 = 1;
        } else if (square === "SQ6") {
            SQ6 = 1;
        } else if (square === "SQ7") {
            SQ7 = 1;
        } else if (square === "SQ8") {
            SQ8 = 1;
        } else if (square === "SQ9") {
            SQ9 = 1;
        };

        checkWinner();
        player = playerTwo;
    } else if (player === playerTwo) {
        $(this).append('<h3>' + playerTwo + '</h3>');

        var square = $(this).map(function(){ return this.id }).get().join(', ');
        console.log(square);
        if (square === "SQ1") {
            SQ1 = -1;
        } else if (square === "SQ2") {
            SQ2 = -1;
        } else if (square === "SQ3") {
            SQ3 = -1;
        } else if (square === "SQ4") {
            SQ4 = -1;
        } else if (square === "SQ5") {
            SQ5 = -1;
        } else if (square === "SQ6") {
            SQ6 = -1;
        } else if (square === "SQ7") {
            SQ7 = -1;
        } else if (square === "SQ8") {
            SQ8 = -1;
        } else if (square === "SQ9") {
            SQ9 = -1;
        };

        checkWinner();
        player = playerOne;
    };
});

// Check if player has three in-line
function checkWinner() {
    if (SQ1 + SQ2 + SQ3 === 3) {
        console.log("Player One wins!");
    } else if (SQ1 + SQ2 + SQ3 === -3) {
        console.log("Player Two wins!");
    } else if (SQ4 + SQ5 + SQ6 ===  3) {
        console.log("Player One wins!");
    } else if (SQ4 + SQ5 + SQ6 === -3) {
        console.log("Player Two wins!");
    } else if (SQ7 + SQ8 + SQ9 ===  3) {
        console.log("Player One wins!");
    } else if (SQ7 + SQ8 + SQ9 === -3) {
        console.log("Player Two wins!");
    } else if (SQ1 + SQ4 + SQ7 ===  3) {
        console.log("Player One wins!");
    } else if (SQ1 + SQ4 + SQ7 === -3) {
        console.log("Player Two wins!");
    } else if (SQ2 + SQ5 + SQ8 ===  3) {
        console.log("Player One wins!");
    } else if (SQ2 + SQ5 + SQ8 === -3) {
        console.log("Player Two wins!");
    } else if (SQ3 + SQ6 + SQ9 ===  3) {
        console.log("Player One wins!");
    } else if (SQ3 + SQ6 + SQ9 === -3) {
        console.log("Player Two wins!");
    } else if (SQ1 + SQ5 + SQ9 === 3) {
        console.log("Player One wins!");
    } else if (SQ1 + SQ5 + SQ9 === -3) {
        console.log("Player One wins!");
    } else if (SQ3 + SQ5 + SQ7 === 3) {
        console.log("Player One wins!");
    } else if (SQ3 + SQ5 + SQ7 === -3) {
        console.log("Player One wins!");
    };
};
