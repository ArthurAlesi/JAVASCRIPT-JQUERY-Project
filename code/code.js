// functions 

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

    let headFuture;
    switch (direction) {

        case "d" || "D":


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
snake = { "head": [25, 25] }

// set apple
apple = [14, 18]
$(document).ready(function() {
    setApple(apple)

})

// run game

direction = "right"
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