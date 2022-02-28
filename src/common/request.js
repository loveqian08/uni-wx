// #ifdef MP
import fly from 'flyio/dist/npm/wx'
// #endif
// #ifdef QUICKAPP-WEBVIEW
import fly from './uniRequest.js';
import store from '@/store/store.js';
// #endif

import {
	SERVER_HOST
} from '@/common/consts.js';
const errorPrompt = (err) => {
    uni.hideLoading();
    uni.showToast({
        title: err.message ==='request:ok' ? '请求出错了' : err.message,
		icon: 'none'
    })
}
const flyio = new fly();
// 设置超时
flyio.config.timeout = 6000;
// 设置请求地址
flyio.config.baseUrl = SERVER_HOST;
flyio.config.headers['Content-Type'] = 'application/json';
flyio.config.withCredentials = true;

// 请求拦截器
flyio.interceptors.request.use((config) => {
    // if (!/\.do$/.test(config.url)) {
	// 	config.url += '.do';
	// }
    const sessionId = store.state.common.token || '';
	config.headers['cookie'] = 'SESSION=' + sessionId +';path=/;HttpOnly;';
    let params = {};
    // params = {
    //     ...config.body
    // }
    config.body = params;
	return config;
}, function(error) {
    // 对请求错误做些什么
	errorPrompt(error);
	return Promise.reject(error)
})

// 响应拦截器
flyio.interceptors.response.use((response) => {
	let resBody = response.data;
	if (response.status === 200) {
        return Promise.resolve(resBody);
        // 从响应头里取session
        // let rspCookie = response.headers['set-cookie'];
        // Array.isArray(rspCookie) && rspCookie.length > 0 && (rspCookie = rspCookie[0]);
        // let sessionId = '';
        // if (resBody.head && resBody.head.SET_COOKIE) {
        //     rspCookie = resBody.head.SET_COOKIE;
        // }
        // let result = rspCookie.match(/session=([a-zA-z0-9\-_\.]+)/i);
        // var res = rspCookie.split(";"); //
        // if(Array.isArray(result) && res && res.length > 0 && res[0]){
        // 	sessionId = res[0].replace(/session=/i,"");
        // 	Global.token = sessionId;
        // 	store.commit('token', {
        // 		token: sessionId
        // 	});
        // }
        
		// if (FwSecurity.Security) { // 非通讯加密
		// 	var _rpdata = resBody;
		// 	if (typeof _rpdata.body === 'string') {
		// 		_rpdata.body = JSON.parse(FwSecurity.decrypt(_rpdata.body));
		// 	}
		// 	if (Global.isGateWay) { // 是否网关通讯
		// 		var _head = _rpdata.head; // 网关通讯报文头
		// 		var _body = _rpdata.body; // 网关通讯报文体
		// 		_body.STATUS = _body.STATUS ? _body.STATUS : _head.H_STATUS;
		// 		_body.MSG = _body.MSG || _head.H_MSG || _head.H_STATUS;
		// 		if (_head && _body) {
		// 			if (!isEmpty(_head.H_UPS_SID)) {
		// 				Global._head = _head; // 用于其他数据保存操作
		// 				// sessionId = _head.H_UPS_SID || sessionId;
		// 				Global.upsSid = _head.H_UPS_SID; // 保存相关的用户登录数据
		// 				// Global.token = sessionId;
		// 				// store.commit('token', {
		// 				// 	token: sessionId
		// 				// });
		// 			}
					
		// 		}
		// 		return checkRspData(_body, response);
		// 	} else {
		// 		return checkRspData(_rpdata, response);
		// 	}
		// } else { // 非通讯加密
		// 	var _rpdata = resBody;
		// 	if (Global.isGateWay) { // 是否网关通讯
		// 		var _head = _rpdata.head; // 网关通讯报文头
		// 		var _body = _rpdata.body; // 网关通讯报文体
		// 		_body.STATUS = _body.STATUS ? _body.STATUS : _head.H_STATUS;
		// 		_body.MSG = _body.MSG || _head.H_MSG || _head.H_STATUS;
		// 		if (_head && _body) {
		// 			if (!isEmpty(_head.H_UPS_SID)) {
		// 				Global._head = _head; // 用于其他数据保存操作
		// 				// sessionId = _head.H_UPS_SID || sessionId;
		// 				Global.upsSid = _head.H_UPS_SID; // 保存相关的用户登录数据
		// 				// Global.token = sessionId;
		// 				// store.commit('token', {
		// 				// 	token: sessionId
		// 				// });
		// 			}
					
		// 		}
		// 		return checkRspData(_body, response);
		// 	} else {
		// 		return checkRspData(_rpdata, response);
		// 	}
		// }
	} else if (response && response.status === 500) {
		errorPrompt({
			message: resBody.message || '服务端异常！'
		});
		return Promise.reject(response);
	} else if (response && response.status === 404) {
		errorPrompt({
			message: '404'
		});
		return Promise.reject(response);
	} else {
		errorPrompt({
			message: '出错，请稍候再试！'
		});
		return Promise.reject(response);
	}

}, (error) => {
	errorPrompt(error)
	return Promise.reject(error)
});

export default flyio;