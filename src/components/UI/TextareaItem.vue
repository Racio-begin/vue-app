<template>
	<textarea
		:value="modelValue"
		@input="updateInput"
		class="textarea"
		:name="name"
		:placeholder="inputPlaceholder"
		:rows="rows"
		:cols="cols"
		:required="required"
	>
	</textarea>
</template>

<script>
export default {
	name: "TextareaItem",
	props: {
		modelValue: [
			String,
			Number,
		],
		name: {
			type: String,
			required: true,
		},
		inputPlaceholder: {
			type: String,
			required: true,
		},
		rows: {
			type: Number,
			default: 4,
		},
		cols: {
			type: Number,
			default: 50,
		},
		required: {
			type: Boolean,
			default: false,
		}
	},
	methods: {
		updateInput(event) {
			this.$emit('update:modelValue', event.target.value);
		},
	},
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/vars" as *;

.textarea {
	min-height: 100px;
	padding: 10px 20px;
	border: none;
	border-bottom: 1px solid $color-primary;
	resize: none;
}
</style>
