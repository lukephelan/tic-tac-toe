var continueButton = $('#continueButton');
var startButton = $('#startGame');
var resetButton = $('#reset');
var boardArea = $('.board');
var scoreArea = $('.scores');
var menuArea = $('.menu');
var allRows = $('.row');
var declareWinner = $('#declareWinner');
var numberOfPlayers = $('#players');
var restrictRounds = $('#roundLimitSelection');
var numberOfRounds = $('#numberOfRounds')
var playerOneName = $('#playerOneName');
var playerTwoName = $('#playerTwoName');
var playerOneScore = $('#firstScore');
var playerTwoScore = $('#secondScore');

var oneWins = 0;
var twoWins = 0;
var oneWinsText = $('#firstScore');
var twoWinsText = $('#secondScore');

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


numberOfPlayers.on("change", function(){
    var x = numberOfPlayers.prop('selectedIndex');
    console.log(x);
    if (x === 0) {
        playerOneName.css('display', 'block');
        playerTwoName.css('display', 'none');
        console.log("One Player");
    } else if (x === 1) {
        console.log("Two Players");
        playerOneName.css('display', 'block');
        playerTwoName.css('display', 'block');
    };
});

restrictRounds.on("change", function(){
    var y = restrictRounds.prop('selectedIndex');
    if (y === 0) {
        numberOfRounds.css('display', 'none');
    } else if (y === 1) {
        numberOfRounds.css('display', 'block');
    };
});

startButton.on('click', function(event) {
    menuArea.css('display', 'none');
    boardArea.css('display', 'block');
    scoreArea.css('display', 'inline-block');
    allRows.css('display', 'flex');
    declareWinner.text("");
    declareWinner.css("display", "inline-block");
    // Set player ones name to the input value
    playerOneNameText = $('#playerOneName input').val();
    var x = numberOfPlayers.prop('selectedIndex');
    // Set player two's name to the input value, or set as "Computer"
    // if only single player game
    if (x === 0) {
        playerTwoNameText = "Computer";
    } else if (x === 1) {
        playerTwoNameText = $('#playerTwoName input').val();
    };
    oneWinsText.text(playerOneNameText + ": " + oneWins);
    twoWinsText.text(playerTwoNameText + ": " + twoWins);
    if (x === 0) {
        onePlayerEasy();
    } else if (x === 1) {
        twoPlayer();
    };
});


function onePlayerEasy(){
    $('.square').click(function(){
        if (player === playerOne) {
            var square = $(this).map(function(){ return this.id }).get().join(', ');
            console.log(square);
            if (square === "SQ1") {
                if (SQ1 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ1 = 1;
                    player = playerTwo;
                    computerTurnEasy();
                };
            } else if (square === "SQ2") {
                if (SQ2 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ2 = 1;
                    player = playerTwo;
                    computerTurnEasy();
                };
            } else if (square === "SQ3") {
                if (SQ3 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ3 = 1;
                    player = playerTwo;
                    computerTurnEasy();
                };
            } else if (square === "SQ4") {
                if (SQ4 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ4 = 1;
                    player = playerTwo;
                    computerTurnEasy();
                };
            } else if (square === "SQ5") {
                if (SQ5 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ5 = 1;
                    player = playerTwo;
                    computerTurnEasy();
                };
            } else if (square === "SQ6") {
                if (SQ6 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ6 = 1;
                    player = playerTwo;
                    computerTurnEasy();
                };
            } else if (square === "SQ7") {
                if (SQ7 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ7 = 1;
                    player = playerTwo;
                    computerTurnEasy();
                };
            } else if (square === "SQ8") {
                if (SQ8 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ8 = 1;
                    player = playerTwo;
                    computerTurnEasy();
                };
            } else if (square === "SQ9") {
                if (SQ9 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ9 = 1;
                    player = playerTwo;
                    computerTurnEasy();
                };
            };

            checkWinner();

        } else if (player === playerTwo) {
            computerTurnEasy();
        };
    });
};

