<template>
	<div class="ui">
		<h1 class="ui__title">UI</h1>

		<div class="ui__section">
			<div class="container">
				<div class="ui__section-inner">
					<h2>Кнопки</h2>

					<section class="ui__buttons">
						<ButtonItem name="Кнопка обыкновенная" />

						<ButtonItem
							name="Кнопка второстепенная"
							theme="secondary"
						/>

						<ButtonItem
							name="Кнопка грузительная"
							loading
						/>

						<ButtonItem
							name="Кнопка неактивная"
							disabled
						/>

						<ButtonItem
							name="Кнопка успешная"
							theme="success"
						/>

						<ButtonItem
							name="Кнопка опасная"
							theme="danger"
						/>
					</section>
				</div>
			</div>
		</div>

		<div class="ui__section">
			<div class="ui__section-inner">
				<h2>Секции c карточками</h2>

				<section class="section section_blue">
					<div class="container">
						<div class="section__inner">
							<div class="card card__theme-primary">
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

							<div class="card card__theme-secondary">
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

							<div class="card card__theme-ligth">
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

							<div class="card card__theme-dark">
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

				<section class="section section_grey">
					<div class="container">
						<div class="section__inner">
							<div class="card card__theme-primary">
								<div class="card__title-wrapper">
									<h2 class="card__title">Умные города</h2>
									<p class="card__text">Технологии для комфортной городской среды</p>
								</div>

								<img
									class="card__image"
									src="@/assets/images/section/image5.png"
									alt="изображение в карточке"
								>
							</div>

							<div class="card">
								<div class="card__title-wrapper">
									<h2 class="card__title">Виртуальная реальность</h2>
									<p class="card__text">Новые измерения развлечений и образования</p>
								</div>

								<img
									class="card__image"
									src="@/assets/images/section/image3.png"
									alt="изображение в карточке"
								>
							</div>

							<div class="card card__theme-ligth">
								<div class="card__title-wrapper">
									<h2 class="card__title">Робототехника</h2>
									<p class="card__text">Автоматизация производства и быта</p>
								</div>

								<img
									class="card__image"
									src="@/assets/images/section/image2.png"
									alt="изображение в карточке"
								>
							</div>

							<div class="card card__theme-dark">
								<div class="card__title-wrapper">
									<h2 class="card__title">Квантовые вычисления</h2>
									<p class="card__text">Следующий прорыв в компьютерных технологиях</p>
								</div>

								<img
									class="card__image"
									src="@/assets/images/section/image1.png"
									alt="изображение в карточке"
								>
							</div>

							<div class="card card__theme-secondary">
								<div class="card__title-wrapper">
									<h2 class="card__title">Нейроинтерфейсы</h2>
									<p class="card__text">Связь между мозгом и компьютером становится реальностью</p>
								</div>

								<img
									class="card__image"
									src="@/assets/images/section/image4.png"
									alt="изображение в карточке"
								>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "UIPage"
};
</script>

<style scoped lang="scss">
.ui {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;

	&__title {
		text-align: center;
	}

	&__section {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 30px;

		&-inner {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 30px;
		}
	}

	&__buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}
}
</style>
