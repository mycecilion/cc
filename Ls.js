  function goto() {
  var response = grecaptcha.getResponse();
  if(response.length == 0) { 
    //reCaptcha not verified
    document.getElementById(&quot;cek&quot;).textContent=&quot;Check Captcha Box&quot;;
  }
  else { 
  window.location.href(tknpl());
  }
}

// implement ono
function backend_API_challenge() {
    var response = grecaptcha.getResponse();
    $.ajax({
        type: &quot;POST&quot;,
        url: &#39;https://www.google.com/recaptcha/api/siteverify&#39;,
        data: {&quot;secret&quot; : grecap, &quot;response&quot; : response, &quot;remoteip&quot;:&quot;localhost&quot;},
        contentType: &#39;application/x-www-form-urlencoded&#39;,
        success: function(data) { console.log(data); }
    });
}
  

if(window.location.href.indexOf(&quot;#?cap=1&quot;) != -1){
	document.getElementById(&#39;cap&#39;).style.display=&quot;&quot;;
}
  
if(window.location.href.indexOf(&quot;#?nocap=1&quot;) != -1){
	document.getElementById(&#39;nocap&#39;).style.display=&quot;&quot;;
}
  
var tknpl = function(){
  var max = (links.length)
 window.location.href=(links[Math.floor(Math.random()*max)]);
  var link = links[randomNumber];
  window.location = &quot;http://&quot; + link;
};
var diyahayu= &quot;<data:blog.blogId/>&quot;;
var iddcsafe= &quot;2466203675768100431&quot;;
if (diyahayu !== iddcsafe){window.location.href=&quot;https://dc-safelink.blogspot.com&quot; ;}
