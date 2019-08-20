import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './components/pages/Top';
import Beauty from './components/pages/Beauty';
import Diet from './components/pages/Diet';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: Top
	},
	{
		path: '/beauty',
		component:Beauty
	},
	{
		path: '/diet',
		component: Diet
	}
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

export default new VueRouter({routes});