//alert("works");

var doc = document;
var div = doc.getElementById("myDiv");
//alert(doc);
//alert(div);

var tcell = doc.getElementById("tdInnerText");
//tcell.innerText = div.innerHTML;
//tcell.setAttribute("title", "This is a tooltip.")
//tcell.className = "something another";
//tcell.innerText = "<strong>hello</strong>";
//tcell.innerHTML = "&lt;somthing&gt;"
tcell.innerHTML = "Some text";

var btn = document.createElement("button");
btn.innerText = "click me";
//btn.setAttribute("onclick", "alert('I was clicked');");
btn.setAttribute("onclick", "btnClicked(this);");
btn.setAttribute("data-name", "Mr. Awesome");

div.appendChild(btn);
tcell.appendChild(btn);


var links = div.getElementsByTagName("a");
var isuLink = links[0];
//alert(isuLink);
//alert(isuLink.parentNode);
tcell.appendChild(isuLink);
//alert(isuLink.parentNode);


//alert(div.innerText);
//alert(div.innerHTML);
//alert(div.nodeValue);
//alert(div.textContent);
//alert(div.outerText);
//alert(div.outerHTML);

function btnClicked(btnObj) {
    //a = 4;
    //var btn = btnObj;
    //var btnName = btn.getAttribute("data-name");
    //alert(btnName);
    //var btn = document.getElementById("btnBob");
    //alert(btnObj == btn);

    //alert(btnObj.nextSibling.nextSibling.innerText);
    //var sib = btnObj.nextSibling;
    //while (sib.nodeType !== 1) {
    //    sib = sib.nextSibling;
    //}
    //alert(sib.nodeName);
    alert(btnObj.parentNode.parentNode);
}
