<template>
	<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
</template>

<script setup>
	import { ref } from 'vue'
	const navs = ref([
			{
				icon: 'iconfont icon-ziyuan',
				title: '黑马超市',
				path: '/pages/goods/goods'
			},
			{
				icon: 'iconfont icon-guanyuwomen',
				title: '联系我们',
				path: '/pages/contact/contact'
			},
			{
				icon: 'iconfont icon-tupian',
				title: '社区图片',
				path: '/pages/pics/pics'
			},
			{
				icon: 'iconfont icon-shipin',
				title: '学习视频',
				path: '/pages/videos/videos'
			}
				]);
	
	//点击跳转
 	function navItemClick(url) {
		uni.navigateTo({
			url
		})
	}
	
</script>

<style lang="scss">
	.nav {
		display: flex;
		.nav_item {
			width: 25%;
			text-align: center;
			view{
				width: 120rpx;
				height: 120rpx;
				background: $uni-shop-color;
				border-radius: 60rpx;
				margin: 10px auto;
				line-height: 120rpx;
				color: #fff;
				font-size: 50rpx;
			}
			.icon-tupian{
				font-size: 45rpx;
			}
			text{
				font-size: 30rpx;
			}
		}
	}
</style>