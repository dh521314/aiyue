$(function () {
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

  // 作家新闻
  $('.g-title-link .icon-font').on('click', function (e) {
    e.preventDefault()
    var currentPage = parseInt($('.g-title-sd strong .current').text(), 10);
    var countPage = parseInt($('.g-title-sd strong .total').text(), 10);
    if (this.id == 'leftarrow') {
      if (currentPage > 1) {
        currentPage--
        $('.g-title-sd strong').html('<span class="current">' + currentPage + '</span>' + '／' + '<span class="total">' + countPage + '</span>');
      }
    }
    if (this.id == 'rightarrow') {
      if (currentPage < countPage) {
        currentPage++
        $('.g-title-sd strong').html('<span class="current">' + currentPage + '</span>' + '／' + '<span class="total">' + countPage + '</span>');
      }
    }
    $.ajax('/contentv3/news/getnews/page/' + currentPage, {
      success: function (res) {
        var newstr = ''
        for (var i = 0; i < res.result.list.length; i++) {
          var tag = res.result.list[i].mark == 0 ? '_danger' : ''
          newstr += '<li>' +
          '<a href="' + res.result.list[i].Url + '" target="_blank" data-url="' + res.result.list[i].Url + '" class="j-news jsTips" data-mark="' + res.result.list[i].mark + '" title="' + res.result.list[i].Title + '" data-newsid="' + res.result.list[i].IDX + '" >' +
          '<i class="g-dot ' + tag + '"></i>' + res.result.list[i].Title + '</a>' +
      '</li>'
        }
        $('.g-list-info').html(newstr)
      },
      data: {
        page: currentPage
      },
      method: 'POST'
    })
  }),
  $(document).on('click', '.j-news', function () {
    var newsid = $(this).attr('data-newsid')
    var mark = $(this).attr('data-mark')
    var url = $(this).attr('data-url')
    var self = this
    if (mark == 1) {
      // const a = document.createElement("a");
      // a.href = url;
      // a.target = "_blank"
      // a.click()
    } else {
      $.ajax(
        {
          url: '/contentv3/news/addReadnewsMark',
          data: {
            newsId: newsid,
            _token: getCookie('pubtoken')
          },
          method: 'post',
          success: function (result) {
            if (result.returnCode == 1000000) {
              $(self).children('.g-dot').removeClass('_danger')
            //   const a = document.createElement("a");
            //   a.href = url;
            //   a.target = "_blank"
            //   a.click()
            }
          }
        })
    }
  })
})
