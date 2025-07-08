<template>
<button class="button">
	{{ name }}
</button>
</template>

<script>
export default {
	name: "ButtonItem",
	props: {
		name: String,
		required: true,
	}
}
</script>

<style lang="scss" scoped>
.button {
	padding: 10px 20px;
	background-color: #7ed7d7;
	// color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}
</style>