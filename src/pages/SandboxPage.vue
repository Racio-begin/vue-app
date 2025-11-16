<template>
	<div class="sandbox">
		<div class="container">

			<button @click="showInfoBook">
				Покажи инфо о книге
			</button>
			<p>{{ boonInfo }}</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Book from "@/features/library/components/Book";

const book = new Book({
	title: "Скотный двор",
	author: "Оруэлл",
	year: 1984,
	isRead: false
});

const boonInfo = ref('');

const showInfoBook = () => {
	boonInfo.value = book.getInfo();
};
</script>

<style lang="scss"></style>
