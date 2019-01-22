// -------------------------- Home work 2 --------------------------
// -------------------------- Дорошенко Никита Андреевич --------------------------


// // Преобразование примитивов. Задачи.
// // #1 
// let a = 0 || 'string'; // равно 'string', потому что 'string' == true
// // #2
// let a = 1 && 'string'; // равно 'string', потому что оба true, по этому показывает последнее
// // #3
// let a = null || 25; // равно 25, потому что null == false, а 25 == true
// // #4
// let a = null && 25; // равно null, потому что null == false, а 25 == true
// // #5
// let a = null || 0 || 35; // равно 35, потому что null и 0 == false, а 35 == true
// // #6
// let a = null && 0 && 35; // равно null, потому что null == false и находится первый в строке

// #7
12 + 14 + '12', // равно 2612, потому что 12 + 14 = 26, и так как есть '12' идет переобразование в строку
// #8
3 + 2 - '1', // равно 4, потому что строка преоброзована к числу
// #9
'3' + 2 - 1, // равно 31, потому что плюс и минус одинаковы по приоритету, поэтому сначало идет преобразование в строку, а потом вычитание числа
// #10 
true + 2, // равно 3, так как true всегда равна 1, то получается 1 + 2 = 3
// #11
+'10' + 1, // равно 11, так как +'10' переобразовуется в число 10 из-за +
// #12
undefined + 2, // равно NaN, так как undefined == NaN
// #13
null + 5, // равно 5, потому что null == 0 -> 0 + 5 = 5
// #14 
true + undefined; // равно NaN, так как undefined == NaN

//If else. Задачи.
// #1
let exp = 'hidden';

if (exp == 'hidden') {
	console.log('visible')
} else {
	console.log('hidden');
};

// #2
let number = 2;

if (number == 0) {
	console.log(1)
} else if (number < 0) {
	console.log('less than zero')
} else {
	console.log(number *= 10)
};

// #3
let car = {
	name: 'Lexus',
	age: 4,
	create: 2008,
	needRepair: false
};

if (car.age > 5) {
	console.log('Need Repair')
}

if (car.age > 5) {
	car.needRepair = true
}

console.log(car)

// #4
let item = {
	name: 'Intel core i7',
	price: '100$',
	discount: '15%'
}

if (item.discount) {
	item.priceWithDiscount = +item.price.replace('$', '') - +item.discount.replace('%', '') / 100 * +item.price.replace('$', '') 
} else {
	console.log(item.price)
}

console.log(item)

// #5

let product = {
    name: 'Яблоко',
    price: '10$'
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (product.price.replace('$', '') >= min && product.price.replace('$', '') <= max) {
	console.log(product.name)
} else {
	console.log('товаров не найдено')
}


// Тернарный оператор. Switch case. Задачи.
// #1
let a 
// if (a === ‘block’) {
// 	console.log(‘block’)
// } else if (a === ‘none’) {
// 	console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
// 	console.log(‘other’)
// }
switch (a) {
	case 'block':
		console.log('block');
		// more actions...
		break;
	case 'none':
		console.log('none');
		// more actions...
		break;
	case 'inline':
		console.log('inline');
		// more actions...
		break;
	default:
		console.log('other')
}

// #2
// #2.1
exp == 'hidden' ? console.log('visible') : console.log('hidden')

// #2.2
number == 0 ? console.log(1)
	: number < 0 ? console.log('less than zero') 
		: console.log(number *= 10)

// #2.3
car.age > 5 ? car.needRepair = true : car.needRepair = false
console.log(car)