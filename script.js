let board = ["","","","","","","","",""];
let currentPlayer = "X";
function makeMove(index){
    if(board[index] !== ""){
        return;
    }
    board[index] = currentPlayer;
    let cells = document.getElementsByClassName("cell");
    cells[index].innerText = currentPlayer;
    if(currentPlayer === "X"){
        cells[index].style.color = "#ff4d6d";
    }else{
        cells[index].style.color = "#4361ee";
    }
    if(checkWinner()){
        setTimeout(function(){
            alert(currentPlayer + " wins!");
            resetGame();
        },100);
        return;
    }
    if(board.every(cell => cell !== "")){
        setTimeout(function(){
            alert("Draw!");
            resetGame();
        },100);
        return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}
function checkWinner(){
    let winPatterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let pattern of winPatterns){
        let a = pattern[0];
        let b = pattern[1];
        let c = pattern[2];
        if(board[a] && board[a] === board[b] && board[a] === board[c]){
            return true;
        }
    }
    return false;
}
function resetGame(){
    board = ["","","","","","","","",""];
    currentPlayer = "X";

    let cells = document.getElementsByClassName("cell");

    for(let i=0;i<cells.length;i++){
        cells[i].innerText="";
        cells[i].style.color="";
    }
}
