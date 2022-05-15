<template>
	<view>
		<web-view :src="url" @message="message"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: ''
			}
		},
		methods: {
			message () {
				
			}
		},
		onLoad ({ url }) {
			this.url = decodeURIComponent(url);
		}
	}
</script>

<style>

</style>
