<template>
	<div class="favorites">
		<div class="container">
			<h1 class="favorites__title">Избранные цитаты</h1>

			<div class="favorites__stats">
				<p>Цитат в избранном: {{ quotesStore.favoritesCount }}</p>
			</div>

			<div class="favorites__quotes">
				<QuotesList
					:quotes="quotesStore.favoriteQuotes"
					v-if="quotesStore.favoriteQuotes.length"
				/>

				<div
					class="favorites__empty"
					v-else
				>
					<h2>В избранном пока нет цитат</h2>
					<p>Добавьте цитаты на главной странице</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useQuotesStore } from '@/stores/QuotesStore';
import QuotesList from '@/components/QuotesList.vue';

const quotesStore = useQuotesStore();
</script>

<style lang="scss" scoped>
@use "@/assets/styles/vars" as *;

.favorites {
	display: flex;
	flex-direction: column;
	align-items: center;

	&__title {
		margin: 0 auto 20px;
		text-align: center;
	}

	&__stats {
		display: flex;
		justify-content: center;
		margin-bottom: 20px;

		p {
			background: $color-grey;
			padding: 8px 16px;
			border-radius: 8px;
			font-weight: 500;
		}
	}

	&__quotes {
		margin-bottom: 60px;
	}

	&__empty {
		text-align: center;
		padding: 40px;

		h2 {
			margin-bottom: 10px;
			color: #666;
		}

		p {
			color: #888;
		}
	}
}
</style>
