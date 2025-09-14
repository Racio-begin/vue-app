import '@/assets/styles/main.scss';

import components from '@/components/UI';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';

// import { createPinia } from 'pinia'

const router = createRouter({
	routes: [
		{
			path: '/',
			component: () => import('@/pages/HomePage.vue'),
			// Ленивая загрузка
		},
		{
			path: '/about-me',
			component: () => import('@/pages/AboutMe.vue'),
		},
		{
			path: '/about-project',
			component: () => import('@/pages/AboutProject.vue'),
		},
	],
	history: createWebHistory(import.meta.env.VITE_BASE || '/')
});

const app = createApp(App);

components.forEach(component => {
	app.component(component.name, component);
});

// app.use(createPinia())
app.use(router);

app.mount('#app');
