import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    // 当这个值为true，就不允许使用this.$store.state.count=3这样的方式修改count的值，
	// 如果要修改，必须使用这样的方法this.$store.commit('updateCount', 3)
	strict: true,
    modules: {
        common: {
            state: {
				localNo: '', // 本地化Id
				localNoJyd: '', //  本地化Id 金裕贷
				cmNoInfo: {}, // 客户经理工号
				agreementInfo: {},
				isTimeout: '', // 记录是否为授信过期
				companyInfo: {}, // 企业名字和企业社会统一信用代码
				isLogin: 0,
				channelSourceName:'', //来源渠道名称
                userInfo: '',
                token: '',
				// 服务器时间
				sysTime: {
					currDate: new Date().getTime(),
					offset: 0
				},
				launchParams: {},
				loansType: 'jyd', //金裕贷jyd  车裕贷cyd
				isWhite: '',
				exit: false,
            },
            mutations: {
				// 是否为白名单
				setWhite (state, params) {
					state.isWhite = params;
					try {
						uni.setStorageSync('isWhite', params)
					} catch (e) {
						console.error(e)
					}
				}
            },
            getters: {
				getIsWhite: state => {
					if (state.isWhite) {
						return state.isWhite;
					} else {
						return uni.getStorageSync('isWhite') || '';
					}
				}
			},
            actions: {
                logout ({commit}) {
                	commit('isLogin', {
                		isLogin: false
                	});
                    commit('token', {
                    	token: ''
                    });
                },
            }
        },
		credit: {
			state: {
				creditInfo: {}, // 金裕贷信息,
				carCreditInfo: {}  // 车裕贷信息
			},
			mutations: {
				creditInfo (state, payload) {
					state.creditInfo = {...state.creditInfo, ...payload.creditInfo};
				},
				carCreditInfo (state, payload) {
					state.carCreditInfo = {...state.carCreditInfo, ...payload.carCreditInfo};
				}
			}
		}
    }
})

export default store;