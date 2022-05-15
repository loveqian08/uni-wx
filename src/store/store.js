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
				phone: '', // 手机
            },
            mutations: {
				// 是否为白名单
				savePhone (state, payload) {
					state.phone = payload.phone;
					try {
						uni.setStorageSync('phone', payload.phone)
					} catch (e) {
						console.error(e)
					}
				}
            },
            getters: {
				getPhone: state => {
					if (state.phone) {
						return state.phone;
					} else {
						return uni.getStorageSync('phone') || '';
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