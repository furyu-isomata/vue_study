import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './components/pages/Top';
import Article from './components/pages/Article'
import Category from './components/pages/Category';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: Top
	},
	{
		path: '/articles/:category',
		component:Category
	},
	{
		path: '/article/:articleId',
		component: Article,
	}
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

export default router;