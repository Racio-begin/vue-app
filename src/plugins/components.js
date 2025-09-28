import ButtonItem from "@/components/UI/ButtonItem.vue";
import InputItem from "@/components/UI/InputItem.vue";
import TextareaItem from "@/components/UI/TextareaItem.vue";
import DialogItem from "@/components/UI/DialogItem.vue";
import SelectItem from "@/components/UI/SelectItem.vue";

export default {
	// Регистрация часто используемых компонентов //
	install(app) {
		app.component('ButtonItem', ButtonItem);
		app.component('InputItem', InputItem);
		app.component('TextareaItem', TextareaItem);
		app.component('DialogItem', DialogItem);
		app.component('SelectItem', SelectItem);
	}
};
