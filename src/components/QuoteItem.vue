<template>
	<div class="quote">
		<div class="quote__content">
			<h2 class="quote__title">«{{ quote.title }}»</h2>
			<p class="quote__author">{{ quote.body }}</p>
		</div>

		<div class="quote__buttons">
			<ButtonItem
				name="Удалить"
				@click="removeQuote"
			/>
		</div>
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
	methods: {
		removeQuote() {
			this.$emit('removeQuote', this.quote.id);
		}
	}
}
</script>

<style lang="scss" scoped>
.quote {
	width: 100%;
	padding: 20px 40px;
	border: 2px solid #7ed7d7;
	border-radius: 15px;
	display: flex;
	justify-content: space-between;

	&__content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 10px;
	}

	&__author {
		text-align: right;
	}

	&__buttons {
		display: flex;
		justify-content: end;
		align-items: flex-end;
		gap: 10px;
	}
}
</style>