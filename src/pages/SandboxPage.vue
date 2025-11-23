<template>
	<div class="sandbox">
		<div class="container">
			<h1 class="sandbox__title">Песочница</h1>

			<div class="sandbox__sections">
				<section class="sandbox__section section">
					<h2 class="section__title">Классы</h2>

					<div class="section__item">
						<ButtonItem
							name="Покажи информацию о книге"
							@click="showInfoBook"
						/>
						<p>{{ boonInfo }}</p>
					</div>

					<div class="section__item">
						<ButtonItem
							name="Добавить книгу в библиотеку"
							@click="addNewBook"
						/>
						<p>Количество книг в библиотеке: {{ library.books.length }}</p>
					</div>
				</section>

				<section class="sandbox__section section">
					<h2 class="section__title">Методы массивов</h2>

					<div class="section__item">
						<ButtonItem
							name="Превратить строку в массив"
							@click="stringToArrayFrom(testString)"
						/>
						<div class="section__row">
							<p>Строка: {{ testString }}</p>
							<p>Массив через ArrayFrom: {{ resultArrayFrom }}</p>
						</div>
					</div>

					<div class="section__item">
						<ButtonItem
							name="Превратить строку в массив"
							@click="stringToArrayOf(testString)"
						/>
						<div class="section__row">
							<p>Строка: {{ testString }}</p>
							<p>Массив через ArrayOF: {{ resultArrayOf }}</p>
						</div>
					</div>

					<div class="section__item">
						<ButtonItem
							name="Найти первое совпадение в массиве"
							@click="findFirstMatchInArray(numbersArray)"
						/>
						<div class="section__row">
							<p>Массив чисел: {{ numbersArray }}</p>
							<p>Итоговые значения послу метода find: {{ resultArrayFind }}</p>
						</div>
					</div>

					<div class="section__item">
						<ButtonItem
							name="Найти индекс первого совпадающего элемента"
							@click="findIndexArray(numbersArray)"
						/>
						<div class="section__row">
							<p>Массив чисел: {{ numbersArray }}</p>
							<p>Итоговые значения послу метода find:
								{{ resultArrayFindIndex }}
							</p>
						</div>
					</div>

					<div class="section__item">
						<ButtonItem
							name="Добавить статичные данные в массив"
							@click="arrayToFill(stringsArray)"
						/>
						<div class="section__row">
							<p>Массив строк: {{ stringsArray }}</p>
							<p>Итоговые значения после метода find:
								{{ resultArrayToFill }}
							</p>
						</div>
					</div>

					<div class="section__item">
						<ButtonItem
							name="Скопировать посление два элемента в начало"
							@click="arrayCopyWithin(stringsArray)"
						/>
						<div class="section__row">
							<p>Массив строк: {{ stringsArray }}</p>
							<p>Итоговые значения после метода copyWithin:
								{{ resultArrayCopyWithin }}
							</p>
						</div>
					</div>

					<div class="section__item">
						<ButtonItem
							name="Проработать массив через итераторы"
							@click="arrayIterators(stringsArray)"
						/>
						<div class="section__row">
							<p>Массив строк: {{ stringsArray }}</p>
							<p>Итоговые значения после метода entries:
								{{ resultArrayEntries }}
							</p>
							<p>Итоговые значения после метода keys:
								{{ resultArrayKeys }}
							</p>
							<p>Итоговые значения после метода values:
								{{ resultArrayValues }}
							</p>
						</div>
					</div>

					<div class="section__item">
						<ButtonItem
							name="Очистить все итоговые массивы"
							theme="secondary"
							@click="clearArrays()"
						/>
					</div>
				</section>

				<section class="sandbox__section section">
					<h2 class="section__title">Методы объектов</h2>

					<div class="section__item">
						<ButtonItem
							name="Копируем свойства исходного объекта в целевой"
							@click="objectAssign(russianWeapons, popularWeapons)"
						/>
						<p>Исходный объект: {{ russianWeapons }}</p>
						<p>Целевой объект: {{ popularWeapons }}</p>
						<p>Итоговый объект: {{ resultObjectAssign }}</p>
					</div>

					<div class="section__item">
						<ButtonItem
							name="Проверяем объекты, одинакоые ли они"
							@click="objectIs(russianWeapons, popularWeapons)"
						/>
						<p>Исходный объект: {{ russianWeapons }}</p>
						<p>Целевой объект: {{ popularWeapons }}</p>
						<p>Результат проверки ссылки на объект: {{ resultObjectIs }}</p>
					</div>

					<div class="section__item">
						<ButtonItem
							name="Устанавливаем прототип другому объекту"
							@click="objectSetPrototypeOf(russianWeapons, popularWeapons)"
						/>
						<p>Исходный объект: {{ russianWeapons }}</p>
						<p>Целевой объект: {{ popularWeapons }}</p>
						<p>Итоговый объект: {{ resultObjectSetPrototypeOf }}</p>
					</div>

					<div class="section__item">
						<ButtonItem
							name="Получаем все символы в объекте"
							@click="objectGetOwnPropertySymbols(russianWeapons)"
						/>
						<p>Исходный объект: {{ russianWeapons }}</p>
						<p>Итоговый объект: {{ resultObjectGetOwnPropertySymbols }}</p>
					</div>

					<div class="section__item">
						<ButtonItem
							name="Проработать объект через итераторы"
							@click="objectIterators(russianWeapons)"
						/>
						<div class="section__row">
							<p>Исходный объект: {{ russianWeapons }}</p>
							<p>Итоговые значения после метода values:
								{{ resultObjectValues }}
							</p>
							<p>Итоговые значения после метода entries:
								{{ resultObjectEntries }}
							</p>
						</div>
					</div>

					<div class="section__item">
						<ButtonItem
							name="Очистить все итоговые объекты"
							theme="secondary"
							@click="clearObjects()"
						/>
					</div>
				</section>

				<section class="sandbox__section section">
					<h2 class="section__title">Методы строк</h2>

					<div class="section__item">
						<ButtonItem
							name="Проверить строку на наличие подстроки"
							@click="stringIncludes(longString)"
						/>
						<p>Строка: {{ longString }}</p>
						<p>Результат проверки на наличие слова "ущерб": {{ resultStringIncludes }}</p>
						<p>Результат проверки на наличие слова "добро": {{ resultStringIncludes2 }}</p>
					</div>

					<div class="section__item">
						<ButtonItem
							name="Проверить строку на наличие конкретных слов в начале"
							@click="stringStartsWith(longString)"
						/>
						<p>Строка: {{ longString }}</p>
						<p>
							Результат проверки на наличие слова "добро": {{ resultStringStartsWith }}
						</p>
						<p>
							Результат проверки на наличие слова "Согласно": {{ resultStringStartsWith2 }}
						</p>
					</div>

					<div class="section__item">
						<ButtonItem
							name="Очистить все итоговые строки"
							theme="secondary"
							@click="clearStrings()"
						/>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import Book from "@/features/library/components/Book";
