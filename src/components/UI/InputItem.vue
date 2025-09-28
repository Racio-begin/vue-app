<template>
	<div class="input">
		<input
			:value="inputType === 'tel' ? maskedValue : modelValue"
			v-imask="inputType === 'tel' ? phoneMask : null"
			class="input__item"
			:name="name"
			:type="inputType"
			:placeholder="inputPlaceholder"
			:required="required"
			@input="updateInput"
			@accept="onAccept"
		>
		<span
			class="input__error"
			v-if="error"
		>
			{{ error }}
		</span>
	</div>
</template>

<script setup>
import {
	ref,
	watch,
} from 'vue';

import { IMaskDirective } from 'vue-imask';

defineOptions({
	directives: {
		imask: IMaskDirective
	}
});

const props = defineProps({
	modelValue: [
		String,
		Number,
	],
	name: {
		type: String,
		required: true,
	},
	inputType: {
		type: String,
		required: true,
	},
	inputPlaceholder: {
		type: String,
		required: true,
	},
	required: {
		type: Boolean,
		default: false,
	},
	error: {
		type: String,
		default: null,
	}
});

const phoneMask = {
	mask: '+{7} (000) 000-00-00',
	lazy: false
};

const maskedValue = ref('');

const emit = defineEmits(['update:modelValue', 'validate']);

const updateInput = (event) => {
	if (props.inputType !== 'tel') {
		emit('update:modelValue', event.target.value);
		emit('validate', event.target.value);
	}
};

const onAccept = (event) => {
	if (props.inputType === 'tel') {
		const maskRef = event.detail;

		maskedValue.value = maskRef.value;

		emit('update:modelValue', maskRef.unmaskedValue);
		emit('validate', maskRef.unmaskedValue);
	}
};

watch(
	() => props.modelValue,
	(newValue) => {
		if (props.inputType === 'tel' && !newValue) {
			maskedValue.value = '';
		}
	}
);
</script>

<style lang="scss" scoped>
@use "@/assets/styles/vars" as *;

.input {
	position: relative;

	&__item {
		border-bottom: 1px solid $color-primary;
		border: none;
		padding: 10px 20px;
	}

	&__error {
		position: absolute;
		top: calc(100% + 4px);
		left: 0;
		color: $color-text-error;
		font-size: 12px;
	}
}
</style>
