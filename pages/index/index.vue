<template>
	<view class="home">
		<button type="default" style="background-color:#f5a623;" @click="navigatorHander">开始</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			navigatorHander() {
				uni.navigateTo({
					url: '../checkpoint/checkpoint'
				})
			}
		}
	}
</script>

<style lang="scss">
	

	.home {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
