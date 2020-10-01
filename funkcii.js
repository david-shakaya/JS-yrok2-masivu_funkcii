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
// friends[i] += ' -1'; /* Пришиваем -1(изменяем) елементы масива */
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
*\\
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
console.table(cart); 
*
*
*
*-----------------------------------------------------|  ФУНКЦИИ  |----------------------------------------
*/
/* //  >>>>> Указываем параметры (a, b, c) при обьявлении функции
const add = function (a, b, c) {
  //  >>>>> Указываем что должны сделать параметры a + b * c. И возвращаем результат return
  console.log(a * b);
  return a + b * c;
};
//  >>>>> Обявляем переменную "const f1 =" и вызываем функцию "add(5, 5, 2)".Это аргументы (5, 5, 2)
const f1 = add(5, 5, 2);
console.log(f1);
//
//
// >>>>> Можно записать короче, не обьявляя переменную.
//console.log(add(5, 5, 2));
 */
/*
 *
 *
 *  >>>>> Пример ветвления if внутри функции*/
/* const fun = function (x, y) {
  if (x > y) {
    return 'Ура X больше Y';
  }
  return 'Хмм Х меньше Y';
};

console.log(fun(2, 3)); */
/* 
*
*
* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ЗАДАЧА 
*
// Создай функцию которая будет считать сумму всех чисел в масиве
 const calculateTotalPrice = function (items) {
  let total = 0;
  for (const item of items) {
    total += item;
  }
  return total;
};
 
console.log(calculateTotalPrice([24, 2, 4, 5, 5])); */

/*
 *
 *>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ЗАДАЧА
 *
 * Напиши функцию findLogin  Для поиска логина.
 *  - Если логина нет, вывести сообщение "НЕТ"
 * - Если есть то "ЕСТЬ"
 */
/* const logins = ['sf', 'asdf', 'qwe'];

const findLogin = function (allLpgins, loginTofind) {
  // const log = 'sdfsf';
  let message = '';

  for (const login of allLpgins) {
    if (login === loginTofind) {
      message = 'ПОльзователь найден';
      break;
    } else {
      message = 'Нема';
    }
  }
  return message;
};

console.log(findLogin(logins, 'sf'));
console.log(lfindLogin(logins, 'sfsdsgd')); */
/*
 *
 * >>>>>>>>>>>>> ЗАДАЧА таже что и выше но сделана с помощью .includes()
 */
/* const logins = ['sdfsf', 'qwe', 'asdf'];
const toFindsLog = function (items) {
  let message = '';

  const tofind = logins.includes(items);
  if (tofind === true) {
    return (message = 'ПОльзователь найден');
  } else {
    return (message = 'Нема');
  }
};

console.log(toFindsLog('sdfsf'));
console.log(toFindsLog('qwe'));
console.log(toFindsLog('asddf')); */

// const log = 'qwe';

/*
 *
 *
 *
 *>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ЗАДАЧА
 *
 * Напиши функцию поиска самого маленького числа в масиве.
 */

/* const toFindSmalNumber = function (numbers2) {
  let smalNumbers = numbers[0];

  for (let i = 0; i < numbers.length; i += 1) {
    if (smalNumbers > numbers[i]) {
      smalNumbers = numbers[i];
    }
  }
  return smalNumbers;
};

const numbers = [23, 20, 30, 4, 7, 9, 2, 90, 17];
console.log(`Самое маленькое число: ${toFindSmalNumber(numbers)}`);
 */
/* 


 */
/* *
 *
 *
 *
 *>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Задача с ДЗ 1
 *Напиши функцию getItemsString(array), которая получает массив и возвращает строку, полученную из объединения
  (конкатенации) строк в формате ${номер элемента} - ${значение элемента}\n , где \n - спецсимвол переноса.

Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 
'1 - Mango', а для индекса 2 выведет '3 - Ajax'.

Используйте вспомогательную переменную result для добавления (конкатенации) строк внутри цикла for
 */
/* const getItemsString = function (array) {
  let result = '';
  for (let i = 0; i < array.length; i += 1) {
    result += `${[i + 1]} - ${array[i]}\n`;
  }
  return result;
};

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
 */
/* 
*
*
*
*
*
* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ЗАДАЧА с дз 2
*
*Напиши скрипт подсчета стоимости гравировки украшений. 
*Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0) 
*принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова,
* и возвращающую цену гравировки всех слов в строке.
*
*
* - Решение класическое/
/* const calculateEngravingPrice = function (message, pricePerWord) {
  return message.split(' ').length * pricePerWord;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); */
/*
 *
 * - Решение с помощь стрелочной функции
 *
 */
// const calculateEngravingPrice = (message = '', pricePerWord = 0) =>
//   message.split(' ').length * pricePerWord;
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// );

