
if(window.location.href.indexOf("#?o=1") != -1){
	document.getElementById('dcsafe').style.display="";
}

  
function dctimer() {
var timeleft = 17; //waktu countdown
var typo = "Please Wait"; // Tulisan
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("dcsafe").style.display="none";document.getElementById("dcgoto").style.display="";
  } else {
    document.getElementById("dcsafe").innerHTML = timeleft + typo;
  }
  timeleft -= 1;
}, 1000);
  
}
  
  
  function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function dcgo(cname) {
 let user = getCookie("dcsafe");
  if (user != "") {
    window.location.href=(user);
  }
}
  
function dcgoto() {
document.getElementById('dcgo').style.display="";document.getElementById('dcgoto').style.display="none";
  }
  
