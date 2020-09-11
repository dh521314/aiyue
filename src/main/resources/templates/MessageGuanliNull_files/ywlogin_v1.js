var yw = function() {
    var _params = {
            maskOpacity: 50,
            target     : 'top',
            popup      : 1,
            returnUrl  : ''
        }, // 参数
        _events = {}, // callback事件
        _baseUrl = "", // 登录基本地址，无参数
        _width = 400, // 宽度
        _height = 416, // 高度
        _eventOrigin = "", // 
        _iframeDiv = null, // 嵌套iframe的div
        _maskDiv = null, // 遮罩层
        _iframeUrl = "", // iframe的链接地址
        
        _ywLoginClock = '', // interval 变量
        _ywLoginTimeout = '', // timeout 变量
        _ywLoginInvalid = true, // 标志位
        _logoutCallback = '',
        _urls = {
            'checkstatus': 'https://ptlogin.yuewen.com/login/checkstatus',
            'logout': 'https://ptlogin.yuewen.com/login/logout',
            'passport': 'https://passport.yuewen.com/yuewen.html',
            'qdpassport': 'https://passport.qidian.com/login.html',
            'loginqq': 'https://login.book.qq.com/login.html',
            'qqLogout': 'https://ui.ptlogin2.qq.com/js/ptloginout.js'
        },
        
    _window = {
        add: function(e, n, t) {
            if (document.addEventListener)
                e.addEventListener(n,t,!1);
            else if (document.attachEvent){
                if (-1 != _window.find(e,n,t))
                    return;
                var o = function(n) {
                    n || (n = window.event);
                    var o = {
                        _event: n,
                        type: n.type,
                        target: n.srcElement,
                        currentTarget: e,
                        relatedTarget: n.fromElement ? n.fromElement : n.toElement,
                        eventPhase: n.srcElement == e ? 2 : 3,
    					clientX: n.clientX,
    					clientY: n.clientY,
    					screenX: n.screenX,
    					screenY: n.screenY,
    					altKey: n.altKey,
    					ctrlKey: n.ctrlKey,
    					shiftKey: n.shiftKey,
    					keyCode: n.keyCode,
    					origin: n.origin,
    					data: n.data,
                        stopPropagation: function() {
    						this._event.cancelBubble = !0
    					},
    					preventDefault: function() {
    						this._event.returnValue = !1
    					}
                    };
                    
                    Function.prototype.call? t.call(e, o) :
                        (e._currentHandler = t, e._currentHandler(o), e._currentHandler = null)
                };
                
                e.attachEvent("on" + n, o);
    			var r = {
    				element: e,
    				eventType: n,
    				handler: t,
    				wrappedHandler: o
    			},
    			i = e.document || e,
                a = i.parentWindow,
    			l = _window._uid();
                
    			a._allHandlers || (a._allHandlers = {}),
    			a._allHandlers[l] = r,
    			e._handlers || (e._handlers = []),
    			e._handlers.push(l),
    			a._onunloadHandlerRegistered || (a._onunloadHandlerRegistered = !0,
    				a.attachEvent("onunload", _window._removeAllHandlers))
            }
        },
        find: function(e,n,t) {
            var o = e._handlers;
    		if (!o) return-1;
    		for (var r = e.document || e, i = r.parentWindow, a = o.length - 1; a >= 0; a--){
    			var l = o[a],
    			_maskDiv = i._allHandlers[l];
    			if (_maskDiv.eventType == n && _maskDiv.handler == t)
                    return a
    		}
            return -1
        }
    },
    
    _setParam = function(key, value) {
        _params[key] = value;
    },
    
    _setParams = function(_p) {
        for (var _key in _p) {
            _params[_key] = _p[_key];
        }
    },
    
    _getUrl = function() {
        if (document.location.href.indexOf('.qq.com') > -1) {
            _baseUrl = _urls.loginqq + '?';
            if (_params['popup'] == '1') {
                _baseUrl = _urls.passport + '?unionshow=11110&';
            }
        } else if(document.location.href.indexOf('.qidian.com') > -1 && _params['popup'] != '1'){
            _baseUrl = _urls.qdpassport + '?';
        } else {
            _baseUrl = _urls.passport + '?';
        }
        var _url = _baseUrl;
        _eventOrigin = _baseUrl;
        
        if (_params['returnUrl'] == '') {
            _params['returnUrl'] = document.location.href;
        }
        
        for (var _key in _params) {
            _url += _key + '=' + encodeURIComponent(_params[_key]) + '&';
        }
        return _url;
    },
    
    _getRegUrl = function(appid, areaid) {
        var _url = '';
        
        if (document.location.href.indexOf('.qq.com') > -1) {
            _url = _urls.loginqq.replace('login.html', 'reg.html') + '?';
        } else if (document.location.href.indexOf('.qidian.com') > -1) {
            _url = _urls.qdpassport.replace('login.html', 'reg.html') + '?';
        } else {
            _url = _urls.passport.replace('yuewen.html', 'reg.html') + '?';
        }
        
        if (_params['returnUrl'] == '') {
            _params['returnUrl'] = document.location.href;
        }
        
        _params['appid'] = appid || _params['appid'];
        _params['areaid'] = areaid || _params['areaid'];
        for (var _key in _params) {
            _url += _key + '=' + encodeURIComponent(_params[_key]) + '&';
        }
        return _url;
    },
    
    _getLoginUrl = function() {
        var _popup = _params['popup'] || '';
        _params['popup'] = '';
        var _url = _getUrl();
        _params['popup'] = _popup;
        return _url;
    },
    
    _getQidianUrl = function() {
        _params['appid'] = 10,
        _params['areaid'] = 1;
        return _getUrl();
    },
    
    _getQQUrl = function() {
        _params['appid'] = 1450000220,
        _params['areaid'] = 1;
        return _getUrl();
    },
    
    _getRegQidianUrl = function() {
        _params['appid'] = 10,
        _params['areaid'] = 1;
        _params['returnUrl'] = 'http://www.qidian.com';
        return _getRegUrl();
    },
    
    _getRegQQUrl = function() {
        _params['appid'] = 1450000220,
        _params['areaid'] = 1;
        _params['returnUrl'] = 'http://chuangshi.qq.com';
        return _getRegUrl();
    },
    
    _addIframe = function(_url, _divObj) {
        if (_divObj) 
            _iframeDiv = _divObj;
        else
            _iframeDiv = document.getElementById("div_ywlogin");
        
        if (_iframeDiv == null) {
            _iframeDiv = document.createElement('div'),
            document.body.appendChild(_iframeDiv);
            var _style = "left:50%;";
                _style += "top:50%;",
                _style += "position:fixed;",
                _style += "z-index:9999;",
                _style += "background:none;",
                _style += "_position:absolute;",
                _style += "_top:expression(eval(document.documentElement.scrollTop+(document.documentElement.clientHeight-this.offsetHeight)/2));",
                _style += "_margin-top:0px;",
                _iframeDiv.style.cssText = _style;
                _iframeDiv.id = "div_ywlogin";
        }
        _iframeDiv.innerHTML = '<iframe name="ui_ywlogin" id="ui_ywlogin" allowtransparency="true" scrolling="no" frameborder="0" width="100%" height="100%" style="top:0; left:0;' + (1 == _params.border_radius ? "border-radius:5px;" : "") + '" src="' + _url + '">';
    },
    
    _dragIframe = function(_w, _h) {
    	_iframeDiv && _w >1 && _h > 1 && (_width != _w || _height != _h) && ("function" == typeof _events.resize ? 
        _events.resize(parseInt(_w), parseInt(_h)):
    		(_iframeDiv.style.width = _w + "px",
    			_iframeDiv.style.height = _h + "px",
    			_iframeDiv.style.marginLeft= -_w/2 + "px",
    			_iframeDiv.style.marginTop = -_h/2 + "px")
    		),
    	_width = _w,
    	_height = _h;
    },
    
    _setCallback = function (_key, _fun) {
        _events[_key] = _fun;
    },
    
    _setOpacity = function() {
        var _opacity = _params.maskOpacity;
        _maskDiv = document.getElementById("div_ywmask");
        if (0 != _opacity) {
            if (_maskDiv == null) {
                var _style = "background-color:#000;overflow:hidden;position:fixed;left:0;top:0;width:100%;height:100%;z-index:9998;opacity:" + _opacity/100 + ";filter:alpha(opacity=" + _opacity + ");";
                _style += "_position:absolute;_height:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight));_width:expression(eval(document.documentElement.scrollLeft+document.documentElement.clientWidth));",
                _maskDiv = document.createElement("div"),
                _maskDiv.style.cssText = _style,
                _maskDiv.id = "div_ywmask";
                document.body.appendChild(_maskDiv);
            }
            _maskDiv.style.display = "block";
        }
    },
    
    _toJson = function(_data) {
        var _json = {};
        if ("undefined" != typeof JSON)
            _json = JSON.parse(_data);
        else {
            var t=/^[\],:{}\s]*$/,
                o=/(?:^|:|,)(?:\s*\[)+/g,
                r=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
                i=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g;
                t.test(_data.replace(r,"@").replace(i,"]").replace(o,"")) && ( _json = new Function("return " + _data)() )
        }
        return _json;
    },
    
    _json2str = function(_json) {
        var _data = "";
        if ("undefined" != typeof JSON)
            _data = JSON.stringify(_json);
        else {
            var _arr = [];
            for(var _key in _json)
                _arr.push('"' + _key + '":"' + _json[_key] + '"');
            _data = "{" + _arr.join(",") + "}"
        }
        
        return _data
    },
    
    _close = function() {
        _hideYwui(),
        "function" == typeof _events.close && _events.close()
    },
    
    _hideYwui = function() {
        _iframeDiv.style.display = "none",
        _maskDiv && (_maskDiv.style.display = "none")
    },
    
    _init = function() {
        
    },
    
    _notifyClose = function(_event) {
        _iframeDiv.style.display="none";
    },
    
    _crossMessage = function(_json) {
        if (_params.target && _params.target == 'popup' && "undefined" != typeof window.postMessage) 
            window.parent.postMessage(_json2str(_json),"*");
        else {
            try {
                navigator.ywlogin_callback && navigator.ywlogin_callback(_json2str(_json))
            } catch (_ex){
                console.log(_ex.message);
            }
        }
    },
    
    _cancleLogin = function() {
        window.clearInterval(_ywLoginClock),
        window.clearTimeout(_ywLoginTimeout),
        _ywLoginInvalid = !0
    },
    
    _showYwui = function(_obj) {
        var _url = _getUrl();
        _iframeUrl ? document.getElementById("ui_ywlogin").src = _url : (
            _addIframe(_url, _obj),
            -[1] || window.XMLHttpRequest || _dragIframe(_width - 1, _height - 1)),
        _dragIframe(_width - 1, _height - 1),
        _url =_iframeUrl,
        _setOpacity(),
        _iframeDiv.style.display="block";
    },
    
    _logout = function(method) {
        _logoutCallback = method || '';
        method = 'yw.logoutCallback';
        var url = _urls.logout + '?method=' + encodeURIComponent(method) + '&format=jsonp';
        var script = document.createElement('script');
        script.src = url;
        script.id = 'jsonpLogoutScript';
        document.body.appendChild(script);
        //设置超时，超时的话直接显示提交成功
        setTimeout(function() {
            if (document.getElementById(script.id)) {
                document.body.removeChild(script);
            }
        }, 2000);
    },
    
    _qqLogout = function() {
        return;
        var url = _urls.qqLogout;
        var script = document.createElement('script');
        script.src = url;
        script.id = 'qqLogoutScript';
        document.body.appendChild(script);
        try { 
            pt_logout.logout(function(ret){
            });
            //设置超时，超时的话直接显示提交成功
            setTimeout(function() {
                if (document.getElementById(script.id)) {
                    document.body.removeChild(script);
                }
            }, 2000);
        } catch (e) {}
    },
    
    _logoutCallback = function(res) {
        if (res.loginType == 13) {
            _qqLogout();
        }
        if (_logoutCallback != '' && _logoutCallback != undefined && typeof _logoutCallback == 'function') {
            _logoutCallback();
        }
    },
    
    _checkStatus = function(method) {
        method = method || 'yw.checkStatusCallback';
        var url = _urls.checkstatus + '?method=' + encodeURIComponent(method) + '&format=jsonp';
        var script = document.createElement('script');
        script.src = url;
        script.id = 'jsonpCheckStatusScript';
        document.body.appendChild(script);
        //设置超时，超时的话直接显示提交成功
        setTimeout(function() {
            if (document.getElementById(script.id)) {
                document.body.removeChild(script);
            }
        }, 2000);
    },
    
    _checkStatusCallback = function() {
    
    };
    
    return _init(), {
        setParam: _setParam,
        setParams: _setParams,
        showYwui: _showYwui,
        setCallback: _setCallback,
        close: _close,
        logout: _logout,
        checkStatus:_checkStatus,
        logoutCallback: _logoutCallback,
        checkStatusCallback:_checkStatusCallback,
        getUrl: _getUrl,
        getRegUrl: _getRegUrl,
        getLoginIframeUrl: _getUrl,
        getLoginUrl: _getLoginUrl,
        getQidianUrl: _getQidianUrl,
        getQQUrl: _getQQUrl,
        getRegQidianUrl: _getRegQidianUrl,
        getRegQQUrl: _getRegQQUrl
    }
}();