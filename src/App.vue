<template>
  <main class="app">
    <h1 class="app__title">Цитаты великих (и не очень) людей</h1>
    <QuoteForm
      :quotes="quotes"
      @addQuote="addQuote"
    />
    <QuotesList 
      :quotes="quotes"
      @removeQuote="removeQuote"
    />
  </main>
</template>

<script>
import QuoteForm from '@/components/QuoteForm.vue';
import QuotesList from '@/components/QuotesList.vue';

import quotes from '@/utils/quotes';

export default {
  name: "App",
  components: {
    QuoteForm,
    QuotesList,
  },
  data() {
    return {
      quotes: quotes,
    }
  },
  methods: {
    addQuote(quote) {
      this.quotes.push(quote);
    },
    removeQuote(quote) {
      this.quotes = this.quotes.filter(q => q.id !== quote);
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    margin: 0 auto 20px;
  }
}
</style>
