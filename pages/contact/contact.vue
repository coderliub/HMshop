<template>
	<view class="contact">
		<img class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" alt="">
		<view class="info">
			<view @click="phone">联系电话：400-618-****（点击拨打）</view>
			<view>校区地址：浙江省杭州市下沙经济开发区4号大街187号......</view>
		</view>
		<map class="map" :longitude="state.longitude" :scale="state.scale" :latitude="state.latitude" :markers="state.markers"></map>
	</view>
</template>

<script setup>
	import { ref,reactive } from 'vue'
	const state = reactive({
		longitude: 120.363172,
		latitude: 30.312212,
		scale: 13,
		markers:[
			{
				longitude: 120.363172,
				latitude: 30.312212,
				iconPath: '../../static/hmlogo.png',
				width: 30,
				height: 30
			}
		]
	})
	
	function phone() {
				uni.makePhoneCall({
					phoneNumber: '400-618-9090'
				})
			}
</script>

<style lang="scss">
.contact{
	.img{
		width: 750rpx;
		height: 320rpx;
	}
	.info{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view{
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
	}
	
	.map{
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
