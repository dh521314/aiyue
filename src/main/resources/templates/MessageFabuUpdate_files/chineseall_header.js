/*********** ---------------------------------------------|
 \\\//////  http://www.zhangyongfeng.com/                |
 | @   @ |  ---------------------------------------------|
 |   L   |  Zhang Yongfeng <artwc@outlook.com>           |
 (   v   )  Created by 2019/1/3                           |
 \_____/   _____________________________________________|
 * @license GPL
 * @version 1.0.0
 * @fileOverview for 中文在线头.html
 */
function setChineseallHeader(e){k(".chineseall_header .user_box").html('<a href="//user.17k.com/www"><img class="avatar" src="'+e.avatarUrl+'" onerror="this.src=\'//static.17k.com/pic/default_user_avatar.jpg\'"><span>'+e.nickname+'</span><img class="arr" src="//static.17k.com/www/pic/arr_bottom_gray.png"></a>').append(k("<div>").className("menu").append(k("<a>").add({href:"javascript:k.logout()"}).html("退出登录"))),setInterval(function(){k.api("/ck/user/"+e.id+"/get/new/msg").get().send(function(e){(e.platformNum||e.systemNum||e.interactionNum||e.authorNum||("17k.com"===k.domain?e.giftNum:""))&&(k(".chineseall_header .user_news").className("hot"),k.autoOpenUserMessage&&e.authorNum>0&&0===k(".pop_userMessage").node.length&&k.userMessage())})},3e4)}k.isLogin()?setChineseallHeader(k.loginInfo()):k.loginCallbacks.push(setChineseallHeader),"17k.com"===k.domain?(document.querySelector(".chineseall_header .logo img").src="//static.17k.com/pic/17k_logo_t.png",k(".chineseall_header .so").node[0].style.display="block"):(document.querySelector(".chineseall_header .logo img").src="//static."+k.domain+"/sites/skin/www/pic/logo/logo_"+k.domain+".png",k(".chineseall_header .user a").forEach(function(e){e.href=e.href.replace("17k.com",k.domain)}));