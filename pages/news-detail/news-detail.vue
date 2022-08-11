<template>
	<view class="news-detail">
		<text class="title">{{detail.title}}</text>
		<view class="info">
			<text>发表时间：{{formatDate(detail.add_time,"hh:mm yyyy-MM-dd")}}</text>
			<text>浏览：{{detail.click}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="detail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	import { formatDate } from "@/components/news-item/news.js"
	export default {
		data() {
			return {
				ids: 0,
				detail: {}
			}
		},
		methods: {
			async getNewsDetail () {
				const res = await this.$myRequest({
					url: '/api/getnew/' + this.ids
				})
				this.detail = res.data.message[0]
			}
		},
		onLoad(options){
			this.ids = options.id;
			this.getNewsDetail()
		},
		computed: {
			formatDate:function(){
				return formatDate;
			}
		}
	}

</script>

<script setup>
	import { defineProps } from "vue"
	
	const props = defineProps({
		id: String
	})
	console.log(props.id)
</script>

<style lang="scss">
.news-detail{
	font-size: 30rpx;
	padding: 0 20rpx;
	.title{
		text-align: center;
		width: 710rpx;
		display: block;
		margin:20rpx 0;
	}
	.info{
		display: flex;
		justify-content: space-between;
	}
}
</style>
