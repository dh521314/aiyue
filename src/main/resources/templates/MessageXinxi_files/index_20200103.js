!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.emonitor={})}(this,function(e){"use strict";var t=Object.prototype.toString,r=Object.prototype.hasOwnProperty,n=function(e){return"[object Array]"===t.call(e)},o=function(e){return"[object Object]"===t.call(e)},i=function(e){return"string"==typeof e},a=function(e){return"function"==typeof e},s=function(e,t){return r.call(e,t)},c=function(e){if(!e)return{};var t=document.createElement("a");return t.href=e,{host:t.host,path:t.pathname,hostname:t.hostname,protocol:t.protocol.slice(0,-1)}},d={duration:"delay",name:"resurl",type:"type"},u=["css","script","img","video","audio"],p=["cdn","cgi"],l=["s_path","s_uuid","s_traceid","s_guid","s_appid","s_vuserid","hc_pgv_pvid","s_omgid","err_desc"],m=(function(){function e(e){this.value=e}function t(t){function r(o,i){try{var a=t[o](i),s=a.value;s instanceof e?Promise.resolve(s.value).then(function(e){r("next",e)},function(e){r("throw",e)}):n(a.done?"return":"normal",a.value)}catch(e){n("throw",e)}}function n(e,t){switch(e){case"return":o.resolve({value:t,done:!0});break;case"throw":o.reject(t);break;default:o.resolve({value:t,done:!1})}(o=o.next)?r(o.key,o.arg):i=null}var o,i;this._invoke=function(e,t){return new Promise(function(n,a){var s={key:e,arg:t,resolve:n,reject:a,next:null};i?i=i.next=s:(o=i=s,r(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),h=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v=function(){},g=function(e){var t=e.name,r=e.url,n=void 0===r?window.location.href:r;t=t.replace(/[\[\]]/g,"\\$&");var o=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(n);return o&&o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):""},y=function(e){for(var t=encodeURIComponent(e)+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var o=r[n];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(t))return decodeURIComponent(o.substring(t.length,o.length))}return null},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Math.random()<=e},_=function(e,t,r){var n=null;return function(){for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];var s=this;clearTimeout(n),n=setTimeout(function(){e.apply(s,i),"function"==typeof r&&r()},t)}},b=function(e){var t=[];for(var r in e)t.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t.join("&")},x=function(e){var t=e.baseUrl,r=e.data,n=e.method,o=void 0===n?"GET":n;if("GET"===o){var i=new Image;i.onerror=function(){i=null},i.onload=function(){i=null},i.src=t+"&"+b(r)}else if("POST"===o)try{var a=null;(a=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")).open("POST",t,!0),a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.send(b(r))}catch(e){console.warn("xmlhttp error",e)}},S=function(e){var t=[];return n(e)&&e.forEach(function(e){var r={};for(var n in e)if(d[n]&&(r[d[n]]=e[n],"resurl"===d[n])){var o=c(e[n]),i=o.hostname,a=o.path;r.reshost=i,r.respath=a,r.httpcode=200}t.push(r)}),t},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={},n=[];if(o(t))for(var i in t)-1!==l.indexOf(String(i))?(r[i]=t[i],n.push(i)):console.warn(i,"could not be modify.");return f({},e,r)},k=function(){var e="";try{if(e=window.localStorage.getItem("emonitor.hc_pgv_pvid"))return e;var t=(new Date).getTime();return e="ek"+[t,Math.floor(t*Math.random()*Math.random()).toString().slice(-5)].join(""),window.localStorage.setItem("emonitor.hc_pgv_pvid",e),e}catch(t){return console.warn("emonitor.hc_pgv_pvid get error",t),e}},T=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=void 0;return String(t).split(".").forEach(function(t){try{n=void 0!==n?n[t]:e[t]}catch(e){n=void 0}}),void 0===n?r:n},j=function(e){var t=e.data,r=void 0===t?{}:t,a=e.path,s=void 0===a?"":a,c="";if(o(r)){if(i(s))return T(r,s,"");if(n(s))return s.forEach(function(e){if(""!==T(r,e,""))return c=T(r,e),!1}),c}return""},M=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})||{},r=t.code,n=t.msg,i={};if(o(e))i=e;else try{i=JSON.parse(e)}catch(e){i={}}return{bizcode:j({data:i,path:r}),bizmsg:j({data:i,path:n})}},O=function(e){var t="";if(!i(e))return console.warn("name is not string"),t;try{return 0===(t=g({name:e})).length&&(t=y(e)||""),t}catch(e){return console.error("Automatically get the value of the corresponding name from the url or cookie "+e),t}},C=navigator.userAgent,L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t="unknown",r="unknown",n="unknown",o="unknown",i="unknown",a=e.toLowerCase();if(a.indexOf("windows")>-1?i="windows":a.indexOf("linux")>-1?i="linux":a.indexOf("mac")>-1&&(i="mac"),window.opera)o=window.opera.version(),r=window.opera.version(),n="opera";else if(/AppleWebKit\/(\S+)/.test(e))if(o=RegExp.$1,n="webkit",/Chrome\/(\S+)/.test(e))r=RegExp.$1,t="chrome";else if(/Version\/(\S+)/.test(e))r=RegExp.$1,t="safari";else{var s=parseFloat(o);r=s<100?1:s<312?1.2:s<412?1.3:2,t="safari"}else/KHTML\/(\S+)/.test(e)||/Konqueror\/([^;]+)/.test(e)?(o=RegExp.$1,r=RegExp.$1,n="khtml",t="konq"):/rv:([^\)]+)\) Gecko\/\d{8}/.test(e)?(o=RegExp.$1,n="gecko",/Firefox\/(\S+)/.test(e)&&(r=RegExp.$1,t="firefox")):/MSIE ([^;]+)/.test(e)&&(o=RegExp.$1,r=RegExp.$1,n="ie",t="ie");return{machine:"PC",name:t,version:r,engineVer:o,engine:n,machineSys:i}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=L(e),r=t.machineSys,n={mac:"mac"===r,version:t.engineVer,name:r},o={},i={iphone:e.match(/(iphone)\s(os\s)?([\d_]+)/i),ipad:e.match(/(ipad).*\s([\d_]+)/i),ipod:e.match(/(ipod).*\s([\d_]+)/i),android:e.match(/(android)\s([\d\.]+)/i),windows:e.match(/Windows(\s+\w+)?\s+?(\d+\.\d+)/)};i.ipod&&(n.ios=!0,n.ipod=!0,n.version=i.ipod[2].replace(/_/g,"."),n.name="ipod"),i.ipad&&(n.ios=!0,n.ipad=!0,n.version=i.ipad[2].replace(/_/g,"."),n.name="ipad"),i.iphone&&(n.iphone=!0,n.ios=!0,n.version=i.iphone[3].replace(/_/g,"."),n.name="iphone"),i.android&&(n.android=!0,n.version=i.android[2],n.name="android"),i.windows&&(n.windows=!0,n.version=i.windows[2],n.name="windows");var a={WEISHI:e.match(/weishi_(\d+?\.\d+?\.\d+?)/i),YYB:e.match(/\/qqdownloader\/(\d+)(?:\/(appdetail|external|sdk))?/i),mojii:e.match(/mojii/i),IE:e.match(/; msie\b|; trident\b|\bedge\//i),WeChat:e.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/)||e.match(/MicroMessenger\/((\d+)\.(\d+))/),MQQClient:!e.match(/QQReader/)&&e.match(/QQ\/(\d+\.\d+)/i)||e.match(/V1_AND_SQ_([\d\.]+)/),MQQReader:e.match(/QQReader/i),QQvideo:!e.match(/TADChid/)&&e.match(/QQLiveBrowser\/([\d.]+)/),QQHDvideo:e.match(/QQLiveHDBrowser\/([\d.]+)/),TBSSDK:e.match(/MQQBrowser\/(\d+\.\d+)/i)&&e.match(/MSDK\/(\d+\.\d+)/),MQQBrowser:e.match(/MQQBrowser\/(\d+\.\d+)/i),UCBrowser:e.match(/ucbrowser\/(\d+\.\d+)/i),Qzone:e.match(/Qzone\/[\w\d\_]*(\d\.\d)[\.\w\d\_]*/i),Weibo:e.match(/Weibo/i),qqnews:e.match(/qqnews\/(\d+\.\d+\.\d+)/i),QQLiveBroadcast:e.match(/QQLiveBroadcast/i),kuserAgentibao:e.match(/qnreading\/(\d+\.\d+\.\d+)/i),liebao:e.match(/LieBaoFast\/(\d+\.\d+\.\d+)/i),baiduboxapp:e.match(/baiduboxapp\/(\d+\.\d+\.\d+)/i),IEMobile:e.match(/IEMobile(\/|\s+)(\d+\.\d+)/)||e.match(/WPDesktop/),douban:e.match(/com\.douban\.frodo\/(\d+\.\d+\.\d+)/i),MiuiBrowser:e.match(/MiuiBrowser\/(\d+\.\d+)/i),BingPreview:e.match(/BingPreview\/(\d+\.)/i),TADChid:e.match(/TADChid\/(\d+)/i),Chrome:n.ios?e.match(/CriOS\/(\d+\.\d+)/):e.match(/Chrome\/(\d+\.\d+)/),Safari:e.match(/Safari\/(\d+\.\d+)/),sukan:e.match(/synopsis/i)};if(a.MQQReader)o.MQQReader=!0,o.version=1,o.name="MQQReader";else if(a.IEMobile)o.IEMobile=!0,o.version=1,o.name="IEMobile";else for(var s in a)if(a[s]){o[s]=!0,o.version=a[s][1]||0,o.name=s;break}return{browser:o,os:n}},Q=!1,q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,r=e.type;try{if(!window.performance||!window.performance.getEntries)return console.warn("prerformance is not supported"),[];var n=performance.getEntries(),o=[];if(!n&&!n.length)return o;try{n.forEach(function(e){var t={name:e.name,time_redirect:e.redirectEnd-e.redirectStart,time_dns:e.domainLookupEnd-e.domainLookupStart,time_requestTime:e.responseEnd-e.requestStart,time_tcp:e.connectEnd-e.connectStart,type:e.initiatorType,starttime:Math.floor(e.startTime),entryType:e.entryType,duration:Math.floor(e.duration)||0,decodedBodySize:e.decodedBodySize||0,nextHopProtocol:e.nextHopProtocol,json_entries:JSON.stringify(e)};o.push(t)})}catch(e){console.error("get resourceTiming err::::",e)}return t?o.filter(function(e){return e.name===t})[0]:r?o.filter(function(e){return e.type===r}):o}catch(e){return console.warn("get performance happen error"),[]}},A={SCRIPT:"script",LINK:"link",IMG:"img",AUDIO:"audio",VIDEO:"video",FETCH:"fetch",AJAX:"ajax",PROMISE:"promise"},I=function(){var e=(new Date).getTime();return window.performance&&window.performance.now&&(e=window.performance.now()),e},P=function(e){var t={type:"",url:"",code:"",isErr:!1,source:e};if(!o(e))return t;if(s(e,"err_type")){t.type=e.err_type;try{if(e.err_desc){var r=JSON.parse(e.err_desc);t.url=r.url||r.fileName||e.s_url}else t.url=e.s_url}catch(r){t.url=e.s_url,console.warn(r)}t.isErr=!0}else s(e,"cgiurl")?(t.type="cgi",t.url=e.cgiurl,t.code=e.httpcode):s(e,"resurl")?(t.type="cdn",t.url=e.resurl,t.code=e.httpcode):s(e,"time_domready")?(t.type="pagepf",t.url=e.s_url,t.code=200):s(e,"json_entries")?(t.type="slowlog",t.url=e.s_url,t.code=200):s(e,"log")&&(t.type="flowlog",t.url=e.s_url,t.code=200);return t},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;return a(e)?function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];try{e.apply(t,n)}catch(e){console.error("wrapTryCatch "+e)}}:e},U=function(){function e(t){var r=t.options,n=void 0===r?{}:r,o=t.baseUrl,i=void 0===o?"":o,a=t.sampling,s=void 0===a?1:a,c=t.delay,d=void 0===c?2e3:c,u=t.name,p=t.params,l=void 0===p?[]:p,h=t.cgi,f=void 0===h?{}:h,v=t.ptag,w=t.onBeforeSend,_=t.debug,b=t.logs,x=void 0===b?{}:b,S=t.onProxy;m(this,e),this.options=n,this.errorList=[],this.baseUrl=i,this.sampling=s,this.params=l,this.delay=d,this.name=u,this.cgiOptions=f,this.ptag=v,this.onBeforeSend=w,this.debug=_||y("debug")||g({name:"debug"}),this.logs=x,this.onProxy=N(S,this)}return h(e,[{key:"init",value:function(){try{this.proxyAjax(),this.proxyError(),this.proxyConsole(),this.proxyFetch(),this.proxyJsonp(),this.injectOptions()}catch(e){this.send({err_msg:"emonitor init happen error",err_stack:""+e,err_type:"jserror",err_function:"emonitor init func"})}}},{key:"injectOptions",value:function(){var e=this;e.params.forEach(function(t){e.options[t]=g({name:t})}),"string"==typeof e.options.qq&&e.options.qq.length>0&&(e.options.openid="")}},{key:"proxyConsole",value:function(){var e=this;if("undefined"!=typeof console&&"function"==typeof console.error){var t=console.error;console.error=function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];t.apply(window.console,n),e.send({err_msg:n.join(","),level:"error",err_type:"console"})}}}},{key:"log",value:function(){var e=this,t=e.logs||{},r=t.baseUrl,n=t.sampling,i=void 0===n?1:n;if(r){for(var a={level:"",log:""},s=arguments.length,c=Array(s),d=0;d<s;d++)c[d]=arguments[d];c.length>1?a={level:c[0],log:c[1]}:o(c[0])?a=c[0]:console.warn("log params is empty"),Math.random()<=i&&e.send(f({},a),!1,r)}}},{key:"reportCgi",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this,r=t.cgiOptions||{},n=r.baseUrl,o=r.sampling,i=void 0===o?1:o;if(n){var a=e.cgiurl,s=c(a),d=s.host,u=s.path;Math.random()<=i&&t.send(f({cgipath:u,cgihost:d,bizcode_server:""},e),!1,n)}}},{key:"proxyAjax",value:function(){var e=Object.create(null),t=this,r=t.onProxy,n=(new Date).getTime(),o=null,i=null,s=function(e,r){i=I();try{var a={},s=e&&(e.currentTarget||e.target),c=s.emonitorAjaxURL,d=s.emonitorAjaxSendTime||n,u=s?{currentStatus:s.status,cgiurl:c||s.responseURL}:{},p=u.currentStatus,l=void 0===p?"":p,m=u.cgiurl,h=void 0===m?"":m,v=-1!==["","text"].indexOf(s.responseType)?s.responseText||null:null;if("timeout"===String(r))return a={err_msg:"ajax请求错误",err_stack:"错误码:"+l,level:"error",err_type:A.AJAX,err_code:l,err_desc:JSON.stringify({fileName:h,category:"ajax",text:"ajax request timeout",status:l})},t.errorList.push(a),t.send(f({},a)),void(a={});var g=M(v,t.cgiOptions),y=g.bizcode,w=g.bizmsg;try{t.reportCgi({cgiurl:h,delay:Math.round(Math.max(i-d,0)),httpcode:l,bizcode:y,bizmsg:w,starttime:o})}catch(e){console.warn(e)}"number"==typeof l&&(l<200||l>=300)&&(a={err_msg:"ajax请求错误",err_stack:"错误码:"+l,level:"error",err_type:A.AJAX,err_code:l,err_desc:JSON.stringify({fileName:h,category:"ajax",text:s.statusText,status:l})},t.errorList.push(a),t.send(f({},a)),a={})}catch(e){console.error("Ajax handleEvent "+e)}};e.send=XMLHttpRequest.prototype.send,e.open=XMLHttpRequest.prototype.open,XMLHttpRequest.prototype.open=function(t,r){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];e.open.apply(this,[t,r,n]),this.emonitorAjaxURL=r},XMLHttpRequest.prototype.send=function(t){o=(new Date).getTime(),n=I(),this.emonitorAjaxSendTime=n;var i=this.onloadend,c=this.ontimeout;this.onloadend=function(e){s(e),"function"==typeof i&&i.apply(this,arguments)},this.ontimeout=function(e){s(e,"timeout"),"function"==typeof c&&c.apply(this,arguments)},a(r)&&r({type:"ajax",data:t,extra:{url:this.emonitorAjaxURL}}),e.send.apply(this,[t])}}},{key:"proxyFetch",value:function(){var e=this,t=this.onProxy;if(window.fetch){var r=window.fetch;window.fetch=function(){for(var n=arguments.length,o=Array(n),s=0;s<n;s++)o[s]=arguments[s];var c=(new Date).getTime(),d=I(),u=d;return r.apply(null,o).then(function(r){u=I(),r.ok||""===r.url||e.send({err_msg:"fetch not ok",err_type:A.FETCH,err_code:r.status,err_desc:JSON.stringify({type:"error",fileName:o[0],options:o[1],category:"fetch"})});var n="",s="";try{var p=r.headers?r.headers.get("content-type"):"";i(p)&&-1!==p.indexOf("application/json")&&r.clone().json().then(function(i){try{a(t)&&t({type:"fetch",data:i,extra:{url:o[0]}});var p=M(i,e.cgiOptions);n=p.bizcode,s=p.bizmsg}catch(e){n="",s=""}try{e.reportCgi({cgiurl:o[0],delay:Math.round(Math.max(u-d,0)),httpcode:r.status,bizcode:n,bizmsg:s,starttime:c})}catch(e){console.warn(e)}}).catch(function(e){console.error("getCgiInfo",e)})}catch(e){console.error("getCgiInfo",e)}return r}).catch(function(t){e.send({err_msg:"fetch not ok",err_stack:""+t,err_type:A.FETCH,err_desc:JSON.stringify({type:"error",fileName:o[0],options:o[1],category:"fetch"})})})}}}},{key:"proxyError",value:function(){var e=this,t=arguments,r=this;window.addEventListener("error",function(e){var t=e.target?e.target:e.srcElement;if(t!==window&&t.nodeName&&A[t.nodeName.toUpperCase()]){var n={err_msg:t.localName+" is load error",err_stack:"resource is not found",err_type:""+t.localName,err_desc:JSON.stringify({tagName:t.localName,type:e.type,fileName:t.currentSrc||t.src||t.href,category:"resource"}),timestamps:(new Date).getTime()};r.errorList.push(n),r.send(f({},n))}},!0);var n=window.onerror;window.onerror=function(o,i,a,s,c){if("Script error."===o&&!i)return!1;var d={};return setTimeout(function(){var e=s||window.event&&window.event.errorCharacter||0;(d=c&&c.stack?{err_msg:o,err_stack:c.stack,err_type:"jserror"}:{err_msg:o,err_stack:"",err_type:"jserror"}).err_desc=JSON.stringify({url:r.URL,fileName:i,category:"javascript",line:a,col:e}),r.errorList.push(f({},d)),r.send(f({},d))},0),"function"==typeof n?n.apply(e,t):!r.debug},window.addEventListener("unhandledrejection",function(e){var t={err_msg:e.reason,err_type:A.PROMISE,err_desc:JSON.stringify({url:location.href,category:"promise"}),err_stack:"promise is error"};r.errorList.push(t),r.send(t),e.preventDefault()},!0)}},{key:"proxyJsonp",value:function(){var e=this,t=window.document.createElement,r=null,n=null,o=function(t,o){var i=e.cgiOptions.jsonp,a=void 0!==i&&i;if("function"==typeof a&&a(t)||"boolean"==typeof a&&a){var s="load"===o.type?200:500,d=c(t.src),u=d.host,p=d.path;e.reportCgi({cgiurl:t.src,delay:Math.round(Math.max(I()-n,0)),httpcode:s,cgipath:p,cgihost:u,starttime:r})}n=null,r=null};window.document.createElement=function(){var e=t.apply(this,arguments);return"script"===arguments[0]&&(r=(new Date).getTime(),n=I(),e.addEventListener("load",function(t){o(e,t)},!0),e.addEventListener("error",function(t){o(e,t)},!0)),e}}},{key:"config",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t in e)-1!==["baseUrl","params","options","sampling","delay","name","cgi"].indexOf(String(t))&&(this[t]=e[t]);return this}},{key:"send",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments[2],n=this,i=(n.cgiOptions||{}).btrace,s=void 0!==i&&i,d=e.err_type,u=void 0===d?"console":d;if(w(n.sampling)){var l="jserror"===u?300:n.delay,m=_(x,l,function(){n.errorList=[]}),h=c(location.href),v=h.host,g=h.path,y=h.protocol,b=R(navigator.userAgent),S=b.browser,T=b.os,j=f({},this.options,e,{timestamps:(new Date).getTime(),_dc:Math.random(),dtime:(new Date).getTime(),hh_ua:navigator.userAgent,hh_uav:S.version,hh_ref:document.referrer,hc_pgv_pvid:k(),s_url:location.href,s_host:v,s_path:g,s_protocol:y,s_browser:S.name,s_os:T.name,s_qq:O("qq"),s_openid:O("openid"),s_app:n.name,s_ptag:n.ptag}),M=n.onBeforeSend;if(a(M))try{var C=P(j),L=M(C);if("boolean"==typeof L&&!L)return;if("img"===C.type&&C.url===C.source.s_url)return;if(-1!==p.indexOf(C.type)&&"btrace.qq.com"===c(C.url).hostname&&!s)return;o(L)&&(j=E(j,L))}catch(e){console.warn(e)}m({baseUrl:r||n.baseUrl,data:j,method:t?"POST":"GET"})}}}]),e}(),B=c;e.create=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,r=void 0===t?{}:t,n=e.cgi,o=void 0===n?{sampling:1,baseUrl:""}:n,i=e.logs,a=void 0===i?{sampling:1,baseUrl:""}:i,s=e.baseUrl,c=e.delay,d=void 0===c?2e3:c,u=e.sampling,p=void 0===u?1:u,l=e.name,m=void 0===l?"unknown":l,h=e.params,f=void 0===h?[]:h,g=e.ptag,y=void 0===g?"":g,w=e.debug,_=void 0!==w&&w,b=e.onBeforeSend,x=void 0===b?v:b,S=e.onProxy,E=new U({options:r,baseUrl:s,params:f,delay:d,name:m,sampling:p,cgi:o,ptag:y,debug:_,onBeforeSend:x,logs:a,onProxy:void 0===S?v:S});return E.init(),E},e.getRcTiming=q,e.getPfTiming=function(){try{var e=window.performance||window.webkitPerformance||window.msPerformance||window.mozPerformance;if(void 0===e)return!1;var t=e.timing,r={};return r.time_response=t.responseStart-t.requestStart,r.time_firstpaint=t.responseEnd-t.responseStart,r.time_domready=t.domContentLoadedEventStart-t.responseEnd,r.time_readyStart=t.fetchStart-t.navigationStart,r.time_redirectTime=t.redirectEnd-t.redirectStart,r.time_appcacheTime=t.domainLookupStart-t.fetchStart,r.time_dns=t.domainLookupEnd-t.domainLookupStart,r.time_tcp=t.connectEnd-t.connectStart,r.time_requestTime=t.responseEnd-t.requestStart,r.time_initDomTreeTime=t.domInteractive-t.responseEnd,r.time_loadEventTime=t.loadEventEnd-t.loadEventStart,r.time6=t.domLoading-t.fetchStart,r.time_whiteScreen=t.domLoading-t.fetchStart,r.time7=t.loadEventEnd-t.fetchStart,r.time_firstScreenTime=t.loadEventEnd-t.fetchStart,r.time_parseDomTree=t.domComplete-t.domInteractive,r.time8="",r}catch(e){return console.warn("err",e),{}}},e.getCdnTiming=function(){var e={};return u.forEach(function(t){e[t]=S(q({type:t}))}),e},e.getSysInfo=R,e.getUrlParam=g,e.getCookie=y,e.injectVconsole=function(){try{var e=document.createElement("script"),t=function(){Q||(Q=new window.VConsole)};e.src="https://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/3.0.0/vconsole.min.js",e.async=!0,e.charset="utf-8",e.onload=t,e.onreadystatechange=function(){"complete"===this.readyState&&t()},document.getElementsByTagName("head")[0].appendChild(e)}catch(e){console.error("vConsole script load err")}},e.getLinkInfo=B,e.doReport=x,Object.defineProperty(e,"__esModule",{value:!0})});
