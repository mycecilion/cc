function goto() {
  var response = grecaptcha.getResponse();
  if(response.length == 0) {
document.getElementById("cek").textContent="Check Captcha Box";
  }
  else { 
  window.location.href(tknpl());
  }
}
function backend_API_challenge() {
    var response = grecaptcha.getResponse();
    $.ajax({
        type: "POST",
        url: 'https://www.google.com/recaptcha/api/siteverify',
        data: {"secret" : grecap, "response" : response, "remoteip":"localhost"},
        contentType: 'application/x-www-form-urlencoded',
        success: function(data) { console.log(data); }
    });
}
if(window.location.href.indexOf("#?cap=1") != -1){	document.getElementById('cap').style.display="";
} 
if(window.location.href.indexOf("#?nocap=1") != -1){	document.getElementById('nocap').style.display="";
}
var tknpl = function(){
  var max = (links.length)
 window.location.href=(links[Math.floor(Math.random()*max)]);
  var link = links[randomNumber];
  window.location = "http://" + link;
}
var diyahayu= window.location.hostname;
var iddcsafe= "dc-safelink.blogspot.com";
if (diyahayu !== iddcsafe){window.location.href="https://dc-safelink.blogspot.com" ;}
if(-1!=window.location.href.indexOf("#?o=1")){var downloadTimer=setInterval(function(){timeleft<=0?(clearInterval(downloadTimer),document.getElementById("dcsafe").style.display="none",document.getElementById("dcgoto").style.display=""):document.getElementById("dcsafe").innerHTML=timeleft+typo,timeleft-=1},1e3);document.getElementById("dcsafe").style.display=""}function setCookie(e,t,n){const o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);let d="expires="+o.toUTCString();document.cookie=e+"="+t+";"+d+";path=/"}function getCookie(e){let t=e+"=",n=document.cookie.split(";");for(let e=0;e<n.length;e++){let o=n[e];for(;" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""}function dcgober(e){let t=getCookie("dcsafe");""!=t&&(window.location.href=t)}function dcgoto(){document.getElementById("dcgo").style.display="",document.getElementById("dcgoto").style.display="none"}
