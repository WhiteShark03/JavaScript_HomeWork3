//72.1 Конструкция if-else

//73.1 Операторы больше и меньше
// let test = 0;

// if (test > 10) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//73.2
// let test = 0;

// if (test < 10) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//73.3
// let test = 0;

// if (test >= 10) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//73.4
// let test = 0;

// if (test <= 10) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//74.1 Проверка на равенство
// let test = 10;

// if (test == 10) {
// 	console.log('+++'); //+++
// } else {
// 	console.log('---');
// }

//75.1 Prоверка на неравенство
// let test = 1;

// if (test != 10) {
// 	console.log('+++'); //+++
// } else {
// 	console.log('---');
// }

//76.1 Сравнение переменных
// let test1 = 777;
// let test2 = 666;

// if (test1 > test2) {
// 	console.log('test1 больше test2!');
// } else if (test2 > test1) {
// 	console.log('test2 больше test1');
// }

//76.2
// let test1 = 777;
// let test2 = 666;

// if (test1 == test2) {
// 	console.log('значения равны!');
// } else {
// 	console.log('значения не равны');
// }

//77.1 Равенство строк
// let test1 = 'Aboba';
// let test2 = 'Aboba';

// if (test1 == test2) {
// 	console.log('значения равны');
// } else {
// 	console.log('значения не равны');
// }

//78.1 Равенство строк и чисел
// let test1 = '123';
// let test2 = 123;

// if (test1 == test2) {
// 	console.log('+++'); // сработает это
// } else {
// 	console.log('---');
// }

//79.1 Равенство по значению и типу
// let test1 = '3';
// let test2 = '3';

// if (test1 == test2) {
// 	console.log('+++'); //+
// } else {
// 	console.log('---');
// }

//79.2
// let test1 = '3';
// let test2 = '3';

// if (test1 === test2) {
// 	console.log('+++'); //+
// } else {
// 	console.log('---');
// }

//79.3
// let test1 = 3;
// let test2 = '3';

// if (test1 == test2) {
// 	console.log('+++'); //+
// } else {
// 	console.log('---');
// }

//79.4
// let test1 = 3;
// let test2 = '3';

// if (test1 === test2) {
// 	console.log('+++');
// } else {
// 	console.log('---'); //+
// }

//79.5
// let test1 = 3;
// let test2 = 3;

// if (test1 === test2) {
// 	console.log('+++'); //+
// } else {
// 	console.log('---');
// }

//80.1 Неравенство по значению и типу
// let test1 = '3';
// let test2 = '3';

// if (test1 != test2) {
// 	console.log('+++'); //+
// } else {
// 	console.log('---');
// }

//80.2
// let test1 = '3';
// let test2 = '3';

// if (test1 !== test2) {
// 	console.log('+++'); //+
// } else {
// 	console.log('---');
// }

//80.3
// let test1 = 3;
// let test2 = '3';

// if (test1 != test2) {
// 	console.log('+++'); //+
// } else {
// 	console.log('---');
// }

//80.4
// let test1 = 3;
// let test2 = '3';

// if (test1 !== test2) {
// 	console.log('+++'); //+
// } else {
// 	console.log('---');
// }

//80.5
// let test1 = 3;
// let test2 = 2;

// if (test1 !== test2) {
// 	console.log('+++'); //+
// } else {
// 	console.log('---');
// }

//81.1 Логическое И
// let num = 1;

// if (num > 0 && num < 5) {
// 	console.log('+');
// } else {
// 	console.log('-');
// }

//81.2
// let num = 10;

// if (num >= 10 && num <= 20) {
// 	console.log('+');
// } else {
// 	console.log('-');
// }

//81.3
// let num1 = 1;
// let num2 = 5;

// if (num1 <= 1 && num2 >= 3) {
// 	console.log('+');
// } else {
// 	console.log('-');
// }

//82.1 Логическое ИЛИ
// let num1 = -10;
// let num2 = -10;

// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+++');
// } else {
// 	console.log('---'); //+
// }

//82.2
// let num1 = 0;
// let num2 = 0;

// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+++'); //+
// } else {
// 	console.log('---');
// }

//82.3
// let num1 = 0;
// let num2 = 5;

// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+++'); //+
// } else {
// 	console.log('---');
// }

//82.4
// let num1 = 5;
// let num2 = 5;

// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+++'); //+s
// } else {
// 	console.log('---');
// }

