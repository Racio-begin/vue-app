<template>
	<main class="app">
		<div class="container">
			<h1 class="app__title">Цитаты великих (и не очень) людей</h1>

			<div class="app__buttons">
				<ButtonItem
					name="Добавить цитату"
					@click="showDialog"
				/>
			</div>

			<div class="app__quotes">
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
	</main>
</template>

<script>
import QuoteForm from '@/components/QuoteForm.vue';
import QuotesList from '@/components/QuotesList.vue';

// import quotes from '@/utils/quotes';

import axios from 'axios';

export default {
	name: "HomePage",
	components: {
		QuoteForm,
		QuotesList,
	},
	data() {
		return {
			quotes: [],
			isDialogVisible: false,
			isQuotesLoading: false,
		};
	},
	methods: {
		addQuote(quote) {
			this.quotes.push(quote);
		},

		removeQuote(quote) {
			this.quotes = this.quotes.filter(q => q.id !== quote);
		},

		showDialog() {
			this.isDialogVisible = true;
		},

		closeDialog() {
			this.isDialogVisible = false;
		},

		async fetchQuotes() {
			try {
				this.isQuotesLoading = true;
				// const response = await axios.get('https://687b9947b4bc7cfbda867045.mockapi.io/quotes?limit=10');
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
				this.quotes = response.data;
				// console.log('response', response);
			} catch (error) {
				alert(error.message);
			} finally {
				this.isQuotesLoading = false;
			}
		},
	},
	mounted() {
		this.fetchQuotes();
	}
};
</script>

<style lang="scss" scoped>
.app {
	padding: 50px 0;
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

	// &__text {}

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
