var obj = {name:"Fido",breed:"Husky"};
var jObj = JSON.stringify(obj);

//var obj_json = '{"title":"Give a mouse a cookie."}';

// alert(obj_json);

// var oJson = JSON.parse(obj_json);

// alert(oJson.title);

// oJson.pageCount = 25;

// alert(oJson.pageCount);

// alert(JSON.stringify(oJson));

var arr_json = '[1,3,4,5,6,4,2]';
var arr_json = '[{"title":"Oz"},'+
                '{"title":"Hatchet"},'+
                '{"title":"Good Stuff"},'+
                '{"title":"Dune"},'+
                '{"title":"Magic"},'+
                '{"title":"Happiness"}]';

var arr = JSON.parse(arr_json);

arr[3].pageCount = 564;

// //alert(arr[5].title);
// for (var i = 0; i < arr.length; i++){
//     alert(arr[i].title);
// }

alert(JSON.stringify(arr));