import '@/assets/styles/main.scss';

import components from '@/components/UI';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';

// import HomePage from '@/pages/HomePage.vue';
// import AboutPage from '@/pages/AboutPage.vue';
// import AboutProject from '@/pages/AboutProject.vue';

// import { createPinia } from 'pinia'

const router = createRouter({
	routes: [
		{
			path: '/',
			component: () => import('@/pages/HomePage.vue'),
			// Ленивая загрузка
		},
		{
			path: '/about',
			component: () => import('@/pages/AboutPage.vue'),
		},
		{
			path: '/about-project',
			component: () => import('@/pages/AboutProject.vue'),
		},
	],
	history: createWebHistory()
});

const app = createApp(App);

components.forEach(component => {
	app.component(component.name, component);
});

// app.use(createPinia())
app.use(router);

app.mount('#app');
