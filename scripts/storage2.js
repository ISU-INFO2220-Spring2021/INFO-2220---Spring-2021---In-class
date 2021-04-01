var value = "hello";
if(typeof Storage == "undefined"){
    // we have no storage
    alert("your browser does not support this page. Please try another browser.")
}else{
    // we have storage

    // localStorage.setItem("fruit","banana");
    // localStorage.setItem("fruit","dragon fruit");

    // localStorage["color"] = "red";
    // localStorage.number = 2;

    //alert("got some")
    window.onload = function () {
        var btnSave = document.getElementById("btnSaveName");
        btnSave.onclick = function () {
            var txt = document.getElementById("txtName");
            //localStorage.name = txt.value;
            sessionStorage.name = txt.value;
        };

        var btnShow = document.getElementById("btnShowIt");
        btnShow.onclick = function () {
            var name = sessionStorage.name;
            value = name;
            alert(name);
            
        };
        var btnShowVal = document.getElementById("btnShowVariable");
        btnShowVal.onclick = function () {
            alert(value);
        };
    };
}