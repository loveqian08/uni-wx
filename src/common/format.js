
/**
 * 在vue中使用 this.$format.xxx
 */

import {
	merge,
	dateFormat,
	uuid,
	isEmpty,
	isDate
} from '@/common/utils/utils.js';

Date.prototype.format = Date.prototype.format || function (format) {
	return dateFormat(this, format);
};

function fmtPhoneNo(value) {
	if (isEmpty(value)) {
		return "";
	}
	value = removeSpace(value);
	var tmpStr = "";
	var start = value.length - 4;
	if (start < 4) {
		start = 4;
	}
	tmpStr = tmpStr + value.substring(0, 3) + " **** " + value.substring(start, value.length);
	return tmpStr;
}

/**
 * @description 账号格式化、 添加空格分隔符 hidden = true将隐藏部分号码
 * @param {string}
 *            value 账户
 * @param hidden
 *            {bool} 是否隐藏账户 true为隐藏
 * @returns {string} 转译后的字符
 * @example 1.JS中直接调用:<br>
 *          var s = this.$format.fmtAcctNo(value,true);
 */
function fmtAcctNo(value, hidden) {
	if (isEmpty(value)) {
		return "";
	}
	value = removeSpace(value);
	var tmpStr = "";
	if (hidden) {
		var start = value.length - 4;
		if (start < 4) {
			start = 4;
		}
		tmpStr = tmpStr + value.substring(0, 4) + " **** **** " + value.substring(start, value.length);
	} else {
		while (value.length > 4) {
			tmpStr = tmpStr + value.substring(0, 4);
			tmpStr = tmpStr + " ";
			value = value.substring(4, value.length);
		}
		tmpStr = tmpStr + value;
	}
	return tmpStr;
}

/**
 * @description 卡号末4位
 * @param {string}
 *            value 账户
 * @returns {string} 转译后的字符
 */
function fmtAcctStop4(value) {
	if (isEmpty(value)) {
		return "";
	}
	var n = 4;
	var acct4 = value.substring(value.length - n, value.length);
	return acct4;
}
/**
 * @description 格式化证件号码
 * @param {string}
 *            value 证件号
 * @returns {string} 格式后的字符
 */
function fmtIdNo(value) {
	if (isEmpty(value)) {
		return "";
	}
	value = removeSpace(value);
	var tmpStr = "";
	var start = value.length - 2;
	if (start < 2) {
		start = 2;
	}
	tmpStr = tmpStr + value.substring(0, 2) + " **** **** " + value.substring(start, value.length);
	return tmpStr;
}
function fmtIdNo2(value) {
	if (isEmpty(value)) {
		return "";
	}
	value = removeSpace(value);
	var tmpStr = "";
	var start = value.length - 4;
	if (start < 4) {
		start = 4;
	}
	tmpStr = tmpStr + value.substring(0, 6) + " **** **** " + value.substring(start, value.length);
	return tmpStr;
}
/**
 * @description 用户姓名格式化
 * @param {string}
 *            value 姓名
 * @returns {string} 格式后的字符
 */
function fmtCustName(value) {
	if (isEmpty(value)) {
		return "";
	}
	value = removeSpace(value);
	var tmpStr = "";
	tmpStr = "*" + value.substring(1, value.length);
	return tmpStr;
}

function fmtCustNames(value) {
	if (isEmpty(value)) {
		return "";
	}
	value = removeSpace(value);
	var tmpStr = "";
	if (value.length <= 2) {
		tmpStr = value.substring(0, 1) + "*";
	} else {
		tmpStr = value.substring(0, 1) + "**";
	}
	return tmpStr;
}
/**
 * @description 去除字符串空格
 * @param {string}
 *            value 字符串
 * @returns {string} 格式后的字符
 */
function removeSpace(value) {
	if (isEmpty(value)) {
		return "";
	}
	return value.replace(/\s/g, "");
}
/**
 * @description 日期格式化
 * @param {string}
 *            v 日期字符串
 * @param {string}
 *            format 日期格式
 * @returns {string} 格式后的字符
 * @example 1.JS中直接调用:<br>
 *          var str = "2017-12-18 11:21:22"; //var str =
 *          "20171218112122";<br>
 *          this.$format.fmtDate(str,'yyyy年MM月dd日 hh点mm分ss秒'); ==>
 *          2017年12月18日11点21分22秒 <br>
 *          this.$format.fmtDate(str,'yyyy-MM-dd hh:mm:ss'); ==> 2017-12-18
 *          11:21:22 <br>
 *          this.$format.fmtDate(str,'yyyy-MM-dd hh:mm'); ==> 2017-12-18
 *          11:21<br>
 *          this.$format.fmtDate(str,'yyyy-MM-dd'); ==> 2017-12-18 <br>
 */
