<template>
	<view>
		<view class="Dialog-box" @click="handleCancel"></view>
		<view class="content">
			<button type="default" style="background-color:#f5a623;" @click="navigatorHander">开始</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			handleCancel() {
				this.$emit("handleCancel")
			},
			navigatorHander() {
				uni.navigateTo({
					url: "../../pages/transcript/transcript"
				})
			}
		},
	}
</script>

<style lang="scss">
	.Dialog-box {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 20;
	}

	.content {
		width: 60%;
		height: 600rpx;
		background-color: #4a90e2;
		position: fixed;
		z-index: 999;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
