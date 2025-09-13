<template>
	<MyHeader />
	<main class="main">
		<router-view />
	</main>
	<MyFooter />
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import MyFooter from '@/components/MyFooter.vue';

export default {
	name: "App",
	components: {
		MyHeader,
		MyFooter,
	}
};
</script>

<style scoped lang="scss"></style>