//82.5
// let num1 = -5;
// let num2 = 15;

// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+++'); //+
// } else {
// 	console.log('---');
// }

//82.6
// let num = 1;

// if (num == 0 || num == 1) {
// 	console.log('+++'); //+s
// } else {
// 	console.log('---');
// }

//82.7
// let num = 2;

// if (num == 0 || num == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---'); //+
// }

//82.8
// let num = 2;

// if (num == 0 || num == 1 || num == 2) {
// 	console.log('+++'); //+
// } else {
// 	console.log('---');
// }

//83.1 Приоритет логических операторов
// if (num == 0 || (num > 1 && num < 5)) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// сначала выполнится сравнения с оператором && т.к он имеет приоритет перед оператором ||

//84.1 Группировка условий
// let num = 3;

// if ((num > 5 && num < 10) || num == 20) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//84.2
// let num = 3;

// if (num > 5 || (num > 0 && num < 3)) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//84.3
// let num = 3;

// if (num == 9 || (num > 10 && num < 20) || (num > 20 && num < 30)) {
// 	console.log('+++');
// } else {
// 	console.log('---');
//}

//85.1 Инвертирование логических выражений
// if (!(num1 >= 0 || num2 <= 10)) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//86.1 Условия с булевыми значениями
// let test = true;

// if (test === true) {
// 	console.log('true');
// } else {
// 	console.log('false');
// }

//86.2
// let test = false;

// if (test === false) {
// 	console.log('false');
// } else {
// 	console.log('true');
// }

//87.1 Сравнение значений с булевым типом
// null underfined  (0, -1 -0) NaN '' false

//87.2
// let test = 1;

// if (test == true) {
// 	console.log('+++'); //+
// } else {
// 	console.log('---');
// }

//87.3
// let test = 0;

// if (test == true) {
// 	console.log('+++');
// } else {
// 	console.log('---'); //+
// }

//87.4
// let test = 1;

// if (test == false) {
// 	console.log('+++');
// } else {
// 	console.log('---'); //+
// }

//87.5
// let test = 1;

// if (test != true) {
// 	console.log('+++');
// } else {
// 	console.log('---'); //+
// }

//87.6
// let test = '';

// if (test == false) {
// 	console.log('+++'); //+s
// } else {
// 	console.log('---');
// }

//87.7
// let test;

// if (test == true) {
// 	console.log('+++');
// } else {
// 	console.log('---'); //+
// }

//87.8
// let test = 3 * 'a';

// if (test == true) {
// 	console.log('+++');
// } else {
// 	console.log('---'); //+
// }

//88.1 Сокращенная форма проверки на истину
// let test = true;

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//89.1 Сокращенная форма проверки на ложь
// let test = true;

// if (!test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//89.2
// let test = true;

// if (!test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//89.3
// let test = true;

// if (!test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//90.1 Общая сокращенная форма проверки
// let test = 3;

// if (test) {
// 	console.log('+++'); //true
// } else {
// 	console.log('---');
// }

//90.2
// let test = 'abc';

// if (test) {
// 	console.log('+++'); //+
// } else {
// 	console.log('---');
// }

//90.3
// let test = '';

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---'); //+
// }

//90.4
// let test = 3 * 'abc';

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---'); //+
// }

//90.5
// let test = null;

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---'); //+
// }

//90.6
// let test = false;

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---'); //+s
// }

//90.7
// let test;

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---'); //+
// }

//90.8
// let test = 0;

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---'); //+
// }

//90.9
// let test = '0';

// if (test) {
// 	console.log('+++'); //+
// } else {
// 	console.log('---');
// }

//90.10
// let test = -1;

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---'); //+
// }

//91.1 Сложные условия в сокращенной форме
// let test1 = true;
// let test2 = true;

// if (test1 && test2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//91.2
// let test1 = true;
// let test2 = true;

// if (test1 && !test2) {
// 	console.log('+++');
// } else {
// 	console.log('---'); //+
// }

//91.3
// let test1 = true;
// let test2 = true;

// if (!test1 && !test2) {
// 	console.log('+++');
// } else {
// 	console.log('---'); //+
// }

//91.4
// let test1 = true;
// let test2 = true;

// if (!test1 && test2) {
// 	console.log('+++');
// } else {
// 	console.log('---'); //++
// }

//91.5
// let test1 = true;
// let test2 = true;
// let test3 = true;