import Library from "@/features/library/components/Library";

// Константы //
import { numbersArray, stringsArray } from '@/constants/arrays';
import { testString, longString } from '@/constants/strings';
import { russianWeapons, popularWeapons } from '@/constants/objects';
import { alpha, omega } from '@/constants/symbols';

const book = new Book({
	title: "Скотный двор",
	author: "Дж. Оруэлл",
	year: 1984,
	isRead: false
});

const boonInfo = ref('');
const library = reactive(new Library());

// Состояния у массивов //
const resultArrayFrom = ref([]);
const resultArrayOf = ref([]);
const resultArrayFind = ref([]);
const resultArrayFindIndex = ref([]);
const resultArrayToFill = ref([]);
const resultArrayCopyWithin = ref([]);
const resultArrayEntries = ref([]);
const resultArrayKeys = ref([]);
const resultArrayValues = ref([]);

// Состояния у объектов //
const resultObjectAssign = ref({});
const resultObjectIs = ref('');
const resultObjectSetPrototypeOf = ref('');
const resultObjectGetOwnPropertySymbols = ref([]);
const resultObjectValues = ref([]);
const resultObjectEntries = ref([]);

// Состояния у строк //
const resultStringIncludes = ref('');
const resultStringIncludes2 = ref('');
const resultStringStartsWith = ref('');
const resultStringStartsWith2 = ref('');
const resultEndsWith = ref('');
const resultStringRepeat = ref('');

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

// Методы для работы с массивами //
const stringToArrayFrom = (string) => {
	resultArrayFrom.value = [];

	resultArrayFrom.value = Array.from(string);
	console.log(resultArrayFrom);

	return resultArrayFrom;
};

const stringToArrayOf = (string) => {
	resultArrayOf.value = [];

	resultArrayOf.value = Array.of(string);
	console.log(resultArrayOf);

	return resultArrayOf;
};

