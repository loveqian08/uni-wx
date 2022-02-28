/**
 * Created by chengxing on 17/03/31 0031.
 */
import dateFormat from './date/format';
import merge from './merge/index';
import uuid from './UUID/index.js';
import queryString from './querystring/index.js';
import md5 from './md5/index.js';

/**
 * @description 判断值是否已定义
 * @param {*}
 *            v 判断对象
 * @returns {*|boolean} 是否已定义
 */
const isDefined = function(v) {
	return typeof v !== 'undefined';
};
/**
 * @description 是否为空
 * @param {*}
 *            v 值
 * @param {boolean}
 *            allowBlank 是否允许空
 * @returns {*|boolean} 是否为空
 */
const isEmpty = function(v, allowBlank) {
	return v === null || v === undefined ||
		String(v).toUpperCase() === 'NULL' ||
		((Array.isArray(v) && !v.length)) ||
		(!allowBlank ? v === '' : false);
}

const isDate = function(v) {
	return Object.prototype.toString.call(v) === '[object Date]';
}

export {
	dateFormat,
	merge,
	uuid,
	queryString,
	isDefined,
	isEmpty,
	isDate,
	md5
}
