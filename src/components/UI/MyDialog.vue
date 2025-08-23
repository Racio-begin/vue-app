<template>
	<div
		class="dialog"
		v-if="show"
		@click="closeDialog"
	>
		<div
			class="dialog__inner"
			@click.stop
		>
			<slot></slot>
			<ButtonItem
				name="Я крестик"
				class="dialog__close"
				@click="closeDialog"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "MyDialog",
	props: {
		show: {
			type: Boolean,
			default: false,
		}
	},
	methods: {
		closeDialog() {
			this.$emit('update:show', false);
		}
	}
}

</script>

<style lang="scss" scoped>
@use "@/assets/styles/vars" as *;

.dialog {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	background-color: $color-background-opacity;

	&__inner {
		padding: 20px;
		border-radius: 20px;
		background-color: $color-white;
		position: relative;
	}

	&__close {
		position: absolute;
		top: -40px;
		right: -110px;
		cursor: pointer;
	}
}
</style>
