<template>
	<view class="home">
		<!-- 轮播图区 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<img :src="item.img" alt="">
			</swiper-item>
		</swiper>
		<!-- 导航区 -->
		<Nav/>
		<!-- 推荐商品区 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goodslist :goods="goods" @goodsItemClick="goGoodsDetail"></goodslist>
		</view>
		
	</view>	
</template>

<script setup>
	import { ref,onMounted } from "vue";
	import Nav from "@/pages/index/childs/nav.vue";
	import goodslist from "@/components/goods-list/goods-list.vue";
	import { getHomeLunBo,getHomeGoods } from '@/util/home.js'

	//获取轮播图数据
	const swipers = ref()		
	onMounted(getHomeLunBo().then(res => {
		swipers.value = res.data.message;
	}))
		
		// 	console.log('获取轮播图的数据');
		// 	uni.request({
		// 		url: 'http://localhost:8082/api/getlunbo',
		// 		success:res => {
		// 			console.log(res);
		// 			if(res.data.status !== 0){
		// 				return uni.showToast({
		// 					title: "获取参数失败",
		// 				})
		// 			}
		// 			this.swipers = res.data.message
		// 		}
		// 	})
	//获取热门商品列表数据
	const goods = ref();
	onMounted(getHomeGoods().then(res => {
		goods.value = res.data.message;
	}))
	
	// const {proxy} = getCurrentInstance()
	// onMounted(async () => {
	// 		const res = await proxy.$myRequest({
	// 			url: '/api/getgoods?pageindex=1',
	// 		})
	// 		goods.value = res.data.message;
	// 	})
	
	//跳转到对应商品的详情页
	function goGoodsDetail(id) {
		uni.navigateTo({
			url: '/pages/goods-detail/goods-detail?id=' + id
		})
	}	
			 

</script>

<style lang='scss'>
	swiper {
		width: 750rpx;
		height: 380rpx;
	img {
		height: 100%;
		width: 100%;
	}	
}

.hot_goods {
	background: #eee;
	overflow: hidden;
	margin-top: 20rpx ;
	.tit{
		height: 100rpx;
		line-height: 100rpx;
		color: $uni-shop-color;
		text-align: center;
		letter-spacing: 40rpx;
		background: #fff;
		margin: 10rpx 0 0 0;
	}
	
}

	
</style>
