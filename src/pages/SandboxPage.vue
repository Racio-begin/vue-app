<template>
	<div class="sandbox">
		<div class="container">

			<button @click="showInfoBook">
				Покажи информацию о книге
			</button>
			<p>{{ boonInfo }}</p>

			<button @click="addNewBook">
				Добаь новую книгу
			</button>
			<p>Количество книг в библиотеке: {{ library.books.length }}</p>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import Book from "@/features/library/components/Book";
import Library from "@/features/library/components/Library";

const book = new Book({
	title: "Скотный двор",
	author: "Оруэлл",
	year: 1984,
	isRead: false
});

const boonInfo = ref('');
const library = reactive(new Library());

const showInfoBook = () => {
	boonInfo.value = book.getInfo();
};

const addNewBook = async () => {
	try {
		await library.addBookAsync(book);
	} catch (error) {
		console.log("Ошибка", error);
	} finally {
		console.log("Так или иначе, процесс добавления книги завершен");
	}
};
</script>

<style lang="scss"></style>
