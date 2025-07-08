<template>
	<div class="container">
		<div class="quotes-list" v-for="quote in quotes">
			<QuoteItem 
				:quote="quote.quote"
				:author="quote.author"
			/>	
		</div>
	</div>
</template>

<script>
import QuoteItem from '@/components/QuoteItem.vue';
import ButtonItem from '@/components/UI/ButtonItem.vue';

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
		ButtonItem,
	},
}
</script>

<style lang="scss" scoped>
.quotes-list {
	margin-bottom: 20px;
}
</style>