$(function () {
    var cookie = {
        set:function(key,val,time){//设置cookie方法
            var date=new Date(); //获取当前时间
            var expiresDays=time;  //将date设置为n天以后的时间
            date.setTime(date.getTime()+expiresDays*24*3600*1000); //格式化为cookie识别的时间
            document.cookie=key + "=" + val +";expires="+date.toGMTString();  //设置cookie
        },
        get:function(key){//获取cookie方法
            /*获取cookie参数*/
            var getCookie = document.cookie.replace(/[ ]/g,"");  //获取cookie，并且将获得的cookie格式化，去掉空格字符
            var arrCookie = getCookie.split(";")  //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
            var tips;  //声明变量tips
            for(var i=0;i<arrCookie.length;i++){   //使用for循环查找cookie中的tips变量
                var arr=arrCookie[i].split("=");   //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
                if(key==arr[0]){  //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
                    tips=arr[1];   //将cookie的值赋给变量tips
                    break;   //终止for循环遍历
                }
            }
            return tips;
        },
        delete:function(key){ //删除cookie方法
            var date = new Date(); //获取当前时间
            date.setTime(date.getTime()-10000); //将date设置为过去的时间
            document.cookie = key + "=v; expires =" +date.toGMTString();//设置cookie
        }
    }

    $('.cate.tabA').hover(function () {
        $(this).find('.tabA-float').show();
    },function () {
        $(this).find('.tabA-float').hide();
    })
    $('.tabA-float').on('hover', function (e) {
        e.stopPropagation();
        $(this).show();
    })
    $(document).keydown(function(event){
        if (event.keyCode == 37){//    <-
            $('.prechapter')[0].click();
        }else if (event.keyCode == 39){
            $('.nextchapter')[0].click();
        }
    });
    // 设置
    $('.readerSetting').on('click', function () {
        if ($(this).hasClass('active')){
            hide_set();
        }else{
            show_set();
        }
    });
    $('.gpd_close').on('click', function () {
        hide_set();
    });
    function show_set() {
        $(this).addClass('active');
        $('.gpd_flt_setting').show();
    }
    function hide_set() {
        $(this).removeClass('active');
        $('.gpd_flt_setting').hide();
    }

    var set_data_base = {
        'color': 1,
        'fontFace': 1,
        'fontSize': 14,
        'width': 3
    };
    var set_data;
    var set_data_cookie = cookie.get("set_data");
    if (set_data_cookie) {
        set_data = JSON.parse(set_data_cookie);
    }else{
        set_data = {
            'color': 1,
            'fontFace': 1,
            'fontSize': 14,
            'width': 3
        };
    }

    init_set(set_data);
    function init_set(data) {
        gpd_setstyle(data.color);
        gpd_setfont(data.fontFace);
        gpd_setsize(data.fontSize);
        gpd_setwidth(data.width);
    }

    function gpd_setstyle(color) {
        $('.gpd_setstyle .gpd_setcon a.sbs_'+color).addClass("active").siblings().removeClass("active");
        document.body.className = "rb_" + color;
    }
    $('.gpd_setstyle .gpd_setcon a').on('click', function () {
        set_data.color = $(this).data('style');
        gpd_setstyle($(this).data('style'));
    });

    function gpd_setfont(fontFace) {
        $('.gpd_setfont .gpd_setcon a.sbf_'+fontFace).addClass("active").siblings().removeClass("active");
        $("#readerFt").attr("class", "rft_" + fontFace);
    }
    $('.gpd_setfont .gpd_setcon a').on('click', function () {
        set_data.fontFace = $(this).data('font');
        gpd_setfont($(this).data('font'));
    });


    function gpd_setwidth(width) {
        $('.gpd_setwidth .gpd_setcon a.sbw_'+width).addClass("active").siblings().removeClass("active");
        var with_num= {1: 640, 2: 800, 3: 960, 4:1280};
        $("#reader_warp").attr("class", "rw_" + width);
        $("#uiGPUserAct").css({
            "margin-left": Math.floor(with_num[width] / 2 + 10) + "px"
        });
        $("#uiGPReaderAct").css({
            "margin-left": "-" + Math.floor(with_num[width] / 2 + 70) + "px"
        });
    }
    $('.gpd_setwidth .gpd_setcon a').on('click', function () {
        set_data.width = $(this).data('width');
        gpd_setwidth($(this).data('width'));
    });

    function gpd_setsize(fontSize) {
        $('.gpd_setsize .gpd_setcon .nowfont').text(fontSize);
        $("#readerFt").css("font-size", fontSize + "px");
        $(".sbw_font .nowfont").html(fontSize);
    }
    // 文字大小
    var font_el = $('.gpd_setsize .gpd_setcon .nowfont');
    $('.setfont.small').on('click', function () {
        var s = font_el.text()*1;
        if (s == 14){
            return false;
        } else{
            s -= 2;
            font_el.text(s);
            set_data.fontSize = s;
            gpd_setsize(s);
        }
    })
    $('.setfont.big').on('click', function () {
        var s = font_el.text()*1;
        if (s == 30){
            return false;
        } else{
            s += 2;
            font_el.text(s);
            set_data.fontSize = s;
            gpd_setsize(s);
        }
    })

    $('.reset').on('click', function () {
        cookie.delete("set_data");
        init_set(set_data_base);
        hide_set();
    });
    $('.confirm').on('click', function () {
        cookie.set("set_data", JSON.stringify(set_data));
        console.log(cookie.get("set_data"));
        hide_set();
    });

    $('.j_userActive').hover(function () {
        $(this).find('.active-bubble').show();
    },function () {
        $(this).find('.active-bubble').hide();
    });

    $('#j_admireBtn_zan').on('click', function () {
        layer.open({
            type: 1,
            skin: 'j_admireBtn_zan_1',
            id: 'j_admireBtn_zan_1',
            title: '赞赏',
            shadeClose: false,
            scrollbar: false,
            shade: 0.5,
            area: ['520px', '540px'],
            content: $('.chapter_zan_pop').html(),
        });
    });
    $(document).on('click','#j_admireBtn_zan_1 .reward-list li', function () {
        $(this).addClass('act').siblings().removeClass('act');
        $('.j_admireBtn_zan_1 .calcReward').text($(this).data('reward'));
    });


});


