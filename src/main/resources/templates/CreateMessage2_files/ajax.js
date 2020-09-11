/**
 * ajax请求
 * @namespace CS.ajax
 * @author  langtao
 * @update 2019-4-26
 */
;
(function () {
  // 外部依赖
  var _util = CS.util,
    _dialog = CS.dialog

    // 是否正在发起请求
  var _isRequest = {
    collectArticle: false,
    followColumn: false,
    articleLike: false,
    reviewFavor: false,
    addComment: false,
    delComment: false
  }

  /**
     * 请求异常的提示语
     */
  var requestErrorTips = {
    'dataFormat': '数据格式异常，请稍后再试',
    'operation': '操作异常，请稍后再试',
    'network': '网络异常，请稍后再试'
  }

  var _ajaxUrls = {
    'addCollection': '/portal/domesticsite?service=collectionfavorreviewservice&action=addCollection', // 收藏专栏或文章
    'addArticleLike': '/portal/domesticsite?service=collectionfavorreviewservice&action=addArticleLike',
    'addReviewFavor': '/portal/domesticsite?service=collectionfavorreviewservice&action=addReviewFavor',
    'addComment': '/portal/domesticsite?service=collectionfavorreviewservice&action=addcomment',
    'delComment': '/portal/domesticsite?service=collectionfavorreviewservice&action=delcomment'
  }

  /**
     * 收藏文章
     * @param  {string} articleId     文章id (必传)
     * @param {function} successCallback 成功后的回调
     */
  function collectArticle (articleId, successCallback) {
    if (!articleId) {
      _dialog.tip('文章id未获取到')
      return
    }

    if (_isRequest.collectArticle) {
      return
    }
    _isRequest.collectArticle = true

    request({
      url: _ajaxUrls.addCollection,
      data: {
        rid: articleId,
        operatorType: 0 // 操作类型(1:关注专栏，0:收藏文章)
      },
      type: 'GET',
      dataType: 'json',
      success: function (json) {
        if (typeof successCallback === 'function') {
          successCallback(json)
        }
      },
      error: function () {
        _dialog.error(requestErrorTips.network)
      },
      complete: function () {
        _isRequest.collectArticle = false
      }
    })
  }

  /**
     * 关注专栏
     * @param  {string} columnId     专栏id (必传)
     * @param {function} successCallback 成功后的回调
     */
  function followColumn (columnId, successCallback) {
    if (!columnId) {
      _dialog.tip('专栏id未获取到')
      return
    }
    if (_isRequest.followColumn) {
      return
    }
    _isRequest.followColumn = true

    request({
      url: _ajaxUrls.addCollection,
      data: {
        rid: columnId,
        operatorType: 1 // 操作类型(1:关注专栏，0:收藏文章)
      },
      type: 'GET',
      dataType: 'json',
      success: function (json) {
        if (typeof successCallback === 'function') {
          successCallback(json)
        }
      },
      error: function () {
        _dialog.error(requestErrorTips.network)
      },
      complete: function () {
        _isRequest.followColumn = false
      }
    })
  }

  /**
     * 点赞
     * @param  {string} columnId     专栏id (必传)
     * @param {function} successCallback 成功后的回调
     */
  function articleLike (columnId, successCallback) {
    if (!columnId) {
      _dialog.tip('文章id未获取到')
      return
    }
    if (_isRequest.followColumn) {
      return
    }
    _isRequest.articleLike = true

    request({
      url: _ajaxUrls.addArticleLike,
      data: {
        caid: columnId
      },
      type: 'GET',
      dataType: 'json',
      success: function (json) {
        if (typeof successCallback === 'function') {
          successCallback(json)
        }
      },
      error: function () {
        _dialog.error(requestErrorTips.network)
      },
      complete: function () {
        _isRequest.articleLike = false
      }
    })
  }

  /**
   * https://yapi.yuewen.com/project/1095/interface/api/49613
   * @param {string} caid 
   * @param {string} rid 
   * @param {string} type 
   * @param {string} isReview 
   * @param {function} successCallback 
   */
  function reviewLike (caid, rid, type, isReview, successCallback) {
    _isRequest.reviewFavor = true
    request({
      url: _ajaxUrls.addReviewFavor,
      data: {
        caid: caid,
        rid: rid,
        type: type,
        isReview: isReview
      },
      type: 'POST',
      contentType: "application/json",
      dataType: 'json',
      success: function (json) {
        if (typeof successCallback === 'function') {
          successCallback(json)
        }
      },
      error: function () {
        _dialog.error(requestErrorTips.network)
      },
      complete: function () {
        _isRequest.reviewFavor = false
      }
    }) 
  }
  /**
   * 添加评论 https://yapi.yuewen.com/project/1095/interface/api/49635
   * @param {string} caid 
   * @param {string} content 
   * @param {function} successCallback 
   */
  function addComment (caid, content, successCallback) {
    _isRequest.addComment = true;
    request({
      url: _ajaxUrls.addComment,
      data: {
        caid: caid,
        content: content
      },
      type: 'POST',
      contentType: "application/json",
      dataType: 'json',
      success: function (json) {
        if (typeof successCallback === 'function') {
          successCallback(json)
        }
      },
      error: function () {
        _dialog.error(requestErrorTips.network)
      },
      complete: function () {
        _isRequest.addComment = false
      }
    }) 
  }

  /**
   * 删除评论https://yapi.yuewen.com/project/1095/interface/api/49641
   * @param {string} caid 
   * @param {string} reviewId 
   * @param {function} successCallback 
   */
  function delComment (caid, reviewId, successCallback) {
    _isRequest.addComment = true;
    request({
      url: _ajaxUrls.delComment,
      data: {
        caid: caid,
        reviewId: reviewId
      },
      type: 'POST',
      dataType: 'json',
      success: function (json) {
        if (typeof successCallback === 'function') {
          successCallback(json)
        }
      },
      error: function () {
        _dialog.error(requestErrorTips.network)
      },
      complete: function () {
        _isRequest.delComment = false
      }
    }) 
  }

  /**
     * ajax请求
     * @param {object} option 传参对象
     * @return {jquery object} jquery的ajax对象
     */
  function request (option) {
    // 未设置过超时时间
    if (!('timeout' in option)) {
      option.timeout = 10000 // 超时时间：默认为10秒
    }

    // 相对路径
    // if (option.url && option.url.indexOf('http') === -1) {
    //     // 添加服务器端的请求路径
    //     option.url = _env.serverUrl + option.url;
    // }

    var data = {
      'rnd': new Date().getTime() // 时间戳，防止缓存
    }

    // 统一添加token参数，以防CSRF
    var token = $.cookie('csrfToken')
    if (token) {
      data['_csrf'] = token
    }

    // 传参配置
    option.data = $.extend({}, data, option.data || {})
    if (option.type === 'POST') {
      option.data = JSON.stringify(option.data);
    }

    // 跨域请求, 发送身份凭证信息,比如Cookies
    // option.xhrFields = {
    //     withCredentials: true
    // };
    
    return $.ajax(option)
  }

  _util.initNameSpace('CS')
  CS.ajax = {
    'request': request, // 发起请求
    'requestErrorTips': requestErrorTips, // 错误提示
    'followColumn': followColumn, // 关注专栏
    'collectArticle': collectArticle, // 收藏文章
    'articleLike': articleLike, // 点赞
    'reviewLike': reviewLike, //点赞评论
    'addComment': addComment, //发布评论
    'delComment': delComment //删除评论
  }
})()
