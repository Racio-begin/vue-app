import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';

import App from '@/App.vue';

import componentsPlugin from '@/plugins/components';

import '@/assets/styles/main.scss';

const router = createRouter({
	routes: [
		{
			path: '/',
			component: () => import('@/pages/HomePage.vue'),
			// Ленивая загрузка
		},
		{
			path: '/favorites',
			component: () => import('@/pages/FavoritesPage.vue'),
		},
		{
			path: '/about-me',
			component: () => import('@/pages/AboutMe.vue'),
		},
		{
			path: '/about-project',
			component: () => import('@/pages/AboutProject.vue'),
		},
		{
			path: '/ui',
			component: () => import('@/pages/UIPage.vue'),
		},
		{
			path: '/sandbox',
			component: () => import('@/pages/SandboxPage.vue'),
		},
		{
			path: '/:pathMatch(.*)*',
			component: () => import('@/pages/NotFound.vue'),
		},
	],
	history: createWebHistory(import.meta.env.VITE_BASE || '/')
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(componentsPlugin);

app.mount('#app');
