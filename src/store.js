import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0,
		ArticleList: [
			{
				"id": "1",
				"category": "beauty",
				"date": "20190801",
				"title": "記事1",
				"detail": "記事1。ほげほげふがふほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがが",
				"img": "http://placehold.jp/3d4070/ffffff/100x100.png?text=%E8%A8%98%E4%BA%8B1",
				"author": "A子"
			},
			{
				"id": "2",
				"category": "diet",
				"date": "20190802",
				"title": "記事2",
				"detail": "記事2。ほげほほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがげふがふが",
				"img": "http://placehold.jp/3d4070/ffffff/100x100.png?text=%E8%A8%98%E4%BA%8B2",
				"author": "B子"
			},
			{
				"id": "3",
				"category": "beauty",
				"date": "20190803",
				"title": "記事3",
				"detail": "記事3。ほげほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがほげふがふが",
				"img": "http://placehold.jp/3d4070/ffffff/100x100.png?text=%E8%A8%98%E4%BA%8B3",
				"author": "C子"
			},
			{
				"id": "4",
				"category": "diet",
				"date": "20190804",
				"title": "記事4",
				"detail": "記事4。ほげほほげほげふがふがほげほげふがふがほげほげふがふがほげほげふがふがげふがふが",
				"img": "http://placehold.jp/3d4070/ffffff/100x100.png?text=%E8%A8%98%E4%BA%8B4",
				"author": "D子"
			},			{
				"id": "5",
				"category": "other",
				"date": "20190909",
				"title": "記事5",
				"detail": "記事5。ほげほげふがふが",
				"img": "http://placehold.jp/3d4070/ffffff/100x100.png?text=%E8%A8%98%E4%BA%8B5",
				"author": "D子"
			},
	},
	mutations: {
		increment(state) {
			state.count++
		}

export default store