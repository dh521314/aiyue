/**
 * Created by ZhangYongfeng on 2019/1/4.
 * @version 1.0.0
 * @fileOverview 这是直接用于生产的数据类型文件
 */
// window.top === window &&

(function () {
	if (!window._hmt) {
		var _hmt = [];
		if (k.browser('pc')) {
			k.loadJs('/hm.baidu.com/hm.js?9793f42b498361373512340937deb2a0');
		} else {
			k.loadJs('//hm.baidu.com/hm.js?b33ccadfca0f88b71e592ec2bf9d3497');
		}
	}
	/*
	神策新项目
	 */
	(function (para) {
		var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script', x = null, y = null;
		w['sensorsDataAnalytic201505'] = n;
		w[n] = w[n] || function (a) {
			return function () {
				(w[n]._q = w[n]._q || []).push([a, arguments]);
			}
		};
		var ifs = [
			'track',
			'quick',
			'register',
			'registerPage',
			'registerOnce',
			'trackSignup',
			'trackAbtest',
			'setProfile',
			'setOnceProfile',
			'appendProfile',
			'incrementProfile',
			'deleteProfile',
			'unsetProfile',
			'identify',
			'login',
			'logout',
			'trackLink',
			'clearAllRegister',
			'getAppStatus'
		];
		for (var i = 0; i < ifs.length; i++) {
			w[n][ifs[i]] = w[n].call(null, ifs[i]);
		}
		if (!w[n]._t) {
			x = d.createElement(s), y = d.getElementsByTagName(s)[0];
			x.async = !0;
			x.src = p;
			/**
			 * @override track 重写chapterid的数据类型
			 */
			x.onload = function () {
				w[n]._track = w[n].track;
				w[n].track = function (e, t, r) {
					if (t.chapterid !== undefined) {
						t.chapterid = String(t.chapterid);
					}
					if (t.bookid !== undefined) {
						t.bookid = Number(t.bookid);
					}
					w[n]._track(e, t, r);
				};
			};
			x.setAttribute('charset', 'UTF-8');
			y.parentNode.insertBefore(x, y);
			w[n].para = para;
		}
	})({
		sdk_url: 'https://static.17k.com/lib/sa-sdk/sensorsdata.min.js',
		heatmap_url: 'https://static.17k.com/lib/sa-sdk/heatmap.min.js',
		name: 'sa',
		send_type: 'ajax',
		show_log: false,
		server_url: 'https://fx.corp.17k.com/sa?token=Yzc3MTljNW&project=new_dp'
	});
	var book = k.book();
	/**
	 * @namespace sa
	 */
	var userinfo = k.loginInfo();
	sa.identify(k.uuid, true);
	sa.login(userinfo.id || k.uuid);
	sa.quick('autoTrackWithoutProfile', {
		'platform': k.platform,
		'App': 0,
		'subApp': 1,
		'cps_source': k.cookie('c_channel') || k.getUrl('c_channel') || '',
		'cps_opid': k.cookie('c_csc') || k.getUrl('hmsr') || '',
		'guid': k.uuid,
		'bookid': book.id,
		'userid': String(userinfo.id || 0),
		'username': userinfo.nickname
	});
	/*
	三端统一 log统计
	 */
	var obj = {
		Platform: {
			'pc': 'Web',
			'h5': 'H5',
			'pc_4yt': 'pc_4yt',
			'h5_app': 'app'}[k.platform],
		Guid: k.uuid,
		Uid: String(userinfo.id || 0),
		Nickname: userinfo.nickname,
		cpsSource: k.cookie('c_channel'),
		Channel: k.cookie('c_csc')
	};

	if (book.id) {
		obj.novelID = String(book.id || 0);
		obj.novelName = book.name || '';
		obj.chapterID = String(book.chapterid || 0);
		obj.chapterName = book.chapterName || '';
		obj.authorByname = book.author || '';
	}
	k.jsonp('//api.17k.com/pv/log.php', obj);
}());
/*
 //api.17k.com/pv/log.php?Platform=Web
 Platform	平台类型
 Guid	Guid
 Uid	用户ID
 Nickname	用户昵称
 Channel	渠道
 novelID	小说ID
 novelName	小说名称
 novelFirstType	小说一级类别
 novelSecondType	小说二级类别
 novelThirdType	小说三级类别
 novelPayType	小说付费类型
 chapterID	章节ID
 chapterName	章节名
 authorByname	作者名
 isaunthor	是否为作者
 iptype	授权类型
 Source	推广来源
 */
