$(function(){
    var elBacktop = $('<a href="javascript:" class="ui-button ui-button-square c-small g-back-top" role="button"><em class="icon-font">&#xe931;</em></a>');
    $("body").append(elBacktop)
    $(window).on('scroll', function () {
        var st = $(this).scrollTop();
        //   可以在此处定义滑动多少触发上滑按钮
        if (st > 0) {
            elBacktop.addClass("_on")
        } else {
            elBacktop.removeClass("_on")
        }
    });
    elBacktop.on('click', function (event) {
        event.preventDefault();
        $("html").animate({scrollTop:0})
    });
    $(window).on('resize', function () {
        $(this).trigger('scroll');
    });
})