// if (test1 && test2 && test3) {
// 	console.log('+++'); //+
// } else {
// 	console.log('---');
// }

//91.6
// let test1 = true;
// let test2 = true;
// let test3 = true;

// if (test1 || (test2 && test3)) {
// 	console.log('+++'); //+
// } else {
// 	console.log('---');
// }

//91.7
// let test1 = true;
// let test2 = true;
// let test3 = true;

// if (test1 || (!test2 && !test3)) {
// 	console.log('+++'); //+
// } else {
// 	console.log('---');
// }

//92.1 Необязательность конструкции else
// let test = 10;

// if (test == 10) {
// 	alert('Yes');
// }

//93.1 Необязательность фигурных скобок
// if (test > 0) console.log('+++');
// else console.log('---');

//93.2
// if (test > 0) console.log('+++');

//94.1 Конструкция else if
// let day = 21;

// if (day >= 0 && day <= 10) {
// 	console.log('1 декада месяца');
// } else if (day > 10 && day <= 20) {
// 	console.log('2 декада месяца');
// } else if (day > 20 && day <= 31) {
// 	console.log('3 декада месяца');
//}

//94.2
// let day = 2121;

// if (day >= 0 && day <= 10) {
// 	console.log('1 декада месяца');
// } else if (day > 10 && day <= 20) {
// 	console.log('2 декада месяца');
// } else if (day > 20 && day <= 31) {
// 	console.log('3 декада месяца');
// } else {
// 	console.log('error');
// }

//95.1 Вложенные конструкции if-else
// let num = 11;

// if (num >= 10 && num <= 99) {
// 	var str = String(num);
// 	var numRes = +str[0] + +str[1];
// 	if (numRes <= 9) {
// 		console.log('сумма цифр однозначна');
// 	} else {
// 		console.log('сумма цифр двухзначна.');
// 	}
// }

//96.1 Конструкция switch-case
// let lang = prompt('Choose the language: ru(Русский) en(English) de(Deutsch )');

// switch (lang) {
// 	case 'ru':
// 		console.log('Русский язык выбран, Добро пожаловать!');
// 		break;
// 	case 'en':
// 		console.log('English selected');
// 		break;
// 	case 'de':
// 		console.log('Deutsche Sprache gewählt');
// 		break;
// 	default:
// 		console.log('Language not supported');
// 		break;
// }

//97.1 Необязательность break в конструкции switch-case

//98.1 Тернарный оператор
// let num = 1;
// let res = num >= 0 ? '1' : '2';
// console.log(res);

//99.1 Логические операции
// let a = 2 * (3 - 1);
// let b = 6 - 2;
// console.log(a == b);

//99.2
// let a = 5 * (7 - 4);
// let b = 1 + 2 + 7;
// console.log(a > b);

//99.3
// let a = 2 ** 4;
// let b = 4 ** 2;
// console.log(a != b);

//100.1 Функция confirm
// let age = confirm('Вам есть 18?');
// if (age == true) {
// 	alert('Ты уже можешь ходить на горшок сам!');
// } else {
// 	alert('Тебе сюда: https://www.kinopoisk.ru/series/585100/ ');
// }

//101.1 Область видимости переменных в if-else
// let age = 17;

// if (age >= 18) {
// 	let adult = true;
// 	console.log(adult);
// } else {
// 	let adult = false;
// 	console.log(adult);
// }

//102.1 Нюансы области видимости переменных в конструкциях if-else
// let age = 17;
// let adult;

// if (age >= 18) {
// 	let adult = true;
// 	console.log(adult);
// } else {
// 	let adult = false;
// 	console.log(adult);
// }

//102.2
// let age = 17;
// let adult;

// if (age >= 18) {
// 	adult = true;
// } else {
// 	adult = false;
// }

// console.log(adult);

//102.3
// let age = 17;
// let res;

// if (age >= 18) {
// 	if (age <= 23) {
// 		res = 'от 18 до 23';
// 	} else {
// 		res = 'больше 23';
// 	}
// } else {
// 	res = 'меньше 18';
// }

// console.log(res);

//102.4
// let age = 19;
// let res;

// if (age >= 18) {
// 	res;

// 	if (age <= 23) {
// 		res = 'от 18 до 23';
// 	} else {
// 		res = 'больше 23';
// 	}
// } else {
// 	res = 'меньше 18';
// }

// console.log(res);

