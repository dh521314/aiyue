$(function () {
    mzcalendar.init();
});

var mzcalendar = {

    /**
     * 逻辑入口
     * @method init
     */
    init: function () {
        // 事件绑定
        this.eventBind()
    },

    /**
     * 事件绑定
     * @method eventBind
     */
    eventBind: function () {
        this.bindCalendar();
        this.bindPopupClose();
    },

    //日历控件入口
    initCalendar: function () {


        $("#calendar").fullCalendar({
            header: {
                left: 'prev,next',
                center: 'title',
                right: ''
            },
            editable: false,
            locale: 'zh-cn',

            //日历配置接口，每月维护一份events数据
            //参考https://fullcalendar.io/docs/event_data/events_json_feed/
            /*events: [

             /!* 连续设置begin *!/
             {
             className: 'bg-special',
             start: '2016-10-02',
             end: '2016-10-06'
             },
             {
             className: 'bg-special',
             start: '2016-10-07',
             end: '2016-10-16'
             },
             {
             className: 'bg-special',
             start: '2016-10-18',
             end: '2016-10-20'
             },
             {
             className: 'bg-special',
             start: '2016-10-22',
             end: '2016-10-28'
             },
             /!* 连续设置end *!/

             {
             title: '2048 字',
             start: '2016-10-01'
             },
             {
             title: '4048 字',
             start: '2016-10-02'
             },
             {
             title: '48 字',
             start: '2016-10-03'
             },

             //有请假条的天数加class="leave-ticket"，设置description为请假条
             {
             title: '48 字',
             description: '请假条',
             className: 'leave-ticket',
             start: '2016-10-04'
             },
             {
             title: '48 字',
             start: '2016-10-05'
             },

             //未更新的天数，className设置为noupdate
             {
             className: 'noupdate',
             start: '2016-10-06'
             },

             {
             title: '4048 字',
             start: '2016-10-07'
             },
             {
             title: '4048 字',
             start: '2016-10-08'
             },
             {
             title: '4048 字',
             start: '2016-10-09'
             },
             {
             title: '4048 字',
             start: '2016-10-10'
             },
             {
             title: '4048 字',
             start: '2016-10-11'
             },
             {
             title: '4048 字',
             start: '2016-10-12'
             },
             {
             title: '4048 字',
             start: '2016-10-13'
             },
             {
             title: '4048 字',
             start: '2016-10-14'
             },
             {
             title: '4048 字',
             start: '2016-10-15'
             },
             {
             title: '4048 字',
             start: '2016-10-16'
             },
             {
             title: '4048 字',
             start: '2016-10-17'
             },
             {
             title: '4048 字',
             start: '2016-10-18'
             },
             {
             title: '4048 字',
             start: '2016-10-19'
             },
             //未更新的天数，className设置为noupdate
             {
             className: 'noupdate',
             start: '2016-10-20'
             },

             //未更新的天数，className设置为noupdate
             {
             className: 'noupdate',
             start: '2016-10-21'
             },
             //请假条，className设置为leave-ticket
             {
             title: '48 字',
             description: '请假条',
             start: '2016-10-22',
             className: 'leave-ticket'
             },
             {
             title: '4048 字',
             start: '2016-10-23'
             },
             {
             title: '4048 字',
             start: '2016-10-24'
             },
             {
             title: '4048 字',
             start: '2016-10-25'
             },
             {
             title: '4048 字',
             start: '2016-10-26'
             },
             {
             title: '4048 字',
             start: '2016-10-27'
             },
             {
             title: '4048 字',
             start: '2016-10-28'
             },
             {
             title: '4048 字',
             start: '2016-10-29'
             },

             {
             title: '4800 字',
             start: '2016-10-30'
             },
             {
             title: '4048 字',
             start: '2016-10-31'
             },
             {
             title: '4048 字',
             start: '2016-11-01'
             },
             {
             title: '4448 字',
             start: '2016-11-02'
             },
             {
             title: '',
             className: "noupdate",
             start: '2016-11-03'
             },

             {
             title: '4448 字',
             start: '2016-11-04'
             },
             //定时，className设置为timing
             {
             className: 'timing',
             description: '定时',
             title: '4800 字',
             start: '2016-11-20'
             },
             {
             className: 'timing',
             description: '定时',
             title: '4800 字',
             start: '2016-11-06'
             }
             ],*/
            // events: [{"title":"90 \u5b57","start":"2019-09-01"},{"description":"请假条","start":"2019-09-02"
            //     ,"className":"leave-ticket"},{"description":"条","start":"2016-12-03","className":"leave-ticket"
            // },{"description":"条","start":"2016-12-04","className":"leave-ticket"},{"description"
            //     :"条","start":"2016-12-05","className":"leave-ticket"},{"className":"noupdate","start"
            //     :"2016-12-06"},{"className":"noupdate","start":"2018-08-06"},{"className":"noupdate","start":"2016-12-08"
            // },{"className":"bg-special","start":"2016-12-01","end":"2016-12-06"}],
            events: function(start,end,timezone, callback){
                var year = $('#calendarYear').val()
                var month = $('#calendarMonth').val()
                $.ajax({
                    type:'get',
                    url: "/portal/domesticsite?service=workbenchservice&action=getCodewordCalendar", 
                    data:{
                        yyyyMM:year+month
                    },
                    success: function(data){
                        if(data.result&& data.result.codewordCalendarVoList){
                            var num = parseInt(data.result.yyyyMMToalCodeNum,10);
                            $('.fwn').text(num.toLocaleString());
                            var dataArr = data.result.codewordCalendarVoList.map(function(item,i){
                                var itemArr = item.yyyyMMdd.split('-');
                                var className = '';
                                if(item.leaveFlag){
                                    className = '_leave';
                                }else if(item.codeFlag){
                                    className  = '_update';
                                }else if(!item.codeFlag){
                                    className  = '_unUpdate';
                                }
                                return {
                                    start:item.yyyyMMdd,
                                    className:className,
                                    title:itemArr[2],
                                    codeNum:item.codeNum
                                };
                            })
                            callback(dataArr);
                        }            
                    }
                })
            },
            eventRender: function (event, element,view) {
                    // // 未更新
                    // $('.fc-bg .fc-today').prev().addClass('_unUpdate');
                    // // 有更新
                    // $('.fc-bg .fc-today').prev().prev().addClass('_update');
                    // // 请假条
                    // $('.fc-bg .fc-today').prev().prev().prev().addClass('_leave');

                //qtip为更新字数
                if(event.codeNum > 0){
                    element.qtip({
                        content: '更新 '+ event.codeNum + ' 字',
                        show: 'mouseover',
                        position: {
                            my: 'bottom center',
                            at: 'top center'
                        },
                        style: {
                            classes: 'qtip-dark qtip-rounded'
                        }
                    });
                }
 
                //给特定日期加"请假条"，"定时"
                // element.find(".fc-content").text(event.description);
                // $(".fc-content-skeleton .fc-today").append("<span class='txt-today'>今天</span>");
                // $(".txt-today").next(".txt-today").hide();
            }
        });

        // 我这里是随便写的逻辑
        // // 未更新
        // $('.fc-bg .fc-today').prev().addClass('_unUpdate');
        // // 有更新
        // $('.fc-bg .fc-today').prev().prev().addClass('_update');
        // // 请假条
        // $('.fc-bg .fc-today').prev().prev().prev().addClass('_leave');
    },

    //计算弹层高度
    popHeight: function (e) {
        var elem = $("." + e);
        var popheight = elem.height();
        if (popheight > $(window).height()) {
            elem.css("position", "absolute");
            elem.css({top: $(window).scrollTop()});
        } else {
            elem.css("position", "fixed");
            elem.css({top: ($(window).height() - popheight) / 2});
        }
    },
    //显示日历弹窗
    showCalendar: function (e) {
        var that = this;
        $('.' + e).show();
        $(".mask").show();

        //初始化日历
        that.initCalendar();
        that.popHeight(e);
    },

    //关闭弹窗
    hidePopup: function () {
        $(".calendar-popup").hide();
        $(".mask").hide();
    },

    //点击按钮初始化日历
    bindCalendar: function () {
        var that = this;
        // $(".btn-calendar a").on("click", function (e) {
        //     e.preventDefault();
        that.showCalendar('calendar-popup');
        // });
    },

    /*
     * 弹框关闭按钮事件绑定
     * @method bindPopupClose
     * */
    bindPopupClose: function () {
        var that = this;
        $('.J-close').on('click', function (e) {
            e.preventDefault();
            $('#calendar').fullCalendar('destroy');
            that.hidePopup();
        });
    }
}
$(function () {
    $('.sideBar li').on('click', function () {
        $(this).addClass('act').siblings().removeClass();
    });

    //计算当前年月，月份往前只能跳转到2016年7月，往后到当月
    var date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month
    }

    //day为当前年月
    //var day = year + "年 " + month + "月";
    //模拟月份前后选择
    $(".j_select").change(function () {
        var year = $('#calendarYear').val()
        var month = $('#calendarMonth').val()
        $('#calendar').fullCalendar( 'gotoDate', new Date(year + '/'+ month +'/1') )
        
    })

    $(".J-prev-month").click(function () {
        var monthString = $(".calendar-cont .fc-toolbar .fc-center h2").text();
        monthCalendar = parseInt(monthString.split("年")[1].split("月")[0]);
        if (monthCalendar == 07) {
            $(".J-prev-month").addClass("month-false");
            return;
        } else if (monthCalendar == 08) {
            $(".J-prev-month").addClass("month-false");
            $(".J-next-month").removeClass("month-false");
            $(".fc-icon-left-single-arrow").click();
        } else {
            $(".J-prev-month").removeClass("month-false");
            $(".J-next-month").removeClass("month-false");
            $(".fc-icon-left-single-arrow").click();
        }

    })
});
