<template>
	<div class="about-project">
		<div class="container">
			<h1 class="about-project__title">О проекте</h1>
		</div>

		<section class="about-project__section section section_blue">
			<div class="container">
				<div class="section__inner">
					<div class="card card_theme-primary">
						<div class="card__title-wrapper">
							<h2 class="card__title">Искусственный интеллект</h2>
							<p class="card__text">Будущее уже наступило: как ИИ меняет нашу жизнь</p>
						</div>

						<img
							class="card__image"
							src="@/assets/images/section/image2.png"
							alt="изображение в карточке"
						>
					</div>

					<div class="card card_theme-secondary">
						<div class="card__title-wrapper">
							<h2 class="card__title">Космические путешествия</h2>
							<p class="card__text">Первые туристы на Марсе: когда ждать?</p>
						</div>

						<img
							class="card__image"
							src="@/assets/images/section/image1.png"
							alt="изображение в карточке"
						>
					</div>

					<div class="card card_theme-ligth">
						<div class="card__title-wrapper">
							<h2 class="card__title">Устойчивое развитие</h2>
							<p class="card__text">Зеленые технологии для спасения планеты</p>
						</div>

						<img
							class="card__image"
							src="@/assets/images/section/image3.png"
							alt="изображение в карточке"
						>
					</div>

					<div class="card card_theme-dark">
						<div class="card__title-wrapper">
							<h2 class="card__title">Цифровая трансформация</h2>
							<p class="card__text">Как блокчейн меняет финансовую систему</p>
						</div>

						<img
							class="card__image"
							src="@/assets/images/section/image4.png"
							alt="изображение в карточке"
						>
					</div>

					<div class="card">
						<div class="card__title-wrapper">
							<h2 class="card__title">Биотехнологии</h2>
							<p class="card__text">Генная инженерия: новые возможности медицины</p>
						</div>

						<img
							class="card__image"
							src="@/assets/images/section/image5.png"
							alt="изображение в карточке"
						>
					</div>
				</div>
			</div>
		</section>
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
	flex-direction: column;
	justify-content: center;
	gap: 30px;

	&__title {
		text-align: center;
	}

	&__section {
		display: flex;
		justify-content: center;
	}
}
</style>
