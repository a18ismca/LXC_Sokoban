tileMap01.mapGrid[3][5];

var x = 0;
var y = 0;

function Build(){
    tileMap01.mapGrid[0][0] = document.getElementById("x0 y0").innerHTML;
}


function BuildMap(){

    // loop through something
    // if it is a wall, classify it as a wall etc.

    for(var i = 0; i < tileMap01.width; i++){

        for(var j = 0; j < tileMap01.height; j++){
            if(tileMap01[i][j] == "W"){

            } else if(tileMap01[i][j] == "B"){

            } else if(tileMap01[i][j] == "P"){

            } else if(tileMap01[i][j] == " "){

            }
        }

    }
}


function ListenForUser(){};

function CheckPossibleMove(){};

// Detect a key press by showing an alert message.

document.addEventListener("keydown", (event) => {
    if (event.isComposing || event.key === 229) {
      return;
    }
    
    if(event.key == "ArrowUp"){

        document.getElementById('info').innerHTML = tileMap01.mapGrid[5][5];

    } 
    
    else if(event.key == "ArrowDown"){

        document.getElementById('info').innerHTML = "Down key pressed."
    } 
    
    else if(event.key == "ArrowLeft"){

        document.getElementById('info').innerHTML = "Left key pressed."
    
    } 
    
    else if(event.key == "ArrowRight"){

        document.getElementById('info').innerHTML = "Right key pressed."
    
    }
    

  })
       