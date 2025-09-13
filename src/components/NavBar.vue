<template>
	<nav class="nav">
		<router-link
			class="nav__link"
			to="/"
		>Главная</router-link>
		<router-link
			class="nav__link"
			to="/about-project"
		>Проект</router-link>
		<router-link
			class="nav__link"
			to="/about-me"
		>Обо мне</router-link>
	</nav>
</template>

<script>
export default {
	name: "NavBar"
};
</script>

<style scoped lang="scss">
@use "@/assets/styles/vars" as *;

.nav {
	// padding: 20px 0;
	display: flex;
	gap: 20px;

	&__link {
		text-decoration: none;
		color: $color-black;

		&:hover {
			text-decoration: underline;
			opacity: 0.8;
		}
	}
}
</style>
