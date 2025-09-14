<template>
	<footer class="footer">
		<p>Footer</p>
	</footer>
</template>

<script>

export default {
	name: "MyFooter",
};
</script>

<style scoped lang="scss">
@use "@/assets/styles/vars" as *;

.footer {
	padding: 20px;
	border-top: 2px solid $color-primary;
	display: flex;
	justify-content: center;
}
</style>
