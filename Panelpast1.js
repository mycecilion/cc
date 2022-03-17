var dmn= "https://www.sub2unlock.my.id/p/pastelink-g.html";
var par = "?sb=";
var asuk = "&lk=";
function generate() {
var name = document.getElementById('inputname').value;
var name2 = window.btoa(name) ;
var name3 = window.btoa(name2) ;
var urll = document.getElementById('inputurl').value;
var url2 = window.btoa(urll) ;
var url3 = window.btoa(url2) ;
var dampak= document.getElementById("lurl").value=dmn + par + name3 + asuk + url3;
var memek= document.getElementById("resultLink").style.display="";
}
