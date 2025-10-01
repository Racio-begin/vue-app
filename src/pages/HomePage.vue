<template>
	<div class="home">
		<div class="container">
			<h1 class="home__title">Цитаты великих (и не очень) людей</h1>

			<div class="home__buttons">
				<ButtonItem
					name="Добавить цитату"
					@click="showDialog"
				/>

				<SelectItem
					:modelValue="quotesStore.selectedSort"
					@update:modelValue="quotesStore.setSelectedSort"
					:options="quotesStore.sortOptions"
				/>
			</div>

			<div class="home__quotes">
				<QuotesList
					:quotes="quotesStore.sortedQuotes"
					@removeQuote="quotesStore.removeQuote"
					v-if="!quotesStore.isQuotesLoading"
				/>

				<div
					class="loading"
					v-else
				>
					<div class="loading__inner">
						<span class="loading__text">Загрузка цитат</span>
						<span class="loading__dots"></span>
					</div>
				</div>
			</div>

			<DialogItem v-model:show="isDialogVisible">
				<QuoteForm
					@addQuote="quotesStore.addQuote"
					:closeDialog="closeDialog"
				/>
			</DialogItem>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useQuotesStore } from '@/stores/QuotesStore';

import QuoteForm from '@/components/QuoteForm.vue';
import QuotesList from '@/components/QuotesList.vue';

const quotesStore = useQuotesStore();

const isDialogVisible = ref(false);

const showDialog = () => {
	isDialogVisible.value = true;
};

const closeDialog = () => {
	isDialogVisible.value = false;
};

onMounted(() => {
	quotesStore.fetchQuotes();
});
</script>

<style lang="scss" scoped>
.home {
	display: flex;
	flex-direction: column;
	align-items: center;

	&__title {
		margin: 0 auto 20px;
		text-align: center;
	}

	&__quotes {
		margin-bottom: 60px;
	}

	&__buttons {
		margin-bottom: 20px;
		display: flex;
		justify-content: space-between;
		gap: 20px;
	}
}

.loading {
	display: flex;
	justify-content: center;

	&__inner {
		padding-right: 20px;
		position: relative;
	}

	&__dots {
		width: 20px;
		position: absolute;
		right: 0;
		bottom: 0;

		&::after {
			content: "";
			animation: loading-text 1s infinite;
		}
	}
}

@keyframes loading-text {
	0% {
		content: "";
	}

	25% {
		content: ".";
	}

	50% {
		content: "..";
	}

	75% {
		content: "...";
	}

	100% {
		content: "";
	}
}
</style>