/* const findLongestWord function = (string) {
} */
/* 
*
* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ЗАДАЧА с дз 3
*
*Напиши функцию findLongestWord(string = ""), которая принимает параметром 
произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово 
в этой строке.
 */

// function findLongestWord(string = '') {
//   const splitStrings = string.split(' ');
//   let lengtWords = '';

//   for (let i = 0; i < splitStrings.length; i += 1) {
//     if (splitStrings[i].length > lengtWords.length) {
//       lengtWords = splitStrings[i];
//     }
//   }
//   return lengtWords;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

/* 
*
*
*
*
*
*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ЗАДАЧА дз 4
*
*
* Форматирование строки в зависимости от длинны строки

Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее если необходимо.

    Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
    Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и добавляет в конец строки троеточие 
    ..., после чего возвращает укороченную версию.

*/

// function formatString(string, maxLength = 40) {
//   let stringSplice = '';

//   for (let i = 0; i < string.length; i += 1) {
//     if (string.length > maxLength) {
//       return (stringSplice = string.slice(0, maxLength) + '...');
//     } else {
//       return (stringSplice = string);
//     }
//   }
//   return stringSplice;
// }

// console.log(formatString('Vestibulum facilisis,lllllllllllllsss  sfsg sgs '));
// console.log(
//   formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
// );
// console.log(formatString(''));
/*
 *
 *
 *
 *
 *
 *>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Задача с дз 5
 *
 * 
 * Функция предикат возвращает true или false
 * 

Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
 Функция проверяет ее на содержание слов spam и sale. Если нашли запрещенное слово то 
 функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут
  быть в произвольном регистре.
 */

// function checkForSpam(message) {
//   message = message.toLowerCase();

//   return message.includes('sale') || message.includes('spam');
// }
// console.log(checkForSpam('JavaScript weekly newsletter'));

// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('SPAM How to earn fast money?'));

/* 
*
*
*
*
*
*
*
*
*
>.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Задача 6 c дз
*
*
Конструкция new Array(10) создаст массив, длинной в 10 элементов. Значения в таком массиве будут отсутствовать, т.е. не будет даже undefined. Поэтому такой массив нужно заполнить значениями для дальнейшего использования.

Есть еще способ создания и заполнения массива - можно создать пустой массив [] и заполнять его методом push()
Быстрая обработка массива

Преимущество создания массива заданной длины перед добавлением в пустой массив в том, что метод push() медленнее обрабатывается.
Если `new Array()` будет содержать более одного аргумента, то будет создан массив с элементами из аргументов.

Пример:

new Array(3);
// [,,]

new Array(1, 2, 3);
// [1, 2, 3]

Быстрое создание массива

Пустой массив. Вызов new Array() создаст пустой массив []. Но это более медленный способ создания 
массива по сравнению с использованием литерала. Если нужен пустой массив, то рекомендуется использовать литерал массива.

const arrFast = []; // быстрее
const arrSlow = new Array(); // медленнее

Создание нового массива на основе преобразования данных из старого массива

ЗАДАЧА

Напиши функцию mapArray(array), принимающую 1 параметр array - массив чисел. 
Функция создает новый массив numbers размером в длину массива array и заполняет его числами из
 массива array умноженными на 10. Для перебора массива и добавления новых значений используй цикл for.
  По завершению перебора массива array возвращается массив numbers.
 */
// function mapArray(array) {
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }
// console.log(mapArray([-2, 0, 2]));
/* 
*
*
*
*
*
*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ЗАДАЧА 7 с дз.
*
*
Создание нового массива на основе отбора из исходного массива

Напиши функцию filterArray(array), принимающую 1 параметр array - массив.
 Функция проверяет каждое значение массива - является ли значение конечным числом (Number.isFinite). 
 Для проверки используй цикл for. Числа добавляются в новый массив numbers с помощью метода push, а не числа - игнорируются. 
 По завершению проверки массива array возвращается массив numbers.
*/
// function filterArray(array) {
//   let numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     // 1) проверяем является ли значение конечным числом (Number.isFinite)
//     // 2) Числа добавляются в новый массив numbers с помощью метода push, а не числа - игнорируются

//     if (Number.isFinite(array[i]) === true) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// }
// console.log(filterArray([-2, 0, 2]));
// console.log(filterArray([1, 2, NaN, Infinity, 2]));
/* 
*
*
*
*
*
*
*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ЗАДАЧА 8 с дз
*
 Вычисление суммы массива

Напиши функцию reduceArray(array), которая принимает числовой массив array. Если массив array не пустой,
 необходимо посчитать сумму всех элементов массива, используя цикл for. Для подсчета суммы 
 используй переменную total. Функция должна возвращать 0 если массив пустой и значение total в противном случае.
 */
