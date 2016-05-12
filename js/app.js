var continueButton =$('#continueButton');
var startButton = $('#startGame');
var resetButton = $('#reset');
var boardArea = $('.board');
var scoreArea = $('.scores');
var menuArea = $('.menu');
var allRows = $('.row');
var declareWinner = $('#declareWinner');
var numberOfPlayers = $('#players');
var difficultyOption = $('.intelligence');
var difficulty = $('#intelligenceSelection');
var playerOneName = $('#playerOneName');
var playerTwoName = $('#playerTwoName');
var playerOneScore = $('#firstScore');
var playerTwoScore = $('#secondScore');
var roundDisplayCount = $('#roundCountDisplay');

// Set the first round to 1
var roundCount = 1;
var maxRounds;

// Start all wins at 0
var oneWins = 0;
var twoWins = 0;

// Assign the players their icons and set first player to playerOne
var icon = ['X', 'O'];
var playerOne = icon[0];
var playerTwo = icon[1];
var player = playerOne;

// Could have used this array instead of a set of variables
// var boardCondition = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// Set the initial condition of each square to 0
var SQ1 = 0;
var SQ2 = 0;
var SQ3 = 0;
var SQ4 = 0;
var SQ5 = 0;
var SQ6 = 0;
var SQ7 = 0;
var SQ8 = 0;
var SQ9 = 0;

//  When selecting the number of players in the menu,
//  hides or displays the second players name and the
//  AI's difficulty mode

numberOfPlayers.on("change", function(){
    var x = numberOfPlayers.prop('selectedIndex');
    console.log(x);
    if (x === 0) {
        playerOneName.css('display', 'block');
        playerTwoName.css('display', 'none');
        difficultyOption.css('display', 'block');
        console.log("One Player");
    } else if (x === 1) {
        console.log("Two Players");
        playerOneName.css('display', 'block');
        playerTwoName.css('display', 'block');
        difficultyOption.css('display', 'none');
    };
});

// Hide the menu area when clicking the start button
// Display the elements of the game area
// Display input values for the players' names

startButton.on('click', function(event) {
    menuArea.css('display', 'none');
    roundDisplayCount.text("Round: " + roundCount);
    boardArea.css('display', 'block');
    scoreArea.css('display', 'inline-block');
    allRows.css('display', 'flex');
    declareWinner.text("");
    playerOneNameText = $('#playerOneName input').val();
    var x = numberOfPlayers.prop('selectedIndex');
    var y = difficulty.prop('selectedIndex');
    // Set player two's name to the input value, or set as "Computer"
    // if only a single player game
    if (x === 0) {
        playerTwoNameText = "Computer";
    } else if (x === 1) {
        playerTwoNameText = $('#playerTwoName input').val();
    };
    playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    playerOneScore.text(playerOneNameText + ": " + oneWins);
    playerTwoScore.text(playerTwoNameText + ": " + twoWins);
    // Run the function relevant to the game-type selected in the menu
    if (x === 0 && y === 0) {
        onePlayerEasy();
    } else if (x === 0 && y === 1) {
        onePlayerHard();
    } else if (x === 1) {
        twoPlayer();
    };
});

// SINGLE-PLAYER EASY MODE

function onePlayerEasy(){
    $('.square').click(function(){
        if (player === playerTwo) {
            return;
        } else {
            var square = $(this)
                .map(function(){ return this.id })
                .get()
                .join(', ');
            console.log(square);

                // In future, this is a for loop that could be used instead of
                // all the if statements
                // for (i = 0; i < boardCondition.length; i++) {
                //     if (square === "SQ" + (i+1)) {
                //         if (boardCondition[i] === 0) {
                //             $(this).append('<h3>' + playerOne + '</h3>');
                //             boardCondition[i] = 1;
                //             console.log(boardCondition);
                //             // console.log(SQ1);
                //             // console.log("hey");
                //             player = playerTwo;
                //             playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                //             playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                //         };
                //     }
                // }

            // For each square, check if it is empty, then append text that
            // matches the player icon, and add 1 to the relevant variable
            if (square === "SQ1") {
                if (SQ1 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ1 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ2") {
                if (SQ2 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ2 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ3") {
                if (SQ3 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ3 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ4") {
                if (SQ4 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ4 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ5") {
                if (SQ5 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ5 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ6") {
                if (SQ6 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ6 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ7") {
                if (SQ7 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ7 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ8") {
                if (SQ8 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ8 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ9") {
                if (SQ9 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ9 = 1;
                    switchToPlayerTwo();
                };
            };
            checkWinnerEasy();
        };
    });
};

function computerTurnEasy(){
    console.log("Ready to go");

    // If the condition is satisfied, append text that matches the
    // Computer's icon to the square, and subtract 1 from the relevant
    // variable

    // Check if Computer has two in a line and can win
    // Check top row
    if (SQ1 === 0 && (SQ2 === -1 && SQ3 === -1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1
        switchToPlayerOne();
    } else if (SQ2 === 0 && (SQ1 === -1 && SQ3 === -1)) {
        $('#SQ2').append('<h3>' + playerTwo + '</h3>');
        SQ2 = -1
        switchToPlayerOne();
    } else if (SQ3 === 0 && (SQ1 === -1 && SQ2 === -1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1
        switchToPlayerOne();
    // Check middle row
    } else if (SQ4 === 0 && (SQ5 === -1 && SQ6 === -1)) {
        $('#SQ4').append('<h3>' + playerTwo + '</h3>');
        SQ4 = -1
        switchToPlayerOne();
    } else if (SQ5 === 0 && (SQ4 === -1 && SQ6 === -1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1
        switchToPlayerOne();
    } else if (SQ6 === 0 && (SQ4 === -1 && SQ5 === -1)) {
        $('#SQ6').append('<h3>' + playerTwo + '</h3>');
        SQ6 = -1
        switchToPlayerOne();
    // Check bottom row
    } else if (SQ7 === 0 && (SQ8 === -1 && SQ9 === -1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1
        switchToPlayerOne();
    } else if (SQ8 === 0 && (SQ7 === -1 && SQ9 === -1)) {
        $('#SQ8').append('<h3>' + playerTwo + '</h3>');
        SQ8 = -1
        switchToPlayerOne();
    } else if (SQ9 === 0 && (SQ7 === -1 && SQ8 === -1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1
        switchToPlayerOne();
    // Check left column
    } else if (SQ1 === 0 && (SQ4 === -1 && SQ7 === -1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1
        switchToPlayerOne();
    } else if (SQ4 === 0 && (SQ1 === -1 && SQ7 === -1)) {
        $('#SQ4').append('<h3>' + playerTwo + '</h3>');
        SQ4 = -1
        switchToPlayerOne();
    } else if (SQ7 === 0 && (SQ1 === -1 && SQ4 === -1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1
        switchToPlayerOne();
    // Check middle column
    } else if (SQ2 === 0 && (SQ5 === -1 && SQ8 === -1)) {
        $('#SQ2').append('<h3>' + playerTwo + '</h3>');
        SQ2 = -1
        switchToPlayerOne();
    } else if (SQ5 === 0 && (SQ2 === -1 && SQ8 === -1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1
        switchToPlayerOne();
    } else if (SQ8 === 0 && (SQ2 === -1 && SQ5 === -1)) {
        $('#SQ8').append('<h3>' + playerTwo + '</h3>');
        SQ8 = -1
        switchToPlayerOne();
    // Check right column
    } else if (SQ3 === 0 && (SQ6 === -1 && SQ9 === -1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1
        switchToPlayerOne();
    } else if (SQ6 === 0 && (SQ3 === -1 && SQ9 === -1)) {
        $('#SQ6').append('<h3>' + playerTwo + '</h3>');
        SQ6 = -1
        switchToPlayerOne();
    } else if (SQ9 === 0 && (SQ3 === -1 && SQ6 === -1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1
        switchToPlayerOne();
    // Check first diagonal
    } else if (SQ1 === 0 && (SQ5 === -1 && SQ9 === -1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1
        switchToPlayerOne();
    } else if (SQ5 === 0 && (SQ1 === -1 && SQ9 === -1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1
        switchToPlayerOne();
    } else if (SQ9 === 0 && (SQ1 === -1 && SQ5 === -1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1
        switchToPlayerOne();
    // Check second diagonal
    } else if (SQ3 === 0 && (SQ5 === -1 && SQ7 === -1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1
        switchToPlayerOne();
    } else if (SQ5 === 0 && (SQ3 === -1 && SQ7 === -1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1
        switchToPlayerOne();
    } else if (SQ7 === 0 && (SQ3 === -1 && SQ5 === -1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1
        switchToPlayerOne();
    // Check if player has two in a line for computer to block
    // Check top row
    } else if (SQ1 === 0 && (SQ2 === 1 && SQ3 === 1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        switchToPlayerOne();
    } else if (SQ2 === 0 && (SQ1 === 1 && SQ3 === 1)) {
        $('#SQ2').append('<h3>' + playerTwo + '</h3>');
        SQ2 = -1;
        switchToPlayerOne();
    } else if (SQ3 === 0 && (SQ1 === 1 && SQ2 === 1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        switchToPlayerOne();
    // Check middle row
    } else if (SQ4 === 0 && (SQ5 === 1 && SQ6 === 1)) {
        $('#SQ4').append('<h3>' + playerTwo + '</h3>');
        SQ4 = -1;
        switchToPlayerOne();
    } else if (SQ5 === 0 && (SQ4 === 1 && SQ6 === 1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        switchToPlayerOne();
    } else if (SQ6 === 0 && (SQ4 === 1 && SQ5 === 1)) {
        $('#SQ6').append('<h3>' + playerTwo + '</h3>');
        SQ6 = -1;
        switchToPlayerOne();
    // Check bottom row
    } else if (SQ7 === 0 && (SQ8 === 1 && SQ9 === 1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        switchToPlayerOne();
    } else if (SQ8 === 0 && (SQ7 === 1 && SQ9 === 1)) {
        $('#SQ8').append('<h3>' + playerTwo + '</h3>');
        SQ8 = -1;
        switchToPlayerOne();
    } else if (SQ9 === 0 && (SQ7 === 1 && SQ8 === 1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        switchToPlayerOne();
    // Check left column
    } else if (SQ1 === 0 && (SQ4 === 1 && SQ7 === 1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        switchToPlayerOne();
    } else if (SQ4 === 0 && (SQ1 === 1 && SQ7 === 1)) {
        $('#SQ4').append('<h3>' + playerTwo + '</h3>');
        SQ4 = -1;
        switchToPlayerOne();
    } else if (SQ7 === 0 && (SQ1 === 1 && SQ4 === 1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        switchToPlayerOne();
    // Check middle column
    } else if (SQ2 === 0 && (SQ5 === 1 && SQ8 === 1)) {
        $('#SQ2').append('<h3>' + playerTwo + '</h3>');
        SQ2 = -1;
        switchToPlayerOne();
    } else if (SQ5 === 0 && (SQ2 === 1 && SQ8 === 1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        switchToPlayerOne();
    } else if (SQ8 === 0 && (SQ2 === 1 && SQ5 === 1)) {
        $('#SQ8').append('<h3>' + playerTwo + '</h3>');
        SQ8 = -1;
        switchToPlayerOne();
    // Check right column
    } else if (SQ3 === 0 && (SQ6 === 1 && SQ9 === 1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        switchToPlayerOne();
    } else if (SQ6 === 0 && (SQ3 === 1 && SQ9 === 1)) {
        $('#SQ6').append('<h3>' + playerTwo + '</h3>');
        SQ6 = -1;
        switchToPlayerOne();
    } else if (SQ9 === 0 && (SQ3 === 1 && SQ6 === 1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        switchToPlayerOne();
    // Check first diagonal
    } else if (SQ1 === 0 && (SQ5 === 1 && SQ9 === 1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        switchToPlayerOne();
    } else if (SQ5 === 0 && (SQ1 === 1 && SQ9 === 1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        switchToPlayerOne();
    } else if (SQ9 === 0 && (SQ1 === 1 && SQ5 === 1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        switchToPlayerOne();
    // Check second diagonal
    } else if (SQ3 === 0 && (SQ5 === 1 && SQ7 === 1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        switchToPlayerOne();
    } else if (SQ5 === 0 && (SQ3 === 1 && SQ7 === 1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        switchToPlayerOne();
    } else if (SQ7 === 0 && (SQ3 === 1 && SQ5 === 1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        switchToPlayerOne();
    } else {
        // If none of those conditions are relevant, pick a random square
        // as long as it is empty
        var randomChoice = Math.floor(Math.random() * ((9-1)+1) + 1);
        var square = "SQ" + randomChoice;
        var squareID = "#" + square;
        console.log("Random is: " + square);
        if (square === "SQ1") {
            if (SQ1 === 0) {
                $(squareID).append('<h3>' + playerTwo + '</h3>');
                SQ1 = -1;
                switchToPlayerOne();
            } else {
                computerTurnEasy();
            };
        } else if (square === "SQ2") {
            if (SQ2 === 0) {
                $(squareID).append('<h3>' + playerTwo + '</h3>');
                SQ2 = -1;
                switchToPlayerOne();
            } else {
                computerTurnEasy();
            };
        } else if (square === "SQ3") {
            if (SQ3 === 0) {
                $(squareID).append('<h3>' + playerTwo + '</h3>');
                SQ3 = -1;
                switchToPlayerOne();
            } else {
                computerTurnEasy();
            };
        } else if (square === "SQ4") {
            if (SQ4 === 0) {
                $(squareID).append('<h3>' + playerTwo + '</h3>');
                SQ4 = -1;
                switchToPlayerOne();
            } else {
                computerTurnEasy();
            };
        } else if (square === "SQ5") {
            if (SQ5 === 0) {
                $(squareID).append('<h3>' + playerTwo + '</h3>');
                SQ5 = -1;
                switchToPlayerOne();
            } else {
                computerTurnEasy();
            };
        } else if (square === "SQ6") {
            if (SQ6 === 0) {
                $(squareID).append('<h3>' + playerTwo + '</h3>');
                SQ6 = -1;
                switchToPlayerOne();
            } else {
                computerTurnEasy();
            };
        } else if (square === "SQ7") {
            if (SQ7 === 0) {
                $(squareID).append('<h3>' + playerTwo + '</h3>');
                SQ7 = -1;
                switchToPlayerOne();
            } else {
                computerTurnEasy();
            };
        } else if (square === "SQ8") {
            if (SQ8 === 0) {
                $(squareID).append('<h3>' + playerTwo + '</h3>');
                SQ8 = -1;
                switchToPlayerOne();
            } else {
                computerTurnEasy();
            };
        } else if (square === "SQ9") {
            if (SQ9 === 0) {
                $(squareID).append('<h3>' + playerTwo + '</h3>');
                SQ9 = -1;
                switchToPlayerOne();
            } else {
                computerTurnEasy();
            };
        };
    };
    checkWinnerEasy();
};

function checkWinnerEasy() {
    // Check the eight possible winning conditions to see
    // if either player has won
    if (SQ1 + SQ2 + SQ3 === 3 || SQ4 + SQ5 + SQ6 === 3
        || SQ7 + SQ8 + SQ9 === 3 || SQ1 + SQ4 + SQ7 === 3
        || SQ2 + SQ5 + SQ8 === 3 || SQ3 + SQ6 + SQ9 === 3
        || SQ1 + SQ5 + SQ9 === 3 || SQ3 + SQ5 + SQ7 === 3) {
            playerOneWins();
    } else if (SQ1 + SQ2 + SQ3 === -3 || SQ4 + SQ5 + SQ6 === -3
            || SQ7 + SQ8 + SQ9 === -3 || SQ1 + SQ4 + SQ7 === -3
            || SQ2 + SQ5 + SQ8 === -3 || SQ3 + SQ6 + SQ9 === -3
            || SQ1 + SQ5 + SQ9 === -3 || SQ3 + SQ5 + SQ7 === -3) {
                playerTwoWins();
    // If all the squares are full and none of the winning conditions are met,
    // the game is a draw
    } else if (SQ1 != 0 && SQ2 != 0 && SQ3 != 0 && SQ4 != 0 && SQ5 != 0
            && SQ6 != 0 && SQ7 != 0 && SQ8 != 0 && SQ9 != 0) {
        gameIsDraw();
    } else if (player === playerTwo){
    // Otherwise it's the computer's turn
        setTimeout(computerTurnEasy, 1000);
    };
};

// SINGLE-PLAYER HARD MODE

function onePlayerHard(){
    $('.square').click(function(){
        if (player === playerTwo) {
            return;
        } else {
            var square = $(this)
                .map(function(){ return this.id })
                .get()
                .join(', ');
            console.log(square);
            // For each square, check if it is empty, then append text that
            // matches the player icon, and add 1 to the relevant variable
            if (square === "SQ1") {
                if (SQ1 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ1 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ2") {
                if (SQ2 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ2 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ3") {
                if (SQ3 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ3 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ4") {
                if (SQ4 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ4 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ5") {
                if (SQ5 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ5 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ6") {
                if (SQ6 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ6 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ7") {
                if (SQ7 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ7 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ8") {
                if (SQ8 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ8 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ9") {
                if (SQ9 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ9 = 1;
                    switchToPlayerTwo();
                };
            };
            checkWinnerHard();
        };
    });
};

function computerTurnHard(){
    // Check if computer has two in a line and can win
    // Check top row
    console.log("Ready to go");
    if (SQ1 === 0 && (SQ2 === -1 && SQ3 === -1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        switchToPlayerOne();
    } else if (SQ2 === 0 && (SQ1 === -1 && SQ3 === -1)) {
        $('#SQ2').append('<h3>' + playerTwo + '</h3>');
        SQ2 = -1;
        switchToPlayerOne();
    } else if (SQ3 === 0 && (SQ1 === -1 && SQ2 === -1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        switchToPlayerOne();
    // Check middle row
    } else if (SQ4 === 0 && (SQ5 === -1 && SQ6 === -1)) {
        $('#SQ4').append('<h3>' + playerTwo + '</h3>');
        SQ4 = -1;
        switchToPlayerOne();
    } else if (SQ5 === 0 && (SQ4 === -1 && SQ6 === -1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        switchToPlayerOne();
    } else if (SQ6 === 0 && (SQ4 === -1 && SQ5 === -1)) {
        $('#SQ6').append('<h3>' + playerTwo + '</h3>');
        SQ6 = -1;
        switchToPlayerOne();
    // Check bottom row
    } else if (SQ7 === 0 && (SQ8 === -1 && SQ9 === -1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        switchToPlayerOne();
    } else if (SQ8 === 0 && (SQ7 === -1 && SQ9 === -1)) {
        $('#SQ8').append('<h3>' + playerTwo + '</h3>');
        SQ8 = -1;
        switchToPlayerOne();
    } else if (SQ9 === 0 && (SQ7 === -1 && SQ8 === -1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        switchToPlayerOne();
    // Check left column
    } else if (SQ1 === 0 && (SQ4 === -1 && SQ7 === -1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        switchToPlayerOne();
    } else if (SQ4 === 0 && (SQ1 === -1 && SQ7 === -1)) {
        $('#SQ4').append('<h3>' + playerTwo + '</h3>');
        SQ4 = -1;
        switchToPlayerOne();
    } else if (SQ7 === 0 && (SQ1 === -1 && SQ4 === -1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        switchToPlayerOne();
    // Check middle column
    } else if (SQ2 === 0 && (SQ5 === -1 && SQ8 === -1)) {
        $('#SQ2').append('<h3>' + playerTwo + '</h3>');
        SQ2 = -1;
        switchToPlayerOne();
    } else if (SQ5 === 0 && (SQ2 === -1 && SQ8 === -1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        switchToPlayerOne();
    } else if (SQ8 === 0 && (SQ2 === -1 && SQ5 === -1)) {
        $('#SQ8').append('<h3>' + playerTwo + '</h3>');
        SQ8 = -1;
        switchToPlayerOne();
    // Check right column
    } else if (SQ3 === 0 && (SQ6 === -1 && SQ9 === -1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        switchToPlayerOne();
    } else if (SQ6 === 0 && (SQ3 === -1 && SQ9 === -1)) {
        $('#SQ6').append('<h3>' + playerTwo + '</h3>');
        SQ6 = -1;
        switchToPlayerOne();
    } else if (SQ9 === 0 && (SQ3 === -1 && SQ6 === -1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        switchToPlayerOne();
    // Check first diagonal
    } else if (SQ1 === 0 && (SQ5 === -1 && SQ9 === -1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        switchToPlayerOne();
    } else if (SQ5 === 0 && (SQ1 === -1 && SQ9 === -1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        switchToPlayerOne();
    } else if (SQ9 === 0 && (SQ1 === -1 && SQ5 === -1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        switchToPlayerOne();
    // Check second diagonal
    } else if (SQ3 === 0 && (SQ5 === -1 && SQ7 === -1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        switchToPlayerOne();
    } else if (SQ5 === 0 && (SQ3 === -1 && SQ7 === -1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        switchToPlayerOne();
    } else if (SQ7 === 0 && (SQ3 === -1 && SQ5 === -1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        switchToPlayerOne();
    // Check if player has two in a line for computer to block
    // Check top row
    } else if (SQ1 === 0 && (SQ2 === 1 && SQ3 === 1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        switchToPlayerOne();
    } else if (SQ2 === 0 && (SQ1 === 1 && SQ3 === 1)) {
        $('#SQ2').append('<h3>' + playerTwo + '</h3>');
        SQ2 = -1;
        switchToPlayerOne();
    } else if (SQ3 === 0 && (SQ1 === 1 && SQ2 === 1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        switchToPlayerOne();
    // Check middle row
    } else if (SQ4 === 0 && (SQ5 === 1 && SQ6 === 1)) {
        $('#SQ4').append('<h3>' + playerTwo + '</h3>');
        SQ4 = -1;
        switchToPlayerOne();
    } else if (SQ5 === 0 && (SQ4 === 1 && SQ6 === 1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        switchToPlayerOne();
    } else if (SQ6 === 0 && (SQ4 === 1 && SQ5 === 1)) {
        $('#SQ6').append('<h3>' + playerTwo + '</h3>');
        SQ6 = -1;
        switchToPlayerOne();
    // Check bottom row
    } else if (SQ7 === 0 && (SQ8 === 1 && SQ9 === 1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        switchToPlayerOne();
    } else if (SQ8 === 0 && (SQ7 === 1 && SQ9 === 1)) {
        $('#SQ8').append('<h3>' + playerTwo + '</h3>');
        SQ8 = -1;
        switchToPlayerOne();
    } else if (SQ9 === 0 && (SQ7 === 1 && SQ8 === 1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        switchToPlayerOne();
    // Check left column
    } else if (SQ1 === 0 && (SQ4 === 1 && SQ7 === 1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        switchToPlayerOne();
    } else if (SQ4 === 0 && (SQ1 === 1 && SQ7 === 1)) {
        $('#SQ4').append('<h3>' + playerTwo + '</h3>');
        SQ4 = -1;
        switchToPlayerOne();
    } else if (SQ7 === 0 && (SQ1 === 1 && SQ4 === 1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        switchToPlayerOne();
    // Check middle column
    } else if (SQ2 === 0 && (SQ5 === 1 && SQ8 === 1)) {
        $('#SQ2').append('<h3>' + playerTwo + '</h3>');
        SQ2 = -1;
        switchToPlayerOne();
    } else if (SQ5 === 0 && (SQ2 === 1 && SQ8 === 1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        switchToPlayerOne();
    } else if (SQ8 === 0 && (SQ2 === 1 && SQ5 === 1)) {
        $('#SQ8').append('<h3>' + playerTwo + '</h3>');
        SQ8 = -1;
        switchToPlayerOne();
    // Check right column
    } else if (SQ3 === 0 && (SQ6 === 1 && SQ9 === 1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        switchToPlayerOne();
    } else if (SQ6 === 0 && (SQ3 === 1 && SQ9 === 1)) {
        $('#SQ6').append('<h3>' + playerTwo + '</h3>');
        SQ6 = -1;
        switchToPlayerOne();
    } else if (SQ9 === 0 && (SQ3 === 1 && SQ6 === 1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        switchToPlayerOne();
    // Check first diagonal
    } else if (SQ1 === 0 && (SQ5 === 1 && SQ9 === 1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        switchToPlayerOne();
    } else if (SQ5 === 0 && (SQ1 === 1 && SQ9 === 1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        switchToPlayerOne();
    } else if (SQ9 === 0 && (SQ1 === 1 && SQ5 === 1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        switchToPlayerOne();
    // Check second diagonal
    } else if (SQ3 === 0 && (SQ5 === 1 && SQ7 === 1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        switchToPlayerOne();
    } else if (SQ5 === 0 && (SQ3 === 1 && SQ7 === 1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        switchToPlayerOne();
    } else if (SQ7 === 0 && (SQ3 === 1 && SQ5 === 1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        switchToPlayerOne();
    // Check if user has a corner square, if so, computer goes to middle square
    } else if (SQ1 === 1 && SQ5 === 0) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        switchToPlayerOne();
    } else if (SQ3 === 1 && SQ5 === 0) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        switchToPlayerOne();
    } else if (SQ7 === 1 && SQ5 === 0) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        switchToPlayerOne();
    } else if (SQ9 === 1 && SQ5 === 0) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        switchToPlayerOne();
    // If user has two corners and computer has centre piece,
    // computer chooses an edge
    } else if (SQ5 === -1 && (SQ1 === 1 & SQ9 === 1)) {
        if (SQ2 === 0) {
            $('#SQ2').append('<h3>' + playerTwo + '</h3>');
            SQ2 = -1;
            switchToPlayerOne();
        } else if (SQ4 === 0) {
            $('#SQ4').append('<h3>' + playerTwo + '</h3>');
            SQ4 = -1;
            switchToPlayerOne();
        } else if (SQ6 === 0) {
            $('#SQ6').append('<h3>' + playerTwo + '</h3>');
            SQ6 = -1;
            switchToPlayerOne();
        } else if (SQ8 === 0) {
            $('#SQ8').append('<h3>' + playerTwo + '</h3>');
            SQ8 = -1;
            switchToPlayerOne();
        };
    } else if (SQ5 === -1 && (SQ3 === 1 & SQ7 === 1)) {
        if (SQ2 === 0) {
            $('#SQ2').append('<h3>' + playerTwo + '</h3>');
            SQ2 = -1;
            switchToPlayerOne();
        } else if (SQ4 === 0) {
            $('#SQ4').append('<h3>' + playerTwo + '</h3>');
            SQ4 = -1;
            switchToPlayerOne();
        } else if (SQ6 === 0) {
            $('#SQ6').append('<h3>' + playerTwo + '</h3>');
            SQ6 = -1;
            switchToPlayerOne();
        } else if (SQ8 === 0) {
            $('#SQ8').append('<h3>' + playerTwo + '</h3>');
            SQ8 = -1;
            switchToPlayerOne();
        };
    // Check if user has a centre piece, if so, computer goes to an empty corner
    } else if (SQ5 === 1 && SQ1 === 0) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        switchToPlayerOne();
    } else if (SQ5 === 1 && SQ3 === 0) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        switchToPlayerOne();
    } else if (SQ5 === 1 && SQ7 === 0) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        switchToPlayerOne();
    } else if (SQ5 === 1 && SQ9 === 0) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        switchToPlayerOne();
    // Place in an empty square, working from inside to corners to edges
    } else if (SQ5 === 0) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        switchToPlayerOne();
    } else if (SQ1 === 0) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        switchToPlayerOne();
    } else if (SQ3 === 0) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        switchToPlayerOne();
    } else if (SQ7 === 0) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        switchToPlayerOne();
    } else if (SQ9 === 0) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        switchToPlayerOne();
    } else if (SQ2 === 0) {
        $('#SQ2').append('<h3>' + playerTwo + '</h3>');
        SQ2 = -1;
        switchToPlayerOne();
    } else if (SQ4 === 0) {
        $('#SQ4').append('<h3>' + playerTwo + '</h3>');
        SQ4 = -1;
        switchToPlayerOne();
    } else if (SQ6 === 0) {
        $('#SQ6').append('<h3>' + playerTwo + '</h3>');
        SQ6 = -1;
        switchToPlayerOne();
    } else if (SQ8 === 0) {
        $('#SQ8').append('<h3>' + playerTwo + '</h3>');
        SQ8 = -1;
        switchToPlayerOne();
    } else {
        console.log("Nothing happened!");
    }
    checkWinnerHard();
};

function checkWinnerHard() {
    if (SQ1 + SQ2 + SQ3 === 3 || SQ4 + SQ5 + SQ6 === 3
        || SQ7 + SQ8 + SQ9 === 3 || SQ1 + SQ4 + SQ7 === 3
        || SQ2 + SQ5 + SQ8 === 3 || SQ3 + SQ6 + SQ9 === 3
        || SQ1 + SQ5 + SQ9 === 3 || SQ3 + SQ5 + SQ7 === 3) {
            playerOneWins();
    } else if (SQ1 + SQ2 + SQ3 === -3 || SQ4 + SQ5 + SQ6 === -3
            || SQ7 + SQ8 + SQ9 === -3 || SQ1 + SQ4 + SQ7 === -3
            || SQ2 + SQ5 + SQ8 === -3 || SQ3 + SQ6 + SQ9 === -3
            || SQ1 + SQ5 + SQ9 === -3 || SQ3 + SQ5 + SQ7 === -3) {
                playerTwoWins();
    } else if (SQ1 != 0 && SQ2 != 0 && SQ3 != 0 && SQ4 != 0 && SQ5 != 0
            && SQ6 != 0 && SQ7 != 0 && SQ8 != 0 && SQ9 != 0) {
        gameIsDraw();
    } else if (player === playerTwo){
        setTimeout(computerTurnHard, 1000);
    };
};

// TWO-PLAYER MODE

function twoPlayer(){
    $('.square').click(function(){
        if (player === playerOne) {
            var square = $(this)
                .map(function(){ return this.id })
                .get()
                .join(', ');
            console.log(square);
            if (square === "SQ1") {
                if (SQ1 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ1 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ2") {
                if (SQ2 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ2 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ3") {
                if (SQ3 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ3 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ4") {
                if (SQ4 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ4 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ5") {
                if (SQ5 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ5 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ6") {
                if (SQ6 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ6 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ7") {
                if (SQ7 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ7 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ8") {
                if (SQ8 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ8 = 1;
                    switchToPlayerTwo();
                };
            } else if (square === "SQ9") {
                if (SQ9 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ9 = 1;
                    switchToPlayerTwo();
                };
            };

            checkWinner();

        } else if (player === playerTwo) {
            var square = $(this)
                            .map(function(){ return this.id })
                            .get()
                            .join(', ');
            console.log(square);
            if (square === "SQ1") {
                if (SQ1 === 0) {
                    $(this).append('<h3>' + playerTwo + '</h3>');
                    SQ1 = -1;
                    switchToPlayerOne();
                };
            } else if (square === "SQ2") {
                if (SQ2 === 0) {
                    $(this).append('<h3>' + playerTwo + '</h3>');
                    SQ2 = -1;
                    switchToPlayerOne();
                };
            } else if (square === "SQ3") {
                if (SQ3 === 0) {
                    $(this).append('<h3>' + playerTwo + '</h3>');
                    SQ3 = -1;
                    switchToPlayerOne();
                };
            } else if (square === "SQ4") {
                if (SQ4 === 0) {
                    $(this).append('<h3>' + playerTwo + '</h3>');
                    SQ4 = -1;
                    switchToPlayerOne();
                };
            } else if (square === "SQ5") {
                if (SQ5 === 0) {
                    $(this).append('<h3>' + playerTwo + '</h3>');
                    SQ5 = -1;
                    switchToPlayerOne();
                };
            } else if (square === "SQ6") {
                if (SQ6 === 0) {
                    $(this).append('<h3>' + playerTwo + '</h3>');
                    SQ6 = -1;
                    switchToPlayerOne();
                };
            } else if (square === "SQ7") {
                if (SQ7 === 0) {
                    $(this).append('<h3>' + playerTwo + '</h3>');
                    SQ7 = -1;
                    switchToPlayerOne();
                };
            } else if (square === "SQ8") {
                if (SQ8 === 0) {
                    $(this).append('<h3>' + playerTwo + '</h3>');
                    SQ8 = -1;
                    switchToPlayerOne();
                };
            } else if (square === "SQ9") {
                if (SQ9 === 0) {
                    $(this).append('<h3>' + playerTwo + '</h3>');
                    SQ9 = -1;
                    switchToPlayerOne();
                };
            };
            checkWinner();
        };
    });
};

function checkWinner() {
    if (SQ1 + SQ2 + SQ3 === 3 || SQ4 + SQ5 + SQ6 === 3
            || SQ7 + SQ8 + SQ9 === 3 || SQ1 + SQ4 + SQ7 === 3
            || SQ2 + SQ5 + SQ8 === 3 || SQ3 + SQ6 + SQ9 === 3
            || SQ1 + SQ5 + SQ9 === 3 || SQ3 + SQ5 + SQ7 === 3) {
                playerOneWins();
    } else if (SQ1 + SQ2 + SQ3 === -3 || SQ4 + SQ5 + SQ6 === -3
            || SQ7 + SQ8 + SQ9 === -3 || SQ1 + SQ4 + SQ7 === -3
            || SQ2 + SQ5 + SQ8 === -3 || SQ3 + SQ6 + SQ9 === -3
            || SQ1 + SQ5 + SQ9 === -3 || SQ3 + SQ5 + SQ7 === -3) {
                playerTwoWins();
    } else if (SQ1 != 0 && SQ2 != 0 && SQ3 != 0 && SQ4 != 0 && SQ5 != 0
        && SQ6 != 0 && SQ7 != 0 && SQ8 != 0 && SQ9 != 0) {
        gameIsDraw();
    };
};

// SWITCH FUNCTIONS

function switchToPlayerOne() {
    player = playerOne;
    playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)',
        'animation': 'none', 'background-color': 'transparent'});
    playerOneScore.css({'border': 'solid rgb(255, 96, 110)',
        'border-radius': '10px', 'animation': 'blinker 1s linear infinite',
        'background-color': 'rgb(222, 239, 239)'});
};

function switchToPlayerTwo() {
    player = playerTwo;
    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)',
        'animation': 'none', 'background-color': 'transparent'});
    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)',
        'border-radius': '10px', 'animation': 'blinker 1s linear infinite',
        'background-color': 'rgb(222, 239, 239)'});
};

// WINNING FUNCTIONS

function playerOneWins(){
    console.log("Player One wins!");
    declareWinner.text(playerOneNameText + " Wins!");
    oneWins += 1;
    roundCount += 1;
    playerOneScore.text(playerOneNameText + ": " + oneWins);
    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)',
        'animation': 'none', 'background-color': 'transparent'});
    playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)',
        'animation': 'none', 'background-color': 'transparent'});
    setTimeout(clearScreen, 2000);
};

function playerTwoWins(){
    console.log("Player Two wins!");
    declareWinner.text(playerTwoNameText + " Wins!");
    twoWins += 1;
    roundCount += 1;
    playerTwoScore.text(playerTwoNameText + ": " + twoWins);
    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)',
        'animation': 'none', 'background-color': 'transparent'});
    playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)',
        'animation': 'none', 'background-color': 'transparent'});
    setTimeout(clearScreen, 2000);
};

function gameIsDraw(){
    console.log("Game is a draw");
    declareWinner.text("Draw!");
    roundCount += 1;
    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)',
        'animation': 'none', 'background-color': 'transparent'});
    playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)',
        'animation': 'none', 'background-color': 'transparent'});
    setTimeout(clearScreen, 2000);
};

// OTHER FUNCTIONS

function clearScreen(){
    allRows.css('display', 'none');
    continueButton.css('display', 'inline-block');
    resetButton.css('display', 'inline-block');
    declareWinner.text("");
    // declareWinner.css("display", "none");
    scoreArea.css('display', 'none');
};

continueButton.on('click', function(event){
    $('h3').remove();
    switchToPlayerOne();
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
    // declareWinner.css("display", "inline-block");
    continueButton.css('display', 'none');
    resetButton.css('display', 'none');
    scoreArea.css('display', 'inline-block');
    roundDisplayCount.text("Round: " + roundCount);
    console.log("Rounds: " + roundCount);
    playerOneScore.text(playerOneNameText + ": " + oneWins);
    playerTwoScore.text(playerTwoNameText + ": " + twoWins);
});

resetButton.on('click', function(event){
    $('.square').off();
    $('h3').remove();
    player = playerOne;
    roundCount = 1;
    maxrounds = null;
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
    // declareWinner.css('display', 'none');
    scoreArea.css('display', 'none');
    menuArea.css('display', 'block');
});
