// var p = document.getElementById("me");
// //for (var i = 0; i < p.length; i++){
// p.innerText = "A";
// //}

window.onload = function   (){
    // $("p:last").text("I am a paragraph");
    // $("#me").text("I am first");
    //  $("p span").text("I am a span.");

    //$("p span").append("today");
    //$("p span").prepend("I am happy");
    //$("p span").before("***");
    //$("p span").after("===");

    var obj = $("p");
    var chlds = obj.children();
    var gchilds = chlds.children();
    //var c = 3 + 5;
    //alert(obj);
    //var ans = "";
    for (var o of obj) {
    //    ans += o + "\n";
        o.style = "border: 1px solid #F00;";
    }

    var backchanged = obj.css("background-color", "#AAA");
        
    obj.text("am a ").append("paragraph").append(".")
        .prepend("I ").append("<span>I was added</span>");
        //.children().prepend("*");

    var newSpan =  $("<span></span>").text("Hello again.");
    obj.append(newSpan);
    newSpan.css("font-weight", "bold");
    obj.children().last().css("font-weight", "bold");


    for (var i = 0; i < obj.length; i++) {
        var p = obj[i];
        var j = obj.eq(i);
        p.innerText = "You found me";
        j.text("And changed");
        j[0].innerText = "back to basics";
        $(p).text("What about now?");
    }


    //alert(ans);
}