function computerTurnEasy(){
    var randomChoice = Math.floor(Math.random() * ((9-1)+1) + 1);
    var square = "SQ" + randomChoice;
    var squareClass = "." + square;
    console.log("Random is: " + square);
    if (square === "SQ1") {
        if (SQ1 === 0) {
            $(squareClass).append('<h3>' + playerTwo + '</h3>');
            SQ1 = -1;
            player = playerOne;
        };
    } else if (square === "SQ2") {
        if (SQ2 === 0) {
            $(squareClass).append('<h3>' + playerTwo + '</h3>');
            SQ2 = -1;
            player = playerOne;
        };
    } else if (square === "SQ3") {
        if (SQ3 === 0) {
            $(squareClass).append('<h3>' + playerTwo + '</h3>');
            SQ3 = -1;
            player = playerOne;
        };
    } else if (square === "SQ4") {
        if (SQ4 === 0) {
            $(squareClass).append('<h3>' + playerTwo + '</h3>');
            SQ4 = -1;
            player = playerOne;
        };
    } else if (square === "SQ5") {
        if (SQ5 === 0) {
            $(squareClass).append('<h3>' + playerTwo + '</h3>');
            SQ5 = -1;
            player = playerOne;
        };
    } else if (square === "SQ6") {
        if (SQ6 === 0) {
            $(squareClass).append('<h3>' + playerTwo + '</h3>');
            SQ6 = -1;
            player = playerOne;
        };
    } else if (square === "SQ7") {
        if (SQ7 === 0) {
            $(squareClass).append('<h3>' + playerTwo + '</h3>');
            SQ7 = -1;
            player = playerOne;
        };
    } else if (square === "SQ8") {
        if (SQ8 === 0) {
            $(squareClass).append('<h3>' + playerTwo + '</h3>');
            SQ8 = -1;
            player = playerOne;
        };
    } else if (square === "SQ9") {
        if (SQ9 === 0) {
            $(squareClass).append('<h3>' + playerTwo + '</h3>');
            SQ9 = -1;
            player = playerOne;
        };
    };
    checkWinner();
    onePlayerEasy();
}

function onePlayerHard(){
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
};

function twoPlayer(){
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
};


