<template>
	<button class="button">{{ name }}</button>
</template>

<script>
export default {
	name: "ButtonItem",
	props: {
		name: {
			type: String,
			required: true,
		}
	}
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/vars" as *;

.button {
	padding: 10px 20px;
	background-color: $color-primary;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: $transition;

	&:hover {
		opacity: 0.8;
	}
}
</style>
