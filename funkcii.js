// Масивы
// Узнать длину масива можно с помощью свойства .length
/* const friends = ['kivi', 'david', 'alex', 'ajax'];
console.log(friends.length); /* >.length - узнает длину масива  */
// console.table(friends); */
/*> Показывает масив в виде таблицы. Индекс слева свойство справа  */
// *
// *
// Обращаемся к элементу масива
// const friends = ['kivi', 'david', 'alex', 'ajax'];
// console.log(friends[2]);
/* В квадратных скобках индекс масива к которому обращяемся[alex]
 *
 */
// friends[1] = 'qweqwe'; /* перезаписываем елемент масива под индексом 1 */
// console.table(friends);
/*
 *
 * - Перебор (итерация ) масива c помощю цыкла.
 * -for - Если нужен индекс и нужно изменить елемент масива
 * for...of - если не нужен индекс и ничего изменять не нужно
 */
// const friends = ['kivi', 'david', 'alex', 'ajax'];
// const lengthIndex = friends.length; /* Переменная с длиной индекса */
// for (let i = 0; i < lengthIndex; i += 1) {
/*i < lengthIndex - Указали, что i менше длины индекса масива  */
//   friends[i] += ' -1'; /* Пришиваем -1(изменяем) елементы масива */
// }
// console.log(friends);

// const friends = ['kivi', 'david', 'alex', 'ajax'];
// for (const friend of friends) {
/* >>>>>> Конструкция помогает перебрать елементы масива */
//   console.log(friend);
// }
/*
 *
 *
 *---------------------------------------------ЗАДАЧА */
// Посчитать общую сумму чисел
// const cart = [200, 4, 4, 2];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);
//   total += cart[i];
// }
// console.log('Сумма:', total);

// ТАЖЕ ЗАДАЧА только через -for...of
// const carts = [200, 4, 4, 2];
// let total = 0;
// for (const cart of carts) {
//   total += cart;
// }
// console.log(total);

/* -------------------------------------Задача АНАЛОГИЧНАЯ но(с процентами)
Посчитать общую сумму чисел в масиве. От каждого числа в масиве отминусовать 10 процентов.
Вывести на экран перечень чисел со скидкой и общую сумму без скидки.
Вычесление процентов (Число / 100) * скидку% */
//  const cart = [200, 4, 4, 2];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//   total = cart[i] + total;
//   discount = (cart[i] / 100) * 10;
//   console.log(cart[i] - discount);
// }
// console.log(total);
/*
 *
 *
 *
 *
 *----------------------------------------------ЗАДАЧА
 *Напиши скрипт который подсчитает сумму всех четных чисел в масиве
 */
/* const numbers = [2, 4, 10, 1, 47, 12, 7, 8];
let total = 0;
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
  if (numbers[i] % 2 === 0) {
    total += numbers[i];
  }
}
console.log('Четное!', total); 
*
*
*
*
------------------------------------------------ЗАДАЧА
*Напиши скрипт поиска логина
*-Если логин не правилный, вывести сообщение Пользователь НЕ найден
*-Если логин верный,"Пользователь Найден".
*/
// ВАРИАНТ ЧЕРЕЗ for
/* const log = ['wewerw', 'sdfdf', 'ff3', 'sfsfww32'];
const loginTofind = 'ff3';
let message;

for (let i = 0; i < log.length; i += 1) {
  if (log[i] === loginTofind) {
    message = 'Пользователь Найден';
    break;
  }
  message = 'Пользователь НЕ найден';
}
console.log(message); 
*
*
*
* - ВАРИАНТ ЧЕРЕЗ for...of*/

/* const log = ['wewerw', 'sdfdf', 'ff3', 'sfsfww32'];
const loginTofind = 'sdfdf';
let message;
for (const login of log) {
  if (loginTofind === login) {
    message = 'Пользователь Найден';
    break;
  }
  message = 'Пользователь НЕ найден';
}
console.log(message);
 *
 *
 * 
 * - Вариант решения через метод includes*/
