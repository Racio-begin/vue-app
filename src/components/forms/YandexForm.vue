<template>
	<div class="yandex-form">
		<iframe
			:src="formUrl"
			frameborder="0"
			:name="formName"
			width="650"
			height="800"
		></iframe>
	</div>
</template>

<script setup>
import { onMounted } from 'vue';

const formUrl = 'https://forms.yandex.ru/cloud/69049370f47e73a20a4039a6?iframe=1';
const formName = 'ya-form-69049370f47e73a20a4039a6';

onMounted(() => {
	// Динамически загружаем скрипт Яндекс.Форм
	const script = document.createElement('script');
	script.src = 'https://forms.yandex.ru/_static/embed.js';
	script.async = true;
	document.head.appendChild(script);
});
</script>

<style scoped>
.yandex-form {
	margin: 20px 0;
	display: flex;
	justify-content: center;
}
</style>
