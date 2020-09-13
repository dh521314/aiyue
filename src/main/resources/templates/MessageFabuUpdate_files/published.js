/*********** ---------------------------------------------|
 \\\//////  http://www.zhangyongfeng.com/                |
 | @   @ |  ---------------------------------------------|
 |   L   |  Zhang Yongfeng <artwc@outlook.com>           |
 (   v   )  Created by 2019/1/10                           |
 \_____/   _____________________________________________|
 * @license GPL
 * @version 1.0.0
 * @fileOverview for .html
 */
function setTextCount(e,t){e.innerText=k.getTextCount(t),exitCheck=!0}function removeChapter(){k.api("/ck/author/book/"+bookId).get().send(function(e){if(4===e.authLevel.id&&3===e.bookStatus.id)k.alert({text:"该作品已设置完结<br>正式发布的内容不可以进行删除哦",type:"failed",confirmText:"我知道了",confirm:function(){}});else var t=k.alert({text:"是否删删除本章节至垃圾箱中?",type:"failed",only:!0,confirmText:"确认删除",confirm:function(){return k.api("/ck/author/book/"+bookId+"/chapter/"+chapterId)["delete"]().send(function(){t.close(),k(".ChapterEdit .chapters .now").className("item del"),k.alert({text:"删除成功",type:"success",timeout:1})},function(e){t.close(),k.alert({text:"章节删除失败<br>",type:"failed",confirmText:"我知道了",confirm:function(){}})}),!0},cancelText:"我再想想",cancel:function(){}})})}function moveChapter(){var e={};e.close=k.layout({html:volunmList(e)}).close}function editChapter(){volumeId&&(window.editTools.style.display="block",window.defaultTools.style.display="none",window.chapterContentInput.removeAttribute("readonly"),window.titleContentInput.removeAttribute("readonly"),window.authorSpeak.removeAttribute("readonly"),window.chapterContentInput.focus())}function unEditChapter(){k.alert({text:"是否放弃本次内容修改",type:"failed",confirmText:"取消修改",confirm:function(){exitCheck=!1,location.reload()},cancelText:"我再想想",cancel:function(){}})}function submitChapter(){if(volumeId){var e=window.titleContentInput.value,t=window.chapterContentInput.value,n=window.authorSpeak.value;return""===e?k.alert({text:"请给章节起个名字",type:"failed",onclose:function(){window.titleContentInput.focus()}}):window.titleCount.innerText>20?k.alert({text:"章节名不能超过20个字",type:"failed",onclose:function(){window.titleContentInput.focus()}}):""===t.trim()?k.alert({text:"章节内容不能为空",type:"failed",onclose:function(){window.chapterContentInput.focus()}}):window.contentCount.innerText>2e4?k.alert({text:"不能保存, 章节内容不能超过20000字",type:"failed",confirmText:"我知道了",confirm:function(){window.chapterContentInput.focus()}}):void k.alert({type:"none",title:"发布章节",only:!0,text:'<div class="pushChapterPop"><h1>发布章节</h1><hr><span class="gray">章节名: </span>'+e+'<br><span class="gray">字数: </span>'+window.contentCount.innerText+'字<br><span class="gray">类型: </span>'+["免费章节","VIP章节"][isVip]+'<br><span class="gray">发布卷: </span>'+volumeName+"</div>",confirm:function(){var o=k.json.stringify([{textType:"simple",text:t.replace(/^[\s\u3000]+/gm,"")}]);k.api("/ck/book/black-word/check").post({chapterName:e,authorSpeaking:n,chapterContent:o}).send(function(t){function a(e,t){k.alert({text:'<div class="BlackWord_pop"><h2>'+e+"：</h2>"+t.map(function(e){return"<span>"+e+"</span>"}).join("")+"</div>",type:"none",confirmText:"我知道了",confirm:function(){}})}t.chapterName.length>0?a("章节标题存在黑词",t.chapterName):t.chapterContent.length>=5?a("章节内容存在黑词",t.chapterContent):t.authorSpeaking.length>0?a("作者有话说存在黑词",t.authorSpeaking):k.api("/ck/author/book/"+bookId+"/chapter/update").post({id:chapterId,volumeId:volumeId,name:e,content:o,authorSpeak:n,isVip:isVip}).send(function(e){exitCheck=!1,k.alert({text:"发布成功",type:"success",onclose:function(){location.reload()}})},function(e){if(1242===e.code){var t=e.msg.split("：");k.alert({text:'<div class="BlackWord_pop"><h2>'+t[0]+"</h2>"+t[1].replace(/\[|\]/g,"").split(",").map(function(e){return"<span>"+e+"</span>"}).join("")+"</div>",type:"none",confirmText:"我知道了",confirm:function(){}})}else k.alert({text:e.msg,type:"failed"})})})},confirmText:"确认发布",cancelText:"取消",cancel:function(){}})}}function newChapter(){location.href="/manage/draft.html?bookid="+bookId}function newVolume(){exitCheck?unEditChapter():k.layout({html:function(){var e=this,t=k("<input>").add({placeholder:"输入卷名",maxlength:"10"}).item(0);return k("<div>").className("PopFrom").style({padding:"0"}).html("<h3>新建分卷</h3>").append(k("<p>").html("请输入卷名").append(t).item(0)).append(k("<button>").className("max blue").html("创建新卷").event("click",function(){t.value?k.api("/ck/author/book/"+bookId+"/volume").post({name:t.value,code:0,type:0}).send(function(){e.close(),k.alert({text:"创建成功",type:"success",onclose:function(){location.reload()}})},function(e){k.alert({text:"创建失败<br>"+e.msg,type:"failed"})}):k.alert({text:"请输入卷名",type:"failed"})}).item(0))}})}function editVolume(e,t){if(exitCheck)return void unEditChapter();k.layout({html:function(){var n=this,o=k("<input>").add({placeholder:"新卷名"}).item(0);return k("<div>").className("PopFrom").html("<h3>修改卷名</h3>").append(k("<p>").html("旧卷名: "+t)).append(k("<p>").html("请输入新卷名").append(o).item(0)).append(k("<button>").className("max blue").html("确认修改").event("click",function(){o.value?k.api("/ck/author/book/"+bookId+"/volume/"+e).put({name:o.value,status:1}).send(function(){n.close(),k.alert({text:"修改成功",type:"success",onclose:function(){location.reload()}})},function(e){k.alert({text:"修改失败<br>"+e.msg,type:"failed"})}):k.alert({text:"请输入新卷名",type:"failed"})}).item(0))}})}function removeVolume(e,t){if(exitCheck)return void unEditChapter();k.alert({text:"确实要删除分卷:"+t+"吗?",type:"failed",only:!0,confirmText:"确认删除",confirm:function(){k.api("/ck/author/book/"+bookId+"/volume/"+e)["delete"]().send(function(){k.alert({text:"删除成功",type:"success",timeout:1,onclose:function(){location.reload()}})},function(e){k.alert({text:"删除失败<br>"+e.msg,type:"failed",cancelText:"我知道了",cancel:function(){}})})},cancelText:"我再想想",cancel:function(){}})}function loadChapterContext(e){if(exitCheck){var t=this;return void k.alert({text:"是否放弃本次内容修改",type:"failed",confirmText:"取消修改",confirm:function(){exitCheck=!1,loadChapterContext.call(t,e)},cancelText:"我再想想",cancel:function(){}})}if(this.className.indexOf("del")<0){var t=this;chapterRender.cleanRender(),k.api("/ck/author/book/"+bookId+"/chapter/show").get({id:e}).send(function(e){t.tagName&&(k(".ChapterEdit .chapters .now").className("item"),t.className="item now",chapterId=e.id),isVip=e.isVIP.id,volumeName=e.volumeName,chapterRender.updateRender({readonly:"readonly",chapterName:e.name,volumeName:e.volumeName,isEditVolume:e.volumeCode>200&&e.volumeCode<900&&300!==e.volumeCode,volumeId:e.volumeId,chapterType:["公共章节","VIP章节"][e.isVIP.id],vip:!!e.isVIP.id,chapterContent:k.map(e.content||[],function(e){if("simple"===e.textType)return e.text.replace(/^/gm,"\n　　")}).join(""),authorSpeak:e.authorSpeaking})})}else k.alert({text:"此章节已删除",type:"failed"})}var volunmList,volumeId,volumeName,isVip,chapterRender,bookId=Number(k.getUrl("bookid")),chapterId=Number(k.getUrl("chapterid")),exitCheck=!1;window.onbeforeunload=function(e){exitCheck&&(e=window.event||e,e.returnValue="确定离开当前页面吗？")},k.login(function(){k.api("/ck/author/book/"+bookId+"/chapter").get({page:k.getUrl("page")||1,num:10}).send(function(e){e.volumes.reverse();for(var t,n=[],o=0;t=e.volumes[o];)18888===t.code||300===t.code||100===t.code?n.push(e.volumes.splice(o,1)[0]):o++;e.volumes=e.volumes.concat(n.reverse()),chapterId||k.forEach(e.volumes,function(e){if(e.chapters.length)return chapterId=e.chapters[0].chapterId,!0});var a=0,i=k.getUrl("page")||1,c={bookId:e.bookId,bookName:e.bookName};c.published="now",k(".Tabbox").render(c),volunmList=function(t){var n={id:chapterId,volumeId:0,chapterIndex:0},o=k("<select>").html("<option>选择章节</option>").event("change",function(){var e=this.value,t=0;0===this.selectedIndex?(t=e,e=this.options[this.selectedIndex+1].value):t=this.options[this.selectedIndex-1].value,n.chapterIndex=e/2+t/2}).add({disabled:!0}),a=k("<select>").html('<option value="0-0">选择巻</option>'+k.map(e.volumes,function(e,t){return'<option value="'+t+"-"+e.volumeId+'">'+e.volumeName+"</option>"}).join("")).event("change",function(){var t=this.value.split("-");if(n.volumeId=Number(t[1]),e.volumes[t[0]]){var a=e.volumes[t[0]].chapters.map(function(e){return{chapterIndex:e.chapterIndex,chapterId:e.chapterId,chapterName:e.chapterName}});a.unshift({chapterIndex:a.length?Math.ceil(a[0].chapterIndex+2):2,a:1,chapterName:"选择章节"}),a.push({chapterIndex:a.length?Math.max(a[a.length-1].chapterIndex-2,0):0,a:1,chapterName:"卷启始章节"}),o.html(k.map(a,function(e){return'<option value="'+e.chapterIndex+'" '+(e.chapterId===chapterId?"disabled":"")+">"+e.chapterName+"</option>"}).join("")).del("disabled")}}),i=k("<div>").className("error");return k("<div>").className("PopFrom").style({padding:0}).html("<h3>移动章节</h3>").append(i.item(0)).append(k("<p>").html("选择要移入的巻").append(a).item(0)).append(k("<p>").html("选择插入到哪一章后").append(o).item(0)).append(k("<button>").className("blue max").html("移动到此章节后").event("click",function(){0===n.volumeId?i.html("请选择一个巻"):0===n.chapterIndex?i.html("请选择一个章节"):k.api("/ck/author/book/"+bookId+"/chapter/move").put({chapters:k.json.stringify([n])}).send(function(e){t.close(),k.alert({text:"移动成功",type:"success",onclose:function(){location.replace(k.url().searchParams.set("chapterid",chapterId))}})})}))},k(".ChapterEdit .list").render({chapterList:k.map(e.volumes,function(t,n){return t.chapters=k.map(t.chapters,function(e){return e.publishDate=k.date(e.publishDate).format(),e.statusText={"-1":"屏蔽",5:"待审核"}[e.status.id],e.PageType=i,e.bookId=bookId,e.chapterId===chapterId&&(e.className="now",e.openClass="open",t.openClass="open"),e.vip=({"-1":"屏蔽",5:"待审核"}[e.status.id]||"")+(e.isVIP.id?"vip":""),e.isVip=!!e.isVIP.id,e}),t.index=e.volumes.length-3-n,t.index=t.index>0?"第"+k.chineseNumber(t.index)+"巻":"",t.itemCount=t.chapters.length,t.isDelete=0===t.itemCount&&t.code>200&&t.code<900&&300!==t.code,a+=t.itemCount,t}),chapterCount:a,volumeCount:e.volumes.length},function(e){k(".volume",e).event("click",function(){this.nextSibling.className.indexOf("open")>=0?(this.className=this.className.replace("open",""),this.nextSibling.className=this.nextSibling.className.replace("open","")):(this.className+=" open",this.nextSibling.className+=" open")})}),chapterId?k.api("/ck/author/book/"+bookId+"/chapter/show").get({id:chapterId}).send(function(e){volumeId=e.volumeId,volumeName=e.volumeName,isVip=e.isVIP.id,chapterRender=k(".ChapterEdit .cont").render({readonly:"readonly",chapterName:e.name,volumeName:e.volumeName,isEditVolume:e.volumeCode>200&&e.volumeCode<900&&300!==e.volumeCode,volumeId:e.volumeId,chapterType:["公共章节","VIP章节"][e.isVIP.id],vip:!!e.isVIP.id,chapterContent:k.map(e.content||[],function(e){if("simple"===e.textType)return e.text.replace(/^/gm,"\n　　")}).join(""),authorSpeak:e.authorSpeakContent},function(){window.contentCount.innerText=k("#chapterContentInput").get("value").replace(/[\s\u3000]+/g,"").length,window.titleCount.innerText=k("#titleContentInput").get("value").replace(/[\s\u3000]+/g,"").length,window.authorSpeakCount.innerText=k("#authorSpeak").get("value").replace(/[\s\u3000]+/g,"").length;var e=k("#chapterContentInput").event("paste",function(){var e=this;setTimeout(function(){e.value=e.value.replace(/[\s\u3000]*\n/g,"\n").replace(/[\s\u3000]*(.*)/g,"　　$1\n")})}).event("input",function(){setTextCount(window.contentCount,this.value)});window.contentCount.innerText=e.get("value").replace(/[\s\u3000]+/g,"").length;var t=(k("#titleContentInput").event("input",function(){setTextCount(window.titleCount,this.value)}),k("#authorSpeak").event("input",function(){setTextCount(window.authorSpeakCount,this.value)}));window.authorSpeakCount.innerText=t.get("value").replace(/[\s\u3000]+/g,"").length})},function(e){k.alert({text:e.msg,type:"failed",onclose:function(){location.replace(k.url().searchParams["delete"]("chapterid"))}})}):k.alert({text:"还没有发布任何章节",type:"failed",confirmText:"去草稿发布新章节",confirm:function(){location.replace("/manage/draft.html?bookid="+bookId)}})},function(e){k.alert({text:e.msg,onclose:function(){location.replace("/manage/")}})})});