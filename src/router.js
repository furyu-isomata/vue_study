import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './components/pages/Top';
import ArticleList from './components/pages/ArticleList';
import Category from './components/pages/Category';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: Top
	},
	{
		path: '/articles',
		component:ArticleList
	},
	{
		path: '/articles/:category',
		component:Category
	}

];

const router = new VueRouter({
	routes,
	mode: 'history'
});

export default new VueRouter({routes});