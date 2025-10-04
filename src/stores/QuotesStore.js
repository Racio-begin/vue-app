import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useQuotesStore = defineStore('quotesStore', () => {
	// ==== State ==== //
	const quotes = ref([]);
	const favoriteQuotes = ref([]);

	const isLoading = ref(false);

	const quotesLastFetched = ref(null);

	const CACHE_KEY = 'quotes_cache';
	const CACHE_TIMESTAMP_KEY = 'quotes_cache_timestamp';
	// const CACHE_DURATION = 5 * 1000;
	const CACHE_DURATION = 60 * 60 * 1000;

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
	const favoritesCount = computed(() => favoriteQuotes.value.length);

	// ==== Actions ==== //
	const fetchQuotes = async (forceRefresh = false) => {
		const currentTimestamp = Date.now();

		if (!forceRefresh) {
			const cachedQuotes = localStorage.getItem(CACHE_KEY);
			const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

			const parsedTimestamp = parseInt(cachedTimestamp, 10);

			if (
				cachedQuotes &&
				!isNaN(parsedTimestamp) &&
				(currentTimestamp - parsedTimestamp < CACHE_DURATION)
			) {
				quotes.value = JSON.parse(cachedQuotes);
				quotesLastFetched.value = parsedTimestamp;
				return;
			}
		}

		try {
			isLoading.value = true;

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
			quotesLastFetched.value = currentTimestamp;

			localStorage.setItem(CACHE_KEY, JSON.stringify(response.data));
			localStorage.setItem(CACHE_TIMESTAMP_KEY, currentTimestamp.toString());

		} catch (error) {
			console.error('Ошибка загрузки цитат:', error);
		} finally {
			isLoading.value = false;
		}
	};

	const forceRefreshQuotes = async () => {
		await fetchQuotes(true);
	};

	const addQuote = (quote) => {
		quotes.value.push(quote);
	};

	const setSelectedSort = (sortValue) => {
		selectedSort.value = sortValue;
	};

	// Избранное
	const loadFavorites = () => {
		const storedFavorites = localStorage.getItem('favoriteQuotes');
		if (storedFavorites) {
			favoriteQuotes.value = JSON.parse(storedFavorites);
		}
	};

	const saveFavoritesToLocalStorage = () => {
		localStorage.setItem('favoriteQuotes', JSON.stringify(favoriteQuotes.value));
	};

	const addToFavorites = (quote) => {
		if (!favoriteQuotes.value.find(q => q.id === quote.id)) {
			favoriteQuotes.value.push(quote);
			saveFavoritesToLocalStorage();
		}
	};

	const removeFromFavorites = (quoteId) => {
		favoriteQuotes.value = favoriteQuotes.value.filter(q => q.id !== quoteId);
		saveFavoritesToLocalStorage();
	};

	const toggleFavorite = (quote) => {
		const isFavorite = favoriteQuotes.value.some(q => q.id === quote.id);
		if (isFavorite) {
			removeFromFavorites(quote.id);
		} else {
			addToFavorites(quote);
		}
	};

	const isFavorite = (quoteId) => {
		return favoriteQuotes.value.some(q => q.id === quoteId);
	};

	loadFavorites();

	return {
		// === State ===
		quotes,
		favoriteQuotes,
		isLoading,
		selectedSort,
		sortOptions,

		// === Getters ===
		sortedQuotes,
		quotesCount,
		favoritesCount,

		// === Actions ===
		fetchQuotes,
		forceRefreshQuotes,
		addQuote,
		setSelectedSort,

		// === Favorites ===
		addToFavorites,
		removeFromFavorites,
		toggleFavorite,
		isFavorite,
		loadFavorites,
	};
});
