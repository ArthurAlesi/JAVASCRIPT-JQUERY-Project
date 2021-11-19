//TODO refatorar o código no final

// functions 
function changeSnake(snake , direction) {

    // TODO stoped here. gotta continue from here
    let snakeOld = snake;
    for(var i in snakeOld){
        console.log(snakeOld)


        let coordinateID = "cell" // + apple[0] + apple[1]
        coordinateID += snakeOld[i][0] < 10 ? "0" + snakeOld[i][0] : snakeOld[i][0]
        coordinateID += snakeOld[i][1] < 10 ? "0" + snakeOld[i][1] : snakeOld[i][1]
    
        $("#" + coordinateID).attr("class", "cell")
    }



   


}


function changeApple() {
    appleX = Math.floor(Math.random() * 25) + 1;
    appleY = Math.floor(Math.random() * 25) + 1;

    console.log("-=-=-=-=-=-=-=-=-=-=-=-=")
    console.log(appleX)
    console.log(appleY)
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=")

    let coordinateID = "cell" // + apple[0] + apple[1]
    coordinateID += apple[0] < 10 ? "0" + apple[0] : apple[0]
    coordinateID += apple[1] < 10 ? "0" + apple[1] : apple[1]

    $("#" + coordinateID).attr("class", "cell")

    apple = [appleX, appleY]
    setApple(apple)

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
                // row_number=${i} col_number=${j}
                // $(`#${i}${j}`).attr("rownumber",i)
                // $(`#${i}${j}`).attr("colnumber",i)
        }
    }
    console.log("fim create board")



}


function setSnake(snake, direction) {

    // let snakeBodyPartFuture = null;
    // let futureHead;
    // switch (direction) {


    //     case "d":
    //     case "D":

    //         futureHead = snake["head"]
    //         futureHead[1] += 1;
    //         console.log("futureehad is " +  futureHead)
    //         // sizeSnake = Object.keys(snake).length;
    //         // lastVertebra  = sizeSnake - 1
    //         // newVertebra = "vertebra" + sizeSnake

    //         // snake = Object.assign({newVertebra:snake[lastVertebra]}, snake);

    //             console.log("direita")
    //         console.log()

    //             // for(var i in snake){

    //         //     let coordinateID = "cell" // + apple[0] + apple[1]
    //         //     coordinateID += snake[i][0] < 10 ? "0" + snake[i][0] : snake[i][0]
    //         //     coordinateID += snake[i][1] < 10 ? "0" + snake[i][1] : snake[i][1]
    //         //     console.log("coordenada é " + coordinateID)


    //         //     $("#" + coordinateID).attr("class", "cell" + " " + snakeBodyPart)
    //         // }


    //         break;
    //     case "w":
    //     case "W":
    //         break;
    //     case "a":
    //     case "A":
    //         futureHead = snake["head"]
    //         futureHead[1] -= 1;
    //         console.log("futureehad is " +  futureHead)
    //         for (var i in snake) {

    //             // let coordinateID = "cell" // + apple[0] + apple[1]
    //             // coordinateID += snake[i][0] < 10 ? "0" + snake[i][0] : snake[i][0]
    //             // coordinateID += snake[i][1] < 10 ? "0" + snake[i][1] : snake[i][1]
    //             // console.log("coordenada é " + coordinateID)
    //             let coordinateID = "cell"

    //             $("#" + coordinateID).attr("class", "cell" + " " + snakeBodyPart)

    //         }
    //         break;
    //     case "s":
    //     case "S":
    //         break;
    //     default:
    //         for (var i in snake) {
    //             let snakeBodyPart = ""
    //             if (i == "head") {
    //                 snakeBodyPart = "head"
    //             } else {
    //                 snakeBodyPart = "vertebra"
    //             }
    //             let coordinateID = "cell" // + apple[0] + apple[1]
    //             coordinateID += snake[i][0] < 10 ? "0" + snake[i][0] : snake[i][0]
    //             coordinateID += snake[i][1] < 10 ? "0" + snake[i][1] : snake[i][1]
    //             console.log("coordenada é " + coordinateID)


    //             $("#" + coordinateID).attr("class", "cell" + " " + snakeBodyPart)

    //         }


    // }

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
        console.log("coordenada é " + coordinateID)


        $("#" + coordinateID).attr("class", "cell" + " " + snakeBodyPart)
    }



}

function setApple(apple) {
    let coordinateID = "cell" // + apple[0] + apple[1]
    coordinateID += apple[0] < 10 ? "0" + apple[0] : apple[0]
    coordinateID += apple[1] < 10 ? "0" + apple[1] : apple[1]
    console.log("cordinateid é " + coordinateID)

    try {
        console.log("aqui ta indo")
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
snake = {
    "vertebra2": [14, 20],
    "vertebra1": [14, 19],
    "head": [14, 18]
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

direction = null
button = 'd'

$(document).ready(function() {

    $("#getKey").focus(function() {
        // window.alert(42)
        // console.log("alo mundo")
        $("#alert").hide();
        paused = false;
        console.log(paused)
    });

    // $("#hidden").focus


    // TODO ITS BUGGING.
    // GOTTA CORRECT LATER
    $("#getKey").focusout(function() {
        $("#alert").show();
        paused = true;
        console.log(paused)
    })

    // $(".board").click(function() {
    //     $("#getKey").focus();
    // })
});