// function reduceArray(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     total += array[i];
//   }
//   return total;
// }

// console.log(reduceArray([1, 2, 3]));
// console.log(reduceArray([-2, 0, 2]));
// console.log(reduceArray([1, 2, 2.5]));
/* 
*
*
*
*
*
*
*
* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  ЗАДАЧА 9 с ДЗ
*
*
*
Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:

    проходить проверку на длину от 4 до 16-ти символов включительно
    быть уникален, то есть отсутствовать в массиве logins

Разбей задачу на подзадачи с помощью функций.

    Проверку на отсутствие аргументов или на правильный тип аргументов делать не нужно.

    Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false
     в зависимости от того, попадает ли длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.

    Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин 
    как параметры и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет и false
     если логин уже используется.

    Напиши функцию addLogin(allLogins, login) которая:

    Принимает новый логин и массив всех логинов как параметры
    Проверяет валидность логина используя вспомогательную функцию isLoginValid
    Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
    Если логин валиден, функция addLogin проверяет уникальность логина с помощью функции isLoginUnique
    Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
    Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'

🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это позволяет переиспользовать 
код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.

Предикатные функции возвращают только true или false. Такие функции принято называть начиная с is: isLoginUnique и 
isLoginValid в нашем случае.

    isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
    isLoginValid только проверяет валидный ли логин и возвращает true или false.
    addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления использует результаты
     вызовов других функций - isLoginUnique и isLoginValid.
 */

// //  ПОДЗАДАЧА 1
// function isLoginValid(login, min = 4, max = 16) {
//   return login.length >= min && login.length <= max;
// }

// // console.log(isLoginValid('1kkk'));

// //  ПОДЗАДАЧА 2
// function isLoginUnique(allLogins, login) {
//   for (const allLogin of allLogins) {
//     if (allLogin === login) {
//       return false;
//     }
//   }
//   return true;
// }

// // console.log(isLoginUnique(logins, 'qwerty123'));
// // console.log(isLoginUnique(logins, 'Mango')); //false
// // console.log(isLoginUnique(logins, 'robotGoogles')); //false
// // console.log(isLoginUnique(logins, 'Poавy')); //true
// // console.log(isLoginUnique(logins, 'Poly')); //false

// // ПОДЗАДАЧА 3 (СОЕДИНЯЕМ ВМЕСТЕ)
// function addLogin(allLogins, login) {
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;
//   if (isLoginValid(login) === false) {
//     message = ERROR;
//   } else if (isLoginUnique(allLogins, login) === false) {
//     message = REFUSAL;
//   } else if (isLoginValid(login) === true && isLoginUnique(allLogins, login)) {
//     allLogins.push(login);
//     message = SUCCESS;
//   }

//   return message;
// }
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// console.log(addLogin(logins, 'Pfdfv'));

