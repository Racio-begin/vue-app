<template>
	<div
		class="quotes-list"
		v-if="quotes.length"
	>
		<TransitionGroup name="quotes-list">
			<QuoteItem
				v-for="quote in quotes"
				:quote="quote"
				:key="quote.id"
				@removeQuote="$emit('removeQuote', $event)"
			/>
		</TransitionGroup>
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
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/vars" as *;

.quotes-list {
	display: flex;
	flex-direction: column;
	gap: 20px;
	position: relative;

	&_empty {
		text-align: center;
	}

	//* transition-group animations *//
	&-enter-active,
	&-leave-active,
	&-move {
		transition: $transition-slow;
	}

	&-enter-from,
	&-leave-to {
		opacity: 0;
		transform: translateX(40px);
	}

	&-leave-active {
		position: absolute;
		// width: 100%;
	}

	//* transition-group animations *//
}
</style>
