// functions 


function createBoard() {
    var num = 0;
    const sizeBoard = 25
    for (var i = 1; i <= sizeBoard; i++) {

        $(".board").append(`<tr class="row" id="r${i}"></tr>`)
        for (var j = 1; j <= sizeBoard; j++) {
            $(`#r${i}`).append(`<td class="cell" id="col${i}${j}"></td>`)
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


// create board

$(document).ready(function() {
    console.log("Ola mundo")
    console.log("Ola mundo")
    console.log("Ola mundo")
    createBoard()
});

// create snake
snake = { "head": [25, 25] }

// set apple

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