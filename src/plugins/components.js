import ButtonItem from "@/components/UI/ButtonItem.vue";
import InputItem from "@/components/UI/InputItem.vue";
import TextareaItem from "@/components/UI/TextareaItem.vue";
import MyDialog from "@/components/UI/MyDialog.vue";

export default {
	// Регистрация часто используемых компонентов //
	install(app) {
		app.component('ButtonItem', ButtonItem);
		app.component('InputItem', InputItem);
		app.component('TextareaItem', TextareaItem);
		app.component('MyDialog', MyDialog);
	}
};
