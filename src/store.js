import Vue from 'vue'
import Vuex from 'vuex'
import db from './data';

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0,
		articleList: db.articleList,
	}
});

export default store
