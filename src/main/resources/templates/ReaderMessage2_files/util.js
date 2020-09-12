/**
 * 工具类
 * @namespace CS.util
 * @author  langtao
 * @update 2019-4-26
 */
;
(function () {
  var _util = {
    /**
         * 初始化命名空间
         * @param  {String} router 命名空间的名称
         * @param  {Object} root   命名空间的基准，默认是window
         */
    initNameSpace: function (router, root) {
      if (!router || router === '') {
        return
      }
      var p = root || window,
        arrNS = router.split('.')
      for (var i = 0, len = arrNS.length; i < len; i++) {
        if (!p[arrNS[i]]) {
          p[arrNS[i]] = {}
        }
        p = p[arrNS[i]]
      }
    },

    /**
         * 节流阀函数
         * @param  {Function} fn      执行的函数
         * @param  {object}   context 对象上下文this
         */
    throttle: function (fn, context) {
      if (typeof fn !== 'function') {
        return
      }

      if (fn.timeoutId) {
        clearTimeout(fn.timeoutId)
      }

      fn.timeoutId = setTimeout(function () {
        fn.call(context)
      }, 100)
    },

    /**
         * 根据url重定向页面
         * @param  {string} url 网页地址
         */
    redirectUrl: function (url) {
      location.href = url || location.href
    },

    /**
         * 是否支持Placeholder属性
         * @return {Boolean} 是否支持
         */
    isSupportPlaceholder: function () {
      return 'placeholder' in document.createElement('input')
    },

    /**
         * 替换模板，$str$
         * @param  {string} str  模板字符串
         * @param  {object} conf 模板替换配置
         * @return {string}      字符串
         */
    replaceTpl: function (str, conf) {
      return ('' + str).replace(/\$(\w+)\$/g, function (a, b) {
        return typeof conf[b] !== 'undefined' ? conf[b] : '$' + b + '$'
      })
    },

    /**
         * 按组切分数组
         * @param  {array} array          带切分的数组
         * @param  {int} groupItemCount 每组的元素个数
         * @return {array}                切分后的新数组
         */
    sliceArrayToGroup: function (array, groupItemCount) {
      var index = 0,
        newArray = []

      groupItemCount = groupItemCount || 4

      while (index < array.length) {
        newArray.push(array.slice(index, index += groupItemCount))
      }

      return newArray
    },

    /**
         * 根据QueryString参数名称获取值
         * @param  {string} name 需要获取的参数
         * @param  {string} str QueryString(比如url)
         * @return {string}      参数的值
         */
    getQueryByName: function (name, str) {
      str = str || location.href

      var qIndex = str.indexOf('?')
      if (qIndex === -1) {
        return ''
      }

      var query = str.substr(qIndex),
        result = query.match(new RegExp('[\?\&]' + name + '=([^\&]+)', 'i'))

      if (result === null || result.length < 1) {
        return ''
      }

      return result[1]
    },

    /**
         * 跳转页面，不产生新的历史记录
         * @param  {string} url 网页地址
         */
    refreshPage: function (url) {
      if (!url) {
        url = location.href
      }

      if (history.replaceState) {
        history.replaceState(null, document.title, url)
        history.go(0)
      } else {
        location.replace(url)
      }
    },

    /**
         * 点击链接后，进行无游览历史地跳转
         * @param  {object} eleLink 链接元素的对象
         * @example
         * $('a').on('click', function (event) {
         *     event.preventDefault();
         *     CS.util.replaceUrlByLink(this);
         * });
         */
    replaceUrlByLink: function (eleLink) {
      if (!eleLink) {
        return
      }

      var href = eleLink.href

      // 有真实路径的链接地址
      if (href && /^#|javasc/.test(href) === false) {
        this.refreshPage(href)
      }
    },

    /**
         * 将json对象转换成url字符串
         * @param  {object}  urlParams json对象
         * @param  {Boolean} isEncode  是否需要URI编码(默认: true)
         * @return {string}            url字符串(比如：?a=1&b=2)
         */
    convertJsonToUrlString: function (urlParams, isEncode) {
      if (!urlParams || _util.getJSONLength(urlParams) === 0) {
        return ''
      }

      if (typeof isEncode === 'undefined') {
        isEncode = true
      }

      var arrParams = [],
        val = ''

      for (var key in urlParams) {
        val = urlParams[key]
        if (isEncode) {
          val = encodeURIComponent(val)
        }

        arrParams.push(key + '=' + val)
      }

      return '?' + arrParams.join('&')
    },

    /**
         * 获取json对象的元素个数
         * @param  {object} obj json对象
         * @return {int}     元素个数
         */
    getJSONLength: function (obj) {
      var size = 0

      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          size++
        }
      }
      return size
    },

    /**
         * 是否为正整数
         * @param  {int/string}  number 数字或字符串
         * @return {Boolean}     是/否
         */
    isPositiveInteger: function (number) {
      return /^[0-9]*[1-9][0-9]*$/.test(number)
    },

    /**
         * 获取字符串长度
         * @param  {string} str 字符串
         * @return {int}     字符串长度
         */
    strlen: function (str) {
      return (_util.isIE() && str.indexOf('\n') != -1) ? str.replace(/\r?\n/g, '_').length : str.length
    },

    /**
         * 获取字符串长度（支持中文）
         * @param  {string} str 字符串
         * @return {int}     字符串长度
         */
    getStringLength: function (str) {
      var len = 0

      if (str) {
        for (var i = 0; i < str.length; i++) {
          len += str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255 ? 3 : 1
        }
      }

      return len
    },

    /**
         * 截取字符串（支持中文）
         * @param  {string} str    [description]
         * @param  {int} maxlen [description]
         * @param  {string} dot    [description]
         * @return {string}        截取后的字符串
         */
    subString: function (str, maxlen, dot) {
      if (!str) {
        return ''
      }

      dot = typeof dot === 'undefined' ? '...' : dot
      maxlen = maxlen - dot.length

      var len = 0
      var ret = ''

      for (var i = 0; i < str.length; i++) {
        len += str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255 ? 3 : 1
        if (len > maxlen) {
          ret += dot
          break
        }
        ret += str.substr(i, 1)
      }
      return ret
    },

    /**
         * 获取窗口滚动条的上边距
         * @return {int} 上边距
         */
    getScrollTop: function () {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    },

    /**
         * 获取窗口滚动条的左边距
         * @return {int} 左边距
         */
    getScrollLeft: function () {
      return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
    },

    /**
         * 获取窗口可见宽度
         * @return {int} 宽度
         */
    getClientWidth: function () {
      return (document.compatMode == 'CSS1Compat') ? document.documentElement.clientWidth : document.body.clientWidth
    },

    /**
         * 获取窗口可见高度
         * @return {int} 高度
         */
    getClientHeight: function () {
      return (document.compatMode == 'CSS1Compat') ? document.documentElement.clientHeight : document.body.clientHeight
    },

    /**
         * 获取窗口实际宽度
         * @return {int} 宽度
         */
    getScrollWidth: function () {
      return (document.compatMode == 'CSS1Compat') ? document.documentElement.scrollWidth : document.body.scrollWidth
    },

    /**
         * 获取窗口实际高度
         * @return {int} 高度
         */
    getScrollHeight: function () {
      return (document.compatMode == 'CSS1Compat') ? document.documentElement.scrollHeight : document.body.scrollHeight
    },

    /**
         * 是否为ie游览器
         * @return {Boolean} 判断结果
         */
    isIE: function () {
      return /msie/.test(navigator.userAgent.toLowerCase())
    },

    /**
         * 是否为ie6游览器
         * @return {Boolean} 判断结果
         */
    isIE6: function () {
      return !!window.ActiveXObject && !window.XMLHttpRequest
    },

    /**
         * 是否微信游览器
         * @return {Boolean} 判断结果
         */
    isWeixin: function () {
      return /MicroMessenger/i.test(navigator.userAgent)
    },

    /**
         * 验证手机号码的合法性
         * @param  {string}  value 输入值
         * @return {Boolean}            是否手机号码
         */
    isMobilePhone: function (value) {
      return /^1[0-9]{10}$/.test(value)
    },

    /**
         * 验证座机号码的合法性
         * @param  {string}  value 输入值
         * @return Boolean}            是否座机号码
         */
    isTelephone: function (value) {
      return /^0\d{2,3}-?\d{7,8}$/.test(value)
    },

    /**
         * 是否为移动端游览器
         * @return {Boolean} true/false
         */
    isMobileBrowser: function () {
      var u = navigator.userAgent

      // 是否为移动终端
      return /AppleWebKit.*Mobile/i.test(u) || /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(u)
    },

    /**
         * html编码
         * @param  {string} str 要编码的字符串
         * @return {string}     编码后的字符串
         */
    encodeHTML: function (str) {
      return str.replace(/ /g, '&nbsp;')
        .replace(/&/g, '&amp;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/\"/g, '&quot;')
        .replace(/\'/g, '&#039;')
    },

    /**
         * html解码
         * @param  {string} str 要解码的字符串
         * @return {string}     解码后的字符串
         */
    decodeHTML: function (str) {
      return str.replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&gt;/g, '>')
        .replace(/&lt;/g, '<')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
    },

    /**
     * 使用weibo分享页面
     * @param {Object} config
     * @param {string} config.appkey
     * @param {string} config.title
     * @param {string} config.url
     * @param {string} config.pic
     */
    shareByWeibo: function (config) {
      var baseUrl = 'http://service.weibo.com/share/share.php?';
      var queries = [];
      var keys = ['appkey', 'title', 'url', 'pic'];
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (config[key]) {
          queries.push(key + '=' + encodeURIComponent(config[key]))
        }
      }
      
      window.open(baseUrl + queries.join('&'), '_blank');
    },

    /**
     * 使用QQ空间分享页面
     * @param {Object} config
     * @param {string} config.title
     * @param {string} config.url
     * @param {string} config.pics
     * @param {string} config.summary
     */
    shareByQZone: function (config) {
      var baseUrl = 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
      var queries = [];
      var keys = ['title', 'url', 'pics', 'summary'];
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (config[key]) {
          queries.push(key + '=' + encodeURIComponent(config[key]))
        }
      }
      
      window.open(baseUrl + queries.join('&'), '_blank');
    },
    
    /**
     * 统计字数
     * @param {string} content 
     */
    countword: function (content) {
      content = content.replace(/\n/g, 'a');
      content = content.replace(/[\u4E00-\u9FA5]/g, 'a');
      return parseInt(content.length, 10)
    },

    /**
     * 
     * @param {Object} commentObj
     * @param {string} commentObj.content
     * @param {boolean} commentObj.del
     * @param {number} commentObj.isTop
     * @param {boolean} commentObj.favor
     * @param {number} commentObj.favorCount
     * @param {string} commentObj.reviewId
     * @param {string} commentObj.reviewUserCover
     * @param {string} commentObj.reviewUserName
     * @param {HTMLElement} template 
     */
    createComment: function(commentObj, template) {
      template.removeClass('reply-template').css('display', 'block');
      template.find('h3 span').text(commentObj.reviewUserName);
      
      if (!commentObj.isTop) {
        template.find('h3 i').remove();
      }

      template.find('[data-review-id]').attr('data-review-id', commentObj.reviewId);
      template.find('img').attr('src', commentObj.reviewUserCover);
      template.find('.user-content p').text(commentObj.content);
      if (commentObj.favor) {
        template.find('.user-content .j-review-thumb').addClass('up');
      }
      if (!commentObj.del) {
        template.find('.user-content .j-review-del').remove();
      }
      template.find('.user-content .j-review-thumb em').text(commentObj.favorCount);

      if (!commentObj.reviewReplyInfoVos || commentObj.reviewReplyInfoVos.length === 0) {
        template.find('.author-content').remove();
      }

      return template;
    }
  }

  _util.initNameSpace('CS')
  CS.util = _util
})()
