<template>
	<view class="transcript">
		<view class="box1"></view>

		<scroll-view :scroll-top="scrollTop" @scroll="scroll" class="box2" scroll-y>
			<view v-for="(item,index) in data" :key="index">{{item}}</view>
		</scroll-view>

		<view class="box3"></view>
		<FooterBox />
	</view>
</template>

<script>
	import FooterBox from '../../components/Footer-box/Footer-box.vue'
	import util from '../../util/event_library.js'
	import {
		event
	} from '../../util/event.js'
	export default {
		data() {
			return {
				timer: '',
				data: [],
				scrollTop: 0
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
				// console.log(Math.random()*1000+2000)
				console.log(util.handleRandom())
				this.data.push(util.handleRandom())
				let len = this.data.length
				this.scrollTop = 1200 * len
			},
			scroll(e) {
				// this.scrollTop = e.detail.scrollTop
				// console.log(e,'1111111111111111111111111111')
			}
		},
		mounted() {
			this.timer = setInterval(this.initData, Math.random() * 1000 + 2000)
			console.log(this.data)
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
			padding: 20rpx;
			box-sizing: border-box;
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
