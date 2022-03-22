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