//103.1 Проверка частей часа через if-else
// let min = 55;

// if (min >= 0 && min <= 14) {
// 	console.log('1 chetvert');
// } else if (min >= 15 && min <= 29) {
// 	console.log('2 chetvert');
// } else if (min >= 30 && min <= 44) {
// 	console.log('3 chetvert');
// } else if (min >= 45 && min <= 59) {
// 	console.log('4 chetvert');
// }

//104.1 Проверка длины строк и массивов
// let arr = [77, 123, 21];

// if (arr.length >= 3) {
// 	let res = arr[0] + arr[1] + arr[2];
// 	console.log(res);
// } else {
// 	console.log('error');
// }

//105.1 Проверка символов строки
// let str = 'Aomine';

// if (str[0] == 'A') {
// 	console.log('Yes');
// }

//105.2
// let str = 'Teoshi Tex';
// let last = str[str.length - 1];

// if (last == 'x') {
// 	console.log('Yes');
// }

//105.3
// let str = 'Bobe text for examplb';

// if (str[0] == 'A' || str[0] == 'B') {
// 	console.log('YEs');
// }

//106.1 Проверка цифр числа
// let num = 735140;
// let str = String(num);

// if (str[str.length - 1] == 0) {
// 	console.log('Yes');
// }

//106.2
// let num = 1254;
// let str = String(num);
// let last = str[str.length - 1];

// if (last == 0 || last == 2 || last == 4 || last == 6 || last == 8) {
// 	console.log('Четное');
// } else {
// 	console.log('Нечетное');
// }

//107.1 Проверка остатка от деления
// let num = 7;

// if (num % 2 === 0) {
// 	console.log('Четное число ' + (num % 2));
// } else {
// 	console.log('Нечетное число');
// }

//107.2
// let num = 9;

// if (num % 3 === 0) {
// 	console.log('Yes');
// } else {
// 	console.log('No');
// }

//108.1 Поиск ошибок в коде с условиями
// let num1 = 1;
// let num2 = 2;

// if (num1 + num2 === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//108.2
// let num1 = '1';
// let num2 = '2';

// if (+num1 + +num2 === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//108.3
// let num1 = '1';
// let num2 = '2';

// if (Number(num1) + Number(num2) === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//108.4
// let num = 123;

// if (String(num)[0] == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//108.5
// let num = 123;

// if (String(num)[0] == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//108.6
// let num = 123;

// if (String(num)[0] == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//108.7
// let num = 123;
// let first = String(num)[0];

// if (first == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//108.8
// let num = 12;

// if (String(num).length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//108.9
// let num = 12;
// let str = String(num);

// if (str.length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//108.10
// let num = 12;

// if (String(num).length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//108.11
// let num = 12;

// if (String(num).length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//108.12
// let num = 12;

// if (String(num).length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//108.13
// let num = '123033';
// let str = String(num);

// let sum1 = +num[0] + +num[1] + +num[2];
// let sum2 = +num[3] + +num[4] + +num[5];

// if (sum1 == sum2) {
// 	console.log('суммы равны');
// } else {
// 	console.log('суммы не равны');
// }

//109.1 Практика на условия if-else
// let month = prompt('Введите число от 1 до 12: ');

// if (month == 12 || month == 1 || month == 2) {
// 	alert('Winter');
// } else if (month == 3 || month == 4 || month == 5) {
// 	alert('Spring');
// } else if (month == 6 || month == 7 || month == 8) {
// 	alert('Summer');
// } else if (month == 9 || month == 10 || month == 11) {
// 	alert('Autumn');
// } else {
// 	alert('error');
// }

//109.2
// let str = 'abcde';

// if (str[0] == 'a') {
// 	console.log('Yes');
// } else console.log('No');

//109.3
// let num = 12345;
// let numStr = String(num)[0];

// if (numStr == 1 || numStr == 2 || numStr == 3) {
// 	console.log('Yes');
// } else console.log('No');

//109.4
// let num = 123;
// let numStr = String(num);

// console.log(+numStr[0] + +numStr[1] + +numStr[2]);

//109.5
// let num = 253226;
// let numStr = String(num);

// let sum1 = +numStr[0] + +numStr[1] + +numStr[2];
// let sum2 = +numStr[3] + +numStr[4] + +numStr[5];

// if (sum1 == sum2) {
// 	console.log('Yes');
// } else console.log('No');

