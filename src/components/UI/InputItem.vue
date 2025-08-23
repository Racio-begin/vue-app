<template>
	<input
		:value="modelValue"
		@input="updateInput"
		class="input"
		:type="inputType"
		:placeholder="inputPlaceholder"
	>
</template>

<script>
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
	},
	methods: {
		updateInput(event) {
			this.$emit('update:modelValue', event.target.value);
		},
	},
};
</script>

<style lang="scss" scoped>
.input {
	padding: 10px 20px;
	border: none;
	border-bottom: 1px solid #7ed7d7;
}
</style>
