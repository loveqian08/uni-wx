import Vue from 'vue';
import store from '@/store/store';
import {
	merge,
	mapConvert
} from './utils/utils';

import {
	SERVER_HOST,
	IMAGE_SERVER_HOST,
	PUBLIC_KEY
} from '@/common/consts.js';


let Global = {
	/**
	 * @description web页面通讯模式行为分析请求开关
	 */
	isCollection: false,
	/**
	 * @description web页面通讯访问渠道号 TODO 各系统自行修改
	 */
	chnlId: '1201',
	// chnlType: 'WXM',
	chnlType: 'WB',
	/**
	 * @description web页面通讯是否连接网关通讯
	 */
	isGateWay: true,
	/**
	 * @description web页面通讯是否通讯加密
	 */
	isMessageEncrypt: false,
	/**
	 * @description 用户通讯SessionId
	 */
	upsSid: '',
	/**
	 * @description 操作系统及版本
	 */
	host: '',
	/**
	 * @description 机型
	 */
	platform: '',
	/**
	 * @description 客户端与服务端的时间偏移量
	 */
	timeOffSet: 0,
	token: '',
	userInfo: {},
	regexp: {
		mobileNo: /^1[3456789]\d{9}$/,
		telNumber: /(1[3456789]\d{9})/,
		// 数字无点整形类型
		"int": /^-?[1-9]\d*$/,
		// 手机号码验证
		mobile: /^0?(1[3456789])[0-9]{9}$/,
		// 电话及手机号
		phone: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$|0?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}/,
		// 邮政编码验证
		zipcode: /^[1-9][0-9]{5}$/,
		// 金额验证
		money: /^([1-9][\d]{0,8}|0)(\.[\d]{1,2})?$/,
		// 电子邮件
		email: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
		// 银行卡号
		card: /^\d{16,19}$/,
		// 大写小写字母及数字
		lpd: /^[a-z|A-Z|0-9]*$/,
		// 中文字符
		chinese: /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3])*$/,
		// 中文字符带点号
		name: /^[\u4e00-\u9fa5]+·*[\u4e00-\u9fa5]*$/,
		// 校验非中文非数字非字符的字符
		specialFont: /[^\u4e00-\u9fa5\w，。；：“”‘’,.()（）]/,
		// 校验组织机构代码
		unitcode: /^[0-9a-zA-Z-]*$/,
		// 短信验证码
		sms: /^\d{6}$/
	},
	serverPath: SERVER_HOST,
	imageServerPath: IMAGE_SERVER_HOST,
	publicKey: PUBLIC_KEY,

	init() {

	},
	checkSession(needReLogin) {
		// Vue.http.post('/')
	},
	showModalLoading (options) {
		const {title = '处理中', mask = true} = options || {};
		uni.showLoading({
			title,
			mask
		});
	},
	transformBase64(res) {
		let that = this;
		var fsm = uni.getFileSystemManager();
		let results = [];
		//循环将得到的图片转换为Base64
		for (let r in res.tempFilePaths) {
			// console.log(res.tempFilePaths[r])
			((r) => {
				results.push(new Promise((resolve) => {
					fsm.readFile({
						filePath: res.tempFilePaths[r],
						encoding: "base64",
						success: function(data) {
							resolve(that.getBase64ImageUrl(data.data));
						}
					});
				}));
			})(r);
		}
		return Promise.all(results);
	},
	getBase64ImageUrl: function(res) {
        // #ifdef QUICKAPP-WEBVIEW
        return res.replace(/[\n\f]/g, '');
        // #endif
		/// 获取到base64Data
		var base64Data = res;
		/// 通过微信小程序自带方法将base64转为二进制去除特殊符号，再转回base64
		base64Data = uni.arrayBufferToBase64(uni.base64ToArrayBuffer(base64Data));
		/// 拼接请求头，data格式可以为image/png或者image/jpeg等，看需求
		let base64Url = "data:image/png;base64," + base64Data;
		return base64Data;
	},
	dataURItoBlob(dataURI) {
		let byteString = atob(dataURI.split(',')[1]);
		let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
		let ab = new ArrayBuffer(byteString.length);
		let ia = new Uint8Array(ab);
		for (let i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}
		return new Blob([ab], {
			type: mimeString
		});
	}
};
export {
	Global
}
