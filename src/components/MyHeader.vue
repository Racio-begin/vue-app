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
@use "@/assets/styles/vars" as *;

.header {
	padding: 20px;
	border-bottom: 2px solid $color-primary;
	display: flex;
	justify-content: center;
}
</style>
