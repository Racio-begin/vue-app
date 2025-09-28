<template>
	<Transition name="fade-dialog">
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
	</Transition>
</template>

<script setup>
const emit = defineEmits(['update:show']);

const props = defineProps({
	show: {
		type: Boolean,
		default: false,
	}
});

const closeDialog = () => {
	emit('update:show', false);
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/vars" as *;
@use "@/assets/styles/mixins" as *;

.dialog {
	@include flex-center;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
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

.fade-dialog {

	&-enter-active,
	&-leave-active {
		transition: $transition-slow;
	}

	&-enter-from,
	&-leave-to {
		opacity: 0;
	}
}
</style>
