# Tic Tac Toe Game

## Description

Tic Tac Toe is a two-player game in which each player uses either X or O and takes turns placing their marker on a 3×3 board. A player wins by placing three of their markers in a row, column, or diagonal. If all nine squares are filled and neither player has won, the game ends in a draw.


For more information about this project and my learning journey, please visit:  
[The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe)

## Features

* Two-player gameplay.
* X and O markers with alternating turns.
* Winner detection.
* Draw detection.
* Game-over handling to prevent further moves.
* Invalid move prevention when a square is already occupied.
* Turn indicator to display the current player's turn.
* Reset button to start a new game.


---

## Built With

* HTML5 — Defines the structure of the game, including the board, squares, and buttons.
* CSS3 — Controls the appearance and layout of the game.
* JavaScript — Handles game rules, player turns, winner and draw detection, DOM manipulation, and user interactions.



---

## What I Learned

* I learned how to break a JavaScript project into smaller modules using IIFEs, so the game board, game logic, and display code each have a clear responsibility.
* I practiced keeping the board and game state in JavaScript, then updating the page to reflect that state instead of treating the DOM as the source of truth.
* I learned how to use arrays to represent the board and check winning combinations for rows, columns, and diagonals.
* I practiced handling user interactions with event listeners, validating moves, alternating between players, and preventing play after a win or draw.
* I learned how to reset the game by restoring the board, current player, and game-over state.
* I gained experience connecting JavaScript to HTML elements and styling the interface with CSS.


---



## Project Structure

tic-tac-toe/
├── index.html       # HTML structure for the game
├── style.css        # Game board layout and application styles
├── script.js        # Game logic, player management, and DOM interactions
└── README.md        # Project description, features, and documentation
```



---

## Future Improvements


The following improvements are planned for future versions of this project:

* Improve game logic and ensure moves cannot be made after the game ends.
* Display the current player's turn, winner, or draw status on the user interface.
* Highlight the winning combination when a player wins.
* Improve the user interface and make the game responsive across different screen sizes.
* Add player name selection.
* Implement score tracking across multiple rounds.
* Add an undo move feature.
* Develop a computer opponent with different difficulty levels.
* Write automated tests for the game logic.
* Deploy the game online so it can be played in a web browser.

---

## Acknowledgements
This project was completed as part of the curriculum from The Odin Project.



## Author

Edeh Maligue Ifeanyi


---

## Live Demo

👉 [Click here to view the live demo](https://edehify.github.io/tic-tac-toe/)



