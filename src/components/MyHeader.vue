<template>
	<header class="header">
		<NavBar />
	</header>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
	name: "MyHeader",
	components: {
		NavBar,
	}
};
</script>

<style scoped lang="scss">
.header {
	padding: 20px;
	display: flex;
	justify-content: center;
}
</style>
