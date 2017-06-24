/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jslib_commonUtil__ = __webpack_require__(1);


window.onload = function() {
  alert('ddfdsfad');
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 자주 사용되는 javaScript 문법을 모아놓은 곳
 */

String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/gi, "");
};

function sendWorkAjax(sendUrl, param, type, trueCallback, errorCallback) {
	$.ajax({
		type : type,
		url : sendUrl,
		contentType : "application/json;charset=UTF-8",
		data : param,
		success : function(data, textStatus, jqXHR) {
			if (null == data) {
				alert('common_ajax_null_data');
			}
			if ($.isFunction(trueCallback)) {
				trueCallback(data);
				return;
			}
			alert("잘못된 접속 혹은 서버 오류입니다.");
		},
		error : function(jqXHR, extStatus, errorThrown) {
			if ($.isFunction(errorCallback)) {
				errorCallback();
			}
		}
	});
};

function sendWorkAjaxUrlencoded(sendUrl, param, type, trueCallback, errorCallback) {
	$.ajax({
		type : type,
		url : sendUrl,
		contentType : "application/x-www-form-urlencoded",
		data : param,
		success : function(data, textStatus, jqXHR) {
			if (null == data) {
				alert('common_ajax_null_data');
			}
			if ($.isFunction(trueCallback)) {
				trueCallback(data);
				return;
			}
			alert("잘못된 접속 혹은 서버 오류입니다.");
		},
		error : function(jqXHR, extStatus, errorThrown) {
			if ($.isFunction(errorCallback)) {
				errorCallback();
			}
		}
	});
};

function sendWorkAjaxToLogin(sendUrl, param, type, trueCallback, falseCallback,
		errorCallback) {
	$.ajax({
		type : type,
		url : sendUrl,
		contentType : "application/json;charset=UTF-8",
		data : param,
		success : function(data, textStatus, jqXHR) {
			if (data == '/login') {
				location.replace("/");
			} else {
				location.replace(data);
			}
		},
		error : function(jqXHR, extStatus, errorThrown) {
			if ($.isFunction(errorCallback)) {
				errorCallback();
			}
		}
	});
};

function sendWorkViaAjax(sendUrl, param, trueCallback, falseCallback,
		errorCallback) {
	$.ajax({
		type : "post",
		contentType : "application/json;charset=UTF-8",
		url : sendUrl,
		dataType : 'json',
		data : param,
		success : function(data, textStatus, jqXHR) {
			if (null == data) {
				alert('common_ajax_null_data');
			}
			if (!data.result || 0 <= data.result) {
				if ($.isFunction(trueCallback)) {
					trueCallback(data);
				}
				return;
			} else if ($.isFunction(falseCallback)) {
				if (falseCallback(data))
					return;
			}
			alert("잘못된 접속 혹은 서버 오류입니다.");
		},
		error : function(jqXHR, extStatus, errorThrown) {
			alert(jqXHR + extStatus + errorThrown);
			if ($.isFunction(errorCallback)) {
				errorCallback(jqXHR, extStatus, errorThrown);
				return;
			}
			alert("서버와 연결 중 오류가 발생했습니다.");
		}
	});
};

// null을 공백 문자로 반환
function null2space(str) {
	if (isNull(str)) {
		return "";
	} else {
		return str;
	}
};

// null이거나 공백인 문자를 0로 통일하여 반환
function null2Zero(str) {
	if (isNull(str)) {
		return 0;
	} else {
		return str;
	}
};

// if str is null return true
function isNull(str) {
	if (null == str || 0 == str.trim().length) {
		return true;
	} else {
		return false;
	}
};

// if str is null return false
function isNotNull(str) {
	return !isNull(str);
};

// ipValid
function ipValidIp(ipaddress) {
	if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
			.test(ipaddress)) {
		return true;
	}
	return false;
};

// 숫자 여부 확인
function isNumber(str) {
	if (/^([0-9])+$/.test(str)) {
		return true;
	}
	return false;
};

// IE 버전 체크
function getInterVersion() {
	var rv = 99;
	if (navigator.appName == 'Microsoft Internet Explorer') {
		var ua = navigator.userAgent;
		var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
			rv = parseFloat(RegExp.$1);
	}
	return rv;
};

// close page function
function closePage() {
	alert('ddd');
	window.open("about:blank", "_self").close();
};

// Full Path 반환
function getFullPath(path) {
	return "/wedulpos/"+ path;
}

// 현재 탭 닫기
function closeCurrentTab() {
	window.opener = window.location.href;
	self.close();
	window.open("about:blank", "_self").close();
}

// full

// i18n 설정
function setLanguage(callBack) {
// 다국어 지원
jQuery.i18n.properties({
	name : 'messages',
	mode : 'map',
	path: '/wedulpos/getLanguage',
	async : false,
	callback : function() {
		if (jQuery.isFunction(callBack)) {
			callBack();
		}
	}
});
};

// i18n을 사용하여 message 가져오기
function getMessageProperties(message) {
	return $.i18n.prop(message);
}

// 포스트 방식으로 message 데이터 가져오기
function getMessage(message) {
	sendWorkAjaxUrlencoded('/getMessage', {msg : message}, "post", function(data) {
		return data;
	});
};

/* unused harmony default export */ var _unused_webpack_default_export = ('commonUtil');


/***/ })
/******/ ]);