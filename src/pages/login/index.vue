<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<uni-popup ref="showNotice" type="bottom" :mask-click="false">
			<view class="tk">
				<button type="primary"
					class="loginButton" 
					open-type="getPhoneNumber" 
					@getphonenumber="getPhoneNumber">微信一键登录</button>
			</view>
			
		</uni-popup>
		
	</view>
</template>

<script>
	import WXBizDataCrypt from "@/common/WXBizDataCrypt.js"; 
	export default {
		data() {
			return {
				title: '智慧平安生活',
				code: '',
				taxUrl: ''
			}
		},
		onLoad() {
			this.login();
			console.log(this.$store.state.common)
			setTimeout(()=> {
				this.$refs.showNotice.open()
			}, 800)
		},
		methods: {
			getPhoneNumber(e) {
				console.error(e)
				// if (!e) return;
				this.$store.commit('savePhone', { phone: '2222' });
				if (e && e.detail.errMsg !== "getPhoneNumber:ok") {
					uni.showToast({
						title: '登录小程序需要您的授权',
						icon: 'none'
					})
					return;
				}
				this.user_encryptedData = e.detail.encryptedData;
				this.user_iv =  e.detail.iv;
				let pc = new WXBizDataCrypt('wx4f4bc4dec97d474b', this.session_key);  //wxXXXXXXX为你的小程序APPID  
				let data = pc.decryptData(e.detail.encryptedData , e.detail.iv);  
				this.$store.commit('savePhone', { phone: '2222' });
				uni.navigateTo({
					url: `/pages/webview/webview?url=${encodeURIComponent(this.taxUrl)}&title=${this.title}`
				});
				// var appId = 'wx4f4bc4dec97d474b'
				// var sessionKey = 'tiihtNczf5v6AKRyjwEUhQ=='
				// var encryptedData = 
				// 	'CiyLU1Aw2KjvrjMdj8YKliAjtP4gsMZM'+
				// 	'QmRzooG2xrDcvSnxIMXFufNstNGTyaGS'+
				// 	'9uT5geRa0W4oTOb1WT7fJlAC+oNPdbB+'+
				// 	'3hVbJSRgv+4lGOETKUQz6OYStslQ142d'+
				// 	'NCuabNPGBzlooOmB231qMM85d2/fV6Ch'+
				// 	'evvXvQP8Hkue1poOFtnEtpyxVLW1zAo6'+
				// 	'/1Xx1COxFvrc2d7UL/lmHInNlxuacJXw'+
				// 	'u0fjpXfz/YqYzBIBzD6WUfTIF9GRHpOn'+
				// 	'/Hz7saL8xz+W//FRAUid1OksQaQx4CMs'+
				// 	'8LOddcQhULW4ucetDf96JcR3g0gfRK4P'+
				// 	'C7E/r7Z6xNrXd2UIeorGj5Ef7b1pJAYB'+
				// 	'6Y5anaHqZ9J6nKEBvB4DnNLIVWSgARns'+
				// 	'/8wR2SiRS7MNACwTyrGvt9ts8p12PKFd'+
				// 	'lqYTopNHR1Vf7XjfhQlVsAJdNiKdYmYV'+
				// 	'oKlaRv85IfVunYzO0IKXsyl7JCUjCpoG'+
				// 	'20f0a04COwfneQAGGwd5oa+T8yO5hzuy'+
				// 	'Db/XcxxmK01EpqOyuxINew=='
				// var iv = 'r7BXXKkLb8qrSNn05n0qiA=='
				
				// var pc = new WXBizDataCrypt(appId, sessionKey)
				
				// var data = pc.decryptData(encryptedData , iv)
				
				// console.log('解密后 data: ', data)
				// let appid = "wxce185cd1da123456" //需替换
				//                 let secret = "25d0fe7478355910fc143ce6b1234567"  //需替换
				//                 //调用 wx.login 接口,获取code
				//                 uni.login({
				//                     provider: 'weixin',
				//                     success: res => {
				//                         let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret +
				//                             '&js_code=' +
				//                             res.code + '&grant_type=authorization_code';
				
				//                         //用 code 换取 session 和 openId
				//                         uni.request({
				//                             url: url, // 请求路径
				//                             success: res => { //成功res返回openid，session_key
				//                                 // console.log(res)
				//                                 //解密用户信息
				//                                 let pc = new WXBizDataCrypt(appid, res.data.session_key);
				//                                 let data = pc.decryptData(PhoneNumber.detail.encryptedData, PhoneNumber.detail.iv);
				//                                 // //data就是最终解密的用户信息 
				//                                 // countryCode: "86"  区号
				//                                 // phoneNumber: "15634123456"  用户绑定的手机号（国外手机号会有区号）
				//                                 // purePhoneNumber: "15634123456"  没有区号的手机号
				//                                 // watermark:
				//                                 //         appid: "wxce185cd1da123456"
				//                                 //         timestamp: 1607906868
				//                                 console.log(data)
				//                             },
				//                             fail: err => {
				//                                 console.log(err)
				//                             }
				//                         }) 
				//                     }
				//                 })
				// let that = this;
				// console.log(e.detail)
				// // 不允许授权
				// if (e.detail.errMsg !== "getPhoneNumber:ok") {
				// 	return;
				// }
				// let encryptedData = e.detail.encryptedData
				// let iv = e.detail.iv
				// // 检查登录态是否过期
				// uni.checkSession({
				// 	success(res) {
				// 		that.$api.request.wxlogin({
				// 			code: that.code,
				// 			encryptedData: encryptedData,
				// 			iv: iv
				// 		}, res => {
				// 			console.log(res)
				// 			uni.setStorageSync("x-access-token", res.result.token)
				// 			uni.setStorageSync("userId", res.result.userInfo.id)
				// 			// 进入首页
				// 			uni.switchTab({
				// 				url: '/pages/educational/educational'
				// 			})
				// 		});
				// 	},
				// 	fail(err) {
				// 		uni.login({
				// 			provider: 'weixin',
				// 			success: res => {
				// 				that.code = res.code
				// 				console.log(that.code)
				// 			}
				// 		})
				// 		that.$api.request.wxlogin({
				// 			code: that.code,
				// 			encryptedData: encryptedData,
				// 			iv: iv
				// 		}, res => {
				// 			console.log(res)
				// 			uni.setStorageSync("x-access-token", res.result.token)
				// 			uni.setStorageSync("userId", res.result.userInfo.id)
				// 			// 进入首页
				// 			uni.switchTab({
				// 				url: '/pages/educational/educational'
				// 			})
				// 		});
				// 	}
				// })
			},
			login () {
				uni.login({
					provider: "weixin",
					success: (res) => {
						console.log(res, '登录成功')
						// console.error(this.$http.post, 'wdwdw')
						if (res.code) {
							this.code = res.code;
							uni.request({  
								// 后端获取openId的接口
								url: 'https://api.weixin.qq.com/sns/jscode2session',  
								method:'POST',  
								data: {  
									appid: 'wx********',        //你的小程序的APPID  
									secret: 'xxxxxxxxxx',       //你的小程序的secret,  
									code: res.code              //wx.login 登录成功后的code  
								},  
								success: (cts) => {  
									// 换取成功后 暂存这些数据 留作后续操作  
									this.openid = cts.data.openid;     //openid 用户唯一标识  
									this.unionid = cts.data.unionid || '';    //unionid 开放平台唯一标识  
									this.session_key = cts.data.session_key || '';     //session_key  会话密钥  
									// this.getPhoneNumber();
								}  
							});  
						} else {
							uni.showModal({
								cancelText: false,
								content: res.errMsg
							})
							console.log('登录失败！' + res.errMsg)  
						}
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.tk {
		width: 100%;
		height: 200rpx;
		background: #fff;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		.loginButton {
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}
	.notice-area{
		width: 532rpx;
		background-color: #fff;
		text-align: center;
		padding: 48rpx;
		border-radius: 16rpx;
		.dialog-title{
			font-size: 32rpx;
			color: #333333;
		}
		.dialog-icon{
			margin: 20rpx 0 16rpx;
			>image{
				width: 188rpx;
				height: 190rpx;
			}
		}
		.dialog-content{
			font-size: 28rpx;
			color: #666666;
		}
		.btn-wrap{
			margin-top: 24rpx;
			button{
				border-radius: 10000rpx;
				margin-bottom: 24rpx;
			}
		}
	}
</style>
