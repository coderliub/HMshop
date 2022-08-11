<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in props.goods" 
		:key="item.id" @click="navigator(item.id)">
			<img src="/static/12.png">
			<view class="price">
				<text>￥{{item.sell_price}}</text>
				<text>￥{{item.market_price}}</text>
			</view>
			<view class="name">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		goods: {
			type: Array
		}
	})
	
	const emit = defineEmits(['goodsItemClick'])
	function navigator(id) {
		emit('goodsItemClick',id)
	}
</script>

<style lang="scss">
.goods_list {
	padding: 0 15rpx;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.goods_item {
		background: #fff;
		width: 355rpx;
		margin: 10rpx 0;
		padding: 15rpx;
		box-sizing: border-box;
		img{
			width: 330rpx;
			
			display: block;
			margin: auto;
		}
		.price {
			color: $uni-shop-color;
			font-size: 36rpx;
			text:nth-child(2){
				color: #ccc;
				font-size: 28rpx;
				margin-left: 7rpx;
				text-decoration: line-through;
			}
		}
		
		.name {
			font-size: 28rpx;
			line-height: 50rpx;
			padding-bottom: 15rpx;
			padding-top: 10rpx;
		}
	}
}
</style>