const findFirstMatchInArray = (array) => {
	resultArrayFind.value = [];

	const findMoreThan1 = `Больше 1: ${array.find(num => num > 1)}`;
	const findMoreThan10 = `Больше 10: ${array.find(num => num > 10)}`;
	const findMoreThan100 = `Больше 100: ${array.find(num => num > 100)}`;
	const findMoreThan1000 = `Больше 1000: ${array.find(num => num > 1000)}`;
	const findMoreThan1000000 = `Больше 1000000: ${array.find(num => num > 1000000)}`;

	const findLessThan1 = `Меньше 1: ${array.find(num => num < 1)}`;
	const findLessThan10 = `Меньше 10: ${array.find(num => num < 10)}`;
	const findLessThan100 = `Меньше 100: ${array.find(num => num < 100)}`;
	const findLessThan1000 = `Меньше 1000: ${array.find(num => num < 10)}`;
	const findLessThan1000000 = `Меньше 1000000: ${array.find(num => num < 1000000)}`;

	const findEqualTo88888 = `Равно 88888: ${array.find(num => num === 88888)}`;

	resultArrayFind.value = [
		findMoreThan1,
		findMoreThan10,
		findMoreThan100,
		findMoreThan1000,
		findMoreThan1000000,
		findLessThan1,
		findLessThan10,
		findLessThan100,
		findLessThan1000,
		findLessThan1000000,
		findEqualTo88888,
	];
	console.log(resultArrayFind);

	return resultArrayFind;
};

const findIndexArray = (array) => {
	resultArrayFindIndex.value = [];

	const findMoreThan1 = `Больше 1: ${array.findIndex(num => num > 1)}`;
	const findMoreThan10 = `Больше 10: ${array.findIndex(num => num > 10)}`;
	const findMoreThan100 = `Больше 100: ${array.findIndex(num => num > 100)}`;
	const findMoreThan1000 = `Больше 1000: ${array.findIndex(num => num > 1000)}`;
	const findMoreThan100000 = `Больше 100000: ${array.findIndex(num => num > 100000)}`;
	const findMoreThan1000000 = `Больше 1000000: ${array.findIndex(num => num > 1000000)}`;

	resultArrayFindIndex.value = [
		findMoreThan1,
		findMoreThan10,
		findMoreThan100,
		findMoreThan1000,
		findMoreThan100000,
		findMoreThan1000000,
	];

	console.log(resultArrayFindIndex);
};

const arrayToFill = (array) => {
	resultArrayToFill.value = [];

	const results = [];

	results.push(`М-ки от 0 до 2: ${[...array].fill("M-16", 0, 2)}`);
	results.push(`Все нули, с первого и до конца: ${[...array].fill(0, 0)}`);
	results.push(`Все единицы: ${[...array].fill(1)}`);
	results.push(`Все звёздочки: ${[...array].fill("*")}`);

	resultArrayToFill.value = results;

	console.log(resultArrayToFill);

	return resultArrayToFill;
};

const arrayCopyWithin = (array) => {
	resultArrayCopyWithin.value = [];

	const results = [];

	results.push(`Скопировал конец в начало: ${[...array].copyWithin(0, length - 2)}`);

	resultArrayCopyWithin.value = results;

	console.log(resultArrayCopyWithin);

	return resultArrayCopyWithin;
};

const arrayIterators = (array) => {
	resultArrayEntries.value = [];
	resultArrayKeys.value = [];
	resultArrayValues.value = [];

	const resultsEntries = [];
	const resultsKeys = [];
	const resultsValues = [];

	for (const [index, element] of [...array].entries()) {
		resultsEntries.push(`Ключ и значение: ${index}: ${element}`);
	}

	for (const key of [...array].keys()) {
		resultsKeys.push(`Ключ: ${key}`);
	}

	for (const value of [...array].values()) {
		resultsValues.push(`Значение: ${value}`);
	}

	resultArrayEntries.value = resultsEntries;
	resultArrayKeys.value = resultsKeys;
	resultArrayValues.value = resultsValues;

	console.log(resultArrayEntries);
	console.log(resultArrayKeys);
	console.log(resultArrayValues);

	return resultArrayEntries, resultArrayKeys, resultArrayValues;
};

const clearArrays = () => {
	resultArrayFrom.value = [];
	resultArrayOf.value = [];
	resultArrayFind.value = [];
	resultArrayFindIndex.value = [];
	resultArrayToFill.value = [];
	resultArrayCopyWithin.value = [];
	resultArrayEntries.value = [];
	resultArrayKeys.value = [];
	resultArrayValues.value = [];
};

