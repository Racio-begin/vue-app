<template>
	<header class="header">
		<NavBar />
	</header>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
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
