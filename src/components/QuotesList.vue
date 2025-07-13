<template>
	<div class="container">
		<div class="quotes-list">
			<QuoteItem 
				v-for="quote in quotes"
				:quote="quote"
				:key="quote.id"
				@removeQuote="$emit('removeQuote', $event)"
			/>
		</div>
	</div>
</template>

<script>
import QuoteItem from '@/components/QuoteItem.vue';

export default {
	name: "QuotesList",
	props: {
		quotes: {
			type: Array,
			required: true,
		}
	},
	components: {
		QuoteItem,
	},
}
</script>

<style lang="scss" scoped>
.quotes-list {
	display: flex;
	flex-direction: column;
	gap: 20px;
}
</style>