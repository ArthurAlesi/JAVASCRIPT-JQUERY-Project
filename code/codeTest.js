console.log("hello world")

$(document).ready(function() {
    let paused = true;
    $("#getKey").keydown(function() {
        let x = $("#getKey").val();
        let lastChar = x.slice(-1)
        $("#getKey").val(lastChar)
        console.log(x)
        $("#showKey").text(lastChar);
    });


    $("#getKey").focus(function() {
        // window.alert(42)
        // console.log("alo mundo")
        $("#alert").hide();
        paused = false;
        console.log(paused)
    });

    // $("#hidden").focus


    $("#getKey").focusout(function() {
        $("#alert").show();
        paused = true;
        console.log(paused)
    })

});