<template>
	<div
		class="quotes-list"
		v-if="quotes.length"
	>
		<QuoteItem 
			v-for="quote in quotes"
			:quote="quote"
			:key="quote.id"
			@removeQuote="$emit('removeQuote', $event)"
		/>
	</div>

	<div 
		class="quotes-list_empty"
		v-else
	>
		<h2>Список цитат пуст</h2>
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
	
	&_empty {
		text-align: center;
	}
}
</style>