/**
 * 作家资料：基础信息
 * @namespace CS.page.personal.baseInfo
 * @date 2015-8-12
 */
;(function ($) {
  // 外部依赖
  var _util = CS.util,
    _dialog = CS.dialog,
    // _localImg = CS.localImg, //本地预览图片组件
    _areaLinkage = CS.citySelection

  var _params = {}, // 参数集合
    _nodes = {}, // 页面元素的对象集合
    _isSubmitting = 0 // 表单是否正在提交中

  var _ajaxUrls = {
    'checkAuthorName': '/ccauthorweb/author/ismayeditauthorname' // 检测笔名是否通过验证
  }
  var str = '请填写街道名称，门牌号码，楼层和房间号',
    _grayColor = 'color:rgb(192,192,192)',
    _blackColor = 'color:rgb(51,51,51)',
    $address = $("input[name='address']")

  /**
   * 初始化
   */
  function init (ajaxGetProvince, isHasPassbook) {
    // 置灰显示缺省文案
    // showDefaultCopy()
    _params.ajaxGetProvince = ajaxGetProvince
    _params.isHasPassbook = isHasPassbook || ''
    _nodes.$form = $('#userInfo')

    _setFormValidate()
    _bindEvent()
    uploadAction()
    _bindEventBySelector()
    _areaLinkage.regionalLinkage(_params.ajaxGetProvince)
  // getProvince()
  }
  function uploadAction () {
    return
    $('#inputImage').on('click', function () {
      var noUploadHeader = $('#noUploadHeader').val()
      if (noUploadHeader == 1) {
        _dialog.alert('距离上次头像审核不足7天，无法上传新头像')
        return
      }
      if (noUploadHeader == 2) {
        _dialog.alert('图像审核中，无法上传新头像')
        return
      }
      $('#selectImage input').trigger('click')
    })
  }

  function showDefaultCopy () {
    $('#saveBtn').click(function () {
      if ($address.val() == str) {
        $address.attr('style', _blackColor).val('')
        return false
      }
    })
    $address.blur(function () {
      if ($address.val() == '') { $address.val(str).attr('style', _grayColor) } else { $address.attr('style', _blackColor) }
    })
    $address.click(function () {
      if ($address.val() == str) {
        $address.val('').attr('style', _blackColor)
      }
    })
  }
  /**
     * 绑定下拉选择器的元素事件
     */
  function _bindEventBySelector () {
    var $citySelect = $('#citySelect') // 城市选择器
    var $areaSelect = $('#areaSelect') // 区选择器
    // 省选择器
    $('#provinceSelect').on('change', function () {
      var provinceName = $(this).val(),
        cityNameList = _params.ajaxGetProvince[provinceName]

      if (cityNameList) {
        var arrCityTpl = []
        $.each(cityNameList, function (index, item) {
          arrCityTpl.push('<option value="' + index + '">' + index + '</option>')
        })
        // 更新省份对应的城市列表
        $citySelect.html(arrCityTpl.join(''))
        var arrCityTpl = []
        $.each(cityNameList[$('#citySelect').val()], function (index, item) {
          arrCityTpl.push('<option value="' + item + '">' + item + '</option>')
        })
        // 更新市对应的城市列表
        $areaSelect.html(arrCityTpl.join(''))
      }
    })
    // 当市select发生改变时  区域变化
    $('#citySelect').change(function () {
      // 市名
      var cityName = $(this).val(),
        provinceName = $('#provinceSelect').val(), // 省名
        // 市列表
        cityNameList = _params.ajaxGetProvince[provinceName]
      if (cityNameList) {
        var arrCityTpl = []
        $.each(cityNameList[$('#citySelect').val()], function (index, item) {
          arrCityTpl.push('<option value="' + item + '">' + item + '</option>')
        })
        // 更新市对应的区列表
        $areaSelect.html(arrCityTpl.join(''))
      }
    })
  }

  /**
     * 绑定页面元素的事件
     */
  function _bindEvent () {
    var $saveBtn = $('.j-user-save') // 保存按钮

    // 选择作家头像
    //        $('#coverFileBtn').on('change', function() {
    //            var isSelectedImg = _localImg.show($(this), $('#previewImg'), {
    //                'imgMaxSize': 5120, //图片最大容器（单位KB）
    //                'imgMaxSizeTips': '您上传的图片大于5M', //图片超过最大容量限制的提示
    //                'supportFileTypes': 'jpg|png',
    //                'fileTypeErrorTips': '图片格式一定要是JPG，GIF，PNG中的一种'
    //            })
    //
    //        })

    // 修改按钮
    $('#modifyBtn').on('click', function () {
      $('.saveBox').hide()
      $('.modifyBox').show()

      $(this).hide()
      $saveBtn.show()
      // 如果没有详细地址 默认置灰显示
      if ($address.val() == '') { $address.attr('style', _grayColor).val(str) }
      // selelct显示作家默认地址
      $('#provinceSelect').val($("input[data-node='province-name']").val())
      $('#citySelect').val($("input[data-node='city-name']").val())
      $('#areaSelect').val($("input[data-node='area-name']").val())
      return false
    })

    // 保存按钮
    $saveBtn.on('click', function () {
      _submitForm()
      return false
    })
    _tipAuthornameSuffix()

    $('#provinceSelect1').change(function () {
      getCity()
    })

    $('#citySelect1').change(function () {
      getArea()
    })
  }
  function _tipAuthornameSuffix () {
    if (!$('#authorizeTypeBtn')) {
      return
    }
    // 授权类型说明，显示/隐藏提示
    $('#authorizeTypeBtn').hover(
      function () {
        $('#authorizeTypeTips').show()
      },
      function () {
        $('#authorizeTypeTips').hide()
      }
    )
  }

  /**
     * 动态提交表单
     */
  function _submitForm () {
    var $form = _nodes.$form
    if (!$form.valid()) {
      return
    }

    if (_isSubmitting) {
      return
    }
    // _isSubmitting = 1
    var dataArray = $('#userInfo').serializeArray()
    var data = {

    }
    for (var i in dataArray) {
      if (dataArray[i].name == 'headimg' && !dataArray[i].value) {

      } else {
        data[dataArray[i].name] = dataArray[i].value
      }
    }

    $.ajax({
      type: 'post',
      url: '/ccauthorweb/author/authorselfupdate',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data),
      dataType: 'json',
      success: function (response) {
        if (response.returnCode == 2000) {
          $.lightTip.success(response.returnMsg)
          setTimeout(function () {
            window.location.reload()
          }, 1500)
        } else if (response.returnCode == 403) {
          window.location.href = '/portal/auth-vip-password?http_referer=' + encodeURIComponent(window.location.href)
        } else {
          $.lightTip.error(response.returnMsg)
        }
      }
    })

  // 动态提交表单
  }

  /**
     * 设置表单验证
     */
  function _setFormValidate () {
    // 设置验证规则
    var rules = {
      realname: {
        required: true,
        realNameCheck: true
      },
      cardId: {
        required: true,
        isIDCardV2: true,
        isIDCardV3: '#cardType'
      },
      mobile: {
        required: true,
        phoneCheck: '#tel_pre'
      },
      email: {
        required: true,
        email: true
      },
      contact_qq: {
        required: true,
        isQQ: true
      },
      address: {
        required: true,
        stringCheck: true,
        byteRangeLength: [10, 128]
      }
    }
    // 设置错误信息
    var messages = {
      realname: {
        required: '真实姓名不能为空',
        realNameCheck: '真实姓名请使用2-10位汉字或英文'
      },
      cardId: {
        required: '请输入您的证件号码',
        isIDCardV2: '证件号码为8位以上并且不能超过18位。',
        isIDCardV3: '身份证号只支持18位'
      },
      mobile: {
        required: '请输入手机号码',
        isMobile: '请输入一个格式正确的手机号码'
      },
      email: {
        required: '请输入电子邮件',
        email: '请输入一个格式正确的电子邮件'
      },
      contact_qq: {
        required: '请输入QQ号',
        isQQ: '请输入一个格式正确的QQ号'
      },
      address: {
        required: '请输入详细地址',
        stringCheck: '地址只能包括中文字、英文字母、数字和下划线',
        byteRangeLength: '地址必须在5-64个字之内'
      }

    }

    var $authorNameInput = $('#authorNameInput') // 笔名输入框
    if ($authorNameInput.length > 0) {
      // 笔名
      jQuery.validator.addMethod('authorNameCheck', function (value, element) {
        return this.optional(element) || /^[A-Za-z0-9\u4E00-\u9FFF.]{2,6}$/.test(value)
      }, '2-6个汉字、数字或英文字母组成')

      // 笔名
      rules.authorName = {
        required: true,
        authorNameCheck: true,
        remote: { // 检测笔名是否存在
          url: _ajaxUrls.checkAuthorName,
          type: 'get',
          // dataType: 'json',
          data: {
            authorName: function () {
              return $authorNameInput.val()
            },
            t: new Date().getTime()
          },
          dataFilter: function (res) {
            var data = JSON.parse(res)
            if (data.returnCode == 2000 && data.result.returnCode == 0) {
              return true
            } else {
              return false
            }
          }
        }
      }

      messages.authorName = {
        required: '笔名不能为空',
        remote: '该笔名已经被占用，请尝试其他笔名'
      }
    }

    _nodes.$form.validate({
      /* 设置验证规则 */
      'rules': rules,
      /* 设置错误信息 */
      'messages': messages,
      errorElement: 'p', // label会触发css设置的float:left
      errorPlacement: function (error, element) {
        element.closest('.write-form-li').find('.input-error').html(error)
        $(element).closest('.write-form-li').find('.input-vertified').hide()
        if (error.parent().parent().has('#authorNameInput')) {
          $(element).closest('.write-form-li').find('.input-right').addClass('dn')
        }
      },
      success: function (error, element) {
        // var $ok = error.parent().prevAll('[data-node="ok"]')
        $(element).closest('.write-form-li').find('.input-vertified').show()

        // // 检测的是笔名输入框

        if (error.parent().parent().has('#authorNameInput')) {
          if (_params.isHasPassbook == 'true') {
            $(element).closest('.write-form-li').find('.input-right').removeClass('dn').find('span').text('笔名修改后需提交审核，2个工作日内完成')
          } else {
            $(element).closest('.write-form-li').find('.input-right').removeClass('dn').find('span').text('笔名修改后需提交审核，2个工作日内完成')
          }
        }

        error.remove()
      }
    })
  }

  _util.initNameSpace('CS.page.personal')
  CS.page.personal.baseInfo = {
    'init': init
  }
})(jQuery)
