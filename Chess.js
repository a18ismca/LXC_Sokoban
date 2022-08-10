
// skapa taggar i javascript

function drawChessBoard(){
    let firstSquareShade = 'light';
    for(let i = 0; i < 8; i++){
        drawBoardRow(firstSquareShade);
        firstSquareShade = firstSquareShade == 'dark' ? 'light' : 'dark';
    }
}





function drawBoardRow(color){
    let nextSquareShade = color;
    for(let i = 0; i < 8; i++){
    let newSquare = document.createElement('div');
    
    newSquare.classList.add('square');

    newSquare.classList.add(nextSquareShade);

    document.getElementById('board').appendChild(newSquare);

    nextSquareShade = nextSquareShade == 'dark' ? 'light' : 'dark';

    
    }


}


function addRook(){
    let newRook = document.createElement('img');
    newRook.src = "/img/black-rook.jpg";
    document.getElementsByClassName('square')[0].appendChild(newRook);
}

function addRowOfPieces(color){
    for(let i = 0; i < 8; i++){
        let newPiece = document.create
    }
}

addRook();

drawChessBoard();
