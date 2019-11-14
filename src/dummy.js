import Vue from 'vue';
Vue.use(require('vue-faker'), {locale: 'ja'});

const length = 50;
const db = {
	articleList: [],
};

for (let i = 0; i < length; i += 1) {
	let array = ['1','2', '3'];
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