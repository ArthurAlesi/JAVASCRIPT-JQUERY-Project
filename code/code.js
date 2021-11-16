// functions 


function createBoard() {
    var num = 0;
    for (var i = 1; i <= 50; i++) {

        $(".board").append(`<tr class="row" id="r${i}"></tr>`)
        for (var j = 1; j <= 50; j++) {
            $(`#r${i}`).append(`<td class="cell" id="col${i}${j} row_number=${i} col_number=${j}"></td>`)    
            $(`#${i}${j}`).attr("rownumber",i)
            $(`#${i}${j}`).attr("colnumber",i)
        }
    }
    console.log("fim create board")
  
    

}



// create board

$(document).ready(function() {
    console.log("Ola mundo")
    console.log("Ola mundo")
    console.log("Ola mundo")
    createBoard()
});

// create snake
snake = {"head": (25,25)}
// set apple

// run game