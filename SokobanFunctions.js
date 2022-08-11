

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

    // leta efter playerns plats

    let div = document.getElementsByClassName(Entities.Character)[0];


   
    let currentPlayerPos = div.id;


    // Nuvarande position
    let getCoords = currentPlayerPos.split(",");

    // Övre granne

    let getUpperX = getCoords[0];

    let getUpperY = Math.floor(getCoords[1]) - 1;

    let getUpperCoords = getUpperX + "," + getUpperY;

    // Nedre granne

    let getLowerX = getCoords[0];

    let getLowerY = Math.floor(getCoords[1]) + Math.floor(1);

    let getLowerCoords = getLowerX + "," + getLowerY;


    // Vänster granne

    let getLeftX = getCoords[0] - 1;

    let getLeftY = getCoords[1];

    let getLeftCoords = getLeftX + "," + getLeftY;

    // Höger granne
    
    let getRightX = Math.floor(getCoords[0]) + Math.floor(1);

    let getRightY = getCoords[1]

    let getRightCoords = getRightX + "," + getRightY;


   
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


    /*if (getLeftCoords == Tiles.Wall || getRightCoords == Tiles.Wall || getUpperCoords == Tiles.Wall || getLowerCoords == Tiles.Wall){

    }*/

    let targetX = Math.floor(getCoords[0]) + Math.floor(xOffset);


    let targetY = Math.floor(getCoords[1]) + Math.floor(yOffset);


    let newCharCoords = targetX + "," + targetY;
    // newCoords

    //div.id = newCoords;


    let divTarget = document.getElementById(newCharCoords);


    // CLASS LIST!
    if (!divTarget.classList.contains(Tiles.Wall)){
    div.classList.replace(Entities.Character, Tiles.Space);


    divTarget.classList.replace(Tiles.Space, Entities.Character);

    if(divTarget.classList.contains(Entities.Block) && xOffset == -1){
       
        // alert("Block to the left")

        let movingBlockCods = (targetX - 1) + "," + targetY;

        let checkBlockAfterBlock = (targetX - 2) + "," + targetY;

        //divTarget.classList.replace(Entities.Block, Tiles.Space);

        let newTarget = document.getElementById(movingBlockCods);

        let checkBlocksAround = document.getElementById(checkBlockAfterBlock);

        if(!newTarget.classList.contains(Entities.Block)){
            newTarget.classList.replace(Tiles.Space, Entities.Block);
         
            divTarget.classList.replace(Entities.Block, Entities.Character);
            }
        }

        /*if(newTarget.classList.contains(Entities.Block)){
    
        } else{}
*/

        //if(!)
        //newTarget.classList.replace(Tiles.Space, Entities.Block);

        //divTarget.classList.replace(Entities.Block, Entities.Character);
        
        // alert("Where the block should be: " + anotherCods); 
        
    }
    
    /*else if(divTarget.classList.contains(Entities.Block) && xOffset == 1){
        // alert("Block to the left")

        let anotherCods = (Math.floor(targetX) + Math.floor(1)) + "," + targetY;

        let checkBlockAfterBlock = (Math.floor(targetX) + Math.floor(2)) + "," + targetY;

        //divTarget.classList.replace(Entities.Block, Tiles.Space);

        let newTarget = document.getElementById(anotherCods);

        newTarget.classList.replace(Tiles.Space, Entities.Block);

        divTarget.classList.replace(Entities.Block, Entities.Character);

        // alert("Where the block should be: " + anotherCods);

        
    }
    
    else if(divTarget.classList.contains(Entities.Block) && yOffset == -1){
       // alert("Block to the left")

       let anotherCods = targetX + "," + (targetY - 1);

       let checkBlockAfterBlock = targetX + "," + (targetY - 2);

       //divTarget.classList.replace(Entities.Block, Tiles.Space);

       let newTarget = document.getElementById(anotherCods);

       newTarget.classList.replace(Tiles.Space, Entities.Block);

       divTarget.classList.replace(Entities.Block, Entities.Character);

       // alert("Where the block should be: " + anotherCods);
    }
    else if(divTarget.classList.contains(Entities.Block) && yOffset == 1){
        // alert("Block to the left")

        let anotherCods = targetX + "," + (Math.floor(targetY) + Math.floor(1));

        let checkBlockAfterBlock = targetX + "," + (Math.floor(targetY) + Math.floor(2));

        //divTarget.classList.replace(Entities.Block, Tiles.Space);

        let newTarget = document.getElementById(anotherCods);

        newTarget.classList.replace(Tiles.Space, Entities.Block);

        divTarget.classList.replace(Entities.Block, Entities.Character);

        // alert("Where the block should be: " + anotherCods);
    }*/

    } 


    // Old pos
    //alert("Current pos: " + currentPlayerPos + "Upper: " + getUpperCoords + ". Lower: " + getLowerCoords + ". Left: " + getLeftCoords + ". Right: " + getRightCoords);
   
    // New position
    //alert(div.id);
   




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
       