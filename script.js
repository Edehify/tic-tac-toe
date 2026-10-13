// Create a player object with a name and marker
function createPlayer(name, marker) {
  return { name, marker };
}

// Create a game board module using an IIFE (Immediately Invoked Function Expression)
const gameBoard = (() => {
    // Create an array to represent the game board with 9 empty spaces
  const board = ["", "", "", "", "", "", "", "", ""];
    return {
     // Return a copy of the current game board   
    getBoard: () => [...board],
    // Reset the game board to its initial empty state
    resetBoard: () => {
      board.fill("");
    },
    // Place a marker on the game board at the specified position
    placeMarker: (position, marker) => {
        board[position] = marker;
      }
  };
})();

// Create a game controller module using an IIFE (Immediately Invoked Function Expression)
const gameController = (() => {
    // Initialize two players and set the current player to player 1
  let player1 = createPlayer("Player 1", "X");
  let player2 = createPlayer("Player 2", "O");
  // Initialize the current player and game state variables
  let currentPlayer = player1;
  // Initialize a variable to track if the game is over
  let isGameOver = false;
  // Define the winning combinations for the game
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  // Function to check if the current player has won the game
 function checkWin() {
    // Get the current state of the game board
    const board = gameBoard.getBoard();
    // Loop through each winning combination and check if the current player's marker occupies all positions in that combination 
    for (const combination of winningCombination) {
        // Destructure the combination array into individual indices
      const [a, b, c] = combination;
      // Check if the current player's marker occupies all positions in the combination
      if (combination.every(index => board[index] === currentPlayer.marker)) {
        return true;
      }
    }
}
// Function to check if the game is a draw
    function checkDraw() {
        const board = gameBoard.getBoard();
        // Check if all cells on the board are filled (i.e., no empty spaces)
        if (board.every(cell => cell !== "")) {
            return true;
        }
    }
    // Function to switch the current player
 function switchPlayer() { 
    currentPlayer = currentPlayer === player1 ? player2 : player1;
}
// Function to make a move on the game board
function makeMove(position){
    if (isGameOver) {
        return;
    }
    if (gameBoard.getBoard()[position] === "") {
        gameBoard.placeMarker(position, currentPlayer.marker);
        if (checkWin()) {
            console.log(`${currentPlayer.name} wins! ${currentPlayer.marker}`);
            isGameOver = true;
        } else if (checkDraw()) {
            console.log("It's a draw!");
            isGameOver = true;
        } else if (!checkWin() && !checkDraw()){
            switchPlayer();
        }
    } else {
        console.log("Invalid move! Cell is already occupied.");
        return;
    }
    
}
        return { 
            resetGame: () => {
                gameBoard.resetBoard();
                currentPlayer = player1;
                isGameOver = false;
            },
            makeMove,
            
        };
}) ();
