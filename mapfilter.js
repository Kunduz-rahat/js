// 1. Вам дан массив двузначных чисел: [15, 64, 75, 43, 65, 63].Найдите сумму каждого числа.

// let task1 = [15, 64, 75, 43, 65, 63]
// let result= task1.map((item) => Number(String(item)[0]) + Number(String(item)[1]))
// console.log(result)

// 2. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию,
//     изменяющую букву а в каждом имени на я и выведите в консоль.

// let task2 = ['Аскар', 'Баяман', 'Калмамат']
// let result = task2.map((item) => item.replace('а', 'я'))
// console.log(result)
//
// 3. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию,
//     которая выводит только те имена, где есть буква к и выведите в консоль.

// let task3 = ['Аскар', 'Баяман', 'Калмамат']
// let result = task3.filter((item) => item.includes('к'))
// console.log(result)

// 4. Вам дан массив: [4, 54, 49]. Сделайте из него массив, состоящий из квадратов этих чисел.
// let task4 = [4, 54, 49]
// let result = task4.map((item)=> item*item)
// console.log(result)

// 5. Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.
// let task5 = [3134, 4, -143, -245, -214]
// let result = task5.filter((item)=> item <0)
// console.log(result)

// 6. Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.
// let task6 = [3, 51, 30, 54, 60]
// let result = task6.filter((item)=> item % 2 === 0)
// console.log(result)

// 7. Вам дан массив ['Бегимай', 'Азат', 'Калмамат'].
//     Оставьте в нем только те строки, длина которых больше 5-ти символов.

// let task7 = ['Бегимай', 'Азат', 'Калмамат']
// let result = task7.filter((item)=> item.length>5)
// console.log(result)

// 8. Вам дан массив [-13, 96, -41, -28, 40]. Посчитайте количество отрицательных чисел в этом массиве.
// let task8 =[-13, 96, -41, -28, 40]
// let result1 = task8.filter((item)=> item<0)
// let result2 = result1.length
// console.log(result2)

// 9. Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа. Затем
// извлеките квадратный корень из этих чисел, если эти числа больше 30.

// const task9 = num => {
//     return num.filter(item => item>0).map((item) => {
//         if (item>30){
//             return Math.sqrt(item)
//         }
//         return item
//     })
// }
//    console.log(task9([3, 51, -30, -54, 60]))



// 10. Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только [55,44,15,49]
// let task10 = [55, 44, 55, 44, 15, 49]
// let result = task10.filter((item, idx)=> task10.indexOf(item)=== idx)
// console.log(result)

// 11. Вам дан массив [NaN, 0, 77, false, -17, '',undefined, 99, null]. Создайте функцию,
//     которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустая строка).

// const task11 = (array) => {
//     return array.filter(item => item)
// }
// console.log(task11([NaN, 0, 77, false, -17, '',undefined, 99, null]))

// 12. Вам дан массив со строками ['Баяман', 'Калмамат']. Поменяйте местами первые и последнюю буквы строк.

// const  task12 = (array) => {
// return array.map((item)=> item[item.length-1].toUpperCase() + item.slice(1, item.length-1) +item[0].toLowerCase())
// }
// console.log(task12(['Баяман', 'Калмамат']))
//
// 13. Вам дан массив с числами [1, 65, 13 , 30, 100] - все числа - доллары. Вам нужно обменять эти доллары по курсу
// сома и вывести все числа в сомах.

// const task13 = (numbers) => numbers.map((item) => item * 85)
// console.log(task13([1, 65, 13 , 30, 100]))


// 15. Вам дан массив с строками ['Оскар', 'Баяман', 'Калмамат']. Добавьте к каждой строке нумерацию.
//
// const task15 = (array) => {
//     return array.map((item, idx) => {
//         return item + (idx + 1)
//     } )
// }
//
// console.log(task15(['Оскар', 'Баяман', 'Калмамат']))

// 14. Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат']. Используйте заглавные буквы в каждом массиве имен.
// const  task14 = (array) => {
// return array.map((item)=> item[0].toUpperCase() + item.slice(1, item.length).toLowerCase())
// }
// console.log(task14(['асКар', 'бЯяман', 'калМмамат']))