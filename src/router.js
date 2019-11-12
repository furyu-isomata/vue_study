import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './components/pages/Top';
import Detail from './components/pages/Detail'

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: Top
	},
	{
		path: '/articles/:category',
		component:Top,
		props: true
	},
	{
		path: '/article/:articleId',
		component: Detail,
		props: true
	}
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

export default router;