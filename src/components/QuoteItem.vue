<template>
	<div class="quote">
		<div class="quote__content">
			<p class="quote__quote">{{ quote.quote }}</p>
			<h2 class="quote__name">«{{ quote.name }}»</h2>
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
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/vars" as *;

.quote {
	padding: 20px 40px;
	border: 2px solid $color-primary;
	border-radius: 15px;
	display: flex;
	justify-content: space-between;
	gap: 50px;

	&__content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 10px;
	}

	&__quote {
		text-align: left;
		font-size: 22px;
	}

	&__name {
		font-size: 18px;
	}

	&__buttons {
		display: flex;
		justify-content: end;
		align-items: flex-end;
		gap: 10px;
	}
}
</style>
