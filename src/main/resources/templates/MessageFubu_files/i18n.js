!function(e){"use strict";var n,t,o=Array.prototype.slice;t=function(n){this.options=e.extend({},t.defaults,n),this.parser=this.options.parser,this.locale=this.options.locale,this.messageStore=this.options.messageStore,this.languages={},this.init()},t.prototype={init:function(){var n=this;String.locale=n.locale,String.prototype.toLocaleString=function(){var t,o,a,i,s,r,l;for(a=this.valueOf(),i=n.locale,s=0;i;){t=i.split("-"),o=t.length;do{if(r=t.slice(0,o).join("-"),l=n.messageStore.get(r,a))return l;o--}while(o);if("en"===i)break;i=e.i18n.fallbacks[n.locale]&&e.i18n.fallbacks[n.locale][s]||n.options.fallbackLocale,e.i18n.log("Trying fallback locale for "+n.locale+": "+i+" ("+a+")"),s++}return""}},destroy:function(){e.removeData(document,"i18n")},load:function(n,t){var o,a,i,s={};if(n||t||(n="i18n/"+e.i18n().locale+".json",t=e.i18n().locale),"string"==typeof n&&"json"!==n.split("?")[0].split(".").pop()){for(s[t]=n+"/"+t+".json",o=(e.i18n.fallbacks[t]||[]).concat(this.options.fallbackLocale),a=0;a<o.length;a++)i=o[a],s[i]=n+"/"+i+".json";return this.load(s)}return this.messageStore.load(n,t)},parse:function(n,t){var o=n.toLocaleString();return this.parser.language=e.i18n.languages[e.i18n().locale]||e.i18n.languages["default"],""===o&&(o=n),this.parser.parse(o,t)}},e.i18n=function(n,a){var i,s=e.data(document,"i18n"),r="object"==typeof n&&n;return r&&r.locale&&s&&s.locale!==r.locale&&(String.locale=s.locale=r.locale),s||(s=new t(r),e.data(document,"i18n",s)),"string"==typeof n?(i=void 0!==a?o.call(arguments,1):[],s.parse(n,i)):s},e.fn.i18n=function(){var n=e.data(document,"i18n");return n||(n=new t,e.data(document,"i18n",n)),String.locale=n.locale,this.each(function(){var t,o,a,i,s=e(this),r=s.data("i18n");r?(t=r.indexOf("["),o=r.indexOf("]"),-1!==t&&-1!==o&&o>t?(a=r.slice(t+1,o),i=r.slice(o+1),"html"===a?s.html(n.parse(i)):s.attr(a,n.parse(i))):s.text(n.parse(r))):s.find("[data-i18n]").i18n()})},String.locale=String.locale||e("html").attr("lang"),String.locale||(void 0!==typeof window.navigator?(n=window.navigator,String.locale=n.language||n.userLanguage||""):String.locale=""),e.i18n.languages={},e.i18n.messageStore=e.i18n.messageStore||{},e.i18n.parser={parse:function(e,n){return e.replace(/\$(\d+)/g,function(e,t){var o=parseInt(t,10)-1;return void 0!==n[o]?n[o]:"$"+t})},emitter:{}},e.i18n.fallbacks={},e.i18n.debug=!1,e.i18n.log=function(){window.console&&e.i18n.debug&&window.console.log.apply(window.console,arguments)},t.defaults={locale:String.locale,fallbackLocale:"en",parser:e.i18n.parser,messageStore:e.i18n.messageStore},e.i18n.constructor=t}("undefined"!=typeof jQuery?jQuery:Zepto),function(e){"use strict";function n(e,n){var t=document.getElementsByTagName("script"),o=t[t.length-1],a=document.createElement("script"),i=!1;a.src=e,a.async=!0,o.parentNode.insertBefore(a,o),a.onload=a.onreadystatechange=function(){i||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(i=!0,n&&n(),a.onload=a.onreadystatechange=null)}}function t(t){if("undefined"!=typeof e.Deferred){var o=e.Deferred();return n(t,o.resolve),o.promise()}return new Promise(function(e,o){n(t,e)})}var o=function(){this.messages={},this.sources={}};o.prototype={load:function(n,o){var a=null,i=null,s=null,r=[],l=[],c=this,u="undefined"!=typeof e.Deferred;if("string"==typeof n)return e.i18n.log("Loading messages from: "+n),u?(i=t(n).done(function(e){e=e||window.i18n[o],c.set(o,e)}),i.promise()):s=new Promise(function(e,a){t(n).then(function(n){n=n||window.i18n[o],c.set(o,n),e()})});if(o)return c.set(o,n),u?e.Deferred().resolve():Promise.resolve();for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(o=a,u?r.push(c.load(n[a],o)):l.push(c.load(n[a],o)));return u?e.when.apply(e,r):Promise.all(l)},set:function(n,t){this.messages[n]?this.messages[n]=e.extend(this.messages[n],t):this.messages[n]=t},get:function(e,n){return this.messages[e]&&this.messages[e][n]}},e.extend(e.i18n.messageStore,new o)}("undefined"!=typeof jQuery?jQuery:Zepto);