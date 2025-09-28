<template>
	<form
		class="form"
		@submit.prevent
	>
		<h2>Добавить цитату</h2>
		<div class="form__inputs">
			<InputItem
				ref="focusInput"
				name="input-quote"
				v-model="quote.quote"
				inputType="text"
				inputPlaceholder="Введите цитату"
			/>

			<InputItem
				name="input-name"
				v-model="quote.name"
				inputType="text"
				inputPlaceholder="Введите автора"
			/>
		</div>
		<ButtonItem
			@click="addQuote"
			name="Добавить цитату"
		/>
	</form>
</template>

<script setup>
import {
	defineProps,
	defineEmits,
	reactive,
	ref,
	nextTick,
	onMounted,
	onBeforeUnmount,
} from 'vue';

import { REQUIRED_FIELD_ALL } from '@/constants/informMessages';

const props = defineProps({
	quotes: {
		type: Array,
		required: true,
	},
	closeDialog: {
		type: Function,
		required: false,
	}
});

const emit = defineEmits(['addQuote']);

const quote = reactive({
	name: '',
	quote: '',
});

const focusInput = ref(null);

const addQuote = (event) => {
	event.preventDefault();

	if (!quote.name.trim() || !quote.quote.trim()) {
		alert(REQUIRED_FIELD_ALL);
		return;
	}

	quote.id = Date.now();

	emit('addQuote', { ...quote });

	quote.name = '';
	quote.quote = '';

	if (props.closeDialog) {
		props.closeDialog();
	}
};

const handleEscape = (event) => {
	if (event.key === 'Escape') {
		if (props.closeDialog) {
			props.closeDialog();
		}
	}
};

onMounted(() => {
	document.addEventListener('keydown', handleEscape);

	nextTick(() => {
		if (focusInput.value && focusInput.value.$el) {
			focusInput.value.$el.querySelector('input').focus();
		}
	});
});

onBeforeUnmount(() => {
	document.removeEventListener('keydown', handleEscape);
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/vars" as *;

.form {
	border: 1px solid $color-primary;
	border-radius: 10px;
	padding: 20px 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	&__inputs {
		margin-bottom: 20px;
		display: flex;
		gap: 20px;
	}
}
</style>
