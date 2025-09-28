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
					class="form__input form__input-name"
					name="form__input-name"
					inputType="text"
					inputPlaceholder="Введите имя"
					v-model="formData.name"
					:required="true"
					:error="errors.name"
					@validate="debouncedValidateName"
				/>

				<InputItem
					class="form__input form__input-phone"
					name="form__input-phone"
					inputType="tel"
					inputPlaceholder="Введите телефон"
					v-model="formData.phone"
					:required="true"
					:error="errors.phone"
					@validate="debouncedValidatePhone"
				/>

				<InputItem
					class="form__input form__input-email"
					name="form__input-email"
					inputType="email"
					inputPlaceholder="Введите email"
					v-model="formData.email"
					:required="true"
					:error="errors.email"
					@validate="debouncedValidateEmail"
				/>
			</div>

			<TextareaItem
				class="form__input form__input-message"
				name="form__input-message"
				inputPlaceholder="Введите комментарий"
				v-model="formData.message"
				:required="false"
			/>
		</div>

		<div class="form__button">
			<ButtonItem
				type="submit"
				name="Отправить"
			/>
		</div>
	</form>
</template>

<script setup>
import { reactive, nextTick } from 'vue';
import { useDebounce } from '@/composables/useDebounce';
import { EMAIL_REGEXP } from '@/constants/regexp';

const formData = reactive({
	name: '',
	phone: '',
	email: '',
	message: '',
});

const errors = reactive({
	name: '',
	phone: '',
	email: '',
});

const validateName = (value) => {
	if (!value) {
		errors.name = 'Пожалуйста, введите имя';
	} else if (value.length < 2) {
		errors.name = 'Имя должно содержать не менее 2 символов';
	} else {
		errors.name = '';
	}
};

const validatePhone = (value) => {
	if (!value) {
		errors.phone = 'Пожалуйста, введите номер телефона';
	} else if (value.length < 11) {
		errors.phone = 'Номер телефона должен содержать не менее 11 цифр';
	} else {
		errors.phone = '';
	}
};

const validateEmail = (value) => {
	const emailRegex = EMAIL_REGEXP;

	if (!value) {
		errors.email = 'Пожалуйста, введите email';
	} else if (!emailRegex.test(value)) {
		errors.email = 'Некорректный формат email';
	} else {
		errors.email = '';
	}
};

const debouncedValidateName = useDebounce(validateName, 300);
const debouncedValidatePhone = useDebounce(validatePhone, 300);
const debouncedValidateEmail = useDebounce(validateEmail, 300);

const onSubmit = () => {
	console.log('Данные формы:', formData);

	if (!formData.name || !formData.phone || !formData.email) {
		alert('Заполните обязательные поля, пжлст');
		return;
	};

	sendForm();
};

const sendForm = () => {
	console.log("Отправка данных:", formData);
	alert("Данные отправлены :)");

	formData.name = '';
	formData.phone = '';
	formData.email = '';
	formData.message = '';
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

	&__inputs {
		display: flex;
		flex-direction: column;
		gap: 20px;

		&-inner {
			display: flex;
			gap: 20px;
		}
	}

	&__input {
		margin-bottom: 25px;

		&-message {
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
