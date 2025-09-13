<template>
	<form
		class="form"
		action="#"
		@submit.prevent="onSubmit"
		novalidate
	>
		<h2>Связаться со мной</h2>

		<div class="form__inputs">
			<div class="form__inputs-inner">
				<InputItem
					class="form__input-name"
					inputType="text"
					inputPlaceholder="Введите имя"
					v-model="formData.name"
					:required="true"
				/>

				<InputItem
					class="form__input-phone"
					inputType="tel"
					inputPlaceholder="Введите телефон"
					v-model="formData.phone"
					:required="true"
				/>

				<InputItem
					class="form__input-email"
					inputType="email"
					inputPlaceholder="Введите email"
					v-model="formData.email"
					:required="true"
				/>
			</div>

			<TextareaItem
				class="form__input-message"
				inputPlaceholder="Введите комментарий"
				v-model="formData.message"
				:required="false"
			/>
		</div>

		<div class="form__button">
			<ButtonItem name="Отправить" />
		</div>
	</form>
</template>

<script>
import TextareaItem from './UI/TextareaItem.vue';

export default {
	name: "FeedbackForm",
	data() {
		return {
			formData: {
				name: '',
				phone: '',
				email: '',
				message: '',
			}
		};
	},
	methods: {
		onSubmit() {
			console.log('Данные формы:', this.formData);

			// Валидация телефона (только цифры)
			const phoneDigits = this.formData.phone.replace(/\D/g, '');
			if (phoneDigits.length !== 11) {
				alert('Пожалуйста, введите корректный номер телефона (11 цифр)');
				return;
			}

			if (!this.formData.name || !this.formData.phone || !this.formData.email) {
				alert('Заполните обязательные поля, пжлст');
				return;
			}

			this.sendForm();
		},
		sendForm() {
			console.log("Отправка данных:", this.formData);
			alert("Данные отправлены :)");

			// Сброс формы
			this.formData = {
				name: '',
				phone: '',
				email: '',
				message: '',
			};
		}
	}
};
</script>

<style scoped lang="scss">
@use "@/assets/styles/vars" as *;

.form {
	max-width: 1200px;
	min-width: 600px;
	padding: 20px;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	background-color: rgb(65, 215, 215, 0.3);
	// opacity: 0.1;

	&__inputs {
		// padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 20px;

		&-inner {
			display: flex;
			gap: 20px;
		}
	}

	&__input {
		&-name {
			width: 100%;
		}

		&-email {
			width: 100%;
		}

		&-message {
			width: 100%;
			height: 100px;

			&::placeholder {
				text-align: start;
			}
		}
	}

	&__button {
		display: flex;
		justify-content: end;
	}
}
</style>
