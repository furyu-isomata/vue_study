import Vue from 'vue';
import VueFaker from '../node_modules/vue-faker';

Vue.use(VueFaker);

const length = 50;
const db = {
	articleList: [],
};

for (let i = 0; i < length; i += 1) {
	let array = ['diet','beauty'];
	db.articleList.push({
		id: i + 1,
		category: array[Math.floor(Math.random() * array.length)],
		date: Vue.faker().date.future(),
		title: Vue.faker().name.title(),
		caption: Vue.faker().lorem.sentence(),
		detail: Vue.faker().lorem.paragraphs(),
		img: Vue.faker().image.image(),
		author: Vue.faker().name.findName(),

	});
}

export default db;