<template>
	<div class="quote">
		<h2 class="quote__title">«{{ quote.title }}»</h2>
		<p class="quote__author">{{ quote.author }}</p>
	</div>
</template>

<script>
export default {
	name: "QuoteItem",
	props: {
		quote: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.quote {
	padding: 20px 40px;
	border: 2px solid #7ed7d7;
	border-radius: 15px;

	display: flex;
	flex-direction: column;
	// align-items: center;
	gap: 10px;

	&__author {
		text-align: right;
	}
}
</style>