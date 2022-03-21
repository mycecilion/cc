<script>
var grecap= "6LeYcvkeAAAAAH0s2ptetBVVOqjMKruRJRJhpmTK";
/*MASUKAN RECAPTCHA secret key disini */
var links = [
'https://dc-safelink.blogspot.com/2016/04/ketahui-cara-mencegah-mata-ikan-yang.html#?o=1',
'https://dc-safelink.blogspot.com/2016/04/ketahui-cara-mencegah-mata-ikan-yang.html#?o=1',
'https://dc-safelink.blogspot.com/2016/04/ketahui-cara-mencegah-mata-ikan-yang.html#?o=1'
  ];

var timeleft = 17; /*waktu countdown*/
var typo = "  Second - Please Wait"; /* Tulisan */
-1!=window.location.href.indexOf("#?cap=1")&&(document.getElementById("cap").style.display=""),-1!=window.location.href.indexOf("#?nocap=1")&&(document.getElementById("nocap").style.display="");

function goto()
{0==grecaptcha.getResponse().length?document.getElementById("cek").textContent="Check Captcha Box":window.location.href(tknpl())}function backend_API_challenge(){var e=grecaptcha.getResponse();$.ajax({type:"POST",url:"https://www.google.com/recaptcha/api/siteverify",data:{secret:grecap,response:e,remoteip:"localhost"},contentType:"application/x-www-form-urlencoded",success:function(e){console.log(e)}})}var tknpl=function(){var e=links.length;window.location.href=links[Math.floor(Math.random()*e)];e=links[randomNumber];window.location="http://"+e};function setCookie(e,t,n){const o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);n="expires="+o.toUTCString();document.cookie=e+"="+t+";"+n+";path=/"}function getCookie(e){var n=e+"=",o=document.cookie.split(";");for(let t=0;t<o.length;t++){let e=o[t];for(;" "==e.charAt(0);)e=e.substring(1);if(0==e.indexOf(n))return e.substring(n.length,e.length)}return""}function dcgo(e){var t=getCookie("dcsafe");""!=t&&(window.location.href=t)}-1!=window.location.href.indexOf("#?o=1")&&(document.getElementById("dcsafe").style.display="",setInterval(function(){timeleft<=0?(clearInterval(dcsafe),document.getElementById("dcsafe").style.display="none",document.getElementById("dcgoto").style.display=""):document.getElementById("dcsafe").innerHTML=timeleft+typo,--timeleft},1e3));
function dcgober(cname) {
 let user = getCookie("dcsafe");
  if (user != "") {
    window.location.href=(user);
  }
}
  
function dcgoto() {
document.getElementById('dcgo').style.display="";document.getElementById('dcgoto').style.display="none";
  }
var diyahayu=document.getElementById("DCSAFE").textContent,iddcsafe="7725653093957515586",healing="<style>body{background:black;}</style><div id="dyahayu"><div class='text-white'><div class='h1'>peringatan</div><br/><div class='h6'>lisensi tidak valid silahkan hubungi kami di admin dc-safelink</div><a href='https://t.me/jfznfsngskgdoyxlhdkydiydyo' class='btn btn-light btn-block nav-light'>gcxhchcjchc</a></div></div>";diyahayu!==iddcsafe&&(document.getElementById("healing").innerHTML=healing);

</script>
