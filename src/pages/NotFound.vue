<template>
	<div class="not-found">
		<div class="container">
			<h1>404</h1>
			<h2>Страница не найдена</h2>

			<p>
				Не переживайте, вы можете вернуться
				<router-link
					to="/"
					class="not-found__link"
				>
					На главную
				</router-link>
			</p>

		</div>
	</div>
</template>

<script>
export default {
	name: "NotFound"
};
</script>

<style scoped lang="scss"></style>
