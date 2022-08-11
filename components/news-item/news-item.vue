<template>
	<view class="newsitem">
		<view class="news_item" v-for="item in props.newsList" 
		:key="item.id" @click="navigator(item.id)">
			<img src="../../static/news.jpeg">
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<!-- formatDate(item.add_time,"hh:mm yyyy-MM-dd") -->
					<!-- <text>发表时间：{{formatDate(item.add_time,"hh:mm yyyy-MM-dd")}}</text> -->
					<text>发表时间：{{filt(item.add_time,"hh:mm yyyy-MM-dd")}}</text>
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { defineProps,computed } from "vue"
	import { formatDate } from "./news.js"
	
	const props = defineProps({
		newsList: {
			type: Array
		}
	})
	
	//使用计算属性过滤发表时间格式
	const filt = computed(() => {
		return formatDate;
	})
	// const filt = computed(() => {
	// 	return function(value) {
	// 		const nDate = new Date(value)
	// 		const year = nDate.getFullYear()
	// 		const month = nDate.getMonth().toString().padStart(2,0)
	// 		const day = nDate.getDay().toString().padStart(2,0)
	// 		return year+'-'+month+'-'+day
	// 	}
	// })

	//触发方法发送itemClick事件给news组件
	const emit = defineEmits(['itemClick'])
	function navigator(id) {
		emit('itemClick',id)
	}
</script>

<style lang="scss">
.news_item{
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $uni-shop-color;
		img{
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
		}
		.right{
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.tit{
				font-size: 30rpx;
			}
			.info{
				font-size: 24rpx;
				text:nth-child(2){
					margin-left: 30rpx;
				}
			}
		}
	}
</style>