<template>
	<button
		class="button"
		:class="[
			`button__theme-${theme}`,
			{ 'button_disabled': disabled },
			{ 'button_loading': loading }
		]"
		:disabled="disabled"
	>
		{{ name }}
		<span
			v-if="loading"
			class="button__loader"
		></span>
	</button>
</template>

<script>
export default {
	name: "ButtonItem",
	props: {
		name: {
			type: String,
			required: true,
		},
		theme: {
			type: String,
			default: 'primary',
			validator: (value) => ['primary', 'secondary', 'success', 'danger'].includes(value),
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		loading: {
			type: Boolean,
			default: false,
		},
	}
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/vars" as *;

$themes: (
	primary: (color-text: $color-text-primary,
		color-background: $color-primary,
		color-hover: darken($color-primary, 10%),
		color-border: $color-primary,
	),

	secondary: (color-text: $color-white,
		color-background: #6c757d,
		color-hover: darken(#6c757d, 10%),
		color-border: #6c757d,
	),

	success: (color-text: $color-white,
		color-background: #28a745,
		color-hover: darken(#28a745, 10%),
		color-border: #28a745,
	),

	danger: (color-text: $color-white,
		color-background: #dc3546,
		color-hover: darken(#dc3545, 10%),
		color-border: #dc3545,
	),
);

.button {
	padding: 10px 20px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: $transition;

	@each $theme, $colors in $themes {
		&__theme-#{$theme} {
			background-color: map-get($colors, color-background);
			color: map-get($colors, color-text);
			border: 1px solid map-get($colors, color-border);

			&:hover:not(.button--disabled):not(.button--loading) {
				background-color: map-get($colors, color-hover);
				border-color: map-get($colors, color-hover);
			}

			// &:active:not(.button--disabled):not(.button--loading) {
			// animation: press 0.2s ease-in-out;
			// transform: scale(0.98);
			// outline: none;
			// box-shadow: 0 0 0 3px rgba(map-get($colors, color-background), 0.3);
			// }

			// &:focus {
			// 	outline: none;
			// 	box-shadow: 0 0 0 3px rgba(map-get($colors, color-background), 0.3);
			// }
		}
	}

	// Состояние неактивности
	&_disabled {
		opacity: 0.65;
		cursor: not-allowed;
		pointer-events: none;
	}

	// Состояние загрузки
	&_loading {
		pointer-events: none;
		position: relative;

		.button__loader {
			display: inline-block;
			width: 1em;
			height: 1em;
			margin-left: 0.5em;
			border: 2px solid currentColor;
			border-top-color: transparent;
			border-radius: 50%;
			animation: spin 1s linear infinite;
		}
	}
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}

@keyframes press {
	0% {
		transform: scale(1);
	}

	50% {
		transform: scale(0.98);
	}

	100% {
		transform: scale(1);
	}
}
</style>
