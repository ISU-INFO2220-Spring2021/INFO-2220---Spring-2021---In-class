
function Animal(nme) {
    this.name = nme;
    this.age = 2;
    //alert("Animal was called");
    //alert("The animal is " + this.age);
    this.sayName = function() {
        return this.name;
    }

    this.soundOff = makeNoise;

    function makeNoise() {
        return "Growl";
    }
}

var dog = new Animal("Fido");

//alert(typeof dog);
//alert(dog.name);
dog.name = "Pete";
//alert(dog.name);
//alert(dog.sayName());
//sayYourName(dog);
//alert(dog.soundOff());

function sayYourName(ani) {
    alert(ani.sayName());
}

//window.onload = function (e) {
//    loadMe(e);
//    btnOver();
//};

window.onload = loadMe;

function loadMe(e) {
    e = e || window.event;
    var btn = document.getElementById("btnA");
    //alert(btn);
    btn.onclick = function (e) {
        e = e || window.event;
        alert("I was clicked");
    };

    if (3 > 5) {
        alert("big");
        alert("something");
    }

    btnOver();

    btn.onmouseenter = btnOver;
    getSpan("para");
}


function btnOver() {
    this.className = "over";
}


function getSpan(parID) {
    var par = document.getElementById(parID);
    var ul = par.childNodes[1];
    var lis = ul.getElementsByTagName("li");
    var spn = lis[1].childNodes[0];
    return spn;

}