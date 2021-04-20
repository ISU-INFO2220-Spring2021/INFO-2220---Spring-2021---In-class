/// <reference path="jquery-3.1.1.js" />

// Practice Test

$(document).ready(function () {
    $("#btnAny").click(function () {
        alert($(this).attr("id"));
    });

    $("#spnClick").click(function () {
        addSomething(this,"I was added!");
    });

    $("#btnMore").on("click", doThis);
});

function clearLinks() {
    $("a").removeClass();
}

function addList() {
    var div = $("<div>");
    var ul = $("<ul>");
    ul.append($("<li>").text("One"));
    ul.append($("<li>").text("Two"));
    ul.append($("<li>").text("Three"));
    ul.append($("<li>").text("Four"));
    ul.appendTo(div);
    div.appendTo($("#myHolder"));
}

function changeClasses() {
    $("p").addClass("textHolder");
}

function doThis() {
    alert($(this).parent()[0].tagName);
}

function changeListText() {
    $("li").eq(2).text("Text was changed.");

}

function addSomething(obj, str) {
    var newP = $("<p>").text(str);
    $(obj).parent().parent().append(newP);
}

function changeSpans() {
    $("#someText span").append("- Added Here");
}
var toggle = true;
function moveText() {
    var p,t;
    if (toggle) {
        p = $("#myParagraph");
        t = p.next();
    } else {
        p = $("#myParagraph").next();
        t = p.prev();
    }
    toggle = !toggle;
    t.text(p.text());
    p.text("");
}