console.log("hello world")

$(document).ready(function() {
    $("#getKey").keyup(function() {
        let x = $("#getKey").val();
        let lastChar = x.slice(-1)
        $("#getKey").val(lastChar)
        console.log(x)
        $("#showKey").text(lastChar);
    });


    $("#hidden").focus(function() {
        window.alert(42)
        console.log("alo mundo")
            // $("#alert").hide();
    });




});