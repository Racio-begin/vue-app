<template>
	<main class="app">
		<div class="container">
			<h1 class="app__title">Цитаты великих (и не очень) людей</h1>

			<div class="app__buttons">
				<!-- <ButtonItem 
          name="Получить посты"
          @click="fetchQuotes"
        /> -->
				<ButtonItem
					name="Добавить цитату"
					@click="showDialog"
				/>
			</div>

			<div class="app__quotes">
				<QuotesList
					:quotes="quotes"
					@removeQuote="removeQuote"
				/>
			</div>

			<MyDialog v-model:show="isDialogVisible">
				<QuoteForm
					:quotes="quotes"
					@addQuote="addQuote"
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
	name: "App",
	components: {
		QuoteForm,
		QuotesList,
	},
	data() {
		return {
			quotes: [],
			isDialogVisible: false,
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
		async fetchQuotes() {
			try {
				// const response = await axios.get('https://687b9947b4bc7cfbda867045.mockapi.io/quotes?limit=10');
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
				this.quotes = response.data;
				console.log('response', response);

			} catch (error) {
				alert(error.message);
			}
		}
	},
	mounted() {
		this.fetchQuotes();
	}
};
</script>

<style lang="scss" scoped>
.app {
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
</style>
