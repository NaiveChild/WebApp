"use strict";
angular.module("app", ["ui.router", "ngCookies"]), angular.module("app").config(["$stateProvider", "$urlRouterProvider", function(t, e) {
	t.state("main", {
		url: "/main",
		templateUrl: "view/main.html",
		controller: "mainCtrl"
	}).state("show", {
		url: "/show/:id",
		templateUrl: "view/show.html",
		controller: "showCtrl"
	}).state("positionList", {
		url: "/list",
		templateUrl: "view/positionList.html",
		controller: "poslistCtrl"
	}).state("position", {
		url: "/position/:id",
		templateUrl: "view/position.html",
		controller: "posCtrl"
	}).state("login", {
		url: "/login",
		templateUrl: "view/login.html",
		controller: "logCtrl"
	}).state("search", {
		url: "/search",
		templateUrl: "view/search.html",
		controller: "seaCtrl"
	}).state("home", {
		url: "/home",
		templateUrl: "view/home.html",
		controller: "homeCtrl"
	}).state("regist", {
		url: "/regist",
		templateUrl: "view/regist.html",
		controller: "regCtrl"
	}).state("collect", {
		url: "/collect",
		templateUrl: "view/collect.html",
		controller: "colCtrl"
	}).state("send", {
		url: "/send",
		templateUrl: "view/send.html",
		controller: "sendCtrl"
	}), e.otherwise("main")
}]), angular.module("app").controller("colCtrl", ["$scope", "$http", "$cookies", "$state", function(t, e, o, a) {
	e({
		method: "get",
		url: "data/myFavorite.json",
		responseType: "json"
	}).then(function(e) {
		t.cols = e.data
	}, function(t) {
		console.log("请求失败：" + t.status + "," + t.statusText)
	}), t.imgsrc = "image/star-active.png", t.flag = !0, o.getObject("user") && (t.flag = !1), t.doChange = function() {
		"image/star-active.png" == t.imgsrc ? t.imgsrc = "image/star.png" : t.imgsrc = "image/star-active.png"
	}
}]), angular.module("app").controller("homeCtrl", ["$scope", "$http", "$cookies", "$state", function(t, e, o, a) {
	t.checkLog = function() {
		var e = o.getObject("user");
		t.phone == e.phone && t.pwd == e.pwd ? (t.checktxt = "", a.go("main"), console.log(a)) : t.checktxt = "手机号或密码错误"
	}
}]), angular.module("app").controller("logCtrl", ["$scope", "$http", "$cookies", function(t, e, o) {
	e({
		method: "get",
		url: "data/login.json",
		responseType: "json"
	}).then(function(e) {
		t.results = e.data
	}, function(t) {
		console.log("请求失败：" + t.status + "," + t.statusText)
	}), t.flag1 = !1, t.flag2 = !0;
	var a = o.getObject("user");
	a && (t.flag1 = !0, t.flag2 = !1, t.name = a.phone), t.doExit = function() {
		o.remove("user")
	}
}]), angular.module("app").controller("mainCtrl", ["$scope", "$http", "$cookies", function(t, e, o) {
	e({
		method: "get",
		url: "data/positionList.json",
		responseType: "json"
	}).then(function(e) {
		t.user = e.data
	}, function(t) {
		console.log("请求失败：" + t.status + "," + t.statusText)
	}), t.flag1 = !1, t.flag2 = !0;
	var a = o.getObject("user");
	a && (t.flag1 = !0, t.flag2 = !1, t.name = a.phone, console.log(a.state))
}]), angular.module("app").controller("posCtrl", ["$scope", "$http", "$state", function(t, e, o) {
	e({
		method: "get",
		url: "data/company.json?id=" + o.params.id,
		responseType: "json"
	}).then(function(e) {
		console.log(e), t.btn1 = e.data.positionClass[0], t.btn2 = e.data.positionClass[1], t.js = e.data.positionClass[0].positionList[0], t.yy = e.data.positionClass[1].positionList[0]
	}, function(t) {
		console.log("请求失败：" + t.status + "," + t.statusText)
	}), t.flag1 = !1, t.flag2 = !0, t.doChange1 = function() {
		t.flag1 && (t.flag2 = !0), t.flag1 = !1, t.obj1 = {
			"background-color": "#12d5b5",
			color: "#fff"
		}, t.obj2 = {
			"background-color": "#def8f5",
			color: "#000"
		}
	}, t.doChange2 = function() {
		t.flag2 && (t.flag1 = !0), t.flag2 = !1, t.obj2 = {
			"background-color": "#12d5b5",
			color: "#fff"
		}, t.obj1 = {
			"background-color": "#def8f5",
			color: "#000"
		}
	}
}]), angular.module("app").controller("regCtrl", ["$scope", "$http", "$cookies", "$interval", "$state", function(t, e, o, a, l) {
	function n() {
		for (var t = "", e = 1; e <= 4; e++) {
			t += Math.floor(9 * Math.random())
		}
		return t
	}
	t.flag1 = !1, t.flag2 = !1, t.checkPhone = function() {
		/^1\d{10}$/.test(t.phone) ? (t.phonetxt = "✅", t.flag1 = !0) : (t.phonetxt = "❌", t.flag1 = !1)
	}, t.checkPwd = function() {
		/^\w{6,14}$/.test(t.pwd) ? (t.pwdtxt = "✅", t.flag2 = !0) : (t.pwdtxt = "❌", t.flag2 = !1)
	}, t.mestxt = "发送短信", t.doClick = function() {
		function e() {
			0 === --t.mestxt && (a.cancel(o), t.mestxt = "重新发送")
		}
		t.mestxt = 10;
		var o = a(e, 1e3);
		t.codetxt = n()
	}, t.checkReg = function() {
		console.log(112), t.flag1 && t.flag2 && o.putObject("user", {
			phone: t.phone,
			pwd: t.pwd,
			state: 1
		})
	}
}]), angular.module("app").controller("seaCtrl", ["$scope", "$http", function(t, e) {
	e({
		method: "get",
		url: "data/city.json",
		responseType: "json"
	}).then(function(e) {
		t.city = e.data
	}, function(t) {
		console.log("请求失败：" + t.status + "," + t.statusText)
	}), e({
		method: "get",
		url: "data/salary.json",
		responseType: "json"
	}).then(function(e) {
		t.salary = e.data
	}, function(t) {
		console.log("请求失败：" + t.status + "," + t.statusText)
	}), e({
		method: "get",
		url: "data/scale.json",
		responseType: "json"
	}).then(function(e) {
		t.scale = e.data
	}, function(t) {
		console.log("请求失败：" + t.status + "," + t.statusText)
	}), t.flag1 = !0, t.flag2 = !0, t.flag3 = !0, t.flag4 = !0, t.showCity = function() {
		t.flag1 = !t.flag1, t.flag2 = !t.flag2, t.cla = {
			"border-bottom": "2px solid #12d5b5"
		}
	}, t.showSalary = function() {
		t.flag1 = !t.flag1, t.flag3 = !t.flag3, t.cla1 = {
			"border-bottom": "2px solid #12d5b5"
		}
	}, t.showScale = function() {
		t.flag1 = !t.flag1, t.flag4 = !t.flag4, t.cla2 = {
			"border-bottom": "2px solid #12d5b5"
		}
	}, t.hidesth = function() {
		t.flag1 = !0, t.flag2 = !0, t.flag3 = !0, t.flag4 = !0, t.cla = {
			border: "0"
		}, t.cla1 = {
			border: "0"
		}, t.cla2 = {
			border: "0"
		}
	}
}]), angular.module("app").controller("sendCtrl", ["$scope", "$http", "$cookies", "$state", function(t, e, o, a) {
	e({
		method: "get",
		url: "data/myPost.json",
		responseType: "json"
	}).then(function(e) {
		console.log(e), t.send = e.data
	}, function(t) {
		console.log("请求失败：" + t.status + "," + t.statusText)
	}), t.flag1 = !1, t.flag2 = !0, t.flag3 = !0, t.cla = {
		"border-bottom": "2px solid #12d5b5"
	}, t.showTotal = function() {
		t.flag1 = !1, t.flag2 = !0, t.flag3 = !0, t.cla = {
			"border-bottom": "2px solid #12d5b5"
		}, t.cla1 = {
			border: "0"
		}, t.cla2 = {
			border: "0"
		}
	}, t.showInt = function() {
		t.flag2 = !1, t.flag1 = !0, t.flag3 = !0, t.cla1 = {
			"border-bottom": "2px solid #12d5b5"
		}, t.cla = {
			border: "0"
		}, t.cla2 = {
			border: "0"
		}
	}, t.showIna = function() {
		t.flag3 = !1, t.flag1 = !0, t.flag2 = !0, t.cla2 = {
			"border-bottom": "2px solid #12d5b5"
		}, t.cla = {
			border: "0"
		}, t.cla1 = {
			border: "0"
		}
	}
}]), angular.module("app").controller("showCtrl", ["$scope", "$http", "$state", "$cookies", function(t, e, o, a) {
	e({
		method: "get",
		url: "data/position.json?id=" + o.params.id,
		responseType: "json"
	}).then(function(e) {
		t.details = e.data
	}, function(t) {
		console.log("请求失败：" + t.status + "," + t.statusText)
	}), e({
		method: "get",
		url: "data/company.json",
		responseType: "json"
	}).then(function(e) {
		t.company = e.data
	}, function(t) {
		console.log("请求失败：" + t.status + "," + t.statusText)
	}), t.imgsrc = "../image/star.png", t.txt = "投个简历", t.flag1 = !1, t.flag2 = !0, a.getObject("user") && (t.flag1 = !0, t.flag2 = !1), t.doChange = function() {
		"../image/star.png" == t.imgsrc ? (t.imgsrc = "../image/star-active.png", t.txt = "已投递") : (t.imgsrc = "../image/star.png", t.txt = "投个简历")
	}
}]), angular.module("app").directive("appCollectContent", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/colcontent.html"
	}
}]), angular.module("app").directive("appCollectHeader", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/template/colhead.html",
		link: function(t) {
			t.back = function() {
				window.history.back()
			}
		}
	}
}]), angular.module("app").directive("appCompanyContent", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/comcontent.html"
	}
}]), angular.module("app").directive("appCompanyFoot", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/template/comfoot.html"
	}
}]), angular.module("app").directive("appCompanyHead", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/template/comhead.html",
		link: function(t) {
			t.back = function() {
				window.history.back()
			}
		}
	}
}]), angular.module("app").directive("appFooter", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/template/foot.html"
	}
}]), angular.module("app").directive("appSearchFooter", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/template/foot1.html"
	}
}]), angular.module("app").directive("appFooterLog", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/template/foot2.html"
	}
}]), angular.module("app").directive("appHead", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/template/head.html"
	}
}]), angular.module("app").directive("appHomeContent", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/homecontent.html"
	}
}]), angular.module("app").directive("appPositionList", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/positionList.html"
	}
}]), angular.module("app").directive("appLoginContent", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/logcontent.html"
	}
}]), angular.module("app").directive("appPositionContent", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/poscontent.html"
	}
}]), angular.module("app").directive("appPositionHead", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/template/poshead.html",
		link: function(t) {
			t.back = function() {
				window.history.back()
			}
		}
	}
}]), angular.module("app").directive("appRegistContent", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/regcontent.html"
	}
}]), angular.module("app").directive("appSearchContent", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/seacontent.html"
	}
}]), angular.module("app").directive("appSearchHeader", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/template/seahead.html"
	}
}]), angular.module("app").directive("appSearchList", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/sealist.html"
	}
}]), angular.module("app").directive("appSendContent", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/sendcontent.html"
	}
}]), angular.module("app").directive("appSendHeader", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/template/sendhead.html",
		link: function(t) {
			t.back = function() {
				window.history.back()
			}
		}
	}
}]), angular.module("app").directive("appSendList", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/sendlist.html"
	}
}]), angular.module("app").directive("appCompanyWbs", [function() {
	return {
		restrict: "A",
		replace: !0,
		templateUrl: "view/template/wbs.html"
	}
}]);