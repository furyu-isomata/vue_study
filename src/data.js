import Vue from 'vue';
import VueFaker from '../node_modules/vue-faker';

Vue.use(VueFaker);

const length = 50;
const db = {
	ArticleList: [],
};

for (let i = 0; i < length; i += 1) {
	let array = ['diet','beauty'];
	db.ArticleList.push({
		id: i + 1,
		category: array[Math.floor(Math.random() * array.length)],
		date: Vue.faker().date.future(),
		title: Vue.faker().name.title(),
		detail: Vue.faker().lorem.words(),
		img: Vue.faker().image.image(),
		author: Vue.faker().name.findName(),

	});
}

export default db;