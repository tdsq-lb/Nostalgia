<template>
	<view class="checkpoint">
		<DialogBox v-if="visible" @handleCancel="handleCancel" />
		<view class="box">
			<button type="default" style="background-color:#f5a623;" @click="showModal">下本</button>
		</view>
		<view class="box">
			<button type="default" style="background-color:#f5a623;" @click="showModal">下本</button>
		</view>
		<view class="box">
			<button type="default" style="background-color:#f5a623;" @click="showModal">下本</button>
		</view>
		<FooterBox />
	</view>
</template>

<script>
	import DialogBox from '../../components/Dialog-box/Dialog-box.vue'
	import FooterBox from '../../components/Footer-box/Footer-box.vue'
	export default {
		data() {
			return {
				visible: false
			}
		},
		components: {
			DialogBox,
			FooterBox
		},
		methods: {
			showModal() {
				this.visible = true
			},
			handleCancel() {
				this.visible = false
			}
		}
	}
</script>

<style lang="scss">
	.checkpoint {
		.box {
			width: 690rpx;
			height: 300rpx;
			background-color: #4CD964;
			border-radius: 10rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 20rpx;
		}
	}
</style>
