$(function () {
  var currentPageId = 1
  if (/pageNo/.test(location.href)) {
    // $(window).scrollTop($('.pagination').offset().top)
    currentPageId = location.href.split('pageNo=')[1].split(/\D/g)[0]
  }
  new Pagination($('.pagination'), {
    length: $('.pagination').attr('data-length'),
    every: $('.pagination').attr('data-every'),
    current: currentPageId,
    href: function (current) {
      return '?pageNo=' + current
    }
  })

  function initCollect () {
    var cbidArr = []
    $('.g-prodution-item').each(function () {
      cbidArr.push($(this).attr('data-cbid'))
    })

    $.ajax({
      type: 'get',
      url: '/portal/domesticsite?service=collectionservice&action=getCollecttionNumber',
      data: {
        CBIDs: cbidArr.join(',')
      },
      dataType: 'json',
      success: function (response) {
        if (response.returnCode === 200) {
          $.each(response.result, function (key) {
            $('.g-prodution-item' + '[data-cbid=' + response.result[key].cbid + ']').find('.collectNum').text(response.result[key].collectcount)
          })
        }
      }
    })
  }
  initCollect()

  $('.examine').bind('click', function () {
    var cbid = $(this).closest('li').attr('data-cbid')
    // 创建一个dialog
    new Dialog({
      title: '重新审核',
      content: '请依据站内短信的审核意见修改章节内容，重新提交后编辑将会在2个工作日内审核，确认提交吗？',
      width: 400,
      buttons: [{
        events: function (event) {
          $.ajax({
            url: '/Contentv3/novel/updatestatus',
            method: 'post',
            data: {
              CBID: cbid
            },
            success: function (data) {
              if (data.returnCode == 1000000) {
                window.location.reload()
              }
            }
          })
        },
        value: '确定'
      }, {
        value: '取消'
      }]
    })
  })
  $('.apply-notban').bind('click', function () {
    // 创建一个dialog
    var form
    var cbid = $(this).closest('li').attr('data-cbid')
    var lockTime = $(this).closest('li').attr('locktime')

    var html = _.template($('#applynoban').html())({
      data: {
        applyTime: lockTime,
        applyReson: ''
      }
    })
    var dialog = new Dialog({
      title: '申请解禁',
      content: html, // dialog的模板
      width: 640,
      onShow: function () {
        // 初始化模版中的select
        this.el.body.find('select').selectMatch()
        // 初始化form表单才能激活
        // 表单验证
        // input/textarea 计数
        $('#postcbid').val(cbid)
        form = new Form($('#applyNoBanForm'), function (data) {
          if (data.returnCode == 1000000) {
            window.location.reload()
          } else {
            new Dialog().alert(data.returnMsg, {
              type: 'custom'
            })
          }
        })
      },
      buttons: [{
        value: '申诉',
        events: function (event) {
          form.submit()
        }
      }, {
        value: '取消'
      }]
    })
  })
  $('.applyReview').bind('click', function (params) {
    var cbid = $(this).closest('li').attr('data-cbid')
    var self = this
    $.ajax(
      {
        url: '/contentv3/novel/bookSubmitAudit',
        data: {
          CBID: cbid,
          _token: getCookie('pubtoken')
        },
        method: 'post',
        success: function (result) {
          if (result.returnCode == 1000000) {
            window.location.reload()
          } else {
            new Dialog().alert(result.returnMsg, {
              type: 'custom'
            })
          }
        }
      })
  })
})
