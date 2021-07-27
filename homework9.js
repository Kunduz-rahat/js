// 1. Выведите столбец чисел от 1 до 50.
// for (let i =1; i<51; i++){
//     console.log(i)
// }

// 2. Создайте переменную с пустым массивом, заполните массив 10-ю элементами X с помощью цикла.
// let arr = []
// for (let i = 0; i < 10; i++) {
//
//
//     arr[i] = i + 1
//
// }
// console.log(arr)

// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите все эти элементы в консоль.

// const task3 = [5, 3, 1, 2, 7]
// for (let i = 0; i<task3.length; i++){
//     console.log(task3[i])
// }

// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for найдите произведение элементов этого массива.

// const task4 = [5, 2, 1, 2]
// let product = 1
// for (let i=0; i<task4.length; i++){
// product = product* task4[i]
// }
// console.log(product)

// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.

// for (let i = 1; i < 101; i++) {
// if (i %2 ===0){
//     console.log(i)
// }
//
// }


// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.

// let sum = 0
// for (let i = 1; i <100; i++){
//     sum = sum + i
// }
// console.log(sum)


// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for
//     найдите сумму элементов этого массива. Запишите ее в переменную result.

// let numbers = [2, 4, 5, 6, 8]
// let result = 0
// for ( let i = 0; i<numbers.length; i++){
//     result = result +numbers[i]
// }
// console.log(result)


// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора if
//     выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// let numbers = [3, 4, 6, 12, 3, 5]
// for (let i = 0; i <numbers.length; i++){
//     if (numbers[i] > 3 && numbers[i]<10){
//         console.log(numbers[i])
//     }
//
// }



// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// const task9 = [10,12, -9, 45]
//     let result = 0
//     for (let i = 0; i< task9.length; i++){
//         if (task9[i] > 0){
//             result = result + task9[i]
//         }
//     }
//
// console.log(result)


// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и оператора if
//     проверьте есть ли в массиве элемент со значением, равным 4.
// Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// let array = [5, 1, 3, 7, 6, 15,4, 3, 20]
// for (let i = 0; i<array.length; i++){
//     if (array[i] === 4){
//         console.log("Eсть")
//     }
//     console.log(array[i])
// }


// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000]. Выведите на экран только те числа из
// массива, которые начинаются на цифру 1, 2 или 5.


// let numbers = [10, 20, 30, 40, 135, 2000]
// for (let i = 0; i < numbers.length; i++) {
//     let num = String(numbers[i]);
//     let result = num[0];
//     if (result == 1 || result == 2 || result == 5) {
//         console.log(num);
//     }
// }

//
// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result = ""
// for (let i = 0; i < numbers.length; i++){
//     result = result + "-" + numbers[i]
// }
// console.log(result)



// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится?
//     Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.


// let n =1000
// while (n>50){
//     n = n/2
//     console.log(n)
// }


// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое его элементов
// (сумма элементов, делить на количество).


// let numbers = [1, 2, 3, 7, 6, 9]
// let result = 0
// let sum  = 0
// for (let i=0; i<numbers.length; i++){
//     sum = sum+ numbers[i]
//     result = sum/ numbers.length
// }
// console.log(result)


// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму квадратов элементов этого массива.

// let numbers =[1, 2, 3, 4, 5]
// let sum = 0
// for (let i= 0; i< numbers.length; i++){
//     sum += numbers[i]*numbers[i]
// }
// console.log(sum)

// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12].
//     С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.

// let numbers = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
// for (let i = 0; i< numbers.length; i++) {
//     if (numbers[i] > 0 && numbers[i] < 10) {
//         console.log(numbers[i])
//     }
// }

// 17. Создайте переменную с пустым массивом, заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.

// for (let i = 1; i < 10; i++){
//     console.log(Math.random(i)*10)
// }


// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000
// let sum = 0
// for (let i = 0; i<1001; i++){
//     if (i %3 ===0 || i% 5===0){
//         sum = sum+ i
//     }
// }
// console.log(sum)

// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].
//     Создайте цикл, который выводит нечетные числа, которые больше 10.
// let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// for (let i= 0; i<numbers.length; i++){
//     if (numbers[i] %2===1 && numbers[i]>10){
//         console.log(numbers[i])
//     }
//
// }

// 20. Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр.

// let str = "jzvzszrzpz"
// let result = ''
// for (let i = 0; i < str.length; i++) {
//     result += i % 2 === 1 ? str[i].toUpperCase() : str[i]
// }
// console.log(result)

const task20 = (str)=>{
    let result = ""
    for (let i = 0; i<str.length; i++){
        if (i%2 !==0){
            result += str[i].toUpperCase()
        }else {
            result +=str[i]
        }
    }
    return result
}
console.log(task20("jzvzszrzpz"))
console.log(task20("kunduz"))
console.log(task20("ivan"))


const kerim = (array)=>{
    let  sum = 0
    for (let i = 0; i<array.length; i++){
        sum +=array[i] **2 //// степень умножения в квадрате
    }
    return sum
}
console.log(kerim([45, 23, 5]))
console.log(kerim([45, 4, 6]))

let array = [[23, 54, 65], [54, 98, 67], [78, 4, 3]] /// двумерный массив
let result = []
for (let i=0; i<array.length; i++){
    for (let j= 0; j<array[i].length; j++){
        result = [...result, array[i][j]]
    }
}
console.log(result)