<template>
	<div class="ui">
		<div class="container">
			<div class="ui__inner">
				<h1 class="ui__title">UI</h1>

				<div class="ui__section">
					<h2>Кнопки</h2>

					<div class="ui__buttons">
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
					</div>
				</div>
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
	&__inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 30px;
	}

	&__title {
		text-align: center;
	}

	&__section {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 30px;
	}

	&__buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}
}
</style>