// Методы для работы с объектами //
const objectAssign = (target, source) => {
	resultObjectAssign.value = {};

	const result = Object.assign(target, source);

	resultObjectAssign.value = result;

	console.log(resultObjectAssign);

	return resultObjectAssign;
};

const objectIs = (targetObject, sourceObject) => {
	resultObjectIs.value = false;

	const isEqual = Object.is(targetObject, sourceObject);

	if (isEqual) {
		resultObjectIs.value = `Объекты равны, ${true}`;
		console.log("Объекты равны", resultObjectAssign);
	} else {
		resultObjectIs.value = `Объекты не равны, ${false}`;
		console.log("Объекты не равны", resultObjectAssign);
	}
};

const objectSetPrototypeOf = (targetObject, sourceObject) => {
	resultObjectSetPrototypeOf.value = {};

	const result = Object.setPrototypeOf(targetObject, sourceObject);

	resultObjectSetPrototypeOf.value = result;

	console.log(resultObjectSetPrototypeOf);

	return resultObjectSetPrototypeOf;
};

const objectGetOwnPropertySymbols = (object) => {
	resultObjectGetOwnPropertySymbols.value = [];

	const symbolAlpha = alpha;
	const symbolOmega = omega;

	resultObjectGetOwnPropertySymbols.value[symbolAlpha] = 'symbolAlpha';
	resultObjectGetOwnPropertySymbols.value[symbolOmega] = 'symbolOmega';

	const result = Object.getOwnPropertySymbols(resultObjectGetOwnPropertySymbols.value);

	resultObjectGetOwnPropertySymbols.value = result;

	console.log(resultObjectGetOwnPropertySymbols.value);

	return resultObjectGetOwnPropertySymbols.value;
};

const objectIterators = (object) => {
	resultObjectValues.value = [];
	resultObjectEntries.value = [];

	const resultsValues = Object.values(object);
	const resultsEntries = Object.entries(object);

	resultObjectValues.value = resultsValues;
	resultObjectEntries.value = resultsEntries;

	console.log(resultObjectValues);
	console.log(resultObjectEntries);

	return resultObjectValues, resultObjectEntries;
};

const clearObjects = () => {
	resultObjectAssign.value = {};
	resultObjectIs.value = '';
	resultObjectSetPrototypeOf.value = '';
	resultObjectGetOwnPropertySymbols.value = [];
	resultObjectValues.value = [];
	resultObjectEntries.value = [];
};

// Методы для работы со строками //
const stringIncludes = (string) => {
	resultStringIncludes.value = false;
	resultStringIncludes2.value = false;

	const result1 = string.includes('ущерб');
	const result2 = string.includes('добро');

	resultStringIncludes.value = result1;
	resultStringIncludes2.value = result2;

	console.log(resultStringIncludes);
	console.log(resultStringIncludes2);

	return resultStringIncludes, resultStringIncludes2;
};

const stringStartsWith = (string) => {
	resultStringStartsWith.value = false;
	resultStringStartsWith2.value = false;

	const result1 = string.startsWith('добро');
	const result2 = string.startsWith('Согласно');

	resultStringStartsWith.value = result1;
	resultStringStartsWith2.value = result2;

	console.log(resultStringStartsWith);
	console.log(resultStringStartsWith2);

	return resultStringStartsWith, resultStringStartsWith2;
};

const clearStrings = () => {
	resultStringIncludes.value = '';
	resultStringIncludes2.value = '';
	resultStringStartsWith.value = '';
	resultEndsWith.value = '';
	resultStringRepeat.value = '';
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/vars" as *;

.sandbox {
	display: flex;
	flex-direction: column;
	align-items: center;

	&__title {
		margin: 0 auto 20px;
		text-align: center;
	}

	&__sections {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 50px;
	}

	&__section {
		width: 60%;
		padding: 20px;
		border: 3px solid $color-primary;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		row-gap: 20px;
	}

	&__section-title {
		text-align: center;
	}
}

.section {
	&__item {
		width: 100%;
		display: flex;
		flex-direction: column;
		row-gap: 20px;

		&:not(:last-child) {
			&::after {
				content: "";
				width: 100%;
				height: 2px;
				background-color: $color-primary;
			}
		}
	}

	&__title {
		&::after {
			content: "";
			width: 100%;
			height: 2px;
			display: block;
			background-color: $color-primary;
		}
	}

	&__row {
		width: 100%;
		display: flex;
		justify-content: space-between;
		column-gap: 20px;
	}
}
</style>
