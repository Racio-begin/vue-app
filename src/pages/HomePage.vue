<template>
	<div class="home">
		<div class="container">
			<h1 class="home__title">Цитаты великих (и не очень) людей</h1>

			<div class="home__buttons">
				<ButtonItem
					name="Добавить цитату"
					@click="showDialog"
				/>
			</div>

			<div class="home__quotes">
				<QuotesList
					:quotes="quotes"
					@removeQuote="removeQuote"
					v-if="!isQuotesLoading"
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


			<MyDialog v-model:show="isDialogVisible">
				<QuoteForm
					:quotes="quotes"
					@addQuote="addQuote"
					:closeDialog="closeDialog"
				/>
			</MyDialog>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import QuoteForm from '@/components/QuoteForm.vue';
import QuotesList from '@/components/QuotesList.vue';

const quotes = ref([]);
const isDialogVisible = ref(false);
const isQuotesLoading = ref(false);

const addQuote = (quote) => {
	quotes.value.push(quote);
};

const removeQuote = (quoteId) => {
	quotes.value = quotes.value.filter(q => q.id !== quoteId);
};

const showDialog = () => {
	isDialogVisible.value = true;
};

const closeDialog = () => {
	isDialogVisible.value = false;
};

const fetchQuotes = async () => {
	try {
		isQuotesLoading.value = true;

		const response = await axios.get('https://687b9947b4bc7cfbda867045.mockapi.io/quotes', {
			params: {
				limit: 10,
				page: 1,
			},
			headers: {
				'content-type': 'application/json',
			}
		});

		quotes.value = response.data;
	} catch (error) {
		alert(error.message);
	} finally {
		isQuotesLoading.value = false;
	}
};

onMounted(() => {
	fetchQuotes();
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
		justify-content: flex-end;
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
