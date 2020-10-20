<template>
	<view class="transcript">
		<view class="box1"></view>
		<view class="box2"></view>
		<view class="box3"></view>
		<FooterBox />
	</view>
</template>

<script>
	import FooterBox from '../../components/Footer-box/Footer-box.vue'
	import util from '../../util/event_library.js'
	export default {
		data() {
			return {
				timer: ''
			}
		},
		components: {
			FooterBox
		},
		onLoad() {
			this.initData()
		},
		methods: {
			initData() {
				console.log(util.aa())
			}
		},
		mounted() {
			// this.timer = setInterval(this.initData, 1000)
		},
		beforeDestroy() {
			clearInterval(this.timer)
		}
	}
</script>

<style lang="scss">
	.transcript {
		.box1 {
			width: 690rpx;
			height: 500rpx;
			background-color: #4CD964;
			border-radius: 10rpx;
		}

		.box2 {
			width: 690rpx;
			height: 200rpx;
			background-color: #4CD964;
			border-radius: 10rpx;
			margin: 10rpx 0;
		}

		.box3 {
			width: 690rpx;
			height: 300rpx;
			background-color: #4CD964;
			border-radius: 10rpx;
			margin-bottom: 10rpx;
		}
	}
</style>
