function checkGender(e){return!0}function checkClassify(e,t){return""==e?($(".classify .hint").removeClass("hidden right").addClass("wrong").html("<i></i>请选择作品分类"),!1):""==t?($(".classify .hint").removeClass("hidden right").addClass("wrong").html("<i></i>请选择作品分类"),!1):($(".classify .hint").removeClass("hidden").addClass("right").html("<i></i>"),!0)}function checkShoufa(e){return!0}function checkWrite(e){return""==e?($(".writing .hint").removeClass("hidden right").addClass("wrong").html("<i></i>请选择首发状态"),!1):($(".writing .hint").removeClass("hidden").addClass("right").html("<i></i>"),!0)}function checkbName(e,t){if(""==e)return $("#bookName").addClass("border_red"),$(".bName .hint").removeClass("hidden right").addClass("wrong").html("<i></i>书名不能为空"),!1;var a=!1;return $.ajax({url:"/author/check-booktitle",type:"post",data:{title:e,bookId:t},dataType:"json",cache:!1,async:!1,timeout:5e3,success:function(e){1==e.status?(a=!0,$("#bookName").removeClass("border_red"),$(".bName .hint").removeClass("hidden").addClass("right").html("<i></i>")):2==e.status&&($("#bookName").addClass("border_red"),$(".bName .hint").removeClass("hidden right").addClass("wrong").html("<i></i>该作品名称已存在"))},error:function(){}}),a}function validate_img(e){var t=e.value;if(!/.(jpg)$/.test(t))return popup_common("图片格式必须为jpg格式"),!1;try{var a=document.getElementById("file").files[0].size}catch(n){return popup_common("浏览器版本过低，请升级或更换浏览器"),!1}return a>512e3?(popup_common("请上传小于500KB的图片"),!1):!0}function checkTag(e){return 1>e?($(".hashtag .hint").addClass("hidden").html(""),!0):($(".hashtag .hint").removeClass("hidden").addClass("right").html("<i></i>"),!0)}function checkBtext(e,t){return""==e?($(".mtext").addClass("border_red"),$(".bookIntro .hint").removeClass("hidden right").addClass("wrong").html("<i></i>请输入作品简介"),!1):20>t?($(".mtext").addClass("border_red"),$(".bookIntro .hint").removeClass("hidden right").addClass("wrong").html("<i></i>作品简介需要20-400字哦"),!1):($(".mtext").removeClass("border_red"),$(".bookIntro .hint").removeClass("hidden").addClass("right").html("<i></i>"),!0)}function previewImage(e){var t=new FileReader;t.onload=function(e){var t=e.target.result,a=new Image;a.onload=function(){var e=a.width,n=a.height;return 600>e||800>n?(popup_common("图片尺寸需大于600*800"),$("#file").val(""),!1):void(imghead.src=t)},a.src=t},t.readAsDataURL(e.files[0])}$(".defaultBook").each(function(e){var t=$(this).attr("data-src");$(this).attr("src");""!=t&&t.length>28&&$(this).attr("src",t)}),$("#bookName").on("blur",function(){var e=$(this).val(),t=$("#bNameId").text();return checkbName(e,t)?void 0:!1});var container=$("#content");container.on("click",".checkIncome",function(){var e=$(this).next(".checkO");e.hasClass("hidden")?e.removeClass("hidden"):e.addClass("hidden")}),$(".upload_btn").on("click",function(){$(".book_imgBox,.boxshadow_bg").removeClass("hidden")}),$(".imgclose_btn").on("click",function(){$(".book_imgBox,.boxshadow_bg").addClass("hidden")}),$("#imgSelect").on("click",function(){$("#file").click(),$(".book_imgBox,.boxshadow_bg").addClass("hidden")}),$("#file").on("click",function(){$(".book_imgBox,.boxshadow_bg").addClass("hidden")}),$("#file").on("change",function(){return validate_img(this)?void previewImage(this):($(this).val(""),!1)}),$(".popup .con li").on("click",function(){var e=$(this).hasClass("current"),t=$(".con .scroll ul li.current").length;return console.log(t),0==e&&7>t?void $(this).addClass("current"):($(this).removeClass("current"),!1)}),$("#labelSure").on("click",function(){for(var e=$(".scroll ul li.current"),t=[],a="",n=0;n<e.length;n++){var o={},i=$(e[n]).text(),r=$(e[n]).attr("data-key");o.word=i,o.key=r,t.push(o)}for(var n=0;n<t.length;n++){var s='<span class="append" data-key='+t[n].key+">"+t[n].word+"<i></i></span>";a+=s}$(".xgTag .tagIntro .append").remove(),$(".xgTag .tagIntro").prepend(a),$(".popup").addClass("hidden");var d=$(".xgTag .tagIntro .append").length;checkTag(d)}),$("#close").on("click",function(){$(".popup").addClass("hidden")}),$("#textarea").on("focus",function(){$(".mtext").css("border-color","#333")}),$("#textarea").on("blur",function(){$(".mtext").css("border-color","#eee");var e=$(this).val(),t=e.length;return checkBtext(e,t)?void 0:!1});