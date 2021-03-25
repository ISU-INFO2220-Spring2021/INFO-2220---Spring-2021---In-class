var obj = { name: "Fido", breed: "Husky" };
var jObj = JSON.stringify(obj);

//var obj_json = '{"title":"Give a mouse a cookie."}';

// alert(obj_json);

// var oJson = JSON.parse(obj_json);

// alert(oJson.title);

// oJson.pageCount = 25;

// alert(oJson.pageCount);

// alert(JSON.stringify(oJson));

// var arr_json = '[1,3,4,5,6,4,2]';
// var arr_json = '[{"title":"Oz"},'+
//                 '{"title":"Hatchet"},'+
//                 '{"title":"Good Stuff"},'+
//                 '{"title":"Dune"},'+
//                 '{"title":"Magic"},'+
//                 '{"title":"Happiness"}]';

//var arr = JSON.parse(arr_json);

// arr[3].pageCount = 564;

// //alert(arr[5].title);
// for (var i = 0; i < arr.length; i++){
//     alert(arr[i].title);
// }

//alert(JSON.stringify(arr));

var o = {
    name: "value"
    , fname: function () { }
};

function hasName() { }

$(document).ready(function () {
    $("#btnGetData").click(function () {
        $.ajax({
            url: "data/ourdata.json"
            , datatype: "json"
            , success: function (dataFromFile) {
                //try
                //alert("when good");
                //alert(dataFromFile[0].title);
                //alert(dataFromFile);
                if (dataFromFile.ok) {
                    // data was good
                    //var out = "";
                    var arr = dataFromFile.data;
                    var ul = $("#ulResults"); 
                    ul.empty();
                    var txtToFind = $("#txtFindIt")[0].value;
                    txtToFind = txtToFind.toLowerCase();
                    //alert(txtToFind);
                    for (var obj of arr) {
                        //out += obj.text + " | ";
                        var txtToSearch = obj.text.toLowerCase();
                        if (txtToSearch.indexOf(txtToFind) > -1) {
                            var li = $("<li/>");
                            li.text(obj.text);
                            ul.append(li);
                        }
                    }
                    //alert(out);
                }
            }
            , error: function (xObj, errMess) {
                //catch
                if (xObj.status == 404) {
                    errMess = "File now found";
                }

                alert("had problem: " + errMess);

            }
            , complete: function () {
                //finally
                //alert("Always");
            }
        });
    });
});

// window.onload = function () {
//     var btn = document.getElementById("btnGetData");
//     btn.onclick = function () {
//         $.ajax()
//     };
// };


//A - Asynchronous
//J - JavaScript
//A - And
//X - {XML} - Anything (variable x)