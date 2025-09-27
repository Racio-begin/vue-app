<template>
	<TransitionGroup
		class="quotes-list"
		tag="ul"
		name="fade-quotes-list"
		v-if="quotes.length"
		@beforeLeave="beforeLeave"
	>
		<QuoteItem
			v-for="quote in quotes"
			:quote="quote"
			:key="quote.id"
			@removeQuote="$emit('removeQuote', $event)"
		/>
	</TransitionGroup>

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
	methods: {
		//* Костыль для анимации flex-контейнера *//
		beforeLeave(el) {
			const rect = el.getBoundingClientRect(); // Более точно, чем offset (учитывает скролл)
			const parentRect = el.parentElement.getBoundingClientRect();
			el.style.position = 'absolute';
			el.style.left = `${rect.left - parentRect.left}px`;
			el.style.top = `${rect.top - parentRect.top}px`;
			el.style.width = `${rect.width}px`;
			el.style.height = `${rect.height}px`;
		},
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
}

//* transition-group animations *//
.fade-quotes-list {

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
}

//* transition-group animations *//</style>
