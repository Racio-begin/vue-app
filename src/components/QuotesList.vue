<template>
	<div class="container">
		<div class="quotes-list">
			<QuoteItem 
				v-for="quote in quotes"
				:quote="quote"
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
	display: flex;
	flex-direction: column;
	gap: 20px;
}
</style>