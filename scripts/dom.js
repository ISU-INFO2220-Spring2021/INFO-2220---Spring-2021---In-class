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
btn.setAttribute("onclick", "alert('I was clicked');");

div.appendChild(btn);
tcell.appendChild(btn);


var links = div.getElementsByTagName("a");
var isuLink = links[0];
//alert(isuLink);
alert(isuLink.parentNode);
tcell.appendChild(isuLink);
alert(isuLink.parentNode);




//alert(div.innerText);
//alert(div.innerHTML);
//alert(div.nodeValue);
//alert(div.textContent);
//alert(div.outerText);
//alert(div.outerHTML);
