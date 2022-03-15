var open= "https://www.sub2unlock.my.id/p/halaman-kon-2.html#?a=1";
function checkRecaptcha() {
  var response = grecaptcha.getResponse();
  if(response.length == 0) { 
    //reCaptcha not verified
    document.getElementById("cek").textContent="Check Captcha Box";
  }
  else { 
  window.location.href=(open);
  }
}

// implement ono
function backend_API_challenge() {
    var response = grecaptcha.getResponse();
    $.ajax({
        type: "POST",
        url: 'https://www.google.com/recaptcha/api/siteverify',
        data: {"secret" : "6LcyndkeAAAAAPbBGLKiJWjjFxll1IwvBs_HlexM", "response" : response, "remoteip":"localhost"},
        contentType: 'application/x-www-form-urlencoded',
        success: function(data) { console.log(data); }
    });
}

/*  */
/*jkueri */
jQuery(document).ready(function() {
var sec = 8
var timer = setInterval(function() {
   $("#DCMedia span").text(sec--);
   if (sec == 0) {
$("#cap").delay(1000).fadeIn(1000);
$("#DCMedia").hide(1000) .fadeOut(fast);}
},1000);
});

/*  */

if(window.location.href.indexOf("#?z=1") != -1){
document.getElementById("adsTekno1").style.display="";
}else{
document.getElementById("adsTekno2").style.display="none"
;}


//    

if(window.location.href.indexOf("#?b=1") != -1){
window.onload = function() {
    var 
        ads1 = document.getElementById('ads1'),
        ads2 = document.getElementById('ads2'), 
        ads4 =
document.getElementById('adsTekno2'),
        ades = 10,
        ade = 0,
        interval;

    ads2.style.display = 'none';ads4.style.display="";

    interval = setInterval(function() {
        ads1.firstChild.data = 'Please wait... ' + ' ';
        if (ade >= ades) {
            ads2.style.display = 'block';ads1.style.display = 'none';
            clearInterval(interval);
        }

        ade++;
    }, 1000);
}
}else{
document.getElementById("adsTekno2").style.display="";
;}

function iklango(){
window.location.href="https://google.com?tujuan"
;
}
