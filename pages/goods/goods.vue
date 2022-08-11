<template>
	<view class="goods">
		<goodslist @goodsItemClick="goGoodsDetail" :goods="state.goods"></goodslist>
		<view class="show" v-show="state.flag">
			----- 上拉触底了 -----
		</view>
	</view>
</template>

<script setup>
	import goodslist from "@/components/goods-list/goods-list.vue"
	import { ref,reactive,onMounted,getCurrentInstance } from "vue"
	import { getHomeGoodsx } from '../../util/home.js'
	import { onReachBottom,onPullDownRefresh } from '@dcloudio/uni-app'
	
	//获取商品列表数据
	const pageindex = ref(1);
	const {proxy} = getCurrentInstance()
	const state = reactive({
		goods: [],
		flag: false
	});
	//封装一个多次获取商品数据的方法
	function getGoods(pageindex,callBack) {
		getHomeGoodsx(pageindex,callBack).then(res => {
			state.goods.push(...res.data.message) 
			pageindex.value += 1;
			//判断第二个参数没值就不执行
			callBack && callBack()
			})
	}
	
	// getHomeGoodsx(pageindex).then(res => {
	// 	state.goods.push(...res.data.message) 
	// 	pageindex.value += 1;
	// 	// callBack && callBack()
	// 	})
	//页面挂载了就开始请求数据
	onMounted(() => {getGoods(pageindex)});
	
	//上拉加载更多商品
	onReachBottom(() => {
		console.log('上拉加载更多')
		if(state.goods.length < (pageindex.value-1) * 10){
			return state.flag = true;
		}
		getGoods(pageindex);
	})
	
	//下拉刷新商品
	onPullDownRefresh(() => {
		console.log('下拉刷新了');
		pageindex.value = 1;
		state.goods = [];
		state.flag = false;
		setTimeout(() => {
			getGoods(pageindex,() => {
				uni.stopPullDownRefresh()
			})
		},1000)
	})
	
	function goGoodsDetail(id) {
		uni.navigateTo({
			url: '/pages/goods-detail/goods-detail?id=' + id
		})
	}
	
</script>

<style lang="scss" scoped>
.goods{
		background: #eee;;
	}
	.show {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		// background: #fff;
		font-size: 28rpx;
	}
</style>
