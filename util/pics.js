import { myRequest } from '@/util/api.js'

export function getPicsCate() {
	return myRequest({
		url:'/api/getimgcategory'
	})
}

export function getImages(id) {
	return myRequest({
		url: '/api/getimages/' + id
	})
}