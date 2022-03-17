function get(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
  
var gett= get('sb');
var lkk= get('lk') ;
var nm= window.atob(gett) ;
var nm2= window.atob(nm) ;
var lk= window.atob(lkk);
var lk2= window.atob(lk) ;

var amnm= document.getElementById("nama").textContent= nm2;
  function goto() {
window.location.href=lk2;
 }