/* 
*
*
*
*
*
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                                 OБЕКТЫ                          
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
// CОздание обьекта
// const hotel = {} - Литерал объекта - {}
//> const hotel = { name: 'Toyota hotel' };  - ///({ name: 'Toyota hotel' } - Это свойства объекта)///
//  - name: - Ключ или имя свойства. /// 'Toyota hotel' - значение свойства
// const hotel = {
//   name: 'Toyota hotel',
//   stars: 5,
//   capacity: 200,
// };

// //  Обращаемся к имени(ключу ) свойства
// console.log(hotel.name); // Toyota hotel

// // Еще  способ обратится к ключу свойства
// console.log(hotel['name']); // Toyota hotel

// // В случае если свойство обьекта находится в отдельной переменной тогда обращаемся так: hotel['name']
// console.log(hotel['name']);

// hotel.stars = 3; //  ПЕрезаписываем значение свойства,
// hotel.arrow = []; // Добавляем свойства в обект

// Функция внутри обьекта

// const hotel = {
//   name: 'Toyota hotel',
//   stars: 5,
//   capacity: 200,
//   // Создали метод (функцию) которая меняет значение свойства
//   updateName(newName) {
//     this.name = newName;
//   },
// };
// // Вызываем метод (функцию) и перезаписываем значение свойства name
// hotel.updateName('ddd');
// console.log(hotel);

// const hotel = {
//   name: 'Toyota hotel',
//   stars: 5,
//   capacity: 200,
// };
// // Далаем из обьекта масив ключей
// const arrs = Object.keys(hotel); //<<<<<<<<<<<<<
// // Считаем длину масива и выводим в консоль
// console.log(arrs.length);

// // Перебераем масив полученный из обьекта и выводим в консоль
// for (const arr of arrs) {
//   console.log(arr); //Переберает имена(ключи) свойств
//   console.log(hotel[arr]); //Перреберает значение свойств
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ЗАДАЧА
//
// Посчитай сколько всего комнат в доме! Есть обьект в переменной house.
// Для подсчета преобрази обект в масив. О подсчитай сумму
// всех значений свойств объекта

// let house = {
//   bedroom: 4,
//   kitchen: 2, //ОБЪЕКТ
//   bathroom: 1,
//   livingRoom: 1,
// };
// let total = 0;
// const transformArrs = Object.keys(house); // Превращием объект в масив ключей(имен) свойств [bedroom,kit...]

// for (const transformArr of transformArrs) {
//   // Перебераем маcив циклом
//   total += house[transformArr]; // Приплюсовуем значение свойств к тотал
// }
// console.log(total);

// house = Object.values(house); // Превращием объект в масив значений свойств [4,2,11] //<<<<<<<<<<

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ЗАДАЧА
//
//
//
//
//
// Напиши функцию поиска друга по имени в масиве объектов.
// Если нашли выведи сообщение: Нашли друга: ${name}
// Если нет то: Друга ${name} не нашли

// const friends = [
//   { name: 'David', online: false },
//   { name: 'Kivi', online: true },
//   { name: 'Ajax', online: false },
//   { name: 'Oksana', online: true },
// ];

// const fayndFriends = function (allfriends, name) {
//   for (const friend of friends) {
//     if (friend.name === name) {
//       return `Нашли друга: ${name}`;
//     }
//   }
//   return `Друга ${name} не нашли`;
// };

// console.log(fayndFriends(friends, 'Ajax'));
// console.log(fayndFriends(friends, 'Sergey'));

//>>>>>>>>>>>>>>>>>>>>>>>ЗАДАЧА<<<<<<<<<<<<<<<< Получи имена всех друзей в масиве.
// const friends = [
//   { name: 'David', online: false },
//   { name: 'Kivi', online: true },
//   { name: 'Ajax', online: false },
//   { name: 'Oksana', online: true },
// ];

// const allFriendsName = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends`) {
//     names.push(friend.name);
//   }
//   return names;
// };
// console.log(allFriendsName(friends));
// ['David', 'Kivi', 'Ajax', 'Oksana'];

// //>>>>>>>>>>>>>>>>>>>>>>>ЗАДАЧА<<<<<<<<<<<<<<<< Получи имена только тех друзей которые онлайн.

// const friends = [
//   { name: 'David', online: false },
//   { name: 'Kivi', online: true },
//   { name: 'Ajax', online: false },
//   { name: 'Oksana', online: true },
// ];

// const allFriendsName = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       //Здесь можно не писать === true. Ведь условие выполниться только если ===true
//       names.push(friend.name);
//     }
//   }
//   return names;
// };
// console.log(allFriendsName(friends));
/*
 *
 *
 *
 *
 *
 *>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Задача с дз 1 <<<<<<<<<<<<<<<<<<<
 */
// Напиши скрипт, который, для объекта user, последовательно:

//     добавляет поле 'mood' со значением 'happy'
//     добавляет поле 'full time' со значением true
//     заменяет значение 'hobby' на 'skydiving'
//     заменяет значение 'premium' на false
//     в переменную message записывает содержимое объекта user:
//         для переменной keys присваивает массив свойств объекта, используя метод Object.keys()

// с помощью оператора for...of
// в формате ключ:значение
// c переносом строки ('\n')
// let message = '';
// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };
// user.mood = 'happy';
// user['full time'] = true;
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   message += `${key} : ${user[key]} ${'\n'}`;
// }
// console.log(message);
/*
 *
 *
 *
 *
 *
 *
 *>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Задача 2 с дз  <<<<<<<<<<<<
 * 
 * 
 * Подсчет количества свойств в объекте
Напиши функцию countProps(obj), которая возвращает число - количество свойств в объекте.
Циклы не должны использоваться
 */

// const countProps = function (obj) {
//   obj = Object.keys(obj);
//   return (obj = obj.length);
// };

// console.log(countProps({})); // 0
// console.log(countProps({ a: 1, b: 1 })); // 2
/* 
*
*
*
*
*
*
*
Поиск наибольшего значения среди свойств объекта
Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и 
возвращает имя самого продуктивного (который выполнил больше всех задач).
Сотрудники и кол-во выполненных задач содержатся как свойства объекта в формате "имя":"кол-во задач". */

const findBestEmployee = function (employees) {
  // const neimWorkers = Object.keys(employees);
  const velus = Object.values(employees);
  const max = Math.max(...velus);
  let message = '';

  for (const employee in employees) {
    if (employees[employee] === max) {
      message = employee;
    }
  }
  return message;
};

const developers = {
  ann: 29,
  david: 35,
  helen: 100,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// for (const key in hotel) {
//   console.log('Value: ', hotel[key]);
// }

/*
 * Value: "Resort Hotel"
 * Value: 5
 * Value: 100
 */
