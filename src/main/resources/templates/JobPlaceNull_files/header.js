$(function () {
  // 头部下拉延时菜单
  function headerSlideDown () {
    var $listItem = $('.j-slideDownList li'), // 右上角下拉菜单的图标和用户头像
      leaveTimer, leaveTimer2, hoverTimer = null

    // 鼠标移入
    $listItem.not('.user-info').on('mouseenter', function (e) {
      $listItem.removeClass('hover')

      var target = $(e.currentTarget)
      hoverTimer = setTimeout(function () {
        target.addClass('hover')
      }, 200)

      clearTimeout(leaveTimer)
      clearTimeout(leaveTimer2)
    })

    $('#j-avatarBox .avatar').on('mouseenter', function (e) {
      var target = $(e.currentTarget)
      $listItem.removeClass('hover')
      hoverTimer = setTimeout(function () {
        target.closest('li').addClass('hover')
      }, 200)

      clearTimeout(leaveTimer)
      clearTimeout(leaveTimer2)
    })

    // 鼠标移出
    $listItem.on('mouseleave', function (e) {
      var target = $(e.currentTarget)

      clearTimeout(hoverTimer)
      leaveTimer = setTimeout(function () {
        target.removeClass('hover')
      }, 500)
    })

    // 顶部导航条
    // 鼠标移出
    $('#j-siteHeader').on('mouseleave', function () {
      clearTimeout(hoverTimer)
      leaveTimer2 = setTimeout(function () {
        $listItem.removeClass('hover')
      }, 500)
    })
  }

  headerSlideDown()
})
