<template>
	<div class="about-me">
		<div class="container">
			<h1 class="about-me__title">Обо мне</h1>

			<div class="about-me__form">
				<FeedbackForm />
			</div>
		</div>
	</div>
</template>

<script>
import FeedbackForm from '@/components/FeedbackForm.vue';

export default {
	name: "AboutMe",
	components: {
		FeedbackForm,
	},
};
</script>

<style scoped lang="scss">
.about-me {
	display: flex;
	justify-content: center;

	&__title {
		text-align: center;
	}

	&__form {
		margin: 60px 0 0;
		display: flex;
		justify-content: center;
	}
}
</style>
