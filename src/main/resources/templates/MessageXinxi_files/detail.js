/*********** ---------------------------------------------|
 \\\//////  http://www.zhangyongfeng.com/                |
 | @   @ |  ---------------------------------------------|
 |   L   |  Zhang Yongfeng <artwc@outlook.com>           |
 (   v   )  Created by 2019/1/17                           |
 \_____/   _____________________________________________|
 * @license GPL
 * @version 1.0.0
 * @fileOverview for .html
 */
function setBookStatus(e) {
    param.bookStatus = e
}

function removeKeyword(e, t) {
    e.parentNode.removeChild(e), paramKeyword[t] = ""
}

function updateImage() {
    var e = function (e) {
        (e = k.json.parse(e)) && (0 === e.status.code ? (window.coverTag.src = e.data.url + "-189x272", self.layout.close()) : k.alert({
            text: e.status.msg,
            type: "failed"
        }))
    };
    self.layout = k.layout({
        title: "上传自定义封面", html: function () {
            return window.uploadImage || k("<iframe>").add({name: "uploadImage"}).style({display: "none"}).event("load", function () {
                e(this.contentWindow.document.body.innerText)
            }).appendTo(document.body), k("<form>").add({
                target: "uploadImage",
                method: "post",
                enctype: "multipart/form-data",
                action: "/ck/author/book/" + bookId + "/cover"
            }).html("<p>请选择大于600*800并小于2M的图片</p>").append(k("<input>").add({
                type: "hidden",
                name: "fileType",
                value: "2"
            })).append(k("<input>").add({
                type: "file",
                name: "file",
                required: "required",
                accept: "image/*"
            })).append(k("<input>").add({type: "submit", value: "上传"}))
        }
    })
}

function editBookName(e, t) {
    k.layout({
        html: function () {
            var o = this, a = k("<p>").className("error"),
                n = k("<input>").add({placeholder: "新书名"}).event("input", function () {
                    window.PopTitleCount.innerText = k.getTextCount(this.value)
                }).item(0);
            return k("<div>").className("PopFrom").style({
                width: "400px",
                "min-height": "auto",
                padding: 0
            }).html("<h3>修改书名</h3>").append(k("<p>").html("旧书名: 《" + t + "》")).append(k("<p>").html('请输入新书名 (<span id="PopTitleCount">0</span>/12)').append(n).item(0)).append(a.item(0)).append(k("<button>").className("max blue").html("申请修改").event("click", function () {
                n.value.match(/[\w\u4e00-\u9fa5]+/) && k.getByteLength(n.value) <= 24 ? k.api("/ck/book/check/existed").get({bookName: n.value.trim()}).send(function (t) {
                    t.id > 0 ? a.html("该作品名已被占用了哦") : k.api("/ck/author/book/" + e + "/preUpdate").post({
                        newBookName: n.value,
                        applyType: 1
                    }).send(function () {
                        o.close(), k.alert({
                            type: "success",
                            text: "书名申请已提交, 请等待审核结果",
                            confirmText: "我知道了",
                            confirm: function () {
                            }
                        })
                    }, function (e) {
                        a.html("修改失败:" + e.msg)
                    })
                }) : a.html("该作品名不符合规范，不可使用哦")
            }).item(0))
        }
    })
}

function editCategory(e, t) {
    e = Number(e), t = Number(t), k.api("/ck/book/category/" + site).get().send(function (o) {
        for (var a, n = function (e) {
            r.length = 0;
            for (var o, a = 0; o = e[a]; a++) r.add(new Option(o.name, o.id)), o.id === t && (r.options[a].selected = !0)
        }, i = k("<select>").event("change", function () {
            n(o.child[this.value].child)
        }).item(), r = k("<select>").item(), d = 0; a = o.child[d]; d++) i.add(new Option(a.name, String(d))), a.id === e && (i.options[d].selected = !0, n(a.child));
        k.layout({
            html: function () {
                var e = this;
                return k("<div>").className("PopFrom").html("<h3>修改分类</h3>").append(k("<p>").html("选择一级分类").append(i)).append(k("<p>").html("选择二级分类").append(r)).append(k("<button>").className("max blue").html("申请修改").event("click", function () {
                    k.api("/ck/author/book/" + bookId + "/preUpdate").post({
                        newCategoryId: r.value,
                        applyType: 2
                    }).send(function () {
                        e.close(), k.alert({
                            type: "success",
                            text: "分类修改申请已提交, 请等待审核结果",
                            confirmText: "我知道了",
                            confirm: function () {
                            }
                        })
                    }, function (e) {
                        k.alert({text: "修改失败<br>" + e.msg, type: "failed"})
                    })
                }).item(0))
            }
        })
    })
}

