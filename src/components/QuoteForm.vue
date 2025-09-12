<template>
	<form
		class="form"
		@submit.prevent
	>
		<h2>Добавить цитату</h2>
		<div class="form__inputs">
			<InputItem
				v-model="quote.name"
				inputType="text"
				inputPlaceholder="Введите цитату"
			/>

			<InputItem
				v-model="quote.quote"
				inputType="text"
				inputPlaceholder="Введите автора"
			/>

		</div>
		<ButtonItem
			@click="addQuote"
			name="Добавить цитату"
		/>
	</form>
</template>

<script>
export default {
	name: "QuoteForm",
	props: {
		quotes: {
			type: Array,
			required: true,
		},
		closeDialog: {
			type: Function,
			required: false,
		}
	},
	data() {
		return {
			quote: {
				name: '',
				quote: '',
			}
		};
	},
	methods: {
		addQuote(event) {
			event.preventDefault();

			if (!this.quote.name.trim() || !this.quote.quote.trim()) {
				alert('Пожалуйста, заполните поля');
				return;
			}

			this.quote.id = Date.now();

			this.$emit('addQuote', this.quote);

			this.quote = {
				name: '',
				quote: '',
			};

			if (this.closeDialog) {
				this.closeDialog();
			}
		},
		handleEscape(event) {
			if (event.key === 'Escape') {
				if (this.closeDialog) {
					this.closeDialog();
				}
			}
		}
	},
	mounted() {
		document.addEventListener('keydown', this.handleEscape);
	},
	beforeUnmount() {
		document.removeEventListener('keydown', this.handleEscape);
	}
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/vars" as *;

.form {
	border: 1px solid $color-primary;
	border-radius: 10px;
	padding: 20px 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	&__inputs {
		margin-bottom: 20px;
		display: flex;
		gap: 20px;
	}
}
</style>
