<template>
	<MyHeader />
	<main class="main">
		<router-view />
	</main>
	<MyFooter />
</template>

<script setup>
import MyHeader from '@/components/MyHeader.vue';
import MyFooter from '@/components/MyFooter.vue';
</script>

<style scoped lang="scss"></style>
