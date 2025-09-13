<template>
	<input
		:value="inputType === 'tel' ? maskedValue : modelValue"
		v-imask="inputType === 'tel' ? phoneMask : null"
		class="input"
		:type="inputType"
		:placeholder="inputPlaceholder"
		:required="required"
		@input="updateInput"
		@accept="onAccept"
	>
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
			}
		},
		onAccept(event) {
			if (this.inputType === 'tel') {
				const maskRef = event.detail;
				this.maskedValue = maskRef.value;
				this.$emit('update:modelValue', maskRef.unmaskedValue);
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
	padding: 10px 20px;
	border: none;
	border-bottom: 1px solid $color-primary;
}
</style>