// Check if player has three in-line
function checkWinner() {
    if (SQ1 + SQ2 + SQ3 === 3) {
        console.log("Player One wins!");
        declareWinner.text(playerOneNameText + " Wins!");
        oneWins += 1;
        oneWinsText.text(playerOneNameText + ": " + oneWins);
        allRows.css('display', 'none');
        continueButton.css('display', 'inline-block');
        resetButton.css('display', 'inline-block');
    } else if (SQ1 + SQ2 + SQ3 === -3) {
        console.log("Player Two wins!");
        declareWinner.text(playerTwoNameText + " Wins!");
        twoWins += 1;
        twoWinsText.text(playerTwoNameText + ": " + twoWins);
        allRows.css('display', 'none');
        continueButton.css('display', 'inline-block');
        resetButton.css('display', 'inline-block');
    } else if (SQ4 + SQ5 + SQ6 ===  3) {
        console.log("Player One wins!");
        declareWinner.text(playerOneNameText + " Wins!");
        oneWins += 1;
        oneWinsText.text(playerOneNameText + ": " + oneWins);
        allRows.css('display', 'none');
        continueButton.css('display', 'inline-block');
        resetButton.css('display', 'inline-block');
    } else if (SQ4 + SQ5 + SQ6 === -3) {
        console.log("Player Two wins!");
        declareWinner.text(playerTwoNameText + " Wins!");
        twoWins += 1;
        twoWinsText.text(playerTwoNameText + ": " + twoWins);
        allRows.css('display', 'none');
        continueButton.css('display', 'inline-block');
        resetButton.css('display', 'inline-block');
    } else if (SQ7 + SQ8 + SQ9 ===  3) {
        console.log("Player One wins!");
        declareWinner.text(playerOneNameText + " Wins!");
        oneWins += 1;
        oneWinsText.text(playerOneNameText + ": " + oneWins);
        allRows.css('display', 'none');
        continueButton.css('display', 'inline-block');
        resetButton.css('display', 'inline-block');
    } else if (SQ7 + SQ8 + SQ9 === -3) {
        console.log("Player Two wins!");
        declareWinner.text(playerTwoNameText + " Wins!");
        twoWins += 1;
        twoWinsText.text(playerTwoNameText + ": " + twoWins);
        allRows.css('display', 'none');
        continueButton.css('display', 'inline-block');
        resetButton.css('display', 'inline-block');
    } else if (SQ1 + SQ4 + SQ7 ===  3) {
        console.log("Player One wins!");
        declareWinner.text(playerOneNameText + " Wins!");
        oneWins += 1;
        oneWinsText.text(playerOneNameText + ": " + oneWins);
        allRows.css('display', 'none');
        continueButton.css('display', 'inline-block');
        resetButton.css('display', 'inline-block');
    } else if (SQ1 + SQ4 + SQ7 === -3) {
        console.log("Player Two wins!");
        declareWinner.text(playerTwoNameText + " Wins!");
        twoWins += 1;
        twoWinsText.text(playerTwoNameText + ": " + twoWins);
        allRows.css('display', 'none');
        continueButton.css('display', 'inline-block');
        resetButton.css('display', 'inline-block');
    } else if (SQ2 + SQ5 + SQ8 ===  3) {
        console.log("Player One wins!");
        declareWinner.text(playerOneNameText + " Wins!");
        oneWins += 1;
        oneWinsText.text(playerOneNameText + ": " + oneWins);
        allRows.css('display', 'none');
        continueButton.css('display', 'inline-block');
        resetButton.css('display', 'inline-block');
    } else if (SQ2 + SQ5 + SQ8 === -3) {
        console.log("Player Two wins!");
        declareWinner.text(playerTwoNameText + " Wins!");
        twoWins += 1;
        twoWinsText.text(playerTwoNameText + ": " + twoWins);
        allRows.css('display', 'none');
        continueButton.css('display', 'inline-block');
        resetButton.css('display', 'inline-block');
    } else if (SQ3 + SQ6 + SQ9 ===  3) {
        console.log("Player One wins!");
        declareWinner.text(playerOneNameText + " Wins!");
        oneWins += 1;
        oneWinsText.text(playerOneNameText + ": " + oneWins);
        allRows.css('display', 'none');
        continueButton.css('display', 'inline-block');
        resetButton.css('display', 'inline-block');
    } else if (SQ3 + SQ6 + SQ9 === -3) {
        console.log("Player Two wins!");
        declareWinner.text(playerTwoNameText + " Wins!");
        twoWins += 1;
        twoWinsText.text(playerTwoNameText + ": " + twoWins);
        allRows.css('display', 'none');
        continueButton.css('display', 'inline-block');
        resetButton.css('display', 'inline-block');
    } else if (SQ1 + SQ5 + SQ9 === 3) {
        console.log("Player One wins!");
        declareWinner.text(playerOneNameText + " Wins!");
        oneWins += 1;
        oneWinsText.text(playerOneNameText + ": " + oneWins);
        allRows.css('display', 'none');
        continueButton.css('display', 'inline-block');
        resetButton.css('display', 'inline-block');
    } else if (SQ1 + SQ5 + SQ9 === -3) {
        console.log("Player Two wins!");
        declareWinner.text(playerTwoNameText + " Wins!");
        twoWins += 1;
        twoWinsText.text(playerTwoNameText + ": " + twoWins);
        allRows.css('display', 'none');
        continueButton.css('display', 'inline-block');
        resetButton.css('display', 'inline-block');
    } else if (SQ3 + SQ5 + SQ7 === 3) {
        console.log("Player One wins!");
        declareWinner.text(playerOneNameText + " Wins!");
        oneWins += 1;
        oneWinsText.text(playerOneNameText + ": " + oneWins);
        allRows.css('display', 'none');
        continueButton.css('display', 'inline-block');
        resetButton.css('display', 'inline-block');
    } else if (SQ3 + SQ5 + SQ7 === -3) {
        console.log("Player Two wins!");
        declareWinner.text(playerTwoNameText + " Wins!");
        twoWins += 1;
        twoWinsText.text(playerTwoNameText + ": " + twoWins);
        allRows.css('display', 'none');
        continueButton.css('display', 'inline-block');
        resetButton.css('display', 'inline-block');
    } else if (SQ1 != 0 && SQ2 != 0 && SQ3 != 0 && SQ4 != 0 && SQ5 != 0 && SQ6 != 0 && SQ7 != 0 && SQ8 != 0 && SQ9 != 0) {
        console.log("Game is a draw");
        declareWinner.text("Draw!");
        allRows.css('display', 'none');
        continueButton.css('display', 'inline-block');
        resetButton.css('display', 'inline-block');
    };
};

continueButton.on('click', function(event){
    $('h3').remove();
    player = playerOne;
    SQ1 = 0;
    SQ2 = 0;
    SQ3 = 0;
    SQ4 = 0;
    SQ5 = 0;
    SQ6 = 0;
    SQ7 = 0;
    SQ8 = 0;
    SQ9 = 0;
    allRows.css('display', 'flex');
    declareWinner.text("");
    declareWinner.css("display", "inline-block");
    continueButton.css('display', 'none');
    resetButton.css('display', 'none');
});

resetButton.on('click', function(event){
    $('h3').remove();
    player = playerOne;
    SQ1 = 0;
    SQ2 = 0;
    SQ3 = 0;
    SQ4 = 0;
    SQ5 = 0;
    SQ6 = 0;
    SQ7 = 0;
    SQ8 = 0;
    SQ9 = 0;
    oneWins = 0;
    twoWins = 0;
    continueButton.css('display', 'none')
    resetButton.css('display', 'none');
    boardArea.css('display', 'none');
    declareWinner.css('display', 'none');
    scoreArea.css('display', 'none');
    menuArea.css('display', 'block');
});
