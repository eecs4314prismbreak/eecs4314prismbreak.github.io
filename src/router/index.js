import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Assignment1 from '../views/Assignment1.vue';
import Assignment2 from '../views/Assignment2.vue';
import Assignment3 from '../views/Assignment3.vue';
import Assignment4 from '../views/Assignment4.vue';

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
	},
	{
		path: '/assignment2',
		name: 'Assignment2',
		component: Assignment2
	},
	{
		path: '/assignment3',
		name: 'Assignment3',
		component: Assignment3
	},
	{
		path: '/assignment4',
		name: 'Assignment4',
		component: Assignment4
	}
];

const router = new VueRouter({
	routes
});

export default router;
