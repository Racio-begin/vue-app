<template>
  <main class="app">
    <h1 class="title">Цитаты великих (и не очень) людей</h1>
    <QuoteForm
      :quotes="quotes"
    />
    <QuotesList 
      :quotes="quotes"
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
  }
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  // color: #757575;
  margin: 0 auto 20px;
}
</style>
