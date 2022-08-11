import { myRequest } from '@/util/api.js'

export function getNews() {
	return myRequest({
		url:'/api/getnewslist'
	})
}

export function getImages(id) {
	return myRequest({
		url: '/api/getimages/' + id
	})
}