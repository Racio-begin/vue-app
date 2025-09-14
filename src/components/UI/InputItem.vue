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

<script>
import { IMaskDirective } from 'vue-imask';

export default {
	name: "InputItem",
	props: {
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
	},
	data() {
		return {
			phoneMask: {
				mask: '+{7} (000) 000-00-00',
				lazy: false
			},
			maskedValue: '',
		};
	},
	methods: {
		updateInput(event) {
			if (this.inputType !== 'tel') {
				this.$emit('update:modelValue', event.target.value);
				this.$emit('validate', event.target.value);
			}
		},
		onAccept(event) {
			if (this.inputType === 'tel') {
				const maskRef = event.detail;
				this.maskedValue = maskRef.value;
				this.$emit('update:modelValue', maskRef.unmaskedValue);
				this.$emit('validate', maskRef.unmaskedValue);
			}
		},
	},
	watch: {
		modelValue(newValue) {
			if (this.inputType === 'tel' && !newValue) {
				this.maskedValue = '';
			}
		}
	},
	directives: {
		imask: IMaskDirective
	},
};
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
