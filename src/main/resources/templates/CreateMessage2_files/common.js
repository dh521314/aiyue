$(function () {
  // 外部依赖
  var _dialog = CS.dialog,
    _ajax = CS.ajax

  /**
   * 入口只有一个
   */
  function init () {
    bindEvent()

    goPageTop()
    isShowHeaderShadow()
    hoverColumnInfo()
    gotoDetail()
    isShowGoTop()
  }

  init()

  /**
   * 绑定元素事件
   */
  function bindEvent () {
    // 点击收藏文章的图标
    $('[data-node="collectArticle"]').on('click', function (event) {
      event.preventDefault()
      event.stopPropagation()
      var $this = $(this)
      if (!window.yconfig.isLogin) {
        window.location.href = '/contentv2/public/login.html'
        return
      }
      // 收藏文章
      var caid = $this.attr('data-articleid')
      _ajax.collectArticle(caid, function (json) {
        // 成功后的回调函数
        // 接口正常
        if (json.returnCode == 200) {
          // 收藏成功

          // if (json.result) {
          if ($this.hasClass('act')) {
            if ($this.hasClass('article-content')) {
              $('.article-content').removeClass('act')
              $('.article-content').find('[data-node="tip"]').text('收藏')
            } else {
              $this.removeClass('act')
              $this.find('[data-node="tip"]').text('收藏')
            }

            // _dialog.tip('取消收藏成功')
          } else {
            if ($this.hasClass('article-content')) {
              $('.article-content').addClass('act')
              $('.article-content').find('[data-node="tip"]').text('已收藏')
            } else {
              $this.addClass('act')
              $this.find('[data-node="tip"]').text('已收藏')
            }

            // _dialog.tip('收藏成功')
          }
        } else {
          // _dialog.tip('收藏失败')
        }
        // } else {
        //   _dialog.tip(json.returnMsg || '收藏失败')
        // }
      })
    })

    // 点击关注专栏的按钮
    $('[data-node="followBtn"]').on('click', function (event) {
      event.preventDefault()
      event.stopPropagation()
      if (!window.yconfig.isLogin) {
        window.location.href = '/contentv2/public/login.html'
        return
      }
      var $this = $(this)
      // 关注专栏
      _ajax.followColumn($this.attr('data-columnid'), function (json) {
        // 成功后的回调函数
        // 接口正常
        if (json.returnCode == 200) {
          // 关注成功
          if (json.result) {
            if ($this.hasClass('content-follow')) {
              $('[data-node="followBtn"]').hide()
              // 显示已关注
              $('[data-node="followedBtn"]').show()
            } else {
              $this.hide()
              // 显示已关注
              $this.siblings('[data-node="followedBtn"]').show()
            }

            // _dialog.tip('关注成功')
          } else {
            // _dialog.tip('关注失败')
          }
        } else {
          _dialog.tip(json.returnMsg || '关注失败')
        }
      })
    })
    // 取消关注
    $('[data-node="followedBtn"]').on('click', function (event) {
      event.preventDefault()
      event.stopPropagation()
      if (!window.yconfig.isLogin) {
        window.location.href = '/contentv2/public/login.html'
        return
      }
      var $this = $(this)
      _ajax.followColumn($this.attr('data-columnid'), function (json) {
        // 成功后的回调函数
        // 接口正常
        if (json.returnCode == 200) {
          // 关注成功
          if ($this.hasClass('content-follow')) {
            $('[data-node="followBtn"]').show()
            // 显示已关注
            $('[data-node="followedBtn"]').hide()
          } else {
            $this.hide()
            // 显示已关注
            $this.siblings('[data-node="followBtn"]').show()
          }
          // _dialog.tip('取消关注成功')
        } else {
          // _dialog.tip('取消关注失败')
        }
        // } else {
        //   _dialog.tip(json.returnMsg || '取消关注失败')
        // }
      })
    })

    // 点赞
    $('.j-article-thumb').on('click', function (event) {
      event.preventDefault()
      event.stopPropagation()
      if (!window.yconfig.isLogin) {
        window.location.href = '/contentv2/public/login.html'
        return
      }
      if ($('.j-article-thumb').hasClass('up')) return
      var $this = $(this)
      _ajax.articleLike($this.attr('data-caid'), function (json) {
        // 成功后的回调函数
        // 接口正常
        if (json.returnCode == 200) {
          // 关注成功
          // if (json.result) {
          $('.j-article-thumb').addClass('up')
          var favorNum = $('.j-article-thumb').attr('data-count')
          $('.j-article-thumb').find('em').text(parseInt(favorNum) + 1)
          // _dialog.tip('点赞成功')
        } else {
          // _dialog.tip('点赞失败')
        }
        // } else {
        //   _dialog.tip(json.returnMsg || '取消关注失败')
        // }
      })
      // var target = $(e.currentTarget)
      // if (target.hasClass('up')) {
      //   target.removeClass('up')
      // } else {
      //   target.addClass('up')
      // }
    })

    // 评论点赞
    $('.j-review-thumb').on('click', function (event) {
      event.preventDefault()
      event.stopPropagation()
      if (!window.yconfig.isLogin) {
        window.location.href = '/contentv2/public/login.html'
        return
      }

      var $this = $(this)
      if ($this.hasClass('up')) {
        return
      }
      var caid = $this.attr('data-caid')
      var rid = $this.attr('data-review-id')
      var isReview = $this.attr('data-review-type')
      var favElement = $this.find('em')
      favElement.text(parseInt(favElement.text(), 10) + 1)
      $this.addClass('up')
      _ajax.reviewLike(caid, rid, '0', isReview)
    })

    $('.reset-select').click(function () {
      window.location.href = $(this).attr('data-url')
    })
  }

  // 回到顶部
  function goPageTop () {
    $('#j-goTop').on('click', function () {
      $('html,body').animate({scrollTop: 0}, 300)
    })
  }

  // 头部离开顶部增加阴影，返回顶部去掉阴影
  function isShowHeaderShadow () {
    var siteHeader = $('#j-siteHeader')
    var scrollTop
    var isTop = true

    $(window).scroll(function () {
      scrollTop = $(window).scrollTop()
      if (scrollTop > 0 && isTop) {
        isTop = false
        siteHeader.addClass('shadow')
      }
      if (scrollTop === 0) {
        isTop = true
        siteHeader.removeClass('shadow')
      }
    })
  }

  // 页面上滑时 显示goTop按钮
  function isShowGoTop () {
    var rightFloatWrap = $('#j-rightFloatWrap')
    var scrollTop
    var isTop = true

    $(window).scroll(function () {
      scrollTop = $(window).scrollTop()
      if (scrollTop > 0 && isTop) {
        isTop = false
        rightFloatWrap.stop().fadeIn(300)
      }
      if (scrollTop === 0) {
        isTop = true
        rightFloatWrap.stop().fadeOut(300)
      }
    })
  }

  // 通用 hover展示专栏气泡 兼容顶部hover显示和窄屏
  function hoverColumnInfo () {
    var time1, time2
    var articleListWrap = $('.article-list-wrap')

    articleListWrap.on('mouseenter', 'li .hover-info, li .bubble-info', function (e) {
      var target = $(e.currentTarget),
        targetLi = target.closest('li')

      clearTimeout(time2)

      time1 = setTimeout(function () {
        // 元素靠屏幕左不被遮挡时
        if (targetLi.offset().left > 130) {
          // 被上面遮挡时
          if (targetLi.offset().top < 240) {
            articleListWrap.find('li').removeClass('hover inner-hover')
            targetLi.addClass('hover')
            targetLi.find('.bubble-info').addClass('down')
          } else {
            articleListWrap.find('li').removeClass('hover inner-hover')
            targetLi.addClass('hover')
          }
        } else { // 被左边遮挡时
          articleListWrap.find('li').removeClass('hover inner-hover')
          targetLi.addClass('hover inner-hover')
        }
      }, 200)
    }).on('mouseleave', 'li .hover-info, li .bubble-info', function (e) {
      var target = $(e.currentTarget),
        targetLi = target.closest('li')

      clearTimeout(time1)

      time2 = setTimeout(function () {
        targetLi.removeClass('hover inner-hover')
        targetLi.find('.bubble-info').removeClass('down')
      }, 200)
    })
  }

  function gotoDetail () {
    $('.cloumn-detail').click(function () {
      window.location.href = $(this).attr('data-url')
    })
    $('.special-list').on('click', 'li', function () {
      window.location.href = $(this).attr('data-url')
    })
    $('.special-list').on('click', 'a', function (e) {
      e.stopPropagation()
    })
  }
})
