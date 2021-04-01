
window.onload = function () {
    var theme = "site";
    if (typeof Storage != "undefined") {
        if (typeof localStorage.theme != "undefined") {
            var obj = JSON.parse(localStorage.theme);
            updateTheme(obj.name, obj.theme);
        }
    }
    var ddl = document.getElementById("ddlThemes");
    if (ddl) {
        ddl.onchange = function (e) {
            e = e || window.event;
            var myname = "";
            // ddl changed
            var myDDL = e.currentTarget;
            var ndx = myDDL.selectedIndex;
            var option = myDDL.options[ndx];
            theme = option.value;
            if (theme == "") {
                theme = "site";
            }
            if (typeof Storage != "undefined") {
                myname = document.getElementById("txtName").value;
                var obj = { name: myname, theme: theme };
                localStorage.theme = JSON.stringify(obj);
            }
            updateTheme(myname, theme);
        }
    };

};

function updateTheme(name, theme) {
    var head = document.getElementById("header");
    var newP = document.createElement("p");
    newP.innerText = "Hello, " + name;
    head.appendChild(newP);
    var sty = document.getElementById("styPage");
    sty.href = "/styles/" + theme + ".css";
}