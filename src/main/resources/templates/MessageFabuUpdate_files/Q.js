window.Q||(Q=function(e,n){n=n||document;var t=function(e){if(this.author="Zhang Yongfeng",this[0]=document.body,e&&e.substr){var t;if(e.match(/^<.+>$/)){if(e.match(/^<[a-zA-Z]+>$/)){var o=e.replace(/^<(.+)>$/,"$1");this[0]=n.createElement(o)}else if(e.match(/^<([a-zA-Z]+)((.*?>.*?<\/\1>)|(.+>))$/)){var i=n.createElement("div");i.innerHTML="$nbsp;"+e,this[0]=i.childNodes[1]}this.length=1}else if(e.match(/^#.+/))this[0]=n.getElementById(e.substr(1)),this.length=1;else if(e.match(/^\..+/)){t=n.getElementsByTagName("*"),this.length=0;for(var a,c=0,r=new RegExp("\\b"+e.substr(1)+"\\b");a=t[c];c++)String(a.className).match(r)&&(this[this.length++]=a)}else e.match(/[a-z]+/)&&(t=n.getElementsByTagName(e),Q.each(t,function(e,n){this[n]=e},this),this.length=t.length)}else if(e.nodeType&&1===e.nodeType||e===window)this[0]=e;else if(e.author===this.author){var s=this;e.each(function(e,n){s[n]=e})}return this};return t.prototype={each:function(e){for(var n,t=0;(n=this[t])&&e.call(this,n,t)!==!1;t++);return this},html:function(e){if(e===undefined){var n=[];return this.each(function(e){n.push(e.innerHTML)}),n.join("")}return e=e.toString(),e.match(/<script/i)&&(e="&nbsp;"+e),this.each(function(n){n.innerHTML=e}),this},text:function(e){if(e===undefined){var n=[];return this.each(function(e){n.push(e.innerText||e.textContent)}),n.join("")}return e=e.toString(),this.each(function(n){n.innerText?n.innerText=e:n.textContent=e}),this},append:function(e){if("function"==typeof e&&(e=e()),"string"==typeof e){var n=document.createElement("div");return n.innerHTML=e,this.each(function(e){Q.each(n.childNodes,function(n){e.appendChild(n.cloneNode(!0))},this)}),n.innerHTML="",n=null,this}return e.author===this.author?this.each(function(n){e.each(function(e){n.appendChild(e)})}):e.appendChild&&this.each(function(n){n.appendChild(e.cloneNode(!0))}),this},appendto:function(e){return this.each(function(n){e.appendChild(n)}),this},remove:function(){return this.each(function(e){e.parentNode&&e.parentNode.removeChild(e)}),this},clear:function(){for(;this[0];)this[0].parentNode&&this[0].parentNode.removeChild(this[0]),[].shift.call(this);return this.length=0,this},add:function(e){if("string"==typeof e)this.each(function(n){n.innerHTML=e});else if(e.appendChild)this.each(function(n){n.appendChild(e)});else if("object"==typeof e)for(var n in e)this.each(function(t){e.hasOwnProperty(n)&&t.setAttribute(n,e[n])});return this},className:function(e,n){if(null===e)this.each(function(e){e.className=""});else{if(e===undefined){var t=[];return this.each(function(e){t.push(e.className)}),t}this.each(function(t){n?t.className=e:t.className+=" "+e})}return this},css:function(e,n){if("string"==typeof e)this.className(e,n);else{var t="";for(var o in e)e.hasOwnProperty(o)&&(t+=";"+o+":"+e[o]);n?this.each(function(e){e.style.cssText=t}):this.each(function(e){e.style.cssText+=t})}return this},addTo:function(e,n){return"body"===e?e=document.body:"head"===e&&(e=document.getElementsByTagName("head")[0]),e.appendChild&&(n&&e.contains(n)?this.each(function(t){e.insertBefore(t,n)}):this.each(function(n){e.appendChild(n)})),this},onload:function(e){return e&&this.each(function(n,t){[].map?n.onload=function(){e.call(n,t)}:n.onreadystatechange=function(){"loaded"!==this.readyState&&"complete"!==this.readyState||e.call(n,t)}}),this},event:function(e,n){return e=e.replace(/^on/i,""),window.addEventListener?this.each(function(t,o){t.addEventListener(e,function(e){n&&n.call(t,e,o)},!1)}):window.attachEvent&&this.each(function(t,o){t.attachEvent("on"+e,function(){var e=window.event;e.target=e.srcElement,e.stopPropagation=function(){e.cancelBubble=!0},e.preventDefault=function(){e.returnValue=!1},n&&n.call(t,e,o)})}),this},getStyle:function(e){var n=this[0];return window.getComputedStyle?getComputedStyle(n)[e]:n.currentStyle[e]}},new t(e)},Q.version=2017.06281535,Q.fileExt="js",Q.appkey={cdn:3362611833,dev:2406394919},Q.isDebug=location.search.indexOf("debug")>=0,Q.isEmpty=function(e){if(""===e)return!0;if(e===undefined)return!0;if("object"==typeof e){if(e instanceof Array&&0===e.length)return!0;for(var n in e)if(e.hasOwnProperty(n))return!1;return!0}return!1},Q.getURI=function(e){for(var n,t=location.search.substr(1).split("&"),o=0,i={};n=t[o++];){var a=n.split("=");i[a[0]]=a[1]}return e===undefined?i:i[e]},Q.path=function(){for(var e,n=document.getElementsByTagName("script"),t=n.length-1;e=n[t];){t--;var o=e.src.match(/(.*?)Q\.(js|jsrc)$/);if(o){if(Q.fileExt=Q.isDebug?"jsrc":o[2],"jsrc"===Q.fileExt){Q.isDebug=!0;break}return o[1]}}return"//img.17k.com/2015/Q/"}(),Q.each=function(e,n,t){var o,i;if(t){for(o=0;i=e[o];o++)if(n.call(t,i,o)===!1)return!1}else for(o=0;i=e[o];o++)if(n(i,o)===!1)return!1;return!0},Q.map=function(e,n){for(var t,o=[],i=0;e[i];i++)(t=n(e[i],i))!==undefined&&o.push(t);return o},Q.lastTag=function(e){var n=document.getElementsByTagName(e);return n[n.length-1]},Q.ext=function(e,n){Q.loadJs(Q.path+"Q."+e+"."+Q.fileExt,function(t){Q[e].apply(Q[e],n),Q(t).remove()})},Q.onLogined=function(){},Q.isLogin=function(){return!(!Q.cookie("accessToken")&&!Q.cookie("c_u"))},Q.setIndexLoginInfo=function(e){Q.isLogin()&&(e=e||"Q_loginBar1",Q.when(function(){return!!document.getElementById(e)},function(){Q.ext("setIndexLoginInfo",arguments)})),Q.isLogin()&&Q.ext("setIndexLoginInfo",arguments)},Q.setLoginInfo=Q.setIndexLoginInfo,Q.login=function(e){"passport.17k.com"===location.host&&(location.href="//passport.17k.com"),Q.login.startInit||(Q.login.startInit=!0,Q.ext("login",arguments))},Q.loginPost=function(e,n){Q.post("//passport.17k.com/login.action?jsonp=true",function(n){e(n)},n)},Q.logout=function(){window.location.href="//passport.17k.com/logout?url="+encodeURIComponent(window.location)},Q.loadCss=function(e,n){return Q.loadCss.files=Q.loadCss.files||[],Q.each(Q.loadCss.files,function(n){return n!==e})===!0?(Q.loadCss.files.push(e),Q("<link>").add({text:"text/css",rel:"stylesheet",href:e}).onload(n).addTo("head")):n(),Q},Q.loadJs=function(e,n,t){var o=Q("<script>").add({type:"text/javascript",src:e}).addTo(t||"head"),i=[].map?"onload":"onreadystatechange";return o[0][i]=function(){var e=this.readyState||"";e&&"loaded"!==e.toString()&&"complete"!==e.toString()||n&&n(o)},Q},Q.pop=function(e,n,t){return Q.ext("pop",arguments),{close:function(){Q.pop.close()}}},Q.layout=function(e,n,t){Q.loadCss(Q.path+"skin/pop/pop.css",function(){var o=document.createElement("div");o.className="Q_POP",o.innerHTML='<div class="title">'+e+'</div><div class="content">'+n+"</div>";var i=Q.pop({content:o,theme:{closeHtml:'<div class="Q_POP_CLOSE"></div>'}},function(){t&&t.call(i)})})},Q.alert=function(e,n){var t=document.createElement("div");t.style.cssText="background:#fafafa;color:#333;text-align:center;padding:30px;width:260px;border:1px solid #ccc;",t.innerHTML=e;var o=document.createElement("input");o.type="button",o.value="确定",o.style.cssText="background:#EF5400;color:white;width:60px;height:30px;border:0;text-align:center;margin:20px auto 0;display:block",t.appendChild(o);var i=Q.pop({content:t,isClose:!1,bgColor:"#fff"});o.onclick=function(){n&&n(),i.close()},n&&Q("<div>").className("close_bar").event("click",i.close).appendto(t)},Q.warning=function(e,n){Q.loadCss(Q.path+"skin/warning/warning.css",function(){var t=document.createElement("span");t.className="close",t.onclick=function(){n&&n(),document.body.removeChild(i)};var o=document.createElement("span");o.innerHTML=e;var i=document.createElement("div");i.className="Q_artwc_warning";var a=document.createElement("div");a.className="context",a.appendChild(t),a.appendChild(o),i.appendChild(a),document.body.insertBefore(i,document.body.firstChild)})},Q.scrollX=function(e){Q.ext("scrollX",arguments)},Q.loading=function(e){var n=document.createElement("div");return n.style.cssText="background:#eee;color:#333;text-align:center;padding:30px;width:300px;border:6px solid #666;",n.innerHTML=e,Q.pop({content:n,isClose:!1})},Q.ajax=function(e,n,t,o){if(null===e)return null;n=n||new Function,e+=(e.match(/\?/)?"&r=":"?r=")+(new Date).getTime().toString().substr(0,8);var i=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");if(i.onreadystatechange=function(){4===this.readyState&&(200===this.status||304===this.status?n.call(this,this.responseText.match(/^[\[{].+[}\]]$/)?new Function("return "+this.responseText)():this.responseText,this.responseXML):n())},t){i.open("POST",e,!o),i.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");var a=[];t=t||{};for(var c in t)t.hasOwnProperty(c)&&a.push(c+"="+encodeURIComponent(t[c]));i.send(a.join("&"))}else i.open("GET",e,!o),i.send();return i},Q.ajaxCdn=function(e,n,t,o){n=n||new Function;var i=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");if(i.onreadystatechange=function(){4===this.readyState&&200===this.status&&n.call(this,this.responseText.match(/^[\[{].+[}\]]$/)?new Function("return "+this.responseText)():this.responseText,this.responseXML)},t){i.open("POST",e,!o),i.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");var a=[];t=t||{};for(var c in t)t.hasOwnProperty(c)&&a.push(c+"="+encodeURIComponent(t[c]));i.send(a.join("&"))}else i.open("GET",e,!o),i.send();return i},Q.jsonp=function(e,n,t){n&&n.prototype&&(n=[t,t=n][0]);var o=[],i="";if(n)for(i in n)o.push(encodeURIComponent(i)+"="+encodeURIComponent(n[i]));if(e+=(e.indexOf("?")===-1?"?":"&")+o.join("&"),e.indexOf("callback=")===-1){var a="jsonp"+Math.floor(1e4*Math.random());e+="&callback=Q."+a+"&jsonp=Q."+a,Q[a]=function(e){t&&t(e)}}else{var c=e.match(/callback=([^&]+)/);c&&(window[c[1]]=function(e){t&&t(e)})}e=e.replace("?&","?");var r=document.getElementsByTagName("head")[0],s=document.createElement("script");return s.src=e,r.appendChild(s),{abort:function(){Q[a]=new Function}}},Q.post=function(e,n,t){e+=e.match(/\?/)?"":"?&r="+Math.random(),Q.post_artwc_callback=n;var o,i="Q_post_artwc_iframe";document.getElementById(i)||([].map?(o=document.createElement("iframe"),o.name=i,o.id=i):o=document.createElement('<iframe name="'+i+'" id="'+i+'">'),document.body.appendChild(o),o.style.display="none");var a,c=document.createElement("form");c.target=i,c.action=e,c.method="post",t=t||{},t.postCallback="parent.Q.post_artwc_callback";for(var r in t)t.hasOwnProperty(r)&&(a=document.createElement("input"),a.type="hidden",a.name=r,a.value=t[r],c.appendChild(a));document.body.appendChild(c),c.submit(),document.body.removeChild(c),document.domain="17k.com"},Q.cookie=function(e,n,t,o,i){o="domain="+(o||"17k.com")+";",i="path="+(i||"/")+";";var a,c=new Date,r=new RegExp(e+"=(.*?)(;|$)","i");switch(n){case undefined:a=document.cookie.match(r),a=null===a?"":decodeURIComponent(a[1]);break;case null:a=Q.cookie(e),c.setTime(c.getTime()-1e9),document.cookie=e+"=;"+o+i+"expires="+c.toUTCString();break;default:t="number"==typeof t?t:30,c.setTime(c.getTime()+864e5*t);var s=0===t?"":"expires="+c.toUTCString();document.cookie=e+"="+encodeURIComponent(n)+";"+o+i+s,a=n}return a},Q.substr=function(e,n,t){t=t||"…",n=n||10;for(var o=new RegExp("[一-龥]"),i=0,a=-1;i<e.length;i++,a++)if(o.test(e[i])&&a++,a>=2*n)return e.substr(0,i-2)+t;return e},Q.printNum=function(e){return e=e||0,e<1e4?e:(e/1e4).toFixed(1)+"万"},Q.range=function(e,n){Q.ext("range",arguments)},Q.updateUserInfo=function(e){Q.jsonp("//passport.17k.com/get_info_cookie",function(n){e&&e(n)})},Q.userInfo=Q.loginInfo=function(){var e={},n=Q.cookie("c_u");if(!n)return e;n=n.replace('"',"").split("&"),e.nickName=function(e){var n=[];e=e.split("l");for(var t=0;t<e.length;t++)n.push(String.fromCharCode(e[t]));return n.join("")}(n[0]),e.userId=String(n[1]||""),e.type=String(Q.cookie("c_status")||"");var t=+new Date,o=Q.cookie("info_cookie_last_time");(!o||t-o>36e5)&&(Q.jsonp("//passport.17k.com/info_cookie",{type:4},function(){}),Q.cookie("info_cookie_last_time",t));var i=Q.cookie("c_i").toString().split("&")||new Array(6);return e.flower=i[0],e.isAuthor="true"===i[1],e.pkVote=i[2],e.replay=i[3],e.at=i[4],e.isPay="0"!==i[5],e},Q.getUserInfo=function(e,n,t){Q.jsonp("//userapi.17k.com/user/getUserInfo.action?size="+(t||50)+"&userId="+n,function(n){e(n)})},Q.bookid=function(){var e=location.pathname.match(/^\/(?:book|list)\/(\d+)\.html/i);return e?Number(e[1]):0}(),Q.chapterid=function(){var e=location.pathname.match(/^\/chapter\/(\d+)\/(\d+)\.html/i);return e?(Q.bookid=Number(e[1]),Number(e[2])):0}(),Q.bookBigData=function(e){!Q.bookBigData.fn&&(Q.bookBigData.fn=[]),e&&Q.bookBigData.fn.push(e),Q.bookBigData.json?Q.bookBigData.next():Q.loadJs("//www.17k.com/book/"+Q.bookid+".js?r="+(new Date).getTime().toString().substr(0,8)),Q.bookBigData.load=function(e){var n=e.client_first;if(n&&n.chapter_first){var t=n.chapter_first[Q.chapterid];t&&(e.appTime=1e3*(t+n.second_first),e.appTime<(new Date).getTime()&&(e.appTime=0))}Q.bookBigData.json=e,Q.bookBigData()},Q.bookBigData.next=function(){if(!Q.bookBigData.isRuning&&Q.bookBigData.fn.length&&!Q.isEmpty(Q.bookBigData.json)){Q.bookBigData.isRuning=!0;var e=Q.bookBigData.fn[0](Q.bookBigData.json);Q.bookBigData.fn.shift(),Q.bookBigData.isRuning=!1,e?(Q.bookBigData.json=null,Q.bookBigData()):e===!1?Q.bookBigData.fn=[]:Q.bookBigData.next()}}},Q.bookmark=function(e){e=e||Q.bookid,Q.login(function(){Q.ajax("/book/continueRead.action",function(n){if(n){var t=parseInt(n.bookMarkId);switch(t){case-1:Q.alert("请先登录!");break;case 0:Q.alert("很抱歉，您还没有为此书添加书签。<br><br>如何添加书签：在章节阅读页面，点击“加入书签”，即可保存您的阅读记录.");break;default:window.location="/chapter/"+e+"/"+t+".html"}}},{bookid:e})})},Q.bookshelf=function(e,n){e=e||Q.bookid,n=n||Q.chapterid;var t={bookId:e};n&&(t.chapterId=n),Q.login(function(){Q.ajax("/bookShelf/bookshelf.action",function(n){if(n){var t=["收藏成功！","收藏失败。","书签加入成功！","本书已经收藏过了！"],o=Number(n.status);Q.alert(t[o]),window.sa&&sa.track("Favorites",{task:"www",guid:Q.guid,bookid:e,userid:Q.loginInfo().userId,username:Q.loginInfo().nickName,isauthor:Q.loginInfo().isAuthor?"是":"否",bookname:"",favstatus:t[o]})}},t)})},Q.guid=function(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)},n=Q.cookie("GUID");return n||(n=e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e(),Q.cookie("GUID",n,365,"17k.com","/")),n}(),Q.reward=function(e,n){Q.ext("reward",arguments)},Q.comment=function(e,n,t,o){Q.ext("comment",arguments)},Q.topic=function(e,n,t,o,i){Q.ext("topic",arguments)},Q.ppt=function(e,n){Q.ext("ppt",arguments)},Q.topPage=function(e,n){n=n||10;for(var t,o=e.getElementsByTagName("li"),i=o.length-1,a=o[i],c=[],r=0;r<i;)t=document.createElement("a"),t.href="javascript:void(0)",t.className="page",t.innerHTML=1+r+"-"+(r+=n),a.appendChild(t),t.onmouseover=function(){for(var e=this.innerHTML.split("-"),n=1;n<=i;n++)n<e[0]||n>e[1]?o[n-1].style.display="none":o[n-1].style.display="block";n=0;for(var t;t=c[n++];)t.className="page";this.className="page hot"},c.push(t);c[0].onmouseover()},Q.tabCall=function(e,n,t,o){t=t||"onclick",o=o||0,n=n||new Function,Q.each(e,function(i,a){i.rel=a,i.className="",i[t]=function(){e[o].className="",this.className="now",n.call(this,a),o=this.rel},""===i.getAttribute("href")&&(i.href="javascript:void(0)")}),e[o].className="now",n.call(e[o],o)},Q.tab=function(e,n,t,o){t=t||"onmouseover",o=o||0,Q.each(e,function(i,a){n[a].style.display="none",i.setAttribute("rel",a),i.className="",i[t]=function(){e[o].className="",n[o].style.display="none",n[this.getAttribute("rel")].style.display="block",this.className="now",o=this.getAttribute("rel")},""===i.getAttribute("href")&&(i.href="javascript:void(0)")}),n[o].style.display="block",e[o].className="now"},Q.TABBOX=function(){Q(".TABBOX").each(function(e){var n=Q("a",Q(".type",e)[0]),t=Q(".TYPE",e),o=Q("a",Q(".box",e)[0]);n.each(function(e,i){e.href="javascript:void(0)",e.rel=i,e.onmouseover=function(){t.each(function(e){e.style.display="none"}),n.each(function(e){e.className=""});var e=this.rel;n[e].className="now",t[e].style.display="block",o.each(function(n,i){n.href="javascript:void(0)",n.rel=i,n.onmouseover=function(){var n=Q(".BOX",t[e]);n.each(function(e){e.style.display="none"}),o.each(function(e){e.className=""});var i=this.rel;o[i].className="now",n[i].style.display="block"},n.className.indexOf("now")!==-1&&n.onmouseover()})},e.className.indexOf("now")!==-1&&e.onmouseover()})})},Q.scrollTo=function(e){var n=0,t=Math.max(document.documentElement.scrollTop,document.body.scrollTop);e&&e.tagName?n=e.offsetTop:e>0&&(n=e);var o=0,i=n-t,a=function(){o<10&&(o++,window.scrollTo(0,t+i*Math.pow(o/10,2.2)),setTimeout(a,10))};a()},Q.floatBar=function(){window.XMLHttpRequest&&Q("<div>").className("FloatBar").html('<a class="wx" href="javascript:;"><img src="//img.17k.com/2015/skin/img/app.png" srcset="//img.17k.com/2015/skin/img/app@2x.png 2x"></a>').append(Q('<a class="kf_a" title="客服" href="javascript:;">').event("click",function(){var e=this.nextSibling;e.style.display=e.clientHeight?"none":"block"})).append(Q('<dl class="Kefu">').append(Q("<dd>").html("<p>电话(9:00-24:00)<br><strong>400 6175 217</strong></p>").append(Q('<a href="javascript:;">在线客服</a>').event("click",function(){this.parentNode.parentNode.style.display="none",window.easemobim?easemobim.bind({tenantId:24961,visitor:{trueName:Q.loginInfo().userId,userNickname:Q.loginInfo().nickName}}):(window.easemobim={config:{onready:function(){var e=Q.cookie("24961"),n=new Date;n.setTime(n.getTime()-1e9),document.cookie="24961=;expires="+n.toUTCString(),Q.cookie("24961",e)},tenantId:24961,hide:!0,autoConnect:!1,satisfaction:!0}},Q.loadJs("http://kefu.easemob.com/webim/easemob.js",function(){easemobim.bind({tenantId:24961,visitor:{trueName:Q.loginInfo().userId,userNickname:Q.loginInfo().nickName}})}))})).append(Q('<a href="//www.17k.com/Simple/contents/helpCenter/index.html?typeId=22" target="_blank">帮助/反馈</a>').event("click",function(){this.parentNode.parentNode.style.display="none"})))).append(Q('<a class="to" href="javascript:Q.scrollTo()">')).appendto(document.body)},Q.floatNav=function(e){for(var n,t=e.getElementsByTagName("a"),o=0;n=t[o++];)if(location.href===n.href){n.className="now";break}if(window.XMLHttpRequest){var i=document.createElement("div");i.innerHTML="<div>"+e.innerHTML+"</div>",i.className="Nav FloatNav",[].map?document.body.appendChild(i):window.attachEvent("onload",function(){document.body.insertBefore(i,e.nextSibling)}),window.onscroll=function(){var n=Math.max(e.scrollTop,e.offsetTop),t=document.documentElement.scrollTop||document.body.scrollTop;i.style.display=t>n?"block":"none"}}},Q.notification=function(e,n,t,o){if(window.Notification){var i=encodeURI(e+n),a=function(){if(!Q.cookie(i)){var a=new Notification(e,{body:n,icon:"favicon.ico"});a.reset=function(){Q.cookie(i,null)},a.onclick=function(){a.close(),t&&t.call(a)},a.onclose=function(){o&&o.call(a)},a.onshow=function(){Q.cookie(i,1,0)}}};"granted"===Notification.permission?a():"denied"!==Notification.permission&&Notification.requestPermission(function(e){"granted"===e&&a()})}else Q.Notification=new Function},Q.onDomLoaded=function(e){if(document.addEventListener)document.addEventListener("DOMContentLoaded",e);else{Q.isEmpty(Q.onDomLoaded.fn)&&(Q.onDomLoaded.fn=[]),Q.onDomLoaded.fn.push(e);var n=function(){try{for(document.documentElement.doScroll("left");Q.onDomLoaded.fn.length;)Q.onDomLoaded.fn.shift()()}catch(e){setTimeout(n,100)}};n()}},Q.onLoaded=function(e){Q(window).event("load",e)},Q.when=function(e,n,t){var o=0,i=function(){e()===!0?n():++o<30?setTimeout(i,100):t&&t()};i()},Q.isCPS=function(e){var n=Q.cookie("c_csc"),t=Q.cookie("c_channel");return"url"===e&&(n=Q.getURI("hmsr"),t=Q.getURI("c_channel")),!(!n||!t||0!==t.indexOf("CPS-")||0!==n.indexOf(t))&&(!e||0!==e.indexOf("CPS-")||(t===e||!Q.isLogin()&&Q.getURI("c_channel")===e))}),Q.loadReactComponent=function(e,n){var t=function(){Q.loadJs(e.url,function(){"use strict";ReactDOM.render(React.createElement(window[e.name],e.props||null),e.box,e.callback||new Function)})};window.React&&window.ReactDOM?t():Q.loadJs("//img.17k.com/react/16.2/react.production.min.js",function(){Q.loadJs("//img.17k.com/react/16.2/react-dom.production.min.js",function(){t()})})};