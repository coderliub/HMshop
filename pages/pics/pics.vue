<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view :class="actives(index)" 
			v-for="(item,index) in state.cates" :key="item.id"
			@click="leftClickHandle(index,item.id)">
			{{item.title}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in state.secondData" 
			:key="item.id">
				<img src="../../static/imgs.jpg" 
				@click="previewImg(item.img_url)">
				<text>{{item.title}}</text>
			</view>
			<text v-if="state.secondData.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script setup>
	import { reactive,onMounted,computed} from 'vue'
	import { getPicsCate,getImages } from '../../util/pics.js'
	
	//获取分类数据
	const state = reactive({
		cates: [],
		active: 0,
		secondData: [],
	})
	onMounted(getPicsCate().then(res => {
		state.cates = res.data.message
	}))
	
	const actives = computed(() => {
		return function(index){
			return state.active === index ? 'active' : ''
		} 
	})
	
	//点击控制高亮,并获取相应数据	
	function leftClickHandle(index,id){
		state.active = index;
		getImages(id).then(res => {
			console.log('成功获取数据',index);
			state.secondData = res.data.message;
		})
	}
	
	function previewImg(current) {
		const urls = state.secondData.map(item => {
			// return item.img_url
			return "../../static/imgs.jpg"
		})
		uni.previewImage({
			current,
			urls
		})
	}
	
	//进来时自动触发一次点击事件，获取相应数据
	setTimeout(() => {
		leftClickHandle(state.active,state.cates[state.active].id)
	},500)
</script>

<style lang="scss">
page{
	height: 100%;
}
.pics{
	height: 100%;
	display: flex;
	.left{
		width: 180rpx;
		height: 100%;
		view{
			height: 60px;
			line-height: 60px;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			border-top: 1px solid #eee;
		}
		.active{
			background: $uni-shop-color;
			color: #fff;
		}
	}
	.right{
		height: 100%;
		width: 520rpx;
		margin: 10rpx auto;
		.item{
			img{
				width: 520rpx;
				height: 520rpx;
				border-radius: 5px;
			}
			text{
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
	}
}
</style>
