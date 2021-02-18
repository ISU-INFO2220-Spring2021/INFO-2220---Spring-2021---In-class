
document.forms[0].onsubmit = function () {
    var val = document.getElementById("txtName").value;
    if (val !== "something") {
        // good to go
    } else {
        alert("You did not provide a name.")
        //we will stay here.
        //return false;
    }
}

