<template>
	<div class="about-project">
		<div class="container">
			<h1 class="about-project__title">О проекте</h1>

			<div class="about-project__form"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "AboutProject"
};
</script>

<style scoped lang="scss">
.about-project {
	display: flex;
	justify-content: center;

	&__title {
		text-align: center;
	}
}
</style>
