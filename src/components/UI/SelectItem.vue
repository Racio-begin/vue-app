<template>
	<select
		name="select button"
		id="select"
		class="select"
		:value="modelValue"
		@change="changeOption"
	>
		<option
			disabled
			value=""
		>
			Выберите
		</option>
		<option
			v-for="option in options"
			:key="option.value"
			:value="option.value"
			class="select__option"
		>
			{{ option.name }}
		</option>

	</select>
</template>

<script setup>
const props = defineProps({
	modelValue: {
		type: String,
		required: true,
	},
	options: {
		type: Array,
		required: true,
		default: () => [],
	}
});

const emit = defineEmits(['update:modelValue']);

const changeOption = (event) => {
	emit('update:modelValue', event.target.value);
};
</script>

<style lang="scss" scoped>
@use '@/assets/styles/vars' as *;

.select {
	border: 1px solid $color-primary;
	border-radius: 5px;
	padding: 10px 20px;

	display: flex;
	align-items: center;
	justify-content: center;

	color: $color-black;
	background-color: $color-primary;

	cursor: pointer;

	&__option {}
}
</style>
