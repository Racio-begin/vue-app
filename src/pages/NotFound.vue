<template>
	<div class="not-found">
		<div class="container">
			<div class="not-found__inner">

				<h1>404</h1>
				<h2>Страница не найдена</h2>

				<p>
					Но не переживайте, вы можете вернуться
					<router-link
						to="/"
						class="not-found__link"
					>
						на главную
					</router-link>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "NotFound"
};
</script>

<style scoped lang="scss">
.not-found {
	&__inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}
}
</style>
