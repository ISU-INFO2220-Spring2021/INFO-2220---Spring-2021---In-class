// window.onload = windowLoaded;

// function windowLoaded(){
//     var btnTwo = document.getElementById("btnTwo");
//     alert(btnTwo);
//     btnTwo.onclick = btnOne_click;
// }


window.onload = function () {
    var btnTwo = document.getElementById("btnTwo");
    btnTwo.onclick = btnOne_click;

    var btnOne = document.getElementById("btnOne");
    btnOne.addEventListener("click", btnOne_Again);
    btnOne.addEventListener("click", btnOne_click);
    btnOne.onclick = btnOne_Else;

}

function btnOne_click() {
    alert("I was clicked");
}


function btnOne_Again() {
    alert("I was clicked again!");
}

function btnOne_Else() {
    alert("Or was I clicked?");
}

