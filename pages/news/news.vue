<template>
	<view class="news">
		<news-item :newsList="state.newsList" @itemClick="goDetail"></news-item>
	</view>
</template>

<script setup>
	import { onMounted,reactive } from 'vue'
	import { getNews } from '@/util/news.js'
	import newsitem from "@/components/news-item/news-item.vue"
	
	const state = reactive({
		newsList: []
	})
	onMounted(getNews().then(res => {
		state.newsList = res.data.message
	}))
	
	function goDetail(id) {
		uni.navigateTo({
			url: '/pages/news-detail/news-detail?id=' + id
		})
	}
</script>

<style lang="scss">
.news {
	
}
</style>
