//TODO refatorar o código no final

// functions 

function runGame() {

    setTimeout(function() {
        // console.log("Hello");
        if(!paused){
            changeSnake(snake, direction)

            // verify verifyIfSnakeEatAple
            eatApple(verifyIfSnakeEatAple())
            // if true, new apple position
            // snake grows up

            runGame()
        }
 
    }, 100);
}


function eatApple(eat) {

    // console.log("eatApple is being calling")
    if(eat){
        // console.log("apple should be eaten now")
        changeApple()
    }else {
        // console.log("XxxxxxXXXXXXXXXXXXXXXXXXXXxxxxxxxxxx")
    }

}

function getKey() {

}

function addVertebra() {

}


function verifyIfSnakeEatAple() {

    // get apple location

    let appleLocation = Array.from(apple)
    let headLocation =  Array.from(window.snake.head)
    // console.log(appleLocation)
    // console.log(headLocation)
    // get head
    if (appleLocation[0] == headLocation[0] &&appleLocation[1] == headLocation[1] ){
        // console.log("sao iguais")
        return true
    } else {

        return false
    }

}

function verifySnakeLocation() {

}


function eraseOldSnake(snakeOld) {
    console.log("erase old is working")
    for (var i in snakeOld) {

        let coordinateID = "cell" // + apple[0] + apple[1]
        coordinateID += snakeOld[i][0] < 10 ? "0" + snakeOld[i][0] : snakeOld[i][0]
        coordinateID += snakeOld[i][1] < 10 ? "0" + snakeOld[i][1] : snakeOld[i][1]

        $("#" + coordinateID).attr("class", "cell")
    }
}




function changeSnake(snake, direction) {

    // TODO stoped here. gotta continue from here
    let snakeOld = snake;
    eraseOldSnake(snakeOld);

    let newSnake = Object.entries(snake)
        // console.log(snake)
        // console.log(newSnake)
        //     // TODO we gotta calculate head´s new position somewhere where
    let futureHead = Array.from(snake.head);
    // console.log("+++++++++++++++++++++++" + newSnake) 
    let x = 1;
    let y = 0;
    switch (direction) {

        case "d":
        case "D":
            futureHead[x] = futureHead[x] + 1;
            break;
        case "w":
        case "W":
            futureHead[y] = futureHead[y] - 1

            break;
        case "s":
        case "S":

            futureHead[y] = futureHead[y] + 1

            break;
        case "a":
        case "A":

            futureHead[x] = futureHead[x] - 1
            break;

    }
    // console.log(futureHead)


    newSnake.push(["head", futureHead])
        // console.log(newSnake)

    for (var i = 0; i < newSnake.length; i++) {
        if (i < newSnake.length - 1) {
            newSnake[i][1] = newSnake[i + 1][1]
        }
    }

    newSnake.pop()

    newSnake = Object.fromEntries(newSnake)

    window.snake = newSnake
        // console.log("this.snake")
        // console.log(snake)
    setSnake(window.snake)

}


function changeApple() {
    appleX = Math.floor(Math.random() * 25) + 1;
    appleY = Math.floor(Math.random() * 25) + 1;

    // console.log("-=-=-=-=-=-=-=-=-=-=-=-=")
    // console.log(appleX)
    // console.log(appleY)
    // console.log("-=-=-=-=-=-=-=-=-=-=-=-=")

    try{
        let coordinateID = "cell" // + apple[0] + apple[1]
        coordinateID += apple[0] < 10 ? "0" + apple[0] : apple[0]
        coordinateID += apple[1] < 10 ? "0" + apple[1] : apple[1]
    
        $("#" + coordinateID).attr("class", "cell")
    } catch(e){

    }
 

    window.apple = [appleX, appleY]
    setApple(window.apple)

}


function createBoard() {
    var num = 0;
    const sizeBoard = 25
    for (var i = 1; i <= sizeBoard; i++) {

        $(".board").append(`<tr class="row" id="r${i}"></tr>`)
        for (var j = 1; j <= sizeBoard; j++) {
            let iTemp = i < 10 ? "0" + i : i
            let jTemp = j < 10 ? "0" + j : j
            $(`#r${i}`).append(`<td class="cell" id="cell${iTemp}${jTemp}"></td>`)

        }
    }
    // console.log("fim create board")

}


function setSnake(snake, direction) {


    for (var i in snake) {

        let snakeBodyPart = ""
        if (i == "head") {
            snakeBodyPart = "head"
        } else {
            snakeBodyPart = "vertebra"
        }

        let coordinateID = "cell" // + apple[0] + apple[1]
        coordinateID += snake[i][0] < 10 ? "0" + snake[i][0] : snake[i][0]
        coordinateID += snake[i][1] < 10 ? "0" + snake[i][1] : snake[i][1]
            // console.log("coordenada é " + coordinateID)


        $("#" + coordinateID).attr("class", "cell" + " " + snakeBodyPart)
    }

}


function setApple(apple) {
    let coordinateID = "cell" // + apple[0] + apple[1]
    coordinateID += apple[0] < 10 ? "0" + apple[0] : apple[0]
    coordinateID += apple[1] < 10 ? "0" + apple[1] : apple[1]
        // console.log("cordinateid é " + coordinateID)

    try {
        // console.log("aqui ta indo")
        // $("#cell11").css("background", "red")
        $("#" + coordinateID).attr("class", coordinateID + " apple")
    } catch (e) {
        console.log("deu erro na hora")
    }

}

// create board

$(document).ready(function() {
    createBoard()
});

// create snake
var snake = {
    "vertebra2": [14, 20],
    "vertebra1": [14, 19],
    "head": [14, 18],
}
$(document).ready(function() {
    setSnake(snake, direction)
});

// set apple
apple = [14, 8]
$(document).ready(function() {
    setApple(apple)

})

// run game

direction = "a"
button = 'd'
paused = true;

$(document).ready(function() {
 runGame()

    $("#getKey").keyup(function() {
        let inputText = $("#getKey").val();
        let lastChar = inputText.slice(-1)
        $("#getKey").val(lastChar)
            // console.log(lastChar)
        $("#showKey").text(lastChar);
        // changeSnake(snake, lastChar)
        window.direction = lastChar;
        // if(lastChar == "p"){
        //     if(!paused){
        //         $("#alert").show();
        //         paused = true;
        //         $("#getKey").focusout()

        //     }
        // }
        // if(!paused){
        //     window.direction = "d"
        //     runGame()
        // }
    });




    $("#getKey").focus(function() {
        // window.alert(42)
        // console.log("alo mundo")
        $("#alert").hide();
        paused = false;
        console.log(paused)
        runGame()
    });

    // $("#hidden").focus


    // TODO ITS BUGGING.
    // GOTTA CORRECT LATER
    $("#getKey").focusout(function() {
        $("#alert").show();
        paused = true;
        console.log(paused)
    })






});