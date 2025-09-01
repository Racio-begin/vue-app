<template>
	<MyHeader />
	<router-view />
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';

export default {
	name: "App",
	components: {
		MyHeader,
	}
};
</script>

<style scoped lang="scss"></style>
