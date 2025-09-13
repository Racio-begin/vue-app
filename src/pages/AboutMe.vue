<template>
	<main class="about-me">
		<div class="container">
			<h1 class="about-me__title">Обо мне</h1>

			<div class="about-me__form">
				<FeedbackForm />
			</div>
		</div>
	</main>
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
		// margin: 0 auto 20px;
		text-align: center;
	}

	&__form {
		margin: 60px 0 0;
		display: flex;
		justify-content: center;
	}
}
</style>
