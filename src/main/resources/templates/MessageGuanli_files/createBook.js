$(function(){
  function canCreateNovel(successCb) {
    $.ajax({
      url: '/ccauthorweb/novel/iscancreatenovel?t=' + Date.now(),
      dataType: 'json',
      success: function (res) {
        if (!res.result) {
          new Dialog().alert('<h6>' + res.returnMsg + '</h6>', {
              buttons: [{ value: "我知道了" }]
          });
          return;
        }
        if (successCb) {
          successCb();
        }
      },
      error: function() {
        $.lightTip.error("网络错误");
      }
    });
  }
  
  function getAvailableType() {
    $.ajax({
      url: '/ccauthorweb/novel/getpreinfowhennewnovel?t=' + Date.now(),
      dataType: 'json',
      success: function (res) {
          showCreateDialog(res.result);
      },
      error: function() {
          console.log("网络错误");
      }
    });
  }
  
  function showCreateDialog(noveltypeList) {
    var wrapper = document.createElement("div");
    $(wrapper).html($("#bookCreateType").html());
    $(wrapper).find(".type-item").each(function() {
      for(var i = 0; i < noveltypeList.length; i++) {
        var elemType = $(this).data('type')
        if (noveltypeList[i].noveltype == elemType) {
          return;
        }
      }
      $(this).remove();
    });
    $(wrapper).find(".type-item").eq(0).addClass("current");
    var dialog = new Dialog({
      title: '选择创建作品的类型',
      content: $(wrapper).html(),
      width: noveltypeList.length === 2 ? 360 : 520,
      onShow:function(){
          $('.j-select-book-type').on('click', 'li', function () {
            dataReport({
              pageid: 'ZQ_select_book_cate_new',
              eventid: $(this).attr("data-event-id"),
              cauthorid: yconfig.ttd
            });
              $(this).addClass('current').siblings().removeClass('current');
          });
      },
      buttons: [{
          value:"确定",
          events: function(event) {
            dataReport({
              pageid: 'ZQ_select_book_cate_new',
              eventid: 'ZQ_E05',
              cauthorid: yconfig.ttd
            });
              var url = $(".j-select-book-type .current").data("url");
              window.location.href = url;
              event.data.dialog.remove();
          }
      },{
          value:"取消",
          events: function(event) {
            dataReport({
              pageid: 'ZQ_select_book_cate_new',
              eventid: 'ZQ_E06',
              cauthorid: yconfig.ttd
            });
            event.data.dialog.remove();
          }
      }]
    });
  
    // 弹框主体元素
    dialog.el.dialog.addClass('select-dialog-two');
  }
  
  $(".j-create-book").bind("click",function(e) {
    e.preventDefault();
    dataReport({
      pageid: 'ZQ_select_book_cate_new',
      eventid: 'ZQ_E01',
      cauthorid: yconfig.ttd
    });
    canCreateNovel(getAvailableType);
  });
});