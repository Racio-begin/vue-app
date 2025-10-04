<template>
	<div class="loading">
		<div class="loading__inner">
			<span class="loading__text">{{ text }}</span>
			<span class="loading__dots"></span>
		</div>
	</div>
</template>

<script setup>
defineProps({
	text: {
		type: String,
		default: 'Загрузка'
	}
});
</script>

<style lang="scss" scoped>
.loading {
	display: flex;
	justify-content: center;
	padding: 40px 0;

	&__inner {
		padding-right: 20px;
		position: relative;
	}

	&__text {
		font-size: 16px;
	}

	&__dots {
		width: 20px;
		position: absolute;
		right: 0;
		bottom: 0;

		&::after {
			content: "";
			animation: loading-text 1s infinite;
		}
	}
}

@keyframes loading-text {
	0% {
		content: "";
	}

	25% {
		content: ".";
	}

	50% {
		content: "..";
	}

	75% {
		content: "...";
	}

	100% {
		content: "";
	}
}
</style>
