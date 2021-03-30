var dat = new Date();
dat.setTime(dat.getTime() + 120000);
document.cookie = "variety=chocolate;expires=" + dat.toUTCString();
document.cookie = "count=13";
// alert("I was fired");

window.onload = function () {
    var btnSave = document.getElementById("btnSaveName");
    btnSave.onclick = function () {
        var txt = document.getElementById("txtName");
        //alert(txt.id + " | " + txt.value);
        document.cookie = "name="+ txt.value;
    };

    var btnShow = document.getElementById("btnShowIt");
    btnShow.onclick = function () {
        var cooks = document.cookie;
        var cooksArr = cooks.split(";");
        //alert(cooks);
        for(var keypair of cooksArr){
            var pyparts = keypair.split("=");
            var key = pyparts[0].trim();
            var vall = pyparts[1]; //keypair.substr(0,keypair.indexOf("="));
            //alert(key);
            if (key === "name"){
                //alert(key + " | " + vall);
                alert("Your name is " + vall);
            }
        }
    };
};