/**
 * 会话模块
 * @namespace CS.dialog
 * @author langtao
 * @date 2019-4-26
 */
;
(function () {
  // 外部依赖
  var _util = CS.util

  // 提示层模板
  var _tipTpl = '<div data-node="popup" class="page-tips" style="display:none;">$content$</div>'

  // 对话框组件的默认配置
  var _dialogDefaultConfig = {
    'content': '', // 内容
    'closeTime': 0, // 自动关闭窗口的时间(单位：秒，默认0不关闭)
    'beforeClose': null, // 对话框关闭前执行的函数
    'strTpl': _tipTpl // 模板字符串
  }

  /**
     * 对话框组件
     * @param  {object} config 配置
     * @return {object}        对话框组件的实例对象
     */
  var _dialog = function (config) {
    this.config = $.extend({}, _dialogDefaultConfig, config)

    this.$popup = null
    this._closeTimer = null

    if (!this.config.button) {
      this.config.button = []
    }

    this._create()
    return this
  }

  _dialog.prototype = {
    /**
         * 创建对话框
         */
    _create: function () {
      var me = this,
        popTpl = _util.replaceTpl(this.config.strTpl, {
          'content': this.config.content
        }),
        $popup = $(popTpl)

      $(document.body).append($popup)

      this.$popup = $popup
      this.$popup.show()

      this.closeByTime()
    },

    /**
         * 关闭对话框
         */
    close: function () {
      if (this.$popup && this.$popup.length > 0) {
        if (this._closeTimer) {
          clearTimeout(this._closeTimer)
        }

        if (typeof this.config.beforeClose === 'function') {
          var ret = this.config.beforeClose.call(this)

          if (ret !== false) {
            $(this.$popup).remove()
          }
        } else {
          $(this.$popup).remove()
        }
      }
    },

    /**
         * 定时自动关闭窗口
         */
    closeByTime: function () {
      if (this._closeTimer) {
        clearTimeout(this._closeTimer)
      }

      if (this.config.closeTime > 0) {
        var me = this

        this._closeTimer = setTimeout(function () {
          me.close()
        }, this.config.closeTime * 1000)
      }
    }

  }

  CS.util.initNameSpace('CS')
  CS.dialog = {

    /**
         * 打开对话框
         * @param  {[type]} config [description]
         * @return {object}        对话框组件的实例对象
         */
    open: function (config) {
      return new _dialog(config)
    },

    /**
         * 关闭对话框
         * @param  {object} dialog 对话框组件的实例对象
         */
    close: function (dialog) {
      if (dialog && typeof dialog.close === 'function') {
        dialog.close()
      }
    },

    /**
         * 弹出提示层(无关闭和确定按钮)
         * @param  {string}   content  消息内容
         * @param  {Function} callback 对话框关闭时的回调函数 (可选)
         * @param {int} closeTime 自动关闭的时间（单位：秒）
         * @return {object}            对话框组件的实例对象
         */
    tip: function (content, callback, closeTime) {
      return new _dialog({
        'content': content,
        'strTpl': _tipTpl, // 提示层模板
        'opacity': 0,
        'closeTime': typeof closeTime === 'undefined' ? 2 : closeTime, // 0表示不自动关闭
        'beforeClose': callback
      })
    }

  }
})()
