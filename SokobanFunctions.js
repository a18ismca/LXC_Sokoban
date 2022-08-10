

const drawMap = () => {

    document.getElementById("game-map").innerHTML = " ";

    for(let y = 0; y < tileMap01.mapGrid.length; y++){

        const row = tileMap01.mapGrid[y]

        for(let x = 0; x < row.length; x++){

            let div = document.createElement("div");

            div.id = `${x},${y}`;

            div.classList.add("tile-space");

            if(row[x][0] !== " "){
                div.classList.add(...row[x][0].split("").map(checkWhatIsWhat));
            }

            document.getElementById("game-map").appendChild(div);

        }



    }


}

drawMap();


function checkWhatIsWhat(tiles){
    switch(tiles){
        case "W":
            return Tiles.Wall;
            break;
        case "B":
            return Entities.Block;
            break;
        case "P":
            return Entities.Character;
            break;
        case "G":
            return Tiles.Goal;
            break;
           
    }
}

function movePlayer(direction){

    //alert("Up key pressed. :" + direction);

    let xOffset = 0;

    let yOffset = 0;

    if(direction == "ArrowLeft"){
        xOffset = -1;
    } else if(direction == "ArrowRight"){
        xOffset += 1;
    } else if(direction == "ArrowUp"){
        yOffset = -1;
    } else if(direction == "ArrowDown"){
        yOffset += 1;
    }

    // leta efter playerns plats

    let div = document.getElementsByClassName(Entities.Character)[0];

    let currentPlayerPos = div.id;
    

    let getCoords = currentPlayerPos.split(",");


    let targetX = Math.floor(getCoords[0]) + Math.floor(xOffset);


    let targetY = Math.floor(getCoords[1]) + Math.floor(yOffset);


    let newCoords = targetX + "," + targetY;


    //div.id = newCoords;


    let divTarget = document.getElementById(newCoords);


    div.classList.replace(Entities.Character, Tiles.Space);


    divTarget.classList.replace(Tiles.Space, Entities.Character);


    alert(currentPlayerPos);
    alert(div.id);
   


}

function MoveUp(x, y){}

function MoveDown(x, y){}

function MoveLeft(x, y){}

function MoveRight(x, y){}

function Build(){



}

function ListenForUser(){};

function CheckPossibleMove(){};

// Detect a key press by showing an alert message.

document.addEventListener("keydown", (event) => {
    if (event.isComposing || event.key === 229) {
      return;
    }
    
    if(event.key == "ArrowUp"){

     movePlayer("ArrowUp");

    } 
    
    else if(event.key == "ArrowDown"){

        movePlayer("ArrowDown");
    } 
    
    else if(event.key == "ArrowLeft"){

     movePlayer("ArrowLeft");
    
    } 
    
    else if(event.key == "ArrowRight"){

        movePlayer("ArrowRight");
    
    }
    

  })
       