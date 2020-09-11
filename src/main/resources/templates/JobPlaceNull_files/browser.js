/**
 * Created by lgh on 2018/1/4.
 */
/**
 * 获取浏览器信息
 *
 */
(function ($) {
  // 外部依赖
  var _util = CS.util

  function _BrowserType () {
    var userAgent = navigator.userAgent // 取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf('Opera') > -1 // 判断是否Opera浏览器
    // var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera // 判断是否IE浏览器
    var isEdge = userAgent.indexOf('Edge') > -1 // 判断是否IE的Edge浏览器
    var isFF = userAgent.indexOf('Firefox') > -1 // 判断是否Firefox浏览器
    var isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1 // 判断是否Safari浏览器
    var isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1 // 判断Chrome浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1

    if (isIE) {
      var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
      reIE.test(userAgent)
      var fIEVersion = parseFloat(RegExp['$1'])
      console.log('IEV:' + fIEVersion)
      if (fIEVersion == 7) { return 'IE7' } else if (navigator.userAgent.indexOf('MSIE 9.0') > 0 && !window.innerWidth) { return 'IE8' } else if (fIEVersion == 9) { return 'IE9' } else if (fIEVersion == 10) { return 'IE10' } else if (fIEVersion == 11) { return 'IE11' } else { return 'IE6' }// IE版本过低
    } else if (isIE11) {
      return 'IE11'
    }

    if (isFF) { return 'Firefox' }
    if (isOpera) { return 'Opera' }
    if (isSafari) { return 'Safari' }
    if (isChrome) { return 'Chrome' }
    if (isEdge) { return 'Edge' }
    return 'unknown'
  }
  function _detectOS () {
    var sUserAgent = navigator.userAgent
    var isWin = (navigator.platform == 'Win32') || (navigator.platform == 'Windows')
    var isMac = (navigator.platform == 'Mac68K') || (navigator.platform == 'MacPPC') || (navigator.platform == 'Macintosh') || (navigator.platform == 'MacIntel')
    if (isMac) return 'Mac'
    var isUnix = (navigator.platform == 'X11') && !isWin && !isMac
    if (isUnix) return 'Unix'
    var isLinux = (String(navigator.platform).indexOf('Linux') > -1)
    if (isLinux) return 'Linux'
    if (isWin) {
      var isWin2K = sUserAgent.indexOf('Windows NT 5.0') > -1 || sUserAgent.indexOf('Windows 2000') > -1
      if (isWin2K) return 'Win2000'
      var isWinXP = sUserAgent.indexOf('Windows NT 5.1') > -1 || sUserAgent.indexOf('Windows XP') > -1
      if (isWinXP) return 'WinXP'
      var isWin2003 = sUserAgent.indexOf('Windows NT 5.2') > -1 || sUserAgent.indexOf('Windows 2003') > -1
      if (isWin2003) return 'Win2003'
      var isWinVista = sUserAgent.indexOf('Windows NT 6.0') > -1 || sUserAgent.indexOf('Windows Vista') > -1
      if (isWinVista) return 'WinVista'
      var isWin7 = sUserAgent.indexOf('Windows NT 6.1') > -1 || sUserAgent.indexOf('Windows 7') > -1
      if (isWin7) return 'Win7'
    }
    return 'other'
  }

  _util.initNameSpace('CS')
  CS.browser = {
    'browserType': _BrowserType,
    'detectOS': _detectOS

  }
})(jQuery)