/* 
const log = ['wewerw', 'sdfdf', 'ff3', 'sfsfww32'];
const loginTofind = 'sdfdf';
let message;
if (log.includes(loginTofind) === true) {
  console.log('Пользователь Найден');
} else {
  console.log('Пользователь НЕ найден');
}
*
*
*
*
*------------------------------------------------ЗАДАЧА
* - Напиши скрипт поиска самого маленького числа в масиве
*- При условии что числа не повторяются 
 */

/* const numbers = [100, 6, 10, 20, 5, 54];
let min = numbers[0];

for (const number of numbers) {
  if (min > number) {
    min = number;
  }
}
console.log(min);
*
* 
*
*
* - Метод .slice() - способен обрезать строку
*
*  - Метод .join() - способен сшить в строку элементы масива и поставить разделитель, наприм(,)
*
* ----------------------------------------------ЗАДАЧА
*Напиши скрипт который обьеденяет все элементы масива в одно
строковое значение. Пусть элементы будут разделены запятой как в примере:
kivi, david, alex, ajax
*/
/* const friends = ['kivi', 'david', 'alex', 'ajax'];
let string = '';

for (const friend of friends) {
  string += friend + ', ';
}
// string.slice(0, -1); Означает: Обреж строку с индекса под номером 0 по последний -1
string = string.slice(0, -1);
console.log(string);
 *
 *
 * 
 */
// ОПТИМАЛЬНОЕ решение задачи с помощью .join()

/* const friends = ['kivi', 'david', 'alex', 'ajax'];
const string = friends.join(', ');
console.log(string);
 *
 *
 * 
 * 
 * ----------------------------------------------Задача
 * Напиши скрипт который меняет буквы в строке из нижнего реистра в верхний и наобород.
 * 
 *  ------.split() Метод разбивает строку в массив, разделяя строку на подстроки. Можно
 * разбить по буквам .split(''), по пробелам .split(' '), по запятым .split(',') и тд.
 */
/*
let strings = 'jAVA sCRIPT';
strings = strings.split('');
let result = '';

for (const string of strings) {
  if (string === string.toUpperCase()) {
    result += string.toLowerCase();
  } else {
    result += string.toUpperCase();
  }
}
console.log(result);
 *
 *
 * 
 * 
 * 
 *----------------------------------------------Задача
 * - Делаем slug - (kak-kupit-bong-deshevo) в URL из названия статьи.
 * - Название состоит из букв и пробелов. 
 * -Что мы делаем: 
 * - ставим символы d нижний регистр .toLowerCase();
 * - Разбиваем строку по пробелам и создаем масив .split(' ');
 * - Соединяем все строки масива в одну и ставим разделитель .join('-');
 */

/* const title = 'У Лукоморья дуб зеленый И 10 БЕРЕЗ';
const normalized = title.toLowerCase();
const word = normalized.split(' ');
const slug = word.join('-');
console.log(slug); */
/*
 *
 *-----------------------Эта же задача но написана короче */
/* 
const title = 'У Лукоморья дуб зеленый И 10 БЕРЕЗ';

const slug = title.toLowerCase().split(' ').join('-');
console.log(slug);
 *
 *
 * 
 * 
 * 
 * 
 * ---------------------------------------Задача
 *  - Напиши скрипт который считает сумму элементов двух масивов.
 * --- Метод .concat() - сшивает 2 и более масивов с цифрами в один
 */
/* 
const numbersOne = [23, 2, 10, 5];
const numbersTwo = [10, 5, 5];

const arrs = numbersOne.concat(numbersTwo);
let total = 0;

for (const arr of arrs) {
  total += arr;
}
console.log(total);
 */
/*
 *
 *
 *
 * ----Метод .splice() - Позволяет удалить или добавить элементы в масив
 *
 */
// Удаляем элемент масива >>> .splice(index - элемента, количество удаляемых елементов)
/* let cart = ['карточка-1', 'карточка-2', 'карточка-3'];
const metod = cart.splice(1, 1);
console.table(cart);
 */
// Заменяем элемент масива >>> .splice(index - элемента, количество удаляемых елементов, элементы которые добавляем);
/* const cart = ['карточка-1', 'карточка-2', 'карточка-3'];
const metod = cart.splice(1, 0, 'новая карта', 'новая карта-2');
console.table(cart); */
