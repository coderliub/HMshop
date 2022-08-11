<template>
	<view class="goods_detail">
		<swiper indicator-dots>
			<swiper-item v-for="(item,index) in state.swipers" :key="index">
				<image src="../../static/12.png"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<script setup>
	import { reactive,onMounted,defineProps,getCurrentInstance } from "vue"
	
	//获取从其他组件传进来的id
	const props = defineProps({
		id: String
	})
	console.log(props.id);
	const state = reactive({
		swipers: []
	});
	const {proxy} = getCurrentInstance();	
	onMounted(async () => {
		const res = await proxy.$myRequest({
			url: '/api/getthumimages/' + props.id
		})
		state.swipers = res.data.message
	})
</script>

<style lang="scss">
.goods_detail{
	swiper{
		height: 700rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
}	
</style>
