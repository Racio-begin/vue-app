<template>
	<div class="container">
		<form class="form" @submit.prevent>
			<div class="form__inputs">
				<h2>Добавить цитату</h2>
				<input 
					v-model.value="quote.title"
					class="form__input"
					type="text"
					placeholder="Введите цитату"
				>
				<input
					v-model.value="quote.author"
					class="form__input"
					type="text"
					placeholder="Введите автора"
				>
			</div>
			<ButtonItem @click="addQuote" name="Добавить цитату"/>
		</form>
	</div>
</template>

<script>
import ButtonItem from '@/components/UI/ButtonItem.vue';

export default {
	name: "QuoteForm",
	props: {
		quotes: {
			type: Array,
			required: true,
		}
	},
	components: {
		ButtonItem,
	},
	data() {
		return {
			quote: {
				title: '',
				author: '',
			}
		}
	},
	methods: {
		addQuote() {
			this.quote.id = Date.now();

			this.$emit('addQuote', this.quote);

			this.quote = {
				title: '',
				author: '',
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.form {
	border: 1px solid #7ed7d7;
	border-radius: 10px;
	padding: 20px 40px;
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	align-items: end;
	gap: 10px;

	&__inputs {
		margin-bottom: 20px;
		display: flex;
		gap: 20px;
	}

	&__input {
		padding: 10px 20px;
		border: none;
		border-bottom: 1px solid #7ed7d7;
	}
}
</style>