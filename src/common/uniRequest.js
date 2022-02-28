function UniRequest() {
    this.interceptors = {
        request: {
            uses: [],
            use: function(success, fail){
                this.uses.push([success, fail]);
            }
        },
        response: {
            uses: [],
            use: function(success, fail){
                this.uses.push([success, fail]);
            }
        }
    };
    this.config = {
        timeout: 60000,
        baseURL: '',
        withCredentials: false,
        headers: {
            'Content-Type': 'application/json'
        }
    }
};

UniRequest.prototype.request = function (options) {
    // { url, body = {}, header, method, timeout, dataType, responseType, withCredentials = undefined}
    let requestPromise = new Promise((resolve, reject) => {
        if (!options.url) {
            reject(new Error('url 必须传入'));
        }
        options.header = { ...UniRequest.config, ...this.config.headers, ...options.header};
        options.timeout = options.timeout || this.config.timeout;
        options.withCredentials = options.withCredentials === undefined ? this.config.withCredentials : false;
        options.headers = options.header;
        resolve(options);
    });
    this.interceptors.request.uses.forEach(item => {
        requestPromise = requestPromise.then(item[0], item[1]);
    });
    let requestTask = null;
    requestPromise = requestPromise.then(options => {
        return new Promise((resolve, reject) => {
            let timer = setTimeout(() => {
                requestTask && requestTask.abort && requestTask.abort();
                reject(new Error('请求超时'));
            }, options.timeout);
            requestTask = uni.request({
                url: this.config.baseURL.replace(/\/+$/, '') + '/' + options.url.replace(/^\/+/, ''),
                method: options.method,
                header: options.headers,
                data: options.body,
                timeout: options.timeout,
                withCredentials: options.withCredentials,
                dataType: options.dataType,
                responseType: options.responseType,
                success: res => {
                    res.request = this.config;
                    const {data, statusCode, header, cookies} = res;
                    let rspCookie = header['set-cookie'] || header['Set-Cookie'];
                    if (typeof rspCookie === 'string') {
                        rspCookie = rspCookie.split(',');
                    }
                    header['set-cookie'] = rspCookie;
                    res.headers = header;
                    res.status = statusCode;
                    resolve(res);
                },
                fail: (e) => {
                    console.error('fail e = ', e);
                    reject(e);
                },
                complete() {
                    timer && clearTimeout(timer);
                    timer = null;
                }
            });
        });
        
    });
    this.interceptors.response.uses.forEach(item => {
        requestPromise = requestPromise.then(item[0], item[1]);
    });
    return requestPromise;
};

UniRequest.prototype.get = function (url, body, options) {
    return this.request({...options, url, body, method: 'GET'});
};
UniRequest.prototype.post = function (url, body, options) {
    return this.request({...options, url, body, method: 'POST'});
};

export default UniRequest;
