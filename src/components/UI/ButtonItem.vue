<template>
<button class="button">{{ name }}</button>
</template>

<script>
export default {
	name: "ButtonItem",
	props: {
		name: {
			type: String,
			required: true,}
	}
}
</script>

<style lang="scss" scoped>
.button {
	padding: 10px 20px;
	background-color: #7ed7d7;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: opacity 0.25s ease;

	&:hover {
		opacity: 0.8;
	}
}
</style>