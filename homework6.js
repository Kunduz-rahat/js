// 1. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму этих чисел.
// const task1 = (array) => {
// //     return array.reduce((acc, item) => acc + item,0)
// // }
// // console.log(task1([5,15,315,2,13,20,9]))

// 2. Вам дан массив с числами [5,12,314,2,13,20,9]. Найдите сумму всех четных чисел

// const task2 = (array) => {
//     return array.reduce((acc, item) => {
//         if (item % 2 === 0){
//             return acc + item
//         }
//         return acc
//     }, 0)
// }
// console.log(task2([5,15,315,2,13,20,9]))

// 3. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму чисел, которые больше 10.
// const task3 = (array) => {
//     return array.reduce((acc, item) => {
//         if (item>10){
//             return acc +item
//         }
//         return acc
//     },0)
// }
// console.log(task3([5,15,315,2,13,20,9]))

// 4. Вам дан массив с числами [3,13,54,15,335, 39]. Найдите разность чисел, которые больше 10.
// const task4 = (array) => array.reduce((acc, item) => item>10? acc -item : acc, 0)
// console.log(task4([3,13,54,15,335, 39]))


// 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Сложите все строки и выведите длину результата.
// const task5 = (array) => {
//     return array.reduce((acc , item) => acc+ item, '').length
// }
// console.log(task5(['Аскар', 'Баяман', 'Калмамат']))

// 6. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат'].
//     Выведите все строки в верхнем регистре, используя map.


// const task6 = array => array.map((item)=> item.toUpperCase())
// console.log(task6(['Аскар', 'Баяман', 'Калмамат']))

// 7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все вторые строки в верхнем регистре

// const task7 = array => array.map((item)=> item[1].toUpperCase())
// console.log(task7(['Аскар', 'Баяман', 'Калмамат']))

//
// 9. Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат'].
//     Используйте заглавные буквы в каждом массиве имен.
//
// const task9 = array =>{
//     return array.map(item => item.slice(0,1).toUpperCase() + item.slice(1, item.length).toLowerCase())
// }
// console.log(task9(['асКар', 'бЯяман', 'калМмамат']))


// 11. Вам дан массив [true, '1234', 325]. Напишите функцию, которая проверяет, все ли элементы
// массива относятся к одному типу данных.

// const task11 = array => {
//     return array.map(item => typeof item ? true : false)
// }
// console.log(task11([true, '1234', 325]))

// 12. Вам дана строка 'тестинг'. Ваша задача - вернуть средний символ слова. Если длина слова нечетная,
//     верните средний символ. Если длина слова четная, вернуть 2 средних символа.

// const task12 = str => str.length % 2 === 0 ? str.slice(str.length / 2 - 1, str.length / 2 + 1) : str.slice(str.length / 2,str.length / 2 + 1)
// console.log(task12('тестинг'))
// console.log(task12('кундуз'))


// 13. Вам дан массив с числами [5, -3, 13, -7, 45]. Верните сумму всех положительных чисел.
// const task13 = (array) => {
//     return array.reduce((acc, item) => (item > 0) ?acc + item :acc, 0)
// }
// console.log(task13([5, -3, 13, -7, 45]))

// 14. Вам дан массив с числами [5, -54, 13, -7, 45, -15, -34].
//     Верните сумму всех отрицательных чисел, которые больше 10.

// const task14 = (array) => {
//     return array.reduce((acc, item) => (item <-10) ?acc + item :acc, 0)
// }
// console.log(task14([5, -54, 13, -7, 45, -15, -34]))


// 15. Вам дан массив с числами [88, 5, 3 , 210, 99] - все числа - euro.
//     Вам нужно обменять эти euro по курсу сома и вывести все числа в сомах.

// const task15 = (numbers) => numbers.map((item) => item * 100,58)
// console.log(task15([88, 5, 3 , 210, 99]))


// 17. Вам дан массив с строками ['apple', 'banana', 'potato']. Добавьте к каждой строке нумерацию.
// const task15 = (array) => array.map((item, idx) =>  item + (idx + 1))
// console.log(task15(['apple', 'banana', 'potato']))

// 20. Вам дан массив с числами [5,15,315,2,13,20,9].
//     Посчитайте среднее арифметическое чисел в массиве.

// const task20 = array =>{
//     return array.reduce((acc, item) => acc + item / array.length, 0)
// }
// console.log(task20([5,15,315,2,13,20,9]))


