
let blocksInGoal = 0;

const drawMap = () => {

    document.getElementById("game-map").innerHTML = " ";


    // tileMap01
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

    

    // leta efter playerns plats

    let div = document.getElementsByClassName(Entities.Character)[0];

    let currentPlayerPos = div.id;


    // Nuvarande position
    let getCoords = currentPlayerPos.split(",");

    if(direction == "ArrowLeft"){
        xOffset = -1;
    } 
    
    else if(direction == "ArrowRight"){
        xOffset += 1;
    } 
    
    else if(direction == "ArrowUp"){
        yOffset = -1;
    } 
    
    else if(direction == "ArrowDown"){
        yOffset += 1;
    }


    // Player coordinates where we movit next

    let targetX = Math.floor(getCoords[0]) + Math.floor(xOffset);

    let targetY = Math.floor(getCoords[1]) + Math.floor(yOffset);

    let newCharCoords = targetX + "," + targetY;

    // newCoords

    //div.id = newCoords;


    let divTarget = document.getElementById(newCharCoords);

    if (divTarget.classList.contains(Tiles.Wall)){
        return;
    }

    // ej ha villkoret här
    if (divTarget.classList.contains(Entities.Block)){

        let afterBoxDivX = Math.floor(getCoords[0]) + Math.floor(xOffset * 2);

        let afterBoxDivY = Math.floor(getCoords[1]) + Math.floor(yOffset * 2);
    
        let afterBoxDivID = afterBoxDivX + "," + afterBoxDivY;

        let afterBoxDiv = document.getElementById(afterBoxDivID);

        

        if(afterBoxDiv.classList.contains(Entities.Block) || afterBoxDiv.classList.contains(Tiles.Wall) || afterBoxDiv.classList.contains(Entities.BlockDone)){
            return;
        } 
        
        else{

            
             // change color of the box to dark green if the neighbor is a goal

        if(afterBoxDiv.classList.contains(Tiles.Goal)){

           

            // move the box
           
            
            
            
            //alert("A block has been added to goal.")
            afterBoxDiv.classList.add(Entities.BlockDone);

            
            let numOfGoalBlocks = document.getElementsByClassName('entity-block-goal').length;
          

            

            if(document.getElementsByClassName('entity-block').length == numOfGoalBlocks){

                alert("Finished!");

                const gameMap = document.getElementById("game-map");

                gameMap.remove();


                // Allow the player restart the game... (unfinished section)
                var contDiv = document.createElement('div');

                document.body.appendChild(contDiv);



             
            }
            
            
        }
            

            // move the box

            divTarget.classList.remove(Entities.Block);

            afterBoxDiv.classList.add(Entities.Block);


            // remove number of blocks in goal if the player moves the block outside of the goal
            if(divTarget.classList.contains(Tiles.Goal)){

                divTarget.classList.remove(Entities.BlockDone);

                blocksInGoal--;

            }
            
        }

        

        
            

        

        
    }

    div.classList.replace(Entities.Character, Tiles.Space);

    divTarget.classList.replace(Tiles.Space, Entities.Character);
    

    }

    
  
    //div.classList.replace(Entities.Character, Tiles.Space);

    //divTarget.classList.replace(Tiles.Space, Entities.Character);
    




function ListenForUser(){};

function CheckPossibleMove(){};

// Detect a key press by showing an alert message.

document.addEventListener("keydown", (event) => {

    event.preventDefault();
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
       