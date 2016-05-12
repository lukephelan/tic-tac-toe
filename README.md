# Tic-Tac-Toe

[GitHub Repo] (https://github.com/lukephelan/tic-tac-toe)

[Hosted Version] (http://lukephelan.github.io/tic-tac-toe/)

This is a Javascript game of Tic-Tac-Toe featuring three modes of play:

1. Two-player
2. Single-player against an easy computer AI
3. Single-player against a difficult computer AI

In all modes:

* Player One goes first
* Player One is the 'X'
* Player Two (or the Computer) is the 'O'
* Users can input their name, which will be displayed against their score
* In Single-Player mode, Player Two is automatically called "Computer"
* The game will keep count of the rounds, until the user returns to the main menu, at which point the round count will reset to 0
* The difficulty option will display/hide depending on the mode chosen

For Two-Player Mode:

* User simply alternates clicking on the board where they wish to place their marker
* The marker switches between 'X' and 'O' accordingly

For Single-Player Mode (Easy):

* If the Computer has the chance to win, it will take it
* Then, if the User has the chance to win, the Computer will block it
* If neither the Computer nor the User have the chance to win, the Computer will place their marker in a random square

For Single-Player Mode (Hard):

* If the Computer has the chance to win, it will take it
* Then, if the User has the chance to win, the Computer will block it
* Then, if the User has two opposing corner squares, and the Computer has the centre square, the Computer will choose a middle edge square to force the User to block three-in-a-row, probably resulting in a tie-game
* Then, if the User has a centre square, the Computer will choose an empty corner
* Then, the Computer will choose any square, starting with the centre square first, then corners, then edges

The game works by setting each square a variable equal to 0. If Player One / User selects a square, 1 is added to the relevant variable. If Player Two / Computer selects a square, 1 is subtracted from the relevant variable. This allows for a function to check if there is a winner after each turn. Out of the eight possible winning positions, if any are equal to +3, Player One / User has won. If any are equal to -3, Player Two / Computer has won. If all variables are not equal to 0 and no winning condition has been satisfied, the game is a draw.

Potential improvements for the future:

* Randomly assign which player goes first
* Allow for a user-chosen maximum number of rounds
* Players can choose their own icons
* Display a line across the three winning squares
* Implement a timer for players to make their move (with customisable limits)
* Use LocalStorage or SessionStorage to persist data locally
* Connect to a pre-built backend for persistence
* Replace repetitive code with for-loops
