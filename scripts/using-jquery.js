// var p = document.getElementById("me");
// //for (var i = 0; i < p.length; i++){
// p.innerText = "A";
// //}

window.onload = function   (){
    // $("p:last").text("I am a paragraph");
    // $("#me").text("I am first");
    //  $("p span").text("I am a span.");

    $("p span").append("today");
    $("p span").prepend("I am happy");
    $("p span").before("***");
    $("p span").after("===");


}