function editBookDetail() {
    if (param.broadcast = window.broadcast.value, param.introduction = window.introduction.value, "" === param.introduction) return k.alert({
        text: "作品介绍不能为空。",
        type: "failed"
    });
    if (window.wordCount.innerText > 400) return k.alert({text: "作品介绍字数不能超过400。", type: "failed"});
    if (param.broadcast && window.broadcastWordCount.innerText > 140) return k.alert({
        text: "作者公告字数不能超过140。",
        type: "failed"
    });
    if (paramKeyword = paramKeyword.filter(function (e) {
        return !!e
    }), 0 === paramKeyword.length) return k.alert({text: "作品关键字缺失。", type: "failed"});
    if (paramKeyword.length > 10) return k.alert({text: "关键字最多可设置10组, 请修改", type: "failed"});
    for (var e, t = 0; e = paramKeyword[t]; t++) if (k.getByteLength(e) > 10) return k.alert({
        text: "每组关键字最多可设置5个字, 请修改: " + e,
        type: "failed"
    });
    param.keyword = paramKeyword.join(","), k.api("/ck/author/book/" + bookId).put(param).send(function () {
        k.alert({
            text: "修改成功", type: "success", onclose: function () {
                location.reload()
            }
        })
    }, function (e) {
        k.alert({text: "修改失败<br>" + e.msg, type: "failed"})
    })
}

function checkWord(e, t) {
    t.innerText = k.getTextCount(e.value)
}

var renderConext, bookId = Number(k.getUrl("bookid")), param = {}, paramKeyword = [], site = 2;
k.login(function () {
    k.api("/ck/author/book/" + bookId).get().send(function (e) {
        site = e.siteGroupCategory.bookClass.id, paramKeyword = e.keyword || [];
        var t = {bookId: bookId, bookName: e.bookName};
        t.detail = "now", k(".Tabbox").render(t), e.coverTag = '<img id="coverTag" class="cover" src="' + e.coverImg + '">', e.keyWords = k.map(e.keyword, function (e, t) {
            return '<span class="key">' + e + '<b onclick="removeKeyword(this.parentNode, ' + t + ')" title="删除">×</b></span>'
        }).join("") || "", e.isApplicant = 4 === e.authLevel.id, e.authLevel.authUrl = "17k.com" === k.domain ? "//www.17k.com/inc/news/10110.html" : "//www.4yt.net/inc/agreement/authorcode.html", e.updateStatusText = "如需修改作品更新状态，请联系责编/客服进行修改", e.bookStatusSelect = [{
            id: 3,
            name: "已完结",
            selected: 3 === e.bookStatus.id ? "selected" : ""
        }], e.isApplicant && 3 === e.bookStatus.id || (e.updateStatusText = e.isApplicant ? "作品设置为已完结后无法修改已发布章节内容，且无法修改作品更新状态哦" : "", e.bookStatusSelect.push({
            id: 1,
            name: "连载中",
            selected: 1 === e.bookStatus.id ? "selected" : ""
        })), renderConext = e, k(".Detail").render(renderConext, function () {
            window.keyWordInput.onkeyup = function (e) {
                var t = e || window.event;
                13 === (t.which || t.keyCode || t.charCode) && (this.value = this.value.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g, ""), this.value && k.getByteLength(this.value) <= 10 && this.value.match(/^[\w\u4e00-\u9fa5]+$/) ? (k("<span>").className("key").html(this.value + '<b onclick="removeKeyword(this.parentNode, ' + paramKeyword.length + ')" title="删除">×</b>').appendTo(window.keyWordCont), paramKeyword.push(this.value), this.value = "") : k.alert({
                    text: "只能输入字母数字和汉字(不含空格), 最多5个汉字长度",
                    type: "failed"
                }))
            }, window.wordCount.innerText = renderConext.introduction.replace(/[\s\u3000]+/g, "").length, window.broadcastWordCount.innerText = renderConext.broadcast.replace(/[\s\u3000]+/g, "").length
        })
    }, function (e) {
        k.alert({
            text: e.msg, type: "failed", onclose: function () {
                history.back()
            }
        })
    })
});