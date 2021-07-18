// let num = 5
// console.log(num)
//
// / let a = 10
// let b = 2
// let c = 5
// console.log( a + b + c )

// let a = 100
// let b = 2
// console.log( a * b )


// let a = 67
// let b = 7
// console.log(  a % b )

// let a = 10
// let b = 2
// console.log( a + b )
// console.log( a - b )
// console.log( a * b )
// console.log( a / b )


// let c = 15
// let d = 2
// let result = c + d
// console.log(result)

// let a = 30
// let b = 15
// let c = a + b
// let d = 4
// console.log( c % d )


// let a = 17
// let b = 10
// let c = a - b
// let d = 5
// let result = c + d
// console.log(result)


// let a = "10"
// let b = "99"
// let result = a + b
// console.log(result)


// let name = "Аскар"
// let number = 10
// let result = name + number
// console.log( result )

// let a = 20
// let b = 10
// a = a + b
// console.log( a )


// let a = 20
// let b = 10
// b = a - b
// console.log(b)

// let a = 90
// let b = 2
// a = a + b
// console.log(a)

// let a = 50
// let b = 5
// a = a * b
// console.log( a )


// let a = 660
// let b = 2
// a = a / b
// console.log( a )


// let a = 999
// let b = 9
// console.log( a % b )


// let a = 104
// let b = 10
// console.log( a % b )


// let a = 23
// let b = 5
// console.log( a % b )

//
// let a = 20
// let b = 21
// console.log( a > b )

// let a = 20
// let b = 21
// console.log( a < b )

// Интерполяция и конкатенация


// let name = "Kunduz"
// console.log( name
//
//     )

//
// let age = 30
// console.log( age )


// let str = " Привет, мир!"
// console.log( str )


// let str1 = "Привет,"
// let str2 = "мир!"
// console.log( str1 + " " + str2)


// let name = "Kunduz"
// console.log( "Привет, " + name)

// let age = 30
// console.log( "Мне " + age + "лет")

// let a = "Земля"
// let b = 365
// let c = "7 млдр"
// let d =  "Солнце"
// console.log( `В нашем году ${b} дней.  Днем у нас светит ${d}. Население планеты ${a} составляет ${c} человек.`)


// let a = "Welcome"
// let b = "Ivan"
// console.log( a + "," +" " + b + "!")

// let a = 50
// console.log( typeof a)
// //
// let a = 10
// let b = 35
// let result = a + b + ""
// console.log(typeof result)

// let a = "10"
// console.log(typeof a)

//
// let a = "Kunduz"
// console.log(typeof a)

// let a = 67
// console.log(typeof a)

// let a = 56
// let b = 45
// console.log( a > b )
// console.log( a < b )


// let str = "информатика"
// console.log(str.length)


// let str = "Мы выполняем домашнее задание"
// console.log(str.split(" ")[2].length)
//
//
// split применяется только к строкам, разбивая строку на массив
//

// 1. if / else
// if (условие) {
//     // код, который будет запущен, только если условие истинно
// } else {
//     // иначе этот код будет запущен
// }
// if( 1===7 ){
//     console.log(4)
//
// } else if (0===5){
//
//     console.log(8)
// }
// else {
//     console.log(90)
// }

// console.log(false&&false)

//

// // класнная работа 5 июля 2021 года
// let a = 43
// if (a % 3===0 && a % 5===0){
//     console.log('fizzbuzz')
// }else if( a % 3 ===0) {
//     console.log('fizz')
// } else if (a % 5 ===0){
//     console.log('buzz')
// }else {
//     console.log(a)
// }


// let a = 34
// if (a%2===0){
//     console.log('Четное число')
// }else {
//     console.log('Нечетное число')
// }
// let a = 34
// console.log (a % 2 === 0 ? 'Четное число' : 'Нечетное число')


// Массивы - набор данных

//
// let numbers = [32, 45, 56, 67,87]
// let emptyArray = []
//
// let users = ["Aigerim", "Bilai", "Kunduz", "Dima"]
// users[4]="Ivan"
// users[1]="Fika"
// console.log(users)
// console.log(users.length)
// console.log(users[0])

//
// let str = 'Lorem ipsum, deolor sit amet'
// let srt2= 'Olan'
// console.log(str)
// console.log(str.length)
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())
// console.log(str.split("")) // разделение по буквам
// console.log(str.split(" ")) // разделение по словам
// console.log(str.split(",")) // разделение по запятам и так далее
//
// console.log(str.substr(1, 4)) // от 1 индекса берет 4 индекса
// console.log(str.substring(2, 4)) // от 2 индекса  до 4 индекса аналогично методу substr () выше, за исключением того,
// // что конечный индекс не включается в возвращаемую строку.
//
// console.log(str.concat(srt2, "Misha"))
// console.log(str.indexOf('e'))
// console.log(str.indexOf('E'))
// console.log(str.lastIndexOf('e'))
// console.log(str.includes('amet'))
// console.log(str.lastIndexOf(','))
// console.log(str.lastIndexOf(','))
//
// let example = ' ivanov '
// console.log(example.length)
// console.log(example.trim().length) // убирает пробелы в начале и в конце
//
// let letter = 'lorem ipsum dolor'
// console.log(letter.replace('o', '*')) // заменяет значение
// console.log(letter.replace(/o/gi, '*')) // заменяет все значение

// классная работа 6 июля 2021

// let a = 5
// if (a % 5 === 0){
//     console.log('Кратный к 5')
// }else {
//     console.log('Некратный к 5')
// }
// let str = 'lorem ipsum'
// if (str.includes('a')){
//     console.log('yes')
// }else {
//     console.log('net')
// }
// let str1 = 'IT Dubay'
// if (str1.includes('a')){
//     console.log('yes')
// }else {
//     console.log('net')
// }
// let str2 = 'Mockow'
// if (str2.includes('a')){
//     console.log('yes')
// }else {
//     console.log('net')
// }


// // Functions
//
// function sum(a, d) {
//     return a + d
// }
//
// console.log(sum(18, 23))
// console.log(sum(19, 65))
// console.log(sum(18, 34))
//
// function square(num) {
//     return num * num
// }
//
// console.log(square(4))
// console.log(square(8))
// console.log(square(78))
//
// function checkSymbol(str) {
//     if (str.includes('a')) {
//         return 'yes'
//     }
//         return 'net'
//
// }
// console.log(checkSymbol('mish'))
// console.log(checkSymbol('apple'))

// function checkNumber(a){    // имя которое получает значение это параметр
//     if (a > 0){
//         return 'positive'
//     }else if (a < 0){
//         return 'negative'
//     } return '0'
//
// }
// console.log(checkNumber(2))
// console.log(checkNumber(-2))
// console.log(checkNumber(0)) // фактическое значение которое передается называется аргументом
//
// Напишите функцию, которая принимает два числа и возвращает произведение этих двух чисел.
//

// Напишите функцию, которая принимает имя и возвращает строку по шаблону: Hello my dear {name}
// function greeting(name){
//     return `Hello my dear ${name} `
// }
// console.log(greeting('Ivan'))

// Напишите функцию, которая принимает все, что угодно и возвращает его тип данных:
//
// function task3(a){
//     return typeof a
// }
// console.log(task3(4))
// console.log(task3('ivan'))
// console.log(task3(false))
//
// Напишите функцию, которая принимает два числа, если первое число больше второго, вывести: a больше b,
//     если второе больше первого, то вывести : b больше a, иначе: Они равны

// function comparison(a,b) {
//     if (a > b) {
//         return `${a} больше ${b}`
//     } else if (a < b) {
//         return `${b} больше ${a}`
//     } else return 'Они равны'
// }
//     console.log(comparison(1,4))
//     console.log(comparison(8,4))
//     console.log(comparison(8,8))

// Напишите функцию, которая принимает число и проверяет
// его кратность пяти. Ответ представить в виде true или false:

// function task5(a) {
//   return  a %5 === 0
// }
// console.log(task5(25))

// Напишите функцию, которая принимает строку и выводит длину строки:
//
// function task6(a){
//     return (a.length)
// }
// console.log(task6('ivan'))

// Напишите функцию, которая принимает строку и выводит последний символ в этой строке:
//
// function task6(word){
//     return word[word.length-1]
// }
// console.log(task6(' Hello everyone'))

// Напишите функцию, которая принимает число и выводит квадратный корень этого числа

// function task7(num){
//     return Math.sqrt(num)
// }
// console.log(task7(25))


// Напишите функцию, которая принимает число n и выводит целое число в диапазоне от -n до n :

// function task8(num){
//     return Math.floor(Math.random()*num*2 -num)
// }
// console.log(task8(8))

// Напишите функцию, которая принимает число n и выводит количество цифр в числе :

// function task9(n){
//     return String(n).length
// }
// console.log(task9(56))

// function task10(a, b,c , d){
//     return Math.min(a, b, c, d)
// }
// console.log(task10(23, 56, 76,86))
// console.log(task10(98, 56, 45,86))

// Реализуйте функцию finalValue, которая вычисляет итоговую оценку
// ученика на основе двух параметров: оценки за экзамен и количества законченных проектов.
//
//     Функция принимает два аргумента:
//
//     exam — оценка за экзамен, число от 0 до 100; projects — количество проектов,
//     число от 0 и выше. Функция возвращает: число (итоговую оценку).
//
// Есть четыре возможных итоговых оценки:
//
//     100, если оценка за экзамен выше 90 или есть больше 10 проектов
//
// 90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
//
// 75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
//
// 0 в любом другом случае
//
// Вот как должна работать ваша функция:
//
//     пример вызова // что должна вернуть функция при таком вызове

// function task11(exam, project){
//     if (exam>90 || project>10){
//         return 100
//     }else if (exam>75 && project>=5){
//         return 90
//     }else if (exam>50 && project>=2){
//         return 75
//     }return 0
// }
//
// console.log(task11(76, 10))
// console.log(task11(91, 11))
// console.log(task11(51, 3))
// console.log(task11(11, 11))
// console.log(task11(1, 1))


// 8 июля 2021


//
// let numbers = [10, 20 ,30]
// numbers[0] = numbers[0]*numbers[0]
// numbers[1] = numbers[1]*numbers[1]
// numbers[2] = numbers[2]*numbers[2]
// console.log(numbers)


/// .map()
// let numbers = [10, 20, 30]
// let newArray = numbers.map((item) => item* item)
// console.log(newArray)
//
//
// let number = [10, 20, 30]
// let newArray2 = numbers.map((item) => item+ item)
// console.log(newArray2)


// let number = [10, 20, 30]
// let newArray2 = number.map((item) => item=== 20? item*item : item)
// console.log(newArray2)

//
// let names = ['ivan', 'petya', 'vasya', 'sasha']
// let result = names.map((item) => item.toUpperCase())
// console.log(result)


// .filter()

// let numbers = [34, 67, 24, 67, 98]
// let result = numbers.filter((item) => item >40)
// console.log(result)
//
// let names =['pikachu', 'chermander', 'bulbazavr', 'ivi']
// let result = names.filter((item) => item.length >8)
// console.log(result)


//// REDUCE //////////////
//


////// .map()
////// .filter()
///// .lastIn


//
// let names = ['Ivan' , 'Aybek', 'Mirbek']
// let result = names.reverse()
// console.log(result)
// console.log(names)


// let names = ['Ivan' , 'Aybek', 'Mirbek']
// let result = names.join('')
// console.log(names)
// console.log(result)


// .sort()
//
//
// let numbers = [23, 56, 3, 6, 8, 33, 57, 22]
// let result = numbers.sort((a, b) => a-b)
// console.log(result)

// let names = ['Darya', 'Lida', 'Anna', "Uylya"]
// let result = names.sort((a, b) => a>b? 1:-1)
// console.log(result)

//  const pallindrome = str=>{
//     return str.split('').reverse().join('') === str
//  }
//
// console.log(pallindrome('topot'))
// console.log(pallindrome('topot1'))


// const isAnagram = (srt1, srt2)=>{
//     let word1 = srt1.split('').sort((a, b)=> a>b? 1: -1).join('')
//     let word2 =  srt2.split('').sort((a, b)=> a>b? 1: -1).join('')
//     return  word1 === word2
// }
// console.log(isAnagram('банка', 'кабан'))
// console.log(isAnagram('банкаa', 'кабан'))

//
//
// const task = (array) => {
//     return array.map((item)=> {
//         if (item % 5 === 0 && item % 3 === 0){
//             return 'fizzbuzz'
//         }else  if (item % 5 === 0){
//             return 'buzz'
//         }else  if (item % 3 === 0){
//             return 'fizz'
//         }
//         return  item
//     })
// }
// console.log(task([1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20]))


//
// function basicOp(operation, value1, value2)
// {
//     basicOp(value1 + value2)
// }
// console.log(basicOp(()))

//
// function rentalCarCost(d) {
//     if (d >= 7) {
//         return d * 40 - 50
//     } else if (d >= 3) {
//         return d * 40 - 20
//     }
//         return d * 40
// }
// console.log(rentalCarCost(7))
// console.log(rentalCarCost(8))
// console.log(rentalCarCost(9))
// console.log(rentalCarCost(10))
// console.log(rentalCarCost(2))


// function array(arr) {
// if (arr.split(',').length < 3){
//     return null
// }
//     return  arr.split(',').slice(1,-1).join(' ')
// }
// console.log(array('1, 2, 3, 4'))
// console.log(array(''))
// console.log(array('1, 2'))
//
//

/// 12 июля  2021
// function  fizzbuzz(n){
//     let array = Array(n).fill(0).map((item, idx) => idx + 1)
//     return array.map(item => {
//         if (item %15 === 0 ){
//             return 'FizzBuzz'
//         }else  if (item % 3 === 0 ){
//             return 'Fizz'
//         }else if (item % 5 === 0){
//             return 'Buzz'
//         }
//         return item
//     })
// }


// function squareDigits(num){
//     return +num.toString().split('').map((item) => item * item).join('')
//
// }
// console.log(squareDigits(435))


// const findShort =(s) =>{
// return s.split(' ').sort((a, b) => a.length -b.length)[0].length
// }
// console.log(findShort("Let's travel abroad shall we"))
//
// Напишите функцию, которая принимает массив и возвращает наименьшее число в массиве.
// const task1 = (array) => {
//     return array.reduce((acc, item) => {
//         if (item < acc){
//             return item
//         }
//         return acc
//             }, array[0])
// }
// console.log(task1([3, 7, 34, 2]))

// Напишите функцию, которая принимает строку и возвращает строку в алфавитном порядке.

// function task2(str) {
// return str.toLowerCase().split('').sort((a, b) => a>b ? 1:-1).join('')
// }
// console.log(task2('Hello'))


// Напишите функцию, которая принимает строку и повторяем каждый ее символ 2 раза.

// const task6 = str => {
//     return str.split('').map((item) => item+item).join('')
// }
// console.log(task6('test'))


// const task6 = str => {
//     return str.split('').reduce((acc, item) => acc +item+item, '')
// }
// console.log(task6('test'))


///// 13 july


const findDup = (arr) => {
    return arr.find((item, idx) => {
        if (arr.indexOf(item) !== idx) {
            return item
        }
    })

}
console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6]))