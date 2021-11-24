//TODO refatorar o código no final

// functions 

function restartGame() {

}

function loseGame() {

    console.log("you lost the game")
    $("#alert").text("You lost")
    $("#alert").show()
}

function verifyIfSnakeIsOutOfBoard() {


    if (snake.head[0] <= 0 || snake.head[0] > 25 || snake.head[1] <= 0 || snake.head[1] > 25) {
        return true;
    }
}

function runGame() {

    setTimeout(function() {
        if (!paused) {
            eatApple(verifyIfSnakeEatAple())


            if (verifyIfKillItself() || verifyIfSnakeIsOutOfBoard()) {


                loseGame();
            } else {
                changeSnake(snake, button)
                runGame()
            }

            // if(verifyIfSnakeIsOutOfBoard()){
            //     loseGame();

            // } else {

            // }
            // verify verifyIfSnakeEatAple
            // if true, new apple position
            // snake grows up

        }

    }, 100);
}


function eatApple(eat) {
    if (eat) {
        score += 1;
        size += 1;
        qtdEaten +=1 ;
        console.log("score: " + score)
        console.log("size: " + size)
        console.log("qtd Eaten: " + qtdEaten )
        changeApple()
        addVertebra()
    } else {}

}

function getKey() {

}

function addVertebra() {

    let newSnake = Object.entries(snake)
        // console.log(newSnake)
    lenSnake = newSnake.length
    newVertebraKey = "vertebra" + lenSnake
    newVertebraPosition = snake["vertebra" + (lenSnake - 1)]
        // console.log(newVertebraPosition)

    newSnake.unshift([newVertebraKey, [newVertebraPosition]])
    newSnake = Object.fromEntries(newSnake)

    window.snake = newSnake
        // console.log(newSnake)
}


function verifyIfSnakeEatAple() {

    // get apple location

    let appleLocation = Array.from(apple)
    let headLocation = Array.from(window.snake.head)
    if (appleLocation[0] == headLocation[0] && appleLocation[1] == headLocation[1]) {

        return true
    } else {

        return false
    }

}

function verifyIfKillItself() {

    let kill = false;
    let ArraySnake = Object.entries(snake)
    let lenSnake = ArraySnake.length
    let snakeHead = Array.from(snake.head);

    for (var vertebra = 0; vertebra < lenSnake - 1; vertebra++) {

        if (snakeHead[0] == ArraySnake[vertebra][1][0] && snakeHead[1] == ArraySnake[vertebra][1][1]) {


            kill = true;
            return kill
        }
    }

    return kill
}


function eraseOldSnake(snakeOld) {
    for (var i in snakeOld) {

        let coordinateID = "cell" // + apple[0] + apple[1]
        coordinateID += snakeOld[i][0] < 10 ? "0" + snakeOld[i][0] : snakeOld[i][0]
        coordinateID += snakeOld[i][1] < 10 ? "0" + snakeOld[i][1] : snakeOld[i][1]

        $("#" + coordinateID).attr("class", "cell")
    }
}




function changeSnake(snake, button) {

    // TODO stoped here. gotta continue from here
    let snakeOld = snake;
    eraseOldSnake(snakeOld);

    let newSnake = Object.entries(snake)

    let futureHead = Array.from(snake.head);
    // console.log("+++++++++++++++++++++++" + newSnake) 
    let x = 1;
    let y = 0;
    switch (button) {

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

    newSnake.push(["head", futureHead])


    for (var i = 0; i < newSnake.length; i++) {
        if (i < newSnake.length - 1) {
            newSnake[i][1] = newSnake[i + 1][1]
        }
    }

    newSnake.pop()

    newSnake = Object.fromEntries(newSnake)

    window.snake = newSnake

    setSnake(window.snake)

}


function changeApple() {
    appleX = Math.floor(Math.random() * 25) + 1;
    appleY = Math.floor(Math.random() * 25) + 1;



    try {
        let coordinateID = "cell" // + apple[0] + apple[1]
        coordinateID += apple[0] < 10 ? "0" + apple[0] : apple[0]
        coordinateID += apple[1] < 10 ? "0" + apple[1] : apple[1]

        $("#" + coordinateID).attr("class", "cell")
    } catch (e) {

    }


    window.apple = [appleX, appleY]
    if (verify_If_Apple_Is_In_Snake()) {
        console.log("apple is in snake")
        changeApple()
    } else {

        setApple(window.apple)
    }

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


function setSnake(snake, button) {


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

function verify_If_Apple_Is_In_Snake() {
    isInSnake = false;

    for (var i in snake) {
        if (window.apple[0] == snake[i][0] && window.apple[i] == snake[i][i]) {
            isInSnake = true;
            break;
        }
    }

    return isInSnake;

}

function setApple(apple) {
    let coordinateID = "cell" // + apple[0] + apple[1]
    coordinateID += apple[0] < 10 ? "0" + apple[0] : apple[0]
    coordinateID += apple[1] < 10 ? "0" + apple[1] : apple[1]


    try {

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
    setSnake(snake, button)
});

// set apple
apple = [14, 8]
$(document).ready(function() {
    setApple(apple)

})

// run game

var score = 0;
var size = 3;
var qtdEaten = 0;
button = "a"
direction = 'horizontal'
paused = true;

$(document).ready(function() {
    runGame()

    $("#getKey").keyup(function() {
        let inputText = $("#getKey").val();
        let lastChar = inputText.slice(-1)

        if (direction == "vertical" && (lastChar == "a" || lastChar == "d")) {
            window.direction = "horizontal"
            window.button = lastChar;
        } else if (direction == "horizontal" && (lastChar == "w" || lastChar == "s")) {
            window.direction = "vertical"
            window.button = lastChar;
        }


        $("#getKey").val(lastChar)

    });




    $("#getKey").focus(function() {

        $("#alert").hide();
        paused = false;
        runGame()
    });

    // $("#hidden").focus


    // TODO ITS BUGGING.
    // GOTTA CORRECT LATER
    $("#getKey").focusout(function() {
        $("#alert").show();
        paused = true;

    })






});