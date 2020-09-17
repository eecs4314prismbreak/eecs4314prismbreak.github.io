import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Assignment1 from '../views/Assignment1.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/assignment1',
		name: 'Assignment1',
		component: Assignment1
	}
];

const router = new VueRouter({
	routes
});

export default router;
