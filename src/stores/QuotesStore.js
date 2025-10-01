import { defineStore } from "pinia";
import { ref, computed } from "vue";

import axios from "axios";

export const useQuotesStore = defineStore('quotesStore', () => {
	// ==== State ==== //
	const quotes = ref([]);
	const isQuotesLoading = ref(false);

	const selectedSort = ref('');
	const sortOptions = [
		{ value: 'quote', name: 'По содержимому' },
		{ value: 'name', name: 'По автору' },
		{ value: 'id', name: 'По id цитаты' },
	];

	// ==== Getters ==== //
	const sortedQuotes = computed(() => {
		if (!selectedSort.value) return quotes.value;

		return [...quotes.value].sort((quote1, quote2) => {
			return quote1[selectedSort.value]?.localeCompare(quote2[selectedSort.value]);
		});
	});

	const quotesCount = computed(() => quotes.value.length);

	// ==== Actions ==== //
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

	const addQuote = (quote) => {
		quotes.value.push(quote);
	};

	const removeQuote = (quoteId) => {
		quotes.value = quotes.value.filter(q => q.id !== quoteId);
	};

	const setSelectedSort = (sortValue) => {
		selectedSort.value = sortValue;
	};

	return {
		// ==== State ==== //
		quotes,
		isQuotesLoading,
		selectedSort,
		sortOptions,
		// ==== Getters ==== //
		sortedQuotes,
		quotesCount,
		// ==== Actions ==== //
		fetchQuotes,
		addQuote,
		removeQuote,
		setSelectedSort,
	};
});
