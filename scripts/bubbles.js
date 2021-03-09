window.onload = function() {
    var obj = document.getElementById("art1").parentNode; // Section
    obj.onclick = function (e) {
        e = e || window.event; // always include this line.
        var tar = e.target || e.srcElement; // gets waht was clicked
        var cTar = e.currentTarget;
        if (tar.tagName === "P") {
            alert(tar.outerHTML + " is a Paragraph in" + cTar.tagName);
        } else {
            alert(tar.outerHTML + " should fire.");
        }
        return false;
    };

    obj.onmouseover = function (evt) {
        evt = evt || window.event;
        var tar = evt.target || evt.srcElement;
        //alert(typeof evt);
        if (tar.tagName == "P") {
            tar.className = "hovered";
        }
    };


    var paras = document.getElementsByTagName("p");
    for (var i = 0; i < paras.length; i++) {
        var par = paras[i];
        par.onmouseover = function () {
            this.className = "hovered";
            //alert("I entered a Paragraph;")
        };
        par.onmouseleave = function () {
            this.className = "";
            //alert("I entered a Paragraph;")
        };
    }
};


