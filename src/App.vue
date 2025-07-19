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
      <QuotesList 
        :quotes="quotes"
        @removeQuote="removeQuote"
      />
      <MyDialog 
        v-model:show="isDialogVisible"
      >
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
      isDialogVisible: false,
    }
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
    text-align: center;
  }

  &__buttons {
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
