!function () {
    function t(t, e) {
        e = e || window;
        var n = m(e);
        return C(n, e), b(n, function (e, n, r) {
            return null != e.Array ? void t(e) : (n.open("text/html", "replace")._M_ = function () {
                r && (this.domain = r), e = this.defaultView || this.parentWindow, t(e)
            }, n.write(E + '<body onload="document._M_();"></body>' + x), void n.close())
        }), n
    }

    function e(e, n) {
        if (n = n || window, u || !e) {
            var r = u || n;
            return e && e(r), r
        }
        t(function (t) {
            u = t, e(t)
        }, n)
    }

    function n(t, e, n) {
        if (z[t]) return z[t];
        var r = new X(t, e, n);
        return z[t] = r, r
    }

    function r(t, e) {
        e && "0" !== e && (t.MtaH5 = t.MtaH5 || {}, MtaH5.hack = function () {
            return {conf: {sid: e, senseHash: !0, autoReport: !0, performanceMonitor: !1}}
        }, function (t, e) {
            function n(t) {
                return t = window.localStorage ? localStorage.getItem(t) || sessionStorage.getItem(t) : (t = document.cookie.match(new RegExp("(?:^|;\\s)" + t + "=(.*?)(?:;\\s|$)"))) ? t[1] : ""
            }

            function r(t, e, n) {
                if (window.localStorage) try {
                    n ? localStorage.setItem(t, e) : sessionStorage.setItem(t, e)
                } catch (t) {
                } else {
                    var r = window.location.host,
                        i = {"com.cn": 1, "js.cn": 1, "net.cn": 1, "gov.cn": 1, "com.hk": 1, "co.nz": 1},
                        o = r.split(".");
                    2 < o.length && (r = (i[o.slice(-2).join(".")] ? o.slice(-3) : o.slice(-2)).join(".")), document.cookie = t + "=" + e + ";path=/;domain=" + r + (n ? ";expires=" + n : "")
                }
            }

            function i(t) {
                var e = {};
                if (void 0 === t) {
                    var n = window.location;
                    t = n.host;
                    var r = n.pathname, i = n.search.substr(1);
                    n = n.hash
                } else n = t.match(/\w+:\/\/((?:[\w-]+\.)+\w+)(?:\:\d+)?(\/[^\?\\\"\'\|\:<>]*)?(?:\?([^\'\"\\<>#]*))?(?:#(\w+))?/i) || [], t = n[1], r = n[2], i = n[3], n = n[4];
                if (void 0 !== n && (n = n.replace(/\"|\'|\<|\>/gi, "M")), i) for (var o = i.split("&"), a = 0, s = o.length; a < s; a++) if (-1 != o[a].indexOf("=")) {
                    var c = o[a].indexOf("="), u = o[a].slice(0, c), c = o[a].slice(c + 1);
                    e[u] = c
                }
                return {host: t, path: r, search: i, hash: n, param: e}
            }

            function o(t) {
                return (t || "") + Math.round(2147483647 * (Math.random() || .5)) * +new Date % 1e10
            }

            function a() {
                var e = i(), a = {
                    dm: e.host,
                    pvi: "",
                    si: "",
                    url: e.path,
                    arg: encodeURIComponent(e.search || "").substr(0, 512),
                    ty: 0
                };
                return a.pvi = function () {
                    var t = n("pgv_pvi");
                    return t || (a.ty = 1, t = o(), r("pgv_pvi", t, "Sun, 18 Jan 2038 00:00:00 GMT;")), t
                }(), a.si = function () {
                    var t = n("pgv_si");
                    return t || (t = o("s"), r("pgv_si", t)), t
                }(), a.url = function () {
                    var n = e.path;
                    return t.senseQuery && (n += e.search ? "?" + encodeURIComponent(e.search || "").substr(0, 512) : ""), t.senseHash && (n += e.hash ? encodeURIComponent(e.hash) : ""), n
                }(), a
            }

            function s() {
                var t = i(document.referrer), e = i();
                return {
                    rdm: t.host,
                    rurl: t.path,
                    rarg: encodeURIComponent(t.search || "").substr(0, 512),
                    adt: e.param.ADTAG || e.param.adtag || e.param.CKTAG || e.param.cktag || e.param.PTAG || e.param.ptag
                }
            }

            function c() {
                try {
                    var t = navigator, e = screen || {width: "", height: "", colorDepth: ""}, n = {
                        scr: e.width + "x" + e.height,
                        scl: e.colorDepth + "-bit",
                        lg: (t.language || t.userLanguage || "").toLowerCase(),
                        tz: (new Date).getTimezoneOffset() / 60
                    }
                } catch (t) {
                    return {}
                }
                return n
            }

            function u(e) {
                e = e || {};
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                if (t.sid) {
                    e = [];
                    for (var r = 0, i = [a(), s(), {r2: t.sid}, c(), {random: +new Date}], o = i.length; r < o; r++) for (n in i[r]) i[r].hasOwnProperty(n) && e.push(n + "=" + ("undefined" == typeof i[r][n] ? "" : i[r][n]));
                    var u = function (e) {
                        e = Ta.src = ("https:" == document.location.protocol ? "https://pingtas.qq.com/webview" : "http://pingtcss.qq.com") + "/pingd?" + e.join("&");
                        var n = new Image;
                        Ta[t.sid] = n, n.onload = n.onerror = n.onabort = function () {
                            n = n.onload = n.onerror = n.onabort = null, Ta[t.sid] = !0
                        }, n.src = e
                    };
                    u(e), t.performanceMonitor && (n = function () {
                        if (window.performance) {
                            var e = window.performance.timing, n = {value: e.domainLookupEnd - e.domainLookupStart},
                                r = {value: e.connectEnd - e.connectStart},
                                i = {value: e.responseStart - (e.requestStart || e.responseStart + 1)},
                                o = e.responseEnd - e.responseStart;
                            e.domContentLoadedEventStart ? 0 > o && (o = 0) : o = -1, e = {
                                domainLookupTime: n,
                                connectTime: r,
                                requestTime: i,
                                resourcesLoadedTime: {value: o},
                                domParsingTime: {value: e.domContentLoadedEventStart ? e.domInteractive - e.domLoading : -1},
                                domContentLoadedTime: {value: e.domContentLoadedEventStart ? e.domContentLoadedEventStart - e.fetchStart : -1}
                            }
                        } else e = "";
                        for (var n = [], r = [], i = 0, o = [a(), {r2: t.cid}, c(), {random: +new Date}], s = o.length; i < s; i++) for (var d in o[i]) o[i].hasOwnProperty(d) && r.push(d + "=" + ("undefined" == typeof o[i][d] ? "" : o[i][d]));
                        for (d in e) e.hasOwnProperty(d) && ("domContentLoadedTime" == d ? r.push("r3=" + e[d].value) : n.push(e[d].value));
                        r.push("ext=pfm=" + n.join("_")), u(r)
                    }, "undefined" != typeof window.performance && "undefined" != typeof window.performance.timing && 0 != window.performance.timing.loadEventEnd ? n() : window.attachEvent ? window.attachEvent("onload", n) : window.addEventListener && window.addEventListener("load", n, !1))
                }
            }

            e.MtaH5 = e.MtaH5 || {}, e.Ta = e.Ta || {}, MtaH5.pgv = u, Ta.clickStat = MtaH5.clickStat = function (e, n) {
                var r = MtaH5.hack ? MtaH5.hack() : "", i = {};
                if (r.conf && function () {
                    var t, e = r.conf;
                    for (t in e) e.hasOwnProperty(t) && (i[t] = e[t])
                }(), i.cid) {
                    var o = [], u = a(), d = {r2: t.sid};
                    u.dm = "taclick", u.url = e, d.r2 = i.cid, d.r5 = function (t) {
                        t = "undefined" == typeof t ? {} : t;
                        var e, n = [];
                        for (e in t) t.hasOwnProperty(e) && n.push(e + "=" + t[e]);
                        return n.join(";")
                    }(n);
                    for (var h = 0, u = [u, s(), d, c(), {random: +new Date}], d = u.length; h < d; h++) for (var f in u[h]) u[h].hasOwnProperty(f) && o.push(f + "=" + ("undefined" == typeof u[h][f] ? "" : u[h][f]));
                    var o = MtaH5.src = ("https:" == document.location.protocol ? "https://pingtas.qq.com/webview" : "http://pingtcss.qq.com") + "/pingd?" + o.join("&"),
                        p = new Image;
                    MtaH5["click_" + i.sid] = p, p.onload = p.onerror = p.onabort = function () {
                        p = p.onload = p.onerror = p.onabort = null, MtaH5[i.sid] = !0
                    }, p.src = o
                }
            }, Ta.clickShare = MtaH5.clickShare = function (e) {
                var n = MtaH5.hack ? MtaH5.hack() : "", r = {}, o = i(), o = o.param.CKTAG || o.param.ckatg,
                    u = "undefined" == typeof o ? [] : o.split(".");
                if (n.conf && function () {
                    var t, e = n.conf;
                    for (t in e) e.hasOwnProperty(t) && (r[t] = e[t])
                }(), r.cid) {
                    var o = [], d = a(), h = {r2: t.sid};
                    for (d.dm = "taclick_share", d.url = "mtah5-share-" + e, h.r2 = r.cid, h.r5 = function (t, e) {
                        var n = [];
                        return 2 === t.length && t[0] == e && n.push(t[0] + "=" + t[1]), n.join(";")
                    }(u, "mtah5_share"), e = 0, d = [d, s(), h, c(), {random: +new Date}], h = d.length; e < h; e++) for (var f in d[e]) d[e].hasOwnProperty(f) && o.push(f + "=" + ("undefined" == typeof d[e][f] ? "" : d[e][f]));
                    f = MtaH5.src = ("https:" == document.location.protocol ? "https://pingtas.qq.com/webview" : "http://pingtcss.qq.com") + "/pingd?" + o.join("&");
                    var p = new Image;
                    MtaH5["click_" + r.sid] = p, p.onload = p.onerror = p.onabort = function () {
                        p = p.onload = p.onerror = p.onabort = null, MtaH5[r.sid] = !0
                    }, p.src = f
                }
            };
            var d = MtaH5.hack ? MtaH5.hack() : {};
            d.conf && function () {
                var e, n = d.conf;
                for (e in n) n.hasOwnProperty(e) && (t[e] = n[e])
            }(), t.autoReport && u()
        }({}, this))
    }

    function i(t) {
        return t && "object" === O(t) && !t.nodeType && t !== t.window
    }

    var o = window;
    window.parent !== window && window.inDapIF && (o = window.parent);
    var a = "__qq_qidian_da", s = o[a] || "qidianDA";
    if (o[a] = s, s) {
        var c = o[s] = o[s] || function () {
            c[a] = c[a] || [], c[a].push(arguments)
        };
        if (!c.loaded) {
            c.loaded = !0;
            var u, d = "0.7.7", h = o.location, f = h.protocol, p = f + "//da.qidian.qq.com",
                l = f + "//combo.b.qq.com", v = "https://admin.qidian.qq.com", g = new Date, m = function (t) {
                    var e = (t || window).document, n = e.createElement("iframe");
                    return n.src = "javascript:false", n.title = "", n.role = "presentation", n.frameBorder = "0", n.tabIndex = "-1", (n.frameElement || n).style.cssText = "position:absolute;width:0;height:0;border:0;", n
                }, w = function () {
                    var t;
                    try {
                        var e = new Uint32Array(1);
                        window.crypto.getRandomValues(e), t = 2147483647 & e[0]
                    } catch (e) {
                        t = Math.floor(2147483648 * Math.random())
                    }
                    return t
                }, y = function () {
                    return w().toString(36)
                }, _ = "S3EVENT_LISTENERS" + y(), k = function (t, e, n) {
                    e = e.replace(/^on/i, "");
                    var r = function (e) {
                        n.call(t, e)
                    }, i = e;
                    e = (e || "").toLowerCase(), t.addEventListener ? t.addEventListener(i, r, !1) : t.attachEvent && t.attachEvent("on" + i, r);
                    var o = t[_] = t[_] || [];
                    return o[o.length] = [e, n, r, i], t
                }, S = function (t, e, n) {
                    var r = n;
                    e = e.replace(/^on/i, "").toLowerCase();
                    for (var i, o, a, s = t[_], c = !r, u = s.length; u--;) i = s[u], i[0] !== e || !c && i[1] !== r || (o = i[3], a = i[2], t.removeEventListener ? t.removeEventListener(o, a, !1) : t.detachEvent && t.detachEvent("on" + o, a), s.splice(u, 1));
                    return t
                }, b = function (t, e) {
                    var n, r, i = t.ownerDocument, o = !1;
                    try {
                        n = t.contentWindow, r = n.document
                    } catch (a) {
                        o = !0, k(t, "load", function () {
                            n = t.contentWindow, r = n.document, S(t, "load"), e(n, r, i.domain)
                        }), t.src = 'javascript:void((function () {document.open("text/html", "replace");document.domain = "' + i.domain + '";document.close();})())'
                    }
                    o || e(n, r, "")
                }, E = '<!DOCTYPE html><html><head><meta charset="UTF-8"></head>', x = "</html>", C = function (t, e) {
                    var n = (e || window).document, r = n.body || n.documentElement;
                    r.insertBefore(t, r.firstChild)
                }, q = function (t) {
                    return function () {
                        var e = window.console;
                        "undefined" != typeof e && "function" == typeof e[t] && e[t].apply(e, arguments)
                    }
                }, T = q("log");
            T.group = q("group"), T.groupEnd = q("groupEnd");
            var I = function () {
                this._s = {}, this._avg = {}, this._max = {}
            };
            I.prototype.start = function (t, e) {
                this._s[t] = e ? +e : +new Date
            }, I.prototype.end = function (t, e) {
                var n = this._s[t];
                this._s[t] = null;
                var r = e ? +e : +new Date, i = r - n;
                this._max[t] = Math.max(i, this._max[t] || 0);
                var o = this._avg[t];
                o ? (o.s = (o.s * o.n + i) / (o.n + 1), ++o.n) : o = this._avg[t] = {s: i, n: 1}
            }, I.prototype.encode = function () {
                var t, e, n = "", r = this._avg;
                for (var i in r) r.hasOwnProperty(i) && (t = Math.round(r[i].s || 0), e = Math.round(this._max[i] || 0), n += i + "(" + t + "_" + e + ")");
                return n
            };
            var A = new I,
                D = {Boolean: 1, Number: 1, String: 1, Function: 1, Array: 1, Date: 1, RegExp: 1, Object: 1, Error: 1},
                M = Object.prototype.toString, O = function (t) {
                    if (null == t) return String(t);
                    var e = typeof t, n = "object";
                    return e === n || "function" === e ? (e = M.call(t).slice(8, -1), D[e] ? e.toLowerCase() : n) : typeof t
                }, L = function (t) {
                    if (!t) return "";
                    var n = [], r = /\[\]$/, i = e().encodeURIComponent, o = function (t, e) {
                        e = "function" == typeof e ? e() : null == e ? "" : e, n[n.length] = i(t) + "=" + i(e)
                    }, a = function (t, e) {
                        var i, s, c;
                        switch (O(e)) {
                            case"array":
                                if (t) for (i = 0, c = e.length; i < c; i++) if (r.test(t)) o(t, e[i]); else {
                                    var u = "object" === O(e[i]) ? i : "";
                                    a(t + "[" + u + "]", e[i])
                                } else for (i = 0, c = e.length; i < c; i++) a(e[i].key, e[i].value);
                                break;
                            case"object":
                                for (s in e) e.hasOwnProperty(s) && a(t ? t + "[" + s + "]" : s, e[s]);
                                break;
                            default:
                                e = "" + e, t ? o(t, e) : n[n.length] = e
                        }
                        return n
                    };
                    return a("", t).join("&").replace(/%20/g, "+")
                }, R = function () {
                    return "sendBeacon" in window.navigator
                }, P = function () {
                    try {
                        if ("XMLHttpRequest" in window && "withCredentials" in new window.XMLHttpRequest) return "xhr";
                        if ("XDomainRequest" in window) return "xdr"
                    } catch (t) {
                    }
                    return ""
                }, j = function (t, e) {
                    "string" != typeof t && (t = L(t));
                    var n = e && e.randomKey;
                    if (n = null == n ? "z" : n) {
                        var r = n + "=" + y();
                        t += (t ? "&" : "") + r
                    }
                    return t
                }, N = function (t, e, n) {
                    var r = [t, e].join(t.indexOf("?") >= 0 ? "&" : "?"), i = "S3PING_IMG" + y(), o = new Image;
                    window[i] = o;
                    var a = function (t) {
                        if (o.onload = o.onerror = o.onabort = null, window[i] = null, o = null, n) {
                            var e = null;
                            t && (e = new Error, e.name = "ImgPing" + t), n(e)
                        }
                    };
                    return o.onload = function () {
                        a()
                    }, o.onerror = function () {
                        a("Error")
                    }, o.onabort = function () {
                        a("Abort")
                    }, o.src = r, !0
                }, U = function (t, e) {
                    return R() && window.navigator.sendBeacon(t, e)
                }, Q = function (t, e, n) {
                    if ("xhr" !== P()) return !1;
                    var r = new window.XMLHttpRequest;
                    return r.open("POST", t, !0), r.withCredentials = !0, r.setRequestHeader("Content-Type", "text/plain"), n && (r.onreadystatechange = function () {
                        if (4 === r.readyState) {
                            var t = r.status, e = t >= 200 && t < 400, i = null;
                            if (!e) {
                                var o = "XhrPing" + (t < 500 ? "ClientError" : "ServerError");
                                i = new Error(o + " " + t), i.name = o
                            }
                            n(i)
                        }
                    }), r.send(e), !0
                }, H = function (t, e, n) {
                    var r = t.length + n.length + 1;
                    return r > 2083 && r - e.length > 2048
                }, F = function (t, e, n) {
                    e = j(e, n);
                    var r = t.match(/(?:https?|ftp):\/\/[^\/]+/);
                    if (!r) throw new Error('URL: "' + t + '" not absolute url.');
                    var i = r[0], o = n && n.transport, a = n && n.callback;
                    return "img" === o ? N(t, e, a) : "xhr" === o ? Q(t, e, a) : "beacon" === o ? U(t, e) : H(t, i, e) ? !(a || !U(t, e)) || (!!Q(t, e, a) || N(t, e, a)) : N(t, e, a)
                }, B = function (t, e, n) {
                    var r = R();
                    if (n = n || {}, n.transport = r ? "beacon" : "img", F(t, e, n), !r) {
                        var i, o = 200, a = +new Date;
                        for (i = a + o; a < i;) a = +new Date
                    }
                }, V = function (t) {
                    this._data = t || []
                };
            V.prototype.on = function (t) {
                this._data[t] = !0
            }, V.prototype.off = function (t) {
                this._data[t] = !1
            }, V.prototype.merge = function (t) {
                for (var e = this._data.slice(), n = t._data, r = 0; r < n.length; r++) e[r] = e[r] || n[r];
                return new V(e)
            }, V.prototype.encode = function () {
                for (var t = [], e = 0; e < this._data.length; e++) this._data[e] && (t[Math.floor(e / 6)] ^= 1 << e % 6);
                for (e = 0; e < t.length; e++) t[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[e] || 0);
                return t.join("") + "~"
            };
            var G = function () {
                this._gFlags = new V, this._allFlags = {}
            };
            G.prototype.flag = function (t, e) {
                var n;
                if (e) {
                    var r = this._allFlags;
                    r[e] = r[e] || new V, n = r[e]
                } else n = this._gFlags;
                n.on(t)
            }, G.prototype.encode = function (t) {
                var e = this._allFlags[t], n = this._gFlags;
                return (e ? n.merge(e) : n).encode()
            };
            var J = new G, W = function (t) {
                return t.toString(36)
            }, $ = "__QIDIANDA_SENDED", X = function (t, e, n) {
                this.module = t, this.version = e, this.trackingServer = n
            };
            X.prototype = {
                module: "", version: "", trackingServer: "", wrap: function (t, e, n, r) {
                    var i = this, o = null == e || "function" === O(e), a = o ? e : e[t], s = function () {
                        var e = r ? r.id : null;
                        try {
                            n && J.flag(n, e), A.start(t);
                            var o;
                            return a && (o = a.apply(this, arguments)), A.end(t), o
                        } catch (n) {
                            if (!n[$]) {
                                n[$] = !0;
                                var s = r ? r.getCommonQuery(!0) : null;
                                i.sendError("err", t, n.name, n.message, e, s)
                            }
                            throw n
                        }
                    };
                    return s.displayName = t, o || (e[t] = s), s
                }, errorQueue: [], sending: !1, sendError: function (t, n, r, i, o, a, s) {
                    if (!(100 * Math.random() >= 1)) {
                        if (this.sending) return void this.errorQueue.push(arguments);
                        this.sending = !0;
                        var c = e().encodeURIComponent, u = this.trackingServer + "/ping/err";
                        if (a = (a || "v=" + this.version + "&t=" + W(+new Date)) + "&fg=" + J.encode(o) + "&tp=" + c(t) + "&p1=" + c(this.module + "-" + n) + (r ? "&p2=" + c(r.slice(0, 100)) : "") + (i ? "&p3=" + c(i.slice(0, 100)) : ""), s) B(u, a); else {
                            var d = this;
                            F(u, a, {
                                callback: function () {
                                    d.sending = !1;
                                    var t = d.errorQueue.shift();
                                    t && d.sendError.apply(d, t)
                                }
                            })
                        }
                    }
                }
            };
            var z = {}, K = function (t, e) {
                var n = parseInt(t.length, 10) || 0;
                if (0 === n) return !1;
                for (var r = 0; r < n;) {
                    if (e === t[r]) return !0;
                    r++
                }
                return !1
            }, Y = function (t) {
                t = t || window;
                var e = "navigator";
                return t[e] && "preview" === t[e].loadPurpose
            }, Z = function (t) {
                var e = t || window, n = "document";
                return e[n] && (e = e[n]), "prerender" === e.visibilityState
            }, tt = function (t, e) {
                if (t = t || window, !Y(t)) {
                    var n = t.document, r = !1, i = function () {
                        e(t)
                    }, o = function () {
                        r || Z(t) || (r = !0, i(), S(n, "visibilitychange", o))
                    };
                    return Z(t) ? void k(n, "visibilitychange", o) : void i()
                }
            }, et = function (t, e, n) {
                var r = t.length;
                if (r > 0) {
                    n = n || r, e = e || 0;
                    for (var i = new Array(n - e), o = 0, a = e; a < n; a++, o++) i[o] = t[a];
                    return i
                }
                return []
            }, nt = function (t, e, n, r, i) {
                n = n || window, n[t] = n[t] || [], i = i || "ready";
                for (var o = n[t], a = function (t) {
                    t.shift || (t = et(t));
                    var n = t.shift();
                    "string" == typeof n ? r ? r(e, n, t) : e[n].apply(e, t) : e[i](n)
                }; o.length;) a(o.shift());
                o.push = a
            }, rt = function (t) {
                return t = String(t), t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()
            }, it = function (t) {
                return String(t).replace(new RegExp("([.*+?^=!:${}()|[\\]/\\\\-])", "g"), "\\$1")
            }, ot = function (t, n) {
                n = n || window;
                for (var r = [], i = n.document.cookie.split(";"), o = new RegExp("^\\s*" + it(t) + "=\\s*(.*?)\\s*$"), a = 0; a < i.length; a++) {
                    var s = i[a].match(o);
                    s && (r[r.length] = e().decodeURIComponent(s[1]))
                }
                return r
            }, at = function (t, n, r, i, o, a) {
                r = r || window, n = e().encodeURIComponent(n);
                var s = t + "=" + n + "; ";
                if (null != a && (s += "path=" + a + "; "), null != i) {
                    var c = new Date;
                    c.setTime(c.getTime() + i), s += "expires=" + c.toGMTString() + "; "
                }
                null != o && (s += "domain=" + o + ";");
                var u = r.document, d = u.cookie;
                if (u.cookie = s, d === u.cookie) {
                    for (var h = ot(t), f = 0; f < h.length; f++) if (n === h[f]) return !0;
                    return !1
                }
                return !0
            }, st = function (t, e, n, r, i) {
                var o, a = {".com": 1, ".net": 1, ".org": 1, ".edu": 1, ".gov": 1, ".cn": 1, ".tw": 1, ".hk": 1};
                if (i) for (o = 0; o < i.length; o++) a["." + i[o]] = 1;
                var s = n.location.hostname, c = s.split("."), u = c.length, d = "", h = "";
                for (o = u - 1; o >= 0; o--) if (h = "." + c[o] + h, !a[h]) {
                    var f = at(t, e, n, r, h, "/");
                    if (f) {
                        d = h;
                        break
                    }
                }
                return d
            }, ct = "S3COOKIENAME" + y(), ut = function () {
                var t = "cookie", e = window.document;
                if (window.navigator.cookieEnabled) return !0;
                e[t] = ct + "=1";
                var n = e[t].indexOf(ct + "=") !== -1;
                return e[t] = ct + "=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", n
            }, dt = function () {
                var t = "S3LOCALSTORAGE" + y(), e = "localStorage";
                try {
                    return window[e].setItem(t, 1), window[e].removeItem(t), !0
                } catch (t) {
                    return !1
                }
            }, ht = function () {
                var t = "DocumentTouch";
                return !!("ontouchstart" in window || window[t] && document instanceof window[t])
            }, ft = function (t, e, n, r, i) {
                if (t.setAttribute("type", "text/javascript"), r && t.setAttribute("charset", r), t.setAttribute("src", e), i) return void i.insertBefore(t, i.firstChild);
                var o = n.getElementsByTagName("script"), a = o[o.length - 1];
                if (a) a.parentNode.insertBefore(t, a); else {
                    var s = n.getElementsByTagName("head")[0];
                    s.insertBefore(t, s.firstChild)
                }
            }, pt = function (t, n, r, i, o, a) {
                var s = o ? o.ownerDocument : document, c = s.defaultView || s.parentWindow,
                    u = s.createElement("SCRIPT"), d = "S3JSONPPREFIX";
                a = a || "callback", r = r || 1e4;
                var h, f, p = new RegExp("(?:\\?|&)" + a + "=([^&]*)"), l = function (t) {
                    return function () {
                        try {
                            if (t) {
                                var r = new Error;
                                r.name = "Timeout", n.call(c, r)
                            } else {
                                var i = et(arguments);
                                i.unshift(null), n.apply(c, i), e().clearTimeout(h)
                            }
                            c[f] = null, delete c[f]
                        } catch (t) {
                            T(t)
                        } finally {
                            u && u.parentNode && u.parentNode.removeChild(u)
                        }
                    }
                }, v = t.match(p);
                f = v ? v[1] : d + y(), c[f] = l(!1), r && (h = e().setTimeout(l(!0), r)), v || (t += (t.indexOf("?") < 0 ? "?" : "&") + a + "=" + f), ft(u, t, s, i, o)
            }, lt = function (t) {
                t = t || window;
                var e = t.document, n = "BackCompat" === e.compatMode ? e.body : e.documentElement;
                return n.clientHeight
            }, vt = function (t) {
                t = t || window;
                var e = t.document, n = "BackCompat" === e.compatMode ? e.body : e.documentElement;
                return n.clientWidth
            }, gt = function () {
                function t(t) {
                    return t = t.match(/[\d]+/g), t.length = 3, t.join(".")
                }

                var e = !1, n = "";
                if (navigator.plugins && navigator.plugins.length) {
                    var r = navigator.plugins["Shockwave Flash"];
                    r && (e = !0, r.description && (n = t(r.description))), navigator.plugins["Shockwave Flash 2.0"] && (e = !0, n = "2.0.0.11")
                } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
                    var i = navigator.mimeTypes["application/x-shockwave-flash"];
                    e = !!i && i.enabledPlugin, e && (n = t(i.enabledPlugin.description))
                } else try {
                    var o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                    e = !0, n = t(o.GetVariable("$version"))
                } catch (r) {
                    try {
                        new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), e = !0, n = "6.0.21"
                    } catch (r) {
                        try {
                            var o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                            e = !0, n = t(o.GetVariable("$version"))
                        } catch (t) {
                        }
                    }
                }
                return e ? n : ""
            }, mt = function () {
                var t = window, e = t.document, n = e.createElement("div");
                n.setAttribute("id", "ads");
                var r = !1;
                try {
                    C(n, t), r = !!e.getElementById("ads")
                } catch (t) {
                }
                return r && n.parentNode && n.parentNode.removeChild(n), r
            }, wt = function () {
                var t = "S3SESSIONSTORAGE" + y(), e = "sessionStorage";
                try {
                    return window[e].setItem(t, 1), window[e].removeItem(t), !0
                } catch (t) {
                    return !1
                }
            }, yt = function () {
                this.tasks = {}
            };
            yt.prototype.set = function (t, e) {
                this.tasks[t] = e
            }, yt.prototype.get = function (t) {
                return this.tasks[t]
            };
            var _t, kt = new yt, St = function () {
            };
            St.prototype.run = function (t) {
                var e = t.get("win"), n = t.get("doc"), r = t.getFullApi("/ping/pv"), i = e.screen,
                    o = i.orientation || i.mozOrientation || i.msOrientation || "";
                o && o.type && (o = o.type), _t || (_t = {
                    tz: (new Date).getTimezoneOffset() / 60,
                    hasf: gt(),
                    hasadb: mt() ? 1 : 0,
                    hasc: t.supportCookie ? 1 : 0,
                    hastc: t.supportTouch ? 1 : 0,
                    hasls: dt() ? 1 : 0,
                    hasss: wt() ? 1 : 0,
                    hasid: e.indexedDB ? 1 : 0
                });
                var a = t.getCommonData(!0), s = e.location.hash;
                a.add("r", t.getReferrer()), "#" === s.charAt(0) && (s = s.slice(1)), s && a.add("uh", s), a.add("pt", n.title), a.add("sw", i.width), a.add("sh", i.height), a.add("dpr", e.devicePixelRatio || 1), a.add("saw", i.availWidth), a.add("sah", i.availHeight), a.add("scd", i.colorDepth), a.add("so", o), a.add("bw", vt(e)), a.add("bh", lt(e)), a.extend(_t), A.start("req-pv"), F(r, a.toJSON(), {
                    callback: t.wrap("pv-cb", function (e) {
                        return e ? void t.sendError("req", "pv", e.name) : (A.end("req-pv"), void t.trigger("pv-done"))
                    }, 26)
                })
            }, St.prototype.remove = function (t) {
            }, kt.set("pv", St);
            var bt = function (t, e) {
                    var n = (e || window).document, r = n.createElement("iframe");
                    return r.src = t, r.title = "", r.role = "presentation", r.frameBorder = "0", r.tabIndex = "-1", (r.frameElement || r).style.cssText = "position:absolute;width:0;height:0;border:0;", C(r, e), r
                }, Et = !1, xt = function (t, n) {
                    function r() {
                        for (var t, e = s[_], r = 0; t = e[r];) if (t[0] === u) {
                            var i = t[1];
                            i(n), e.splice(r, 1)
                        } else r++;
                        h = !0
                    }

                    function i() {
                        s.addEventListener ? (s.removeEventListener("DOMContentLoaded", o), n.removeEventListener("load", o)) : (s.detachEvent("onreadystatechange", o), n.detachEvent("onload", o))
                    }

                    function o() {
                        (s.addEventListener || "load" === n.event.type || "complete" === s.readyState) && (i(), r())
                    }

                    function a() {
                        if (!h) {
                            try {
                                f.doScroll("left")
                            } catch (t) {
                                return e().setTimeout(a, 50)
                            }
                            i(), r()
                        }
                    }

                    n = n || window;
                    var s = n.document, c = "DOMContentLoaded", u = c + 42, d = s[_] = s[_] || [];
                    if (d[d.length] = [u, t, t, c], !Et) {
                        Et = !0;
                        var h = !1;
                        if ("complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll) e().setTimeout(r); else if (s.addEventListener) s.addEventListener("DOMContentLoaded", o), n.addEventListener("load", o); else {
                            s.attachEvent("onreadystatechange", o), n.attachEvent("onload", o);
                            var f = !1;
                            try {
                                f = null == n.frameElement && s.documentElement
                            } catch (t) {
                            }
                            f && f.doScroll && a()
                        }
                    }
                }, Ct = window.navigator, qt = Ct.userAgent,
                Tt = null != window.chrome && "Google Inc." === Ct.vendor && /Chrome/.test(qt) && qt.indexOf("OPR") === -1 && qt.indexOf("Edge") === -1,
                It = window.navigator.userAgent,
                At = /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(It), Dt = function () {
                    this.removed = !1
                };
            Dt.prototype.run = function (t) {
                if (!Tt && !At) {
                    var e = t.get("win");
                    xt(t.wrap("id-cb", function () {
                        if (this.removed) return void t.flag(20);
                        var n = "", r = t.get("ss") + "/da/id" + n + ".html", i = L({
                            q: t.get("qid"),
                            p: t.get("pid"),
                            t: t.get("tid"),
                            a: t.get("aid"),
                            c: t.get("cid"),
                            s: t.getSid(),
                            src: t.get("src"),
                            pgv_pvi: t.get("pgv_pvi"),
                            v: t.get("ver"),
                            ts: t.getFullApi("/ping/id")
                        });
                        r += "?" + i, bt(r, e)
                    }, 19), e)
                }
            }, Dt.prototype.remove = function (t) {
                this.removed = !0
            }, kt.set("id", Dt);
            var Mt = function (t) {
                return t.target || t.srcElement
            }, Ot = function (t) {
                t = t || window;
                var e = t.document;
                return t.pageYOffset || e.documentElement.scrollTop || e.body.scrollTop
            }, Lt = function (t) {
                t = t || window;
                var e = t.document;
                return t.pageXOffset || e.documentElement.scrollLeft || e.body.scrollLeft
            }, Rt = function (t) {
                t = t || window;
                var e = t.document, n = e.body, r = e.documentElement,
                    i = "BackCompat" === e.compatMode ? n : e.documentElement;
                return Math.max(r.scrollWidth, n.scrollWidth, i.clientWidth)
            }, Pt = function (t) {
                t = t || window;
                var e = t.document, n = e.body, r = e.documentElement,
                    i = "BackCompat" === e.compatMode ? n : e.documentElement;
                return Math.max(r.scrollHeight, n.scrollHeight, i.clientHeight)
            }, jt = function (t) {
                var e = "", n = t.nodeType;
                if (1 === n || 9 === n || 11 === n) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) e += jt(t)
                } else if (3 === n || 4 === n) return t.nodeValue;
                return e
            }, Nt = function () {
            };
            Nt.prototype.run = function (t) {
                var e = t.get("win"), n = t.get("doc"), r = n.documentElement;
                this.cb = t.wrap("clc-cb", function (n) {
                    var r = Mt(n), i = t.getCommonData(), o = (r.nodeName || "").toLowerCase();
                    if (i.add("pw", Rt(e)), i.add("ph", Pt(e)), i.add("bw", vt(e)), i.add("bh", lt(e)), i.add("bx", Lt(e)), i.add("by", Ot(e)), i.add("tag", o), r.href) {
                        var a = r.getAttribute("target");
                        a && i.add("target", a), i.add("href", r.href)
                    }
                    i.add("x", n.clientX || 0), i.add("y", n.clientY || 0);
                    var s, c = 0;
                    "a" !== o && "button" !== o || (s = jt(r), c = 1), "input" !== o || "button" !== r.type && "submit" !== r.type || (s = r.value || "", c = 1), s && i.add("word", s.slice(0, 20)), t.ping("clc", i, c)
                });
                var i = t.supportTouch;
                i && t.flag(18), k(r, i ? "touchstart" : "click", this.cb)
            }, Nt.prototype.remove = function (t) {
                var e = t.get("doc"), n = e.documentElement;
                S(n, "click", this.cb), t.supportTouch && S(n, "touchstart", this.cb)
            }, kt.set("clc", Nt);
            var Ut = "unload", Qt = function () {
            };
            Qt.prototype.run = function (t) {
                var e = t.get("win");
                this.cb = function () {
                    try {
                        var e = t.getCommonData();
                        e.add("spd", A.encode()), t.ping("pc", e, 3)
                    } catch (e) {
                        throw t.sendError("err", "pc-cb", e.name, e.message, !0), e
                    }
                }, k(e, Ut, this.cb)
            }, Qt.prototype.remove = function (t) {
                var e = t.get("win");
                S(e, Ut, this.cb)
            }, kt.set("pc", Qt);
            var Ht = function (t, e, n) {
                this.api = t, this.pingName = e, this.params = n, n.hasKey("a") || this.params.prefix("a", e);
                var r = this;
                this.params.on("change", function () {
                    r._changed = !0
                })
            };
            Ht.prototype.getQueryData = function () {
                return this.params
            }, Ht.prototype.size = function () {
                var t = {a: 1};
                return this.encode(t).length
            }, Ht.prototype.ping = function (t, e) {
                var n = this.params.filter({a: 1});
                return t ? void B(this.api, n) : void F(this.api, n, {callback: e})
            }, Ht.prototype.encode = function (t) {
                if (!t && null != this._encodeValue && !this._changed) return this._encodeValue;
                var e = this.params.encode(t);
                return this._changed = !1, t || (this._encodeValue = e), e
            };
            var Ft = function () {
                var t = R();
                this.max = P() && t ? 8192 : 2047, this.queue = []
            };
            Ft.prototype.run = function (t) {
                this.stopping = !0, this.tracker = t, this.heartBeatInterval = t.get("hbt"), this.batchApi = t.getFullApi("/ping/b"), 2047 === this.max && this.tracker.flag(27)
            }, Ft.prototype.start = function () {
                this.stopping = !1, this.batchSend()
            }, Ft.prototype.stop = function () {
                this.stopping = !0
            }, Ft.prototype.push = function (t, e, n) {
                var r = new Ht(this.tracker.getFullApi("/ping/" + t), t, e);
                if (this.stopping) return this.tracker.flag(24), void this._push(r, n);
                this._push(r, n);
                var i = n && n > 1;
                if (i) {
                    var o = 3 === n;
                    this.batchSend(o)
                } else {
                    var a = 1 === n;
                    this.waitForSend(a)
                }
            }, Ft.prototype._push = function (t, e) {
                e ? this.queue.unshift(t) : this.queue.push(t)
            }, Ft.prototype.waitForSend = function (t) {
                var n = this;
                if (this.queue.length && !n.heartBeat) {
                    var r = this.tracker.wrap("pq-timer", function () {
                        n.heartBeat = null, n.batchSend()
                    }), i = t ? 200 : n.heartBeatInterval;
                    n.heartBeat = e().setTimeout(r, i)
                }
            }, Ft.prototype._sendPing = function (t, e) {
                var n = this, r = "req-" + t.pingName;
                A.start(r), t.ping(e, this.tracker.wrap("pq-ipingcb", function (e) {
                    e && n.tracker.sendError("req", t.pingName, e.name), A.end(r)
                }))
            }, Ft.prototype.batchSend = function (t) {
                var e = this.queue[0];
                if (e) {
                    var n, r, i = e.encode(), o = [];
                    if (1 === this.queue.length || i.length >= this.max) return this.tracker.flag(25), this._sendPing(this.queue[0], t), void (this.queue.length = 0);
                    for (o.push(i), n = 1, r = this.queue.length; n < r; n++) o.push(this.queue[n].encode());
                    n = r;
                    var a = this.calQuery(o);
                    if (a) {
                        for (; a.length > this.max && n >= 2;) n--, a = this.calQuery(o, n);
                        if (this.queue.splice(0, n), t) B(this.batchApi, a); else {
                            var s = this, c = "req-b";
                            A.start(c), F(this.batchApi, a, {
                                callback: this.tracker.wrap("pq-pingcb", function (t) {
                                    t && s.tracker.sendError("req", "b", t.name), A.end(c), s.waitForSend()
                                })
                            })
                        }
                    }
                }
            }, Ft.prototype.calQuery = function (t, e) {
                function n() {
                    for (var e = [], n = 0, r = t.length; n < r; n++) e.push(t[n].slice(a));
                    var s = i ? "c=" + i + "&" : "";
                    return s + "l[]=" + e.join("&l[]=") + o
                }

                null != e && (t = t.slice(0, e));
                var r = t[0];
                if (!r) return "";
                var i = "", o = "&t=" + W(+new Date);
                if (1 === t.length) return "l[]=" + r + o;
                for (var a = 0, s = r.length; a < s; a++) {
                    for (var c, u = null, d = 0, h = t.length; d < h; d++) {
                        var f = t[d];
                        if (c = f.charAt(a), null != u && u !== c) return n();
                        u = c
                    }
                    i += c
                }
                return n()
            }, Ft.prototype.remove = function (t) {
                this.heartBeat && (e().clearTimeout(this.heartBeat), this.heartBeat = null)
            }, kt.set("pq", Ft);
            var Bt = function (t) {
                return 0 === t.indexOf(".") ? t.substr(1) : t
            }, Vt = function (t) {
                return Bt(t).split(".").length
            }, Gt = function (t) {
                return t ? (t.length > 1 && t.lastIndexOf("/") === t.length - 1 && (t = t.substr(0, t.length - 1)), 0 !== t.indexOf("/") && (t = "/" + t), t) : "/"
            }, Jt = function (t) {
                return t = Gt(t), "/" === t ? 1 : t.split("/").length
            }, Wt = function (t, e, n) {
                t = t || window;
                var r = t.location, i = Jt(null != n ? n : r.pathname), o = Vt(null != e ? e : r.hostname);
                return o + (i > 1 ? "-" + i : "") + "-"
            }, $t = function (t, e, n, r, i, o) {
                var a = Wt(n, i, o);
                return e += "", at(t, a + e.replace(/\-/g, "%2d"), n, r, i, o)
            }, Xt = function (t, e, n, r) {
                for (var i = ot(t, e), o = Wt(e, n, r), a = 0; a < i.length; a++) {
                    var s = i[a];
                    if (0 === s.indexOf(o)) return s.slice(o.length).replace(/%2d/g, "-")
                }
                return ""
            }, zt = "_qddamta_", Kt = function () {
                this.removed = !1
            };
            Kt.prototype.run = function (t) {
                var e = t.get("noMTA");
                if (e) return void t.flag(21);
                var n = t.get("win"), i = t.get("mtaId");
                if (i) return t.flag(30), void r(n, i);
                var o = zt + t.id, a = Xt(o, n, null, "/");
                if (a) return t.flag(22), void r(n, a);
                var s = t.getCommonData(), c = t.getFullApi("/jsonp/mta") + "?" + L(s.toJSON());
                pt(c, t.wrap("mta-cb", function (e, i) {
                    if (e) return t.flag(23), void t.sendError("req", "mta", e.name);
                    if (i && i.err) return t.flag(29), void t.sendError("req", "mta", "ErrNum:" + i.err);
                    var a = 36e5;
                    return i && i.sid ? ($t(o, i.sid, n, a, null, "/"), void r(n, i.sid)) : void $t(o, "0", n, a, null, "/")
                }))
            }, Kt.prototype.remove = function (t) {
                this.removed = !0
            }, kt.set("mta", Kt);
            var Yt = function (t) {
                return t.match(/(.*?)(#.*)/)
            }, Zt = function (t) {
                var n = e();
                return t = t.replace(/\+/g, " "), n.decodeURIComponent(t)
            }, te = function (t, n) {
                var r = Yt(t);
                if (r && (t = r[1]), !t) return "";
                var i = e(), o = new i.RegExp("(?:&|\\?)?" + it(i.encodeURIComponent(n)) + "=([^&]*)(?:&|$)", "");
                return r = t.match(o), r && r[1] ? Zt(r[1]) : ""
            }, ee = function (t) {
                var e = t.charAt(t.length - 1);
                return "&" !== e && "?" !== e || (t = t.slice(0, -1)), t
            }, ne = function (t) {
                return "array" === O(t)
            }, re = function (t, n, r) {
                var i = t, o = Yt(t), a = "";
                if (o && (t = o[1], a = o[2]), !t) return i;
                var s = e();
                n = s.encodeURIComponent(n);
                var c = ne(r) ? r : [r], u = c.length, d = new s.RegExp("(&|\\?)?(" + it(n) + "=)([^&]*)(&|$)", "g"),
                    h = 0;
                for (t = t.replace(d, function (t, e, n, r, i) {
                    if (e = e || "", h < u) {
                        var o = s.encodeURIComponent(c[h]);
                        return h++, e + n + o + i
                    }
                    return e
                }), t = ee(t), h < u && (t += t.indexOf("?") >= 0 ? "&" : "?"); h < u;) t += n + "=" + s.encodeURIComponent(c[h]), h++, h < u && (t += "&");
                return t + a
            }, ie = function (t, n) {
                var r = t, i = Yt(t), o = "";
                if (i && (t = i[1], o = i[2]), !t) return r;
                var a = e(), s = new a.RegExp("(&|\\?)?" + it(a.encodeURIComponent(n)) + "=([^&]*)(?:&|$)", "g");
                return t = ee(t.replace(s, "$1")), t + o
            }, oe = {
                query: function (t, e) {
                    var n = t.get("win"), r = n.location.href;
                    return te(r, e)
                }, setup: function (t, e) {
                    var n = this, r = t.get("win");
                    if (!(r.navigator.userAgent.toLowerCase().indexOf("micromessenger") < 0)) {
                        t.flag(31);
                        var i = t.getCommonData(), o = n.query(t, "code");
                        i.add("code", o), i.add("appid", e.wxAppid), t.jsonp("wxShare", i, t.wrap("wxShare-cb", function (r, i) {
                            return r ? (t.flag(32), void t.sendError("req", "wxShare", r.name)) : i && i.err ? (t.flag(33), void t.sendError("req", "wxShare", "ErrNum:" + i.err)) : i ? (e.openid = i.openid, void n.wxConfig(t, e, i)) : void t.flag(34)
                        }))
                    }
                }, wxConfig: function (t, e, n) {
                    var r = this, i = t.get("win"), o = i.wx;
                    this.wx = o, o && (o.config({
                        appId: e.wxAppid,
                        timestamp: n.timestamp,
                        nonceStr: n.nonceStr,
                        signature: n.signature,
                        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
                    }), o.ready(function () {
                        r.setupShare(t, e)
                    }))
                }, setupShare: function (t, e) {
                    var n = this, r = t.genUUID(!0);
                    n.wx.onMenuShareTimeline(n._genShareConfig(t, r, e, 1)), n.wx.onMenuShareAppMessage(n._genShareConfig(t, r, e, 2)), n.wx.onMenuShareQQ(n._genShareConfig(t, r, e, 4)), n.wx.onMenuShareWeibo(n._genShareConfig(t, r, e, 5)), n.wx.onMenuShareQZone(n._genShareConfig(t, r, e, 6))
                }, _genShareConfig: function (t, e, n, r) {
                    var i = t.get("win"), o = ie(i.location.href, "code");
                    o = ie(o, "state"), o = ie(o, "appid"), o = ie(o, "isappinstalled"), o = ie(o, "qda_sharefrom"), o = ie(o, "qda_shareopenid"), o = ie(o, "qda_shareid"), o = ie(o, "qda_shareto"), o = ie(o, "qda_sharelevel"), o = re(o, "qda_query", 1);
                    var a = re(t.getFullApi("/r/g"), "u", o);
                    a = re(a, "appid", n.wxAppid), a = re(a, "qda_shareid", e), a = re(a, "qda_shareto", r), a = re(a, "qda_sharelevel", n.shareLevel + 1);
                    var s = this, c = n.wxOption || {}, u = {
                        title: c.title || "", link: a, imgUrl: c.imgUrl || "", success: function () {
                            s.shared(t, e, n, r), s.setupShare(t, n)
                        }
                    };
                    switch (r) {
                        case 1:
                            break;
                        case 2:
                            u.desc = c.desc || "", u.type = c.type || "", u.dataUrl = c.dataUrl || "";
                        case 4:
                        case 5:
                        case 6:
                            u.desc = c.desc || " "
                    }
                    return u
                }, shared: function (t, e, n, r) {
                    var i = t.getCommonData();
                    i.add("type", 1), i.add("appid", n.wxAppid), i.add("share_openid", n.openid), i.add("share_to", r), i.add("share_id", e), i.add("share_level", n.shareLevel + 1), t.ping("share", i, 1)
                }
            }, ae = function () {
            };
            ae.prototype.run = function (t, e) {
                e.wxAppid && e.wxComponentAppid && (e.shareLevel = parseInt(oe.query(t, "qda_sharelevel"), 10) || 0, oe.setup(t, e))
            };
            var se = "weixin".split(","), ce = {weixin: ae}, ue = function () {
                this.runners = {}
            };
            ue.prototype.run = function (t, e) {
                this.callRunner(t, "run", e)
            }, ue.prototype.remove = function (t) {
                this.callRunner(t, "remove")
            }, ue.prototype.callRunner = function (t, e, n) {
                for (var r = 0; r < se.length; r++) {
                    var i = se[r], o = this.runners[i] = this.runners[i] || new ce[i], a = o[e];
                    a && a.call(o, t, n)
                }
            }, kt.set("share", ue);
            var de = function (t, n) {
                var r = Yt(t);
                if (r && (t = r[1]), !t) return "";
                for (var i = e(), o = new i.RegExp("(?:&|\\?)?" + it(i.encodeURIComponent(n)) + "=([^&]*)(?:&|$)", "g"), a = []; r = o.exec(t);) a.push(Zt(r[1]));
                return a.length <= 1 ? a[0] || "" : a
            }, he = function (t, e, n) {
                "function" == typeof e && (n = e, e = ""), e = (e || "").toLowerCase();
                for (var r = function (t) {
                    var r = !e || (t && t.nodeName || "").toLowerCase() === e;
                    return r && "function" == typeof n && (r = n(t)), r
                }, i = t; i && !r(i);) i = i.parentNode;
                return i
            }, fe = function () {
            }, pe = "_pid";
            fe.prototype.run = function (t) {
                var e = t.get("doc"), n = e.documentElement, r = this;
                this.addPid = t.wrap("clc-cb", function (e) {
                    var n = he(Mt(e), "a", function (t) {
                        return t.href
                    });
                    n && (de(n.href, "wpa_type") || "wpa" === de(n.href, "_type")) && (t.set("wpa_clc", !0), r.timeoutId = setTimeout(function () {
                        t.set("wpa_clc", !1)
                    }, 250), de(n.href, pe) || (n.href = n.href + "&" + pe + "=" + t.get("pid")))
                });
                var i = t.supportTouch;
                i && t.flag(35), k(n, i ? "touchstart" : "mousedown", this.addPid)
            }, fe.prototype.remove = function (t) {
                var e = t.get("doc"), n = e.documentElement;
                this.timeoutId && clearTimeout(this.timeoutId), S(n, t.supportTouch ? "touchstart" : "mousedown", this.addPid)
            }, kt.set("wpapid", fe);
            var le, ve = function () {
            };
            ve.prototype.run = function (t) {
                var e = t.get("win"), n = t.get("doc"), r = t.get("ats") + "/ar/ActCap/pvRpt", i = t.get("tid"),
                    o = e.__QIDIAN = e.__QIDIAN || {};
                if (o.kfuins = o.kfuins || {}, !o.kfuins[i]) {
                    o.kfuins[i] = !0;
                    var a = t.getCommonData(!0);
                    a.add("eptype", At ? 2 : 1), a.add("ua", e.navigator.userAgent), a.add("refurl", t.getReferrer()), a.add("title", n.title), a.add("qidianid", t.get("visitorId")), a.add("visitorid", t.get("visitorId")), a.add("kfuin", i), a.extend(le);
                    var s = e.location.hash;
                    "#" === s.charAt(0) && (s = s.slice(1)), s && a.add("uh", s), A.start("req-track"), F(r, a.toJSON(), {
                        transport: "img",
                        callback: t.wrap("track-cb", function (e) {
                            e || (A.end("req-track"), t.trigger("track-done"))
                        }, 27)
                    })
                }
            }, ve.prototype.remove = function (t) {
            }, kt.set("track", ve);
            var ge = function (t) {
                var e = 1;
                if (t) {
                    var n = 0;
                    e = 0;
                    for (var r = t.length - 1; r >= 0; r--) n = t.charCodeAt(r), e = (e << 6 & 268435455) + n + (n << 14), n = 266338304 & e, e = 0 != n ? e ^ n >> 21 : e
                }
                return e
            }, me = "_EVENTS", we = function () {
            };
            we.prototype.on = function (t, e) {
                var n = this[me];
                n || (n = this[me] = {});
                var r = n[t] = n[t] || [];
                r.push(e)
            }, we.prototype.off = function (t, e) {
                if (!t) return void (this[me] = {});
                var n = this[me];
                if (n && n[t]) {
                    if (!e) return void (n[t].length = 0);
                    for (var r = n[t], i = 0; i < r.length; i++) r[i] === e && (r[i] = null)
                }
            }, we.prototype.trigger = function (t) {
                var e = et(arguments), n = this[me];
                if (t = e.shift(), n && n[t]) for (var r = n[t], i = 0; i < r.length; i++) r[i] && r[i].apply(this, e)
            };
            var ye = function (t, e) {
                var n = t.prototype, r = function () {
                };
                r.prototype = e.prototype;
                var i = t.prototype = new r;
                for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]);
                t.prototype.constructor = t, t.superClass = e.prototype
            }, _e = function () {
                this.vals = {}, we.apply(this, arguments)
            };
            ye(_e, we), _e.prototype.set = function (t, e) {
                if ("string" == typeof t) {
                    var n = this.vals[t];
                    n !== e && (this.vals[t] = e, this.trigger("change", t, e, n))
                } else {
                    var r = t;
                    for (var i in r) r.hasOwnProperty(i) && this.set(i, r[i])
                }
            }, _e.prototype.get = function (t) {
                return this.vals[t] || ""
            }, _e.prototype.map = function (t) {
                for (var e in this.vals) if (this.vals.hasOwnProperty(e)) {
                    var n = this.vals[e];
                    n && t(e, n)
                }
            };
            var ke = new _e, Se = function (t, e, n) {
                function r(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                }

                function o(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (i(e[n]) ? (t[n] = t[n] || {}, o(t[n], e[n])) : t[n] = e[n])
                }

                var a;
                return "boolean" != typeof t ? (n = e, e = t, a = r) : a = t ? o : r, a(e, n), e
            }, be = function () {
                this.json = [], this.suffixJSON = [], this._prefixLength = 0
            };
            ye(be, we), be.prototype.prefix = function (t, e) {
                this._add(t, e, this._prefixLength), this._prefixLength++
            }, be.prototype.add = function (t, e) {
                this._add(t, e)
            }, be.prototype._add = function (t, e, n) {
                var r = {key: t, value: e};
                null != n ? this.json.splice(n, 0, r) : this.json.push(r), this.trigger("change")
            }, be.prototype.suffix = function (t, e) {
                var n = {key: t, value: e};
                this.suffixJSON.push(n), this.trigger("change")
            }, be.prototype.hasKey = function (t) {
                for (var e = 0, n = this.json.length; e < n; e++) if (this.json[e].key === t) return !0;
                return !1
            }, be.prototype.extend = function (t) {
                for (var e in t) t.hasOwnProperty(e) && null != t[e] && this.json.push({key: e, value: t[e]});
                this.trigger("change")
            }, be.prototype.toJSON = function () {
                return this.json.concat(this.suffixJSON)
            }, be.prototype.filter = function (t) {
                var e, n, r, i = this.json, o = [];
                for (e = 0, n = i.length; e < n; e++) r = i[e], t[r.key] || o.push(r);
                var a = this.suffixJSON;
                for (e = 0, n = a.length; e < n; e++) r = a[e], t[r.key] || o.push(r);
                return o
            }, be.prototype.size = function (t) {
                return this.encode(t).length
            }, be.prototype.encode = function (t) {
                var e = this.toJSON();
                return be.encode(e, t)
            }, be.encode = function (t, e) {
                if (!t || !t.length) return "";
                var n = [], r = /\[\]$/, i = function (t, e) {
                    e = "function" == typeof e ? e() : null == e ? "" : e, n[n.length] = be.encodeValue(t) + "(" + be.encodeValue(e) + ")"
                }, o = function (t, a) {
                    var s, c, u;
                    switch (O(a)) {
                        case"array":
                            if (t) for (s = 0, c = a.length; s < c; s++) if (r.test(t)) i(t, a[s]); else {
                                var d = "object" === O(a[s]) ? s : "";
                                o(t + "[" + d + "]", a[s])
                            } else for (s = 0, c = a.length; s < c; s++) u = a[s].key, e && e[u] || o(u, a[s].value);
                            break;
                        case"object":
                            for (u in a) a.hasOwnProperty(u) && o(t ? t + "[" + u + "]" : u, a[u]);
                            break;
                        default:
                            a = "" + a, t ? i(t, a) : n[n.length] = a
                    }
                    return n
                };
                return o("", t).join("").replace(/%20/g, "+")
            }, be.encodeValue = function (t) {
                return e().encodeURIComponent(t).replace(/\(/g, "%28").replace(/\)/g, "%29")
            };
            var Ee = /[^:]+:\/\/([^:\/]+)/, xe = function (t) {
                var e = t.match(Ee);
                return e ? e[1] : ""
            }, Ce = function (t, e) {
                return xe(t) === xe(e)
            }, qe = {
                createSid: function () {
                    this._hasCookie = this.supportCookie, this._hasCookie || this.flag(9), this._sidExpiredTime = 0;
                    var t = ke.get("sid");
                    if (t) return this.flag(10), void this.set("sid", t);
                    var e = this.get("win"), n = te(e.location.search, "ADTAG"), r = W(ge(n)),
                        i = this.get("doc").referrer, o = W(ge(i));
                    if (!this._hasCookie) return void this.recreateSid(r, o);
                    var a = this.getCookieSid(), s = a[0], c = a[1];
                    if (!s || !c) return this.flag(11), void this.recreateSid(r, o);
                    var u;
                    if (s && c) {
                        var d = s.split("."), h = d[0], f = d[1];
                        u = n && h !== r || i && f !== o && !Ce(i, e.location.href)
                    }
                    if (!u) return this.flag(12), void this._saveSid(s, c);
                    var p = Xt("_qddac", e, null, null), l = p.split(".");
                    return l[0] === r && l[1] === o ? (this.flag(13), void this._saveSid(l[0] + "." + l[1], l[2] + "." + l[3])) : void this.recreateSid(r, o)
                }, recreateSid: function (t, e) {
                    t = t || W(ge(te(this.get("win").location.search, "ADTAG"))), e = e || W(ge(this.get("doc").referrer));
                    var n = t + "." + e, r = this.random();
                    this._saveSid(n, r)
                }, refreshCookie: function () {
                    if (!this._hasCookie) {
                        var t = +new Date, e = this._sidExpiredTime;
                        return void (t >= e && (this.flag(14), this.recreateSid()))
                    }
                    var n = this.getCookieSid(), r = n[0], i = n[1];
                    if (r && i) {
                        var o = this.get("sid");
                        if (o[0] !== r || o[1] !== i) return void this.flag(15);
                        this._setSidCookie()
                    } else this.recreateSid()
                }, _setSidCookie: function () {
                    var t = 18e5, e = +new Date, n = new Date;
                    if (n.setHours(23), n.setMinutes(59), n.setSeconds(59), n.setMilliseconds(999), n = +n, this._hasCookie) {
                        var r = this.get("win"), i = this.get("sid"),
                            o = $t("_qdda", i[0], r, Math.min(t, n - e), null, "/");
                        o &= $t("_qddab", i[1], r, null, null, "/"), this._hasCookie = o
                    }
                    this._hasCookie || (this._sidExpiredTime = Math.min(e + t, n))
                }, _saveSid: function (t, e) {
                    this._setGlobal("sid", [t, e]), this._setSidCookie()
                }, _getSid: function () {
                    var t = this.get("sid");
                    return t ? t.join(".") : ""
                }, getSid: function (t) {
                    return t || this.refreshCookie(), this._getSid()
                }, getCookieSid: function () {
                    var t = this.get("win"), e = Xt("_qdda", t, null, "/"), n = Xt("_qddab", t, null, "/");
                    return [e, n]
                }, setClosedSid: function () {
                    if (this._hasCookie) {
                        var t = this.getCookieSid(), e = t[0], n = t[1];
                        if (e && n) {
                            var r = this.get("win"), i = this._getSid();
                            $t("_qddac", i, r, Math.max(this._getLoadedTime() + 5e3, 1e4), null, null)
                        }
                    }
                }, _getLoadedTime: function () {
                    var t = this.get("win"), e = t.performance || t.webkitPerformance, n = e && e.timing;
                    if (!n) return 0;
                    var r = n.navigationStart;
                    return 0 === r ? 0 : n.loadEventStart - r
                }
            }, Te = n("i"), Ie = "__qq_qidian_da_pid", Ae = function (t, e, n, r) {
                var i = this;
                i.qdda = t, _e.apply(i, arguments), i.name = n, r && (i.flag(6), i.set(r)), i.supportCookie = ut(), i.supportTouch = ht(), i.id = e, i.createIds(), i.init()
            };
            Ae.prototype = {
                init: function () {
                    var t = this;
                    t.tasks = {}, t.task("pq"), t.task("mta"), t.on("pv-done", function () {
                        t.task("id"), t.tasks.pq.start(), A.end("rdy")
                    }), t.task("pv");
                    var e = t.get("src");
                    e && 1 != e || t.task("track"), t.task("clc"), t.task("pc"), t.task("wpapid")
                }, createIds: function () {
                    this.createPid(), this.createQid(), this.createSid(), this.createVisitorId()
                }, _setGlobal: function (t, e) {
                    this.set(t, e), ke.set(t, e)
                }, _genQDAValue: function (t) {
                    return "QD." + t
                }, _calQDAValue: function (t) {
                    if (!t || "string" != typeof t) return "";
                    var e = t.match(/QD\.([\w\W]+)/);
                    return e && e[1] || ""
                }, genUUID: function (t) {
                    var e = this.get("win"), n = this.get("doc"),
                        r = e.navigator.userAgent + (n.cookie ? n.cookie : "") + this.getReferrer() + e.location.href;
                    return r = W(w() ^ 2147483647 & ge(r)) + ".", t ? W(+new Date) + "." + r + y() : r + this.random()
                }, createPid: function () {
                    var t = this.get("win"), e = "__qq_qidian_da_pid", n = t[e], r = this._calQDAValue(n);
                    r || (r = this.genUUID(), t[e] = this._genQDAValue(r)), this.set("pid", r)
                }, createVisitorId: function () {
                    var t = function () {
                        return Math.round(2147483647 * (Math.random() || .5)) * +new Date % 1e10
                    }, e = this.get("win"), n = "__QIDIAN", r = e[n] && e[n].visitorId;
                    if (!r) {
                        var i = "tencentSig";
                        dt() ? r = e.localStorage.getItem(i) : ut() && (r = ot(i), r = r && r[0]), r || (r = t(), dt() ? e.localStorage.setItem(i, r) : ut() && at(i, r));
                        var o = e[n] = e[n] || {};
                        o.visitorId = r
                    }
                    this.set("visitorId", r)
                }, createQid: function () {
                    var t, e, n = this.get("win");
                    if (this.supportCookie) {
                        var r = "_qddaz", i = 31536e6;
                        t = ot(r)[0], e = this._calQDAValue(t), e || (e = this.genUUID()), t = this._genQDAValue(e);
                        var o = st(r, t, n, i, ["qq.com"]);
                        o || at(r, t, n, i, null, "/")
                    } else t = n[Ie], e = this._calQDAValue(t), e || (e = this.genUUID()), n[Ie] = this._genQDAValue(e);
                    this.set("qid", e)
                }, getCommonData: function (t) {
                    var e = new be;
                    e.prefix("v", this.get("ver")), e.prefix("tid", this.get("tid")), e.prefix("aid", this.get("aid")), e.prefix("pid", this.get("pid")), e.prefix("qid", this.get("qid"));
                    var n = this.get("cid"), r = this.get("src"), i = this.get("pgv_pvi");
                    return r && e.prefix("src", r), n && e.prefix("cid", n), i && e.prefix("pgv_pvi", i), e.prefix("sid", this.getSid(t)), e.suffix("t", W(+new Date)), e
                }, getCommonQuery: function (t) {
                    return L(this.getCommonData(t).toJSON())
                }, getFullApi: function (t) {
                    return this.get("ts") + t
                }, getReferrer: function () {
                    return this.qdda.referrer || this.get("doc").referrer
                }, ping: function (t, e, n) {
                    "pc" === t && this.setClosedSid();
                    var r = this.tasks.pq;
                    r.push(t, e, n || 0)
                }, jsonp: function (t, e, n) {
                    var r = this.getFullApi("/jsonp/" + t) + "?" + L(e.toJSON());
                    pt(r, n)
                }, task: function (t) {
                    var e = this.tasks[t];
                    if (!e) {
                        var n = kt.get(t);
                        if (!n) return void this.flag(8);
                        e = this.tasks[t] = new n
                    }
                    var r = et(arguments, 1);
                    r.unshift(this), e.run.apply(e, r)
                }, remove: function () {
                    for (var t in this.tasks) this.tasks.hasOwnProperty(t) && this.tasks[t].remove(this);
                    this.tasks = null
                }, random: function () {
                    return y() + "." + W(+new Date)
                }, flag: function (t) {
                    J.flag(t, this.id)
                }, wrap: function (t, e, n) {
                    return Te.wrap(t, e, n, this)
                }, sendError: function (t, e, n, r, i) {
                    Te.sendError(t, e, n, r, this.id, this.getCommonQuery(!0), i)
                }, sendEvent: function (t, e, n) {
                    var r = this.getCommonData();
                    r.add("cat", t), r.add("act", e), r.add("lab", n), this.ping("evt", r, this.get("wpa_clc") ? 3 : 1)
                }, send: function (t, e, n, r) {
                    var i = "send" + rt(t);
                    "function" == typeof this[i] && this[i](e, n, r)
                }, reset: function (t) {
                    this.remove(), window[Ie] = null, this.createIds(), this.init()
                }
            }, Se(Ae.prototype, qe), ye(Ae, _e), e(function () {
                A.start("rdy", g);
                var t = n("i", d, p, v), e = t.wrap("run", tt, 1), r = t.wrap("init", function (e) {
                    var n, r = {
                        win: e, version: d, trackers: {}, loadedTrackers: {}, referrer: "", ready: function (t) {
                            J.flag(5), t.call(this)
                        }, create: function (t, n, r, i) {
                            "string" != typeof n && (i = r, r = n, n = "");
                            var o = t + (n ? "|" + n : "");
                            if (!this.loadedTrackers[o]) {
                                this.loadedTrackers[o] = !0;
                                var a, s;
                                if ("string" == typeof r ? (s = r, a = i || {}) : (a = r || {}, s = null == i ? "_" + y() : i), this.trackers[s]) throw new Error('Tracker name: "' + s + '" exist.');
                                a.aid = n, a.tid = t, a.win = e, a.doc = e.document, a.ver = this.version, a.ptc = f, a.ts = p, a.ats = v, a.ss = l, a.hbt = 5e3, this.trackers[s] = new Ae(this, o, s, a), this._runPlugins()
                            }
                        }, getTracker: function (t) {
                            return this.trackers[t]
                        }, eachTracker: function (t) {
                            for (var e in this.trackers) this.trackers.hasOwnProperty(e) && t(e)
                        }, plugin: function (t, e) {
                            var r = this;
                            n = n || {}, n[t] || (n[t] = {opts: e, ran: []}, r._runPlugin(t))
                        }, setReferrer: function (t) {
                            this.referrer = t
                        }, _runPlugin: function (t) {
                            var e = this, r = n[t];
                            e.eachTracker(function (n) {
                                var i = e.getTracker(n);
                                i && !K(r.ran, n) && (i.task(t, r.opts), r.ran.push(n))
                            })
                        }, _runPlugins: function () {
                            if (n) for (var t in n) n.hasOwnProperty(t) && this._runPlugin(t)
                        }
                    };
                    t.wrap("create", r, 4);
                    var i = "create,plugin,setReferrer".split(","), o = "set,send,reset".split(",");
                    nt(a, r, c, t.wrap("mqp-cb", function (t, e, n) {
                        if (K(i, e)) return void t[e].apply(t, n);
                        var r = e.split("."), a = r[1] || r[0], s = 2 === r.length ? r[0] : null, c = function (e) {
                            var r = t.getTracker(e);
                            r && K(o, a) && "function" == typeof r[a] && r[a].apply(r, n)
                        };
                        null == s ? t.eachTracker(c) : c(s)
                    }, 3))
                }, 2);
                e(o, r)
            }, o)
        }
    }
}();