function fmtDate(v, format) {
	if (isEmpty(v))
		return "";
	if (!isDate(v)) {
		v = new Date(v);
	}
	return v.format(format || 'yyyy年MM月dd日');
}

function fmtDate2(v) {
	if (!v) return '';
	var a = v.substring(0, 4);
	var b = v.substring(4, 6);
	var c = v.substring(6, 8);
	return a + "-" + b + "-" + c;
}

function fmtDate3(v) {
	if (!v) return '';
	var a = v.substring(0, 4);
	var b = v.substring(4, 6);
	var c = v.substring(6, 8);
	return a + "/" + b + "/" + c;
}


function fmtDate4(v) {
	if (!v) return '';
	var a = v.substring(0, 4);
	var b = v.substring(4, 6);
	var c = v.substring(6, 8);
	var d = v.substring(8, 10);
	var e = v.substring(10, 12);
	return a + "-" + b + "-" + c + " " + d + ":" + e;
}

function fmtDate5(v) {
	if (!v) return '';
	var a = v.substring(0, 4);
	var b = v.substring(4, 6);
	var c = v.substring(6, 8);
	return a + "." + b + "." + c;
}
/**
 * @param date eg： "2016-02-02"
 * @param num   3
 * */
 function getPreDay(date, num){
	 if (!(date instanceof Date)) {
	 	if (/^\d{8}$/.test(date)){
	 		let arr = [];
	 		arr[0] = date.substr(0,4);
	 		arr[1] = date.substr(4,2);
	 		arr[2] = date.substr(6,2);
	 		date = new Date(arr.join('/'));
	 	} else {
	 		date = new Date(date.replace(/-/g, '/'));
	 	}
	 }
	 return (new Date(date/1+num*24*60*60*1000)).format('yyyy-MM-dd');
 }
/**
 * @param date eg： "2016-02-02"
 * @param num   3
 * */
function getPreMonth(date, num) {
	if (!(date instanceof Date)) {
		if (/^\d{8}$/.test(date)){
			let arr = [];
			arr[0] = date.substr(0,4);
			arr[1] = date.substr(4,2);
			arr[2] = date.substr(6,2);
			date = new Date(arr.join('/'));
		} else {
			date = new Date(date.replace(/-/g, '/'));
		}
	}
	date.setMonth(date.getMonth() + num);
	return date.format('yyyy-MM-dd');
}
/**
 * @param date eg： "2016-02-02"
 * @param num   3
 * */
function getPreYear(date, num) {
	if (!(date instanceof Date)) {
		if (/^\d{8}$/.test(date)){
			let arr = [];
			arr[0] = date.substr(0,4);
			arr[1] = date.substr(4,2);
			arr[2] = date.substr(6,2);
			date = new Date(arr.join('/'));
		} else {
			date = new Date(date.replace(/-/g, '/'));
		}
	}
	date.setFullYear(date.getFullYear() + num);
	return date.format('yyyy-MM-dd');
}
/**
 * @description 格式化金额
 * @param {float}
 *            v 原始金额
 * @param {int}
 *            c 小数点后保留为数（默认为2）
 * @param {int}
 *            d 小数点
 * @param {string}
 *            t 整数区千位分割（默认为逗号）
 * @returns {string} 格式后的字符
 */
function fmtMoney(v, c, d, t) {
	if (v) {
		v = v + "";
		v = v.replace(/,/g, "");
		v *= 1;
		var p = v < 0 ? '-' : '';
		c = (c===0 || c) ? c : 2;
		v = v.toFixed(c);
		c = Math.abs(c) + 1 ? c : 2;
		d = d || '.';
		t = t || ',';
		var m = (/(\d+)(?:(\.\d+)|)/.exec(v + ''));
		var x = m[1].length > 3 ? m[1].length % 3 : 0;
		return p + (x ? m[1].substr(0, x) + t : '') + m[1].substr(x).replace(/(\d{3})(?=\d)/g, '$1' + t) +
			(c ? d + (+m[2] || 0).toFixed(c).substr(2) : '');
	} else {
		return '';
	}
}
/**
 * @description 格式化金额
 * @param {float}
 *            v 原始金额
 * @param {int}
 *            c 小数点后保留为数（默认为2）
 * @param {int}
 *            d 小数点
 * @param {string}
 *            t 整数区千位分割（默认为逗号）
 * @returns {string} 格式后的字符
 * 当没有金额传入时候 返回0 用于还款的多个金额字段相加 传回来的是Number 类型
 */
function fmtMoneyCommon(v, c, d, t) {
	if (v == 0 || !v) {
		return 0;
	}
	if (v) {
		return fmtMoney(v, c, d, t);
	}
}

/**
 * @description 金额格式化保留2位小数点
 * @param {float}
 *            s 原始金额
 * @param {Boolean} integer 如果为true，当小数点后两位为0时，刚不显示小数位 
 * @returns {string} 格式后的字符
 */
function fmtAmt(s, integer) {
	try {
		let tmpMoney = fmtMoney(s, 2, ".", ",");
		if (integer) {
			return tmpMoney.replace(/\.00$/, '');
		}
		return tmpMoney;
	} catch (e) {
		if (integer) {
			return "0";
		}
		return "0.00";
	}
}
/**
 * @description 数量格式化""显示为0否则返回s
 * @param {float}
 *            s 原始数字
 * @returns {string} 格式后的字符
 */
function fmtNum(s, integer) {
	if (s == "") {
		return "0";
	} else {
		return s && (integer ? s.replace(/\.00$/, '') : s) || s;
	}
}
/**
 * @description 距离格式化如果s为""显示为""如果s<1000? s+"m" :
 *              (s/1000).toFixed(1)+"km"
 * @param {float}
 *            s 原始数字
 * @returns {string} 格式后的字符
 */
function fmtDistance(s) {
	if (s == "") {
		return s;
	} else {
		s = parseInt(s * 100 / 100); // 去掉小数部分
		s1 = s + "";
		if (s1.length > 4 || s1.length == 4) { // 整数部分大于等于4位显示km，小数部分保留一位
			return (s1 / 1000.0).toFixed(1) + "km";
		} else { // 整数部分小于4位，显示m
			return s1 + "m";
		}
	}
}
/**
 * @description 金额格式化保留4位小数点
 * @param {float}
 *            s 原始数字
 * @returns {string} 格式后的字符
 */
function fmtAmt4s(s) {
	try {
		return fmtMoney(1.0000 * s, 4, ".", ",");
	} catch (e) {
		return "0.0000";
	}
}

/**
 * @description 去除金额格式化
 * @param {*|string}
 *            b 格式化后的数字
 * @returns {string} 格式后的字符
 */
function delFmtMony(b) {
	var a = b.trim() + "";
	if (a.indexOf(".") != -1) {
		a = a.substr(0, a.indexOf(".") + 3);
	}
	return a.replace(/,/g, "");
}

/**
 * @description 金额去格式化
 * @param {*|string}
 *            b 格式化后的数字
 * @returns {string} 格式后的字符
 */
function unfmtAmt(s) {
	if (isEmpty(s)) {
		return "";
	}
	return s.replace(/,/g, "");
}

/**
 * @description 利率格式化,默认两位小数
 * @param {*|float}
 *            b 初始数据
 * @returns {string} 格式后的字符
 */
function fmtAddPercent(b) {
	var a = Math.floor(b * 100) / 100;
	a = (a.toFixed(2));
	return a + "%";
}
/**
 * @description 格式化数字为大写汉字
 * @param {*|float}
 *            num 初始化数字
 * @returns {string} 转译后的字符
 */
function fmtNumber2Chinese(n) {
	if (isEmpty(n) || isNaN(n)) {
		n = 0;
	}
	n += '';
	try {
		n = n.replace(/,/g, '');
	} catch (e) {
		n = 0;
	}
	var fraction = ['角', '分'];
	var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
	var unit = [
		['元', '万', '亿'],
		['', '拾', '佰', '仟']
	];
	var head = n < 0 ? '欠' : '';
	n = Math.abs(n);

	var s = '';

	for (var i = 0; i < fraction.length; i++) {
		s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
	}
	s = s || '整';
	n = Math.floor(n);

	for (var i = 0; i < unit[0].length && n > 0; i++) {
		var p = '';
		for (var j = 0; j < unit[1].length && n > 0; j++) {
			p = digit[n % 10] + unit[1][j] + p;
			n = Math.floor(n / 10);
		}
		s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
	}
	return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}

/**
 * 格式化手机为  xxx xxxx xxxx
 * @param {String} mobileNo
 */
function formatMobileNo(mobileNo = '') {
    return mobileNo.replace(/^(\d{1,3})(\d{0,4})(\d{0,4})$/, (_, $1, $2, $3) => {
		if ($1.length < 3) {
			return $1;
		}
		$1 += ' ';
		if ($2.length < 4) {
			return $1 + $2;
		}
		$2 += ' ';
		return $1 + $2 + $3;
	});
}
export default {
	removeSpace,
	fmtPhoneNo,
	fmtAcctNo,
	fmtAcctStop4,
	fmtIdNo,
	fmtIdNo2,
	fmtCustName,
	fmtCustNames,
	removeSpace,
	fmtDate,
	fmtDate2,
	fmtDate3,
	fmtDate4,
	fmtDate5,
	getPreDay,
	getPreMonth,
	getPreYear,
	fmtMoney,
	fmtAmt,
	fmtNum,
	fmtDistance,
	fmtAmt4s,
	delFmtMony,
	unfmtAmt,
	fmtAddPercent,
	fmtNumber2Chinese,
	fmtMoneyCommon,
	formatMobileNo
}
