import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import pager from './pager'

Vue.config.productionTip = false

new Vue({
    router,
	store,
	pager,
    render: h => h(App),
}).$mount('#app')
