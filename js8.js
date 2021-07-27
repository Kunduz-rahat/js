// Task 1
// На входе два одномерных массива. В каждом массиве всегда по два элемента.
//     Верните третий массив результат которого будет сумма элементов предыдущих
// Input: [2,4], [1,3]
// Actions:
//     Output: [3,7]
//
// Input: [1,7], [9,3]
// Actions:
//     Output: [10, 10]


// const task1 = (array1, array2) =>{
//     return [array1[0] + array2[0], array1[1]+ array2[1]]
// }
//
// console.log(task1([1,7], [9,3]))

// Напишите функцию, которая принимает массив чисел и возвращает массив этих чисел умноженных на два


// const task2 = (array) =>{
//     return array.map((item) => item * 2)
// }
// console.log(task2([1,2,3,4,5]))

// /Task 4
// Напишите функцию, которая принимает массив чисел и возвращает массив строк по
// шаблону <div>{number}</div>    {id: 2}]] и возвращает массив этих id


// const task4 = (array) => {
// return array.map((item) => `<div>${item}<div>`)
// }
// console.log(task4([1,2]))


// Напишите функцию, которая принимает массив строк и возвращает массив строк с четным количеством букв

// const task5 = (array) => {
//     return array.filter((item) => item.length % 2 === 0)
// }
// console.log(task5(['ab', 'abc', 'abcd']))

// Напишите функцию, которая принимает массив чисел и возвращает
// массив чисел умноженных на два, которые делятся на 10 без остатка

// const task6 = (array) =>{
// return array.map((item) => item *2 ).filter((item) => item %10 === 0)
//
// }
// console.log(task6([1,2,3,7,10,5]))

// 7Напишите функцию, которая принимает массив булевых значений и возвращает массив только со значениями true

// const task7 = (array) =>{
// return array.filter(item => item)
// }
// console.log(task7([true,false,true,true]))



// 8Напишите функцию, которая принимает массив значений в т.ч и значения undefined и
// возвращает массив только без значений undefined
// const task8 = (array) =>{
//    return array.filter((item) => item !==undefined)
// }
// console.log(task8( [true, false, true,true, undefined, true, undefined]))

// Напишите функцию, которая принимает массив чисел и возвращает их сумму. Использовать

// const task9 = (array) =>{
//     return array.reduce((acc,item) => acc+ item, 0)
// }
// console.log(task9([1,2,3,4,5]))

//
// Напишите функцию, которая принимает массив булевых значений и возвращает
// результат логического И над ними. Использовать reduce
// Логическое И - это операция &&

// const task10 = (array) =>{
// return array.reduce((acc, item) => acc && item, true)
// }
// console.log(task10([true,true,true,true]))


// Вам задан массив - верните среднее число массива.
// (сумма всех элементов деленное на количество элементов)

// const task14 = (array) =>{
// return array.reduce((acc, item) => (acc +item) / array.length, 0)
// }
// console.log(task14([4, 6]))


// Напишите функцию, которая получает массив функций и начальное значение, как аргументы. Функция должна
// вернуть результат выполнения всех функций в массиве поочередно, используя начальное значение. Используйте reduce.

//
// const task15 = (array, inicial) =>{
// return array.reduce((acc, item)=> item(acc), inicial)
// }
// console.log(task15( [ (a) => a + 2, (a) => a * 5, (a) => a - 5 ], 3))
// console.log(task15([ (a) => a - 1, (a) => a * 2 ], 5))



// const findSquares = num => {
//     return Math.ceil(num/2) * Math.ceil(num/2) -Math.floor(num/2)*Math.floor(num/2)
//
//
// }
// console.log(findSquares(9))
// console.log(findSquares(81))



// const  task11 = (str, num) =>{
// return str.split('').reduce((acc, item) => item.length / num)
// }
// console.log(task11("petya", 2))


