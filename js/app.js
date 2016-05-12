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

var roundCount = 1;
var maxRounds;

var oneWins = 0;
var twoWins = 0;

var icon = ['X', 'O'];

var playerOne = icon[0];
var playerTwo = icon[1];
var player = playerOne;



// var boardCondition = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var SQ1 = 0;
var SQ2 = 0;
var SQ3 = 0;
var SQ4 = 0;
var SQ5 = 0;
var SQ6 = 0;
var SQ7 = 0;
var SQ8 = 0;
var SQ9 = 0;

// var rowOne = SQ1 + SQ2 + SQ3;
// var rowTwo = SQ4 + SQ5 + SQ6;
// var rowThree = SQ6 + SQ7 + SQ8;
// var columnOne = SQ1 + SQ4 + SQ7;
// var columnTwo = SQ2 + SQ5 + SQ8;
// var columnThree = SQ3 + SQ6 + SQ9;
// var diagOne = SQ1 + SQ5 + SQ9;
// var diagTwo = SQ3 + SQ5 + SQ7;


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



startButton.on('click', function(event) {
    menuArea.css('display', 'none');
    roundDisplayCount.text("Round: " + roundCount);
    boardArea.css('display', 'block');
    scoreArea.css('display', 'inline-block');
    allRows.css('display', 'flex');
    declareWinner.text("");
    // declareWinner.css("display", "inline-block");
    // Set player ones name to the input value
    playerOneNameText = $('#playerOneName input').val();
    var x = numberOfPlayers.prop('selectedIndex');
    var y = difficulty.prop('selectedIndex');
    // Set player two's name to the input value, or set as "Computer"
    // if only single player game
    if (x === 0) {
        playerTwoNameText = "Computer";
    } else if (x === 1) {
        playerTwoNameText = $('#playerTwoName input').val();
    };
    playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    playerOneScore.text(playerOneNameText + ": " + oneWins);
    playerTwoScore.text(playerTwoNameText + ": " + twoWins);
    if (x === 0 && y === 0) {
        onePlayerEasy();
    } else if (x === 0 && y === 1) {
        onePlayerHard();
    } else if (x === 1) {
        twoPlayer();
    };
});


function onePlayerEasy(){
    $('.square').click(function(){
        if (player === playerTwo) {
            return;
        } else {
            var square = $(this).map(function(){ return this.id }).get().join(', ');
            console.log(square);
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
            if (square === "SQ1") {
                if (SQ1 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ1 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ2") {
                if (SQ2 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ2 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ3") {
                if (SQ3 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ3 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ4") {
                if (SQ4 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ4 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ5") {
                if (SQ5 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ5 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ6") {
                if (SQ6 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ6 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ7") {
                if (SQ7 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ7 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ8") {
                if (SQ8 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ8 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ9") {
                if (SQ9 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ9 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            };
            checkWinnerEasy();
        };
    });
};

function computerTurnEasy(){
    // Check if computer has two in a line and can win
    // Check top row
    console.log("Ready to go");
    if (SQ1 === 0 && (SQ2 === -1 && SQ3 === -1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ2 === 0 && (SQ1 === -1 && SQ3 === -1)) {
        $('#SQ2').append('<h3>' + playerTwo + '</h3>');
        SQ2 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ3 === 0 && (SQ1 === -1 && SQ2 === -1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check middle row
    } else if (SQ4 === 0 && (SQ5 === -1 && SQ6 === -1)) {
        $('#SQ4').append('<h3>' + playerTwo + '</h3>');
        SQ4 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ5 === 0 && (SQ4 === -1 && SQ6 === -1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ6 === 0 && (SQ4 === -1 && SQ5 === -1)) {
        $('#SQ6').append('<h3>' + playerTwo + '</h3>');
        SQ6 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check bottom row
    } else if (SQ7 === 0 && (SQ8 === -1 && SQ9 === -1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ8 === 0 && (SQ7 === -1 && SQ9 === -1)) {
        $('#SQ8').append('<h3>' + playerTwo + '</h3>');
        SQ8 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ9 === 0 && (SQ7 === -1 && SQ8 === -1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check left column
    } else if (SQ1 === 0 && (SQ4 === -1 && SQ7 === -1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ4 === 0 && (SQ1 === -1 && SQ7 === -1)) {
        $('#SQ4').append('<h3>' + playerTwo + '</h3>');
        SQ4 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ7 === 0 && (SQ1 === -1 && SQ4 === -1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check middle column
    } else if (SQ2 === 0 && (SQ5 === -1 && SQ8 === -1)) {
        $('#SQ2').append('<h3>' + playerTwo + '</h3>');
        SQ2 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ5 === 0 && (SQ2 === -1 && SQ8 === -1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ8 === 0 && (SQ2 === -1 && SQ5 === -1)) {
        $('#SQ8').append('<h3>' + playerTwo + '</h3>');
        SQ8 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check right column
    } else if (SQ3 === 0 && (SQ6 === -1 && SQ9 === -1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ6 === 0 && (SQ3 === -1 && SQ9 === -1)) {
        $('#SQ6').append('<h3>' + playerTwo + '</h3>');
        SQ6 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ9 === 0 && (SQ3 === -1 && SQ6 === -1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check first diagonal
    } else if (SQ1 === 0 && (SQ5 === -1 && SQ9 === -1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ5 === 0 && (SQ1 === -1 && SQ9 === -1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ9 === 0 && (SQ1 === -1 && SQ5 === -1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check second diagonal
    } else if (SQ3 === 0 && (SQ5 === -1 && SQ7 === -1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ5 === 0 && (SQ3 === -1 && SQ7 === -1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ7 === 0 && (SQ3 === -1 && SQ5 === -1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check if player has two in a line for computer to block
    // Check top row
    } else if (SQ1 === 0 && (SQ2 === 1 && SQ3 === 1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ2 === 0 && (SQ1 === 1 && SQ3 === 1)) {
        $('#SQ2').append('<h3>' + playerTwo + '</h3>');
        SQ2 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ3 === 0 && (SQ1 === 1 && SQ2 === 1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check middle row
    } else if (SQ4 === 0 && (SQ5 === 1 && SQ6 === 1)) {
        $('#SQ4').append('<h3>' + playerTwo + '</h3>');
        SQ4 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ5 === 0 && (SQ4 === 1 && SQ6 === 1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ6 === 0 && (SQ4 === 1 && SQ5 === 1)) {
        $('#SQ6').append('<h3>' + playerTwo + '</h3>');
        SQ6 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check bottom row
    } else if (SQ7 === 0 && (SQ8 === 1 && SQ9 === 1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ8 === 0 && (SQ7 === 1 && SQ9 === 1)) {
        $('#SQ8').append('<h3>' + playerTwo + '</h3>');
        SQ8 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ9 === 0 && (SQ7 === 1 && SQ8 === 1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check left column
    } else if (SQ1 === 0 && (SQ4 === 1 && SQ7 === 1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ4 === 0 && (SQ1 === 1 && SQ7 === 1)) {
        $('#SQ4').append('<h3>' + playerTwo + '</h3>');
        SQ4 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ7 === 0 && (SQ1 === 1 && SQ4 === 1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check middle column
    } else if (SQ2 === 0 && (SQ5 === 1 && SQ8 === 1)) {
        $('#SQ2').append('<h3>' + playerTwo + '</h3>');
        SQ2 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ5 === 0 && (SQ2 === 1 && SQ8 === 1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ8 === 0 && (SQ2 === 1 && SQ5 === 1)) {
        $('#SQ8').append('<h3>' + playerTwo + '</h3>');
        SQ8 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check right column
    } else if (SQ3 === 0 && (SQ6 === 1 && SQ9 === 1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ6 === 0 && (SQ3 === 1 && SQ9 === 1)) {
        $('#SQ6').append('<h3>' + playerTwo + '</h3>');
        SQ6 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ9 === 0 && (SQ3 === 1 && SQ6 === 1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check first diagonal
    } else if (SQ1 === 0 && (SQ5 === 1 && SQ9 === 1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ5 === 0 && (SQ1 === 1 && SQ9 === 1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ9 === 0 && (SQ1 === 1 && SQ5 === 1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check second diagonal
    } else if (SQ3 === 0 && (SQ5 === 1 && SQ7 === 1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ5 === 0 && (SQ3 === 1 && SQ7 === 1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ7 === 0 && (SQ3 === 1 && SQ5 === 1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else {
        var randomChoice = Math.floor(Math.random() * ((9-1)+1) + 1);
        var square = "SQ" + randomChoice;
        var squareID = "#" + square;
        console.log("Random is: " + square);
        if (square === "SQ1") {
            if (SQ1 === 0) {
                $(squareID).append('<h3>' + playerTwo + '</h3>');
                SQ1 = -1;
                player = playerOne;
                playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
            } else {
                computerTurnEasy();
            };
        } else if (square === "SQ2") {
            if (SQ2 === 0) {
                $(squareID).append('<h3>' + playerTwo + '</h3>');
                SQ2 = -1;
                player = playerOne;
                playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
            } else {
                computerTurnEasy();
            };
        } else if (square === "SQ3") {
            if (SQ3 === 0) {
                $(squareID).append('<h3>' + playerTwo + '</h3>');
                SQ3 = -1;
                player = playerOne;
                playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
            } else {
                computerTurnEasy();
            };
        } else if (square === "SQ4") {
            if (SQ4 === 0) {
                $(squareID).append('<h3>' + playerTwo + '</h3>');
                SQ4 = -1;
                player = playerOne;
                playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
            } else {
                computerTurnEasy();
            };
        } else if (square === "SQ5") {
            if (SQ5 === 0) {
                $(squareID).append('<h3>' + playerTwo + '</h3>');
                SQ5 = -1;
                player = playerOne;
                playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
            } else {
                computerTurnEasy();
            };
        } else if (square === "SQ6") {
            if (SQ6 === 0) {
                $(squareID).append('<h3>' + playerTwo + '</h3>');
                SQ6 = -1;
                player = playerOne;
                playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
            } else {
                computerTurnEasy();
            };
        } else if (square === "SQ7") {
            if (SQ7 === 0) {
                $(squareID).append('<h3>' + playerTwo + '</h3>');
                SQ7 = -1;
                player = playerOne;
                playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
            } else {
                computerTurnEasy();
            };
        } else if (square === "SQ8") {
            if (SQ8 === 0) {
                $(squareID).append('<h3>' + playerTwo + '</h3>');
                SQ8 = -1;
                player = playerOne;
                playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
            } else {
                computerTurnEasy();
            };
        } else if (square === "SQ9") {
            if (SQ9 === 0) {
                $(squareID).append('<h3>' + playerTwo + '</h3>');
                SQ9 = -1;
                player = playerOne;
                playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
            } else {
                computerTurnEasy();
            };
        };
    };
    checkWinnerEasy();
};

function playerOneWins(){
    console.log("Player One wins!");
    declareWinner.text(playerOneNameText + " Wins!");
    oneWins += 1;
    roundCount += 1;
    playerOneScore.text(playerOneNameText + ": " + oneWins);
    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
    playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
    setTimeout(clearScreen, 2000);
};

function playerTwoWins(){
    console.log("Player Two wins!");
    declareWinner.text(playerTwoNameText + " Wins!");
    twoWins += 1;
    roundCount += 1;
    playerTwoScore.text(playerTwoNameText + ": " + twoWins);
    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
    playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
    setTimeout(clearScreen, 2000);
};

function gameIsDraw(){
    console.log("Game is a draw");
    declareWinner.text("Draw!");
    roundCount += 1;
    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
    playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
    setTimeout(clearScreen, 2000);
};

function checkWinnerEasy() {
    if (SQ1 + SQ2 + SQ3 === 3 || SQ4 + SQ5 + SQ6 === 3 || SQ7 + SQ8 + SQ9 === 3
        || SQ1 + SQ4 + SQ7 === 3 || SQ2 + SQ5 + SQ8 === 3 || SQ3 + SQ6 + SQ9 === 3
        || SQ1 + SQ5 + SQ9 === 3 || SQ3 + SQ5 + SQ7 === 3) {
            playerOneWins();
    } else if (SQ1 + SQ2 + SQ3 === -3 || SQ4 + SQ5 + SQ6 === -3 || SQ7 + SQ8 + SQ9 === -3
            || SQ1 + SQ4 + SQ7 === -3 || SQ2 + SQ5 + SQ8 === -3 || SQ3 + SQ6 + SQ9 === -3
            || SQ1 + SQ5 + SQ9 === -3 || SQ3 + SQ5 + SQ7 === -3) {
                playerTwoWins();
    } else if (SQ1 != 0 && SQ2 != 0 && SQ3 != 0 && SQ4 != 0 && SQ5 != 0 && SQ6 != 0 && SQ7 != 0 && SQ8 != 0 && SQ9 != 0) {
        gameIsDraw();
    } else if (player === playerTwo){
        setTimeout(computerTurnEasy, 1000);
    };
};

function onePlayerHard(){
    $('.square').click(function(){
        if (player === playerTwo) {
            return;
        } else {
            var square = $(this).map(function(){ return this.id }).get().join(', ');
            console.log(square);
            if (square === "SQ1") {
                if (SQ1 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ1 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ2") {
                if (SQ2 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ2 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ3") {
                if (SQ3 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ3 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ4") {
                if (SQ4 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ4 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ5") {
                if (SQ5 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ5 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ6") {
                if (SQ6 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ6 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ7") {
                if (SQ7 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ7 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ8") {
                if (SQ8 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ8 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ9") {
                if (SQ9 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ9 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
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
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ2 === 0 && (SQ1 === -1 && SQ3 === -1)) {
        $('#SQ2').append('<h3>' + playerTwo + '</h3>');
        SQ2 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ3 === 0 && (SQ1 === -1 && SQ2 === -1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check middle row
    } else if (SQ4 === 0 && (SQ5 === -1 && SQ6 === -1)) {
        $('#SQ4').append('<h3>' + playerTwo + '</h3>');
        SQ4 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ5 === 0 && (SQ4 === -1 && SQ6 === -1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ6 === 0 && (SQ4 === -1 && SQ5 === -1)) {
        $('#SQ6').append('<h3>' + playerTwo + '</h3>');
        SQ6 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check bottom row
    } else if (SQ7 === 0 && (SQ8 === -1 && SQ9 === -1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ8 === 0 && (SQ7 === -1 && SQ9 === -1)) {
        $('#SQ8').append('<h3>' + playerTwo + '</h3>');
        SQ8 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ9 === 0 && (SQ7 === -1 && SQ8 === -1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check left column
    } else if (SQ1 === 0 && (SQ4 === -1 && SQ7 === -1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ4 === 0 && (SQ1 === -1 && SQ7 === -1)) {
        $('#SQ4').append('<h3>' + playerTwo + '</h3>');
        SQ4 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ7 === 0 && (SQ1 === -1 && SQ4 === -1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check middle column
    } else if (SQ2 === 0 && (SQ5 === -1 && SQ8 === -1)) {
        $('#SQ2').append('<h3>' + playerTwo + '</h3>');
        SQ2 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ5 === 0 && (SQ2 === -1 && SQ8 === -1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ8 === 0 && (SQ2 === -1 && SQ5 === -1)) {
        $('#SQ8').append('<h3>' + playerTwo + '</h3>');
        SQ8 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check right column
    } else if (SQ3 === 0 && (SQ6 === -1 && SQ9 === -1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ6 === 0 && (SQ3 === -1 && SQ9 === -1)) {
        $('#SQ6').append('<h3>' + playerTwo + '</h3>');
        SQ6 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ9 === 0 && (SQ3 === -1 && SQ6 === -1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check first diagonal
    } else if (SQ1 === 0 && (SQ5 === -1 && SQ9 === -1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ5 === 0 && (SQ1 === -1 && SQ9 === -1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ9 === 0 && (SQ1 === -1 && SQ5 === -1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check second diagonal
    } else if (SQ3 === 0 && (SQ5 === -1 && SQ7 === -1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ5 === 0 && (SQ3 === -1 && SQ7 === -1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ7 === 0 && (SQ3 === -1 && SQ5 === -1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check if player has two in a line for computer to block
    // Check top row
    } else if (SQ1 === 0 && (SQ2 === 1 && SQ3 === 1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ2 === 0 && (SQ1 === 1 && SQ3 === 1)) {
        $('#SQ2').append('<h3>' + playerTwo + '</h3>');
        SQ2 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ3 === 0 && (SQ1 === 1 && SQ2 === 1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check middle row
    } else if (SQ4 === 0 && (SQ5 === 1 && SQ6 === 1)) {
        $('#SQ4').append('<h3>' + playerTwo + '</h3>');
        SQ4 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ5 === 0 && (SQ4 === 1 && SQ6 === 1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ6 === 0 && (SQ4 === 1 && SQ5 === 1)) {
        $('#SQ6').append('<h3>' + playerTwo + '</h3>');
        SQ6 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check bottom row
    } else if (SQ7 === 0 && (SQ8 === 1 && SQ9 === 1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ8 === 0 && (SQ7 === 1 && SQ9 === 1)) {
        $('#SQ8').append('<h3>' + playerTwo + '</h3>');
        SQ8 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ9 === 0 && (SQ7 === 1 && SQ8 === 1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check left column
    } else if (SQ1 === 0 && (SQ4 === 1 && SQ7 === 1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ4 === 0 && (SQ1 === 1 && SQ7 === 1)) {
        $('#SQ4').append('<h3>' + playerTwo + '</h3>');
        SQ4 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ7 === 0 && (SQ1 === 1 && SQ4 === 1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check middle column
    } else if (SQ2 === 0 && (SQ5 === 1 && SQ8 === 1)) {
        $('#SQ2').append('<h3>' + playerTwo + '</h3>');
        SQ2 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ5 === 0 && (SQ2 === 1 && SQ8 === 1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ8 === 0 && (SQ2 === 1 && SQ5 === 1)) {
        $('#SQ8').append('<h3>' + playerTwo + '</h3>');
        SQ8 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check right column
    } else if (SQ3 === 0 && (SQ6 === 1 && SQ9 === 1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ6 === 0 && (SQ3 === 1 && SQ9 === 1)) {
        $('#SQ6').append('<h3>' + playerTwo + '</h3>');
        SQ6 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ9 === 0 && (SQ3 === 1 && SQ6 === 1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check first diagonal
    } else if (SQ1 === 0 && (SQ5 === 1 && SQ9 === 1)) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ5 === 0 && (SQ1 === 1 && SQ9 === 1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ9 === 0 && (SQ1 === 1 && SQ5 === 1)) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check second diagonal
    } else if (SQ3 === 0 && (SQ5 === 1 && SQ7 === 1)) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ5 === 0 && (SQ3 === 1 && SQ7 === 1)) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ7 === 0 && (SQ3 === 1 && SQ5 === 1)) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Check if user has a corner square, if so, computer goes to middle square
    } else if (SQ1 === 1 && SQ5 === 0) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ3 === 1 && SQ5 === 0) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ7 === 1 && SQ5 === 0) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ9 === 1 && SQ5 === 0) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // If user has two corners and computer has centre piece, computer chooses an edge
    } else if (SQ5 === -1 && (SQ1 === 1 & SQ9 === 1)) {
        if (SQ2 === 0) {
            $('#SQ2').append('<h3>' + playerTwo + '</h3>');
            SQ2 = -1;
            player = playerOne;
            playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
            playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
        } else if (SQ4 === 0) {
            $('#SQ4').append('<h3>' + playerTwo + '</h3>');
            SQ4 = -1;
            player = playerOne;
            playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
            playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
        } else if (SQ6 === 0) {
            $('#SQ6').append('<h3>' + playerTwo + '</h3>');
            SQ6 = -1;
            player = playerOne;
            playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
            playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
        } else if (SQ8 === 0) {
            $('#SQ8').append('<h3>' + playerTwo + '</h3>');
            SQ8 = -1;
            player = playerOne;
            playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
            playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
        };
    } else if (SQ5 === -1 && (SQ3 === 1 & SQ7 === 1)) {
        if (SQ2 === 0) {
            $('#SQ2').append('<h3>' + playerTwo + '</h3>');
            SQ2 = -1;
            player = playerOne;
            playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
            playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
        } else if (SQ4 === 0) {
            $('#SQ4').append('<h3>' + playerTwo + '</h3>');
            SQ4 = -1;
            player = playerOne;
            playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
            playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
        } else if (SQ6 === 0) {
            $('#SQ6').append('<h3>' + playerTwo + '</h3>');
            SQ6 = -1;
            player = playerOne;
            playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
            playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
        } else if (SQ8 === 0) {
            $('#SQ8').append('<h3>' + playerTwo + '</h3>');
            SQ8 = -1;
            player = playerOne;
            playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
            playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
        };
    // Check if user has a centre piece, if so, computer goes to an empty corner
    } else if (SQ5 === 1 && SQ1 === 0) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ5 === 1 && SQ3 === 0) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ5 === 1 && SQ7 === 0) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ5 === 1 && SQ9 === 0) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    // Place in an empty square, working from inside to corners to edges
    } else if (SQ5 === 0) {
        $('#SQ5').append('<h3>' + playerTwo + '</h3>');
        SQ5 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ1 === 0) {
        $('#SQ1').append('<h3>' + playerTwo + '</h3>');
        SQ1 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ3 === 0) {
        $('#SQ3').append('<h3>' + playerTwo + '</h3>');
        SQ3 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ7 === 0) {
        $('#SQ7').append('<h3>' + playerTwo + '</h3>');
        SQ7 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ9 === 0) {
        $('#SQ9').append('<h3>' + playerTwo + '</h3>');
        SQ9 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ2 === 0) {
        $('#SQ2').append('<h3>' + playerTwo + '</h3>');
        SQ2 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ4 === 0) {
        $('#SQ4').append('<h3>' + playerTwo + '</h3>');
        SQ4 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ6 === 0) {
        $('#SQ6').append('<h3>' + playerTwo + '</h3>');
        SQ6 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else if (SQ8 === 0) {
        $('#SQ8').append('<h3>' + playerTwo + '</h3>');
        SQ8 = -1;
        player = playerOne;
        playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
        playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
    } else {
        console.log("Nothing happened!");
    }
    checkWinnerHard();
};


function checkWinnerHard() {
    if (SQ1 + SQ2 + SQ3 === 3 || SQ4 + SQ5 + SQ6 === 3 || SQ7 + SQ8 + SQ9 === 3
        || SQ1 + SQ4 + SQ7 === 3 || SQ2 + SQ5 + SQ8 === 3 || SQ3 + SQ6 + SQ9 === 3
        || SQ1 + SQ5 + SQ9 === 3 || SQ3 + SQ5 + SQ7 === 3) {
            playerOneWins();
    } else if (SQ1 + SQ2 + SQ3 === -3 || SQ4 + SQ5 + SQ6 === -3 || SQ7 + SQ8 + SQ9 === -3
            || SQ1 + SQ4 + SQ7 === -3 || SQ2 + SQ5 + SQ8 === -3 || SQ3 + SQ6 + SQ9 === -3
            || SQ1 + SQ5 + SQ9 === -3 || SQ3 + SQ5 + SQ7 === -3) {
                playerTwoWins();
    } else if (SQ1 != 0 && SQ2 != 0 && SQ3 != 0 && SQ4 != 0 && SQ5 != 0 && SQ6 != 0 && SQ7 != 0 && SQ8 != 0 && SQ9 != 0) {
        gameIsDraw();
    } else if (player === playerTwo){
        setTimeout(computerTurnHard, 1000);
    };
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
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ2") {
                if (SQ2 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ2 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ3") {
                if (SQ3 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ3 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ4") {
                if (SQ4 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ4 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ5") {
                if (SQ5 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ5 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ6") {
                if (SQ6 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ6 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ7") {
                if (SQ7 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ7 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ8") {
                if (SQ8 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ8 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ9") {
                if (SQ9 === 0) {
                    $(this).append('<h3>' + playerOne + '</h3>');
                    SQ9 = 1;
                    player = playerTwo;
                    playerOneScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerTwoScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
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
                    playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ2") {
                if (SQ2 === 0) {
                    $(this).append('<h3>' + playerTwo + '</h3>');
                    SQ2 = -1;
                    player = playerOne;
                    playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ3") {
                if (SQ3 === 0) {
                    $(this).append('<h3>' + playerTwo + '</h3>');
                    SQ3 = -1;
                    player = playerOne;
                    playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ4") {
                if (SQ4 === 0) {
                    $(this).append('<h3>' + playerTwo + '</h3>');
                    SQ4 = -1;
                    player = playerOne;
                    playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ5") {
                if (SQ5 === 0) {
                    $(this).append('<h3>' + playerTwo + '</h3>');
                    SQ5 = -1;
                    player = playerOne;
                    playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ6") {
                if (SQ6 === 0) {
                    $(this).append('<h3>' + playerTwo + '</h3>');
                    SQ6 = -1;
                    player = playerOne;
                    playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ7") {
                if (SQ7 === 0) {
                    $(this).append('<h3>' + playerTwo + '</h3>');
                    SQ7 = -1;
                    player = playerOne;
                    playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ8") {
                if (SQ8 === 0) {
                    $(this).append('<h3>' + playerTwo + '</h3>');
                    SQ8 = -1;
                    player = playerOne;
                    playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            } else if (square === "SQ9") {
                if (SQ9 === 0) {
                    $(this).append('<h3>' + playerTwo + '</h3>');
                    SQ9 = -1;
                    player = playerOne;
                    playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
                    playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
                };
            };

            checkWinner();

        };
    });
};

function checkWinner() {
    if (SQ1 + SQ2 + SQ3 === 3 || SQ4 + SQ5 + SQ6 === 3 || SQ7 + SQ8 + SQ9 === 3
        || SQ1 + SQ4 + SQ7 === 3 || SQ2 + SQ5 + SQ8 === 3 || SQ3 + SQ6 + SQ9 === 3
        || SQ1 + SQ5 + SQ9 === 3 || SQ3 + SQ5 + SQ7 === 3) {
            playerOneWins();
    } else if (SQ1 + SQ2 + SQ3 === -3 || SQ4 + SQ5 + SQ6 === -3 || SQ7 + SQ8 + SQ9 === -3
            || SQ1 + SQ4 + SQ7 === -3 || SQ2 + SQ5 + SQ8 === -3 || SQ3 + SQ6 + SQ9 === -3
            || SQ1 + SQ5 + SQ9 === -3 || SQ3 + SQ5 + SQ7 === -3) {
                playerTwoWins();
    } else if (SQ1 != 0 && SQ2 != 0 && SQ3 != 0 && SQ4 != 0 && SQ5 != 0 && SQ6 != 0 && SQ7 != 0 && SQ8 != 0 && SQ9 != 0) {
        gameIsDraw();
    };
};


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
    player = playerOne;
    playerTwoScore.css({'border': 'solid rgba(247, 54, 54, 0)', 'animation': 'none', 'background-color': 'transparent'});
    playerOneScore.css({'border': 'solid rgb(255, 96, 110)', 'border-radius': '10px', 'animation': 'blinker 1s linear infinite', 'background-color': 'rgb(222, 239, 239)'});
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
