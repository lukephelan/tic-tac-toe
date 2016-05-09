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
        var square = $(this).map(function(){ return this.id }).get().join(', ');
        console.log(square);
        if (square === "SQ1") {
            if (SQ1 === 0) {
                $(this).append('<h3>' + playerOne + '</h3>');
                SQ1 = 1;
                player = playerTwo;
            };
        } else if (square === "SQ2") {
            if (SQ2 === 0) {
                $(this).append('<h3>' + playerOne + '</h3>');
                SQ2 = 1;
                player = playerTwo;
            };
        } else if (square === "SQ3") {
            if (SQ3 === 0) {
                $(this).append('<h3>' + playerOne + '</h3>');
                SQ3 = 1;
                player = playerTwo;
            };
        } else if (square === "SQ4") {
            if (SQ4 === 0) {
                $(this).append('<h3>' + playerOne + '</h3>');
                SQ4 = 1;
                player = playerTwo;
            };
        } else if (square === "SQ5") {
            if (SQ5 === 0) {
                $(this).append('<h3>' + playerOne + '</h3>');
                SQ5 = 1;
                player = playerTwo;
            };
        } else if (square === "SQ6") {
            if (SQ6 === 0) {
                $(this).append('<h3>' + playerOne + '</h3>');
                SQ6 = 1;
                player = playerTwo;
            };
        } else if (square === "SQ7") {
            if (SQ7 === 0) {
                $(this).append('<h3>' + playerOne + '</h3>');
                SQ7 = 1;
                player = playerTwo;
            };
        } else if (square === "SQ8") {
            if (SQ8 === 0) {
                $(this).append('<h3>' + playerOne + '</h3>');
                SQ8 = 1;
                player = playerTwo;
            };
        } else if (square === "SQ9") {
            if (SQ9 === 0) {
                $(this).append('<h3>' + playerOne + '</h3>');
                SQ9 = 1;
                player = playerTwo;
            };
        };

        checkWinner();

    } else if (player === playerTwo) {
        var square = $(this).map(function(){ return this.id }).get().join(', ');


        console.log(square);
        if (square === "SQ1") {
            if (SQ1 === 0) {
                $(this).append('<h3>' + playerTwo + '</h3>');
                SQ1 = -1;
                player = playerOne;
            };
        } else if (square === "SQ2") {
            if (SQ2 === 0) {
                $(this).append('<h3>' + playerTwo + '</h3>');
                SQ2 = -1;
                player = playerOne;
            };
        } else if (square === "SQ3") {
            if (SQ3 === 0) {
                $(this).append('<h3>' + playerTwo + '</h3>');
                SQ3 = -1;
                player = playerOne;
            };
        } else if (square === "SQ4") {
            if (SQ4 === 0) {
                $(this).append('<h3>' + playerTwo + '</h3>');
                SQ4 = -1;
                player = playerOne;
            };
        } else if (square === "SQ5") {
            if (SQ5 === 0) {
                $(this).append('<h3>' + playerTwo + '</h3>');
                SQ5 = -1;
                player = playerOne;
            };
        } else if (square === "SQ6") {
            if (SQ6 === 0) {
                $(this).append('<h3>' + playerTwo + '</h3>');
                SQ6 = -1;
                player = playerOne;
            };
        } else if (square === "SQ7") {
            if (SQ7 === 0) {
                $(this).append('<h3>' + playerTwo + '</h3>');
                SQ7 = -1;
                player = playerOne;
            };
        } else if (square === "SQ8") {
            if (SQ8 === 0) {
                $(this).append('<h3>' + playerTwo + '</h3>');
                SQ8 = -1;
                player = playerOne;
            };
        } else if (square === "SQ9") {
            if (SQ9 === 0) {
                $(this).append('<h3>' + playerTwo + '</h3>');
                SQ9 = -1;
                player = playerOne;
            };
        };

        checkWinner();

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
    } else if (SQ1 != 0 && SQ2 != 0 && SQ3 != 0 && SQ4 != 0 && SQ5 != 0 && SQ6 != 0 && SQ7 != 0 && SQ8 != 0 && SQ9 != 0) {
        console.log("Game is a draw");
    };
};
