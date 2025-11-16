<template>
	<nav class="nav">
		<router-link
			v-for="link in navLinks"
			:key="link.to"
			:to="link.to"
			class="nav__link"
			:class="{ 'nav__link_active': $route.path === link.to }"
			@click="changeRoute(link.to)"
		>
			{{ link.name }}
		</router-link>
	</nav>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navLinks = [
	{ to: '/', name: 'Главная' },
	{ to: '/favorites', name: 'Избранное' },
	{ to: '/about-project', name: 'Проект' },
	{ to: '/about-me', name: 'Обо мне' },
	{ to: '/ui', name: 'UI' },
	{ to: '/sandbox', name: 'Песочница' },
];

const changeRoute = (path) => {
	router.push(path);
};
</script>

<style scoped lang="scss">
@use "@/assets/styles/vars" as *;
@use "@/assets/styles/mixins" as *;

.nav {
	display: flex;
	gap: 20px;

	&__link {
		@include flex-center;
		padding: 10px 20px;
		border-radius: 5px;

		text-decoration: none;
		color: $color-black;
		background-color: $color-grey;

		transition: $transition-fast;

		&:hover {
			opacity: 0.8;
		}

		&_active {
			color: $color-white;
			background-color: $color-primary;
		}
	}
}
</style>
