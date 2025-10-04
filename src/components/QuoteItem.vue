<template>
	<li class="quote">
		<div class="quote__content">
			<p class="quote__quote">{{ quote.quote }}</p>

			<div class="quote__info">
				<h2 class="quote__name">«{{ quote.name }}»</h2>
				<p class="quote__text">, {{ quote.date }}</p>
			</div>
		</div>

		<div class="quote__buttons">
			<ButtonItem
				:name="isQuoteFavorite ? 'Убрать из избранного' : 'В избранное'"
				:theme="isQuoteFavorite ? 'secondary' : 'success'"
				@click="toggleFavorite"
			/>
		</div>
	</li>
</template>

<script setup>
import { computed } from 'vue';
import { useQuotesStore } from '@/stores/QuotesStore';

const quotesStore = useQuotesStore();

const props = defineProps({
	quote: {
		type: Object,
		required: true,
	},
});

const isQuoteFavorite = computed(() => quotesStore.isFavorite(props.quote.id));

const toggleFavorite = () => {
	quotesStore.toggleFavorite(props.quote);
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/vars" as *;

.quote {
	width: 100%;
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

	&__info {
		display: flex;
		align-items: baseline;
		gap: 10px;
	}

	&__name {
		font-size: 18px;
	}

	&__text {
		font-size: 14px;
	}

	&__buttons {
		display: flex;
		justify-content: end;
		align-items: flex-end;
		gap: 10px;
		flex-wrap: wrap;
	}
}
</style>
