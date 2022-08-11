import { myRequest } from '@/util/api.js'

//获取轮播图
export function getHomeLunBo() {
	return myRequest({
		url:'/api/getlunbo'
	})
}

//获取商品数据
export function getHomeGoods() {
	return myRequest({
		url:'/api/getgoods?pageindex=1',
	})
}

export function getHomeGoodsx(pageindex) {
	return myRequest({
		url:'/api/getgoods?pageindex=' + pageindex.value,
		params:{ pageindex }
	})
}