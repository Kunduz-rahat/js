// Ваша цель - вернуть таблицу умножения для числа, которое всегда является целым числом от 1 до 10. Например,
//     таблица умножения (строка) для числа == 5 выглядит так:
// // function multiTable(number) {
//   let result = ''
//     for (let i=1; i<11; i++){
//         result +=`${i} * ${number} = ${i *number} \n`
//     }
//     return result.slice(0,-1)
// }
//
// console.log(multiTable(6))


// const getRealFloor = (n) => {
//     if (n > 0 && n < 13) {
//         return n - 1
//     } else if (n > 13) {
//         return n - 2
//     } else {
//         return n
//     }
// }
// console.log(getRealFloor(6))
// console.log(getRealFloor(-4))
// console.log(getRealFloor(34))
//
//
// const mouthSize = (animal) => {
//     if (animal === "alligator") {
//         return "small"
//     } else {
//         return "wide"
//     }
// }
// console.log(mouthSize("alligator"))
//
// const digitize = (n) => {
//     return n.toString().split('').reduce((acc, item) => {
//         return [...acc, +item]
//     }, []).reverse()
//
// }
//
// const squareSum = (numbers) => {
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++) {
//         sum = sum + numbers[i] ** 2
//     }
// return sum
// }
// console.log(squareSum([1, 3, 4]))


// const closeCompare =(a, b, margin) =>{
//     if ( a - b = margin){
//         return
//     }
// }
// console.log(closeCompare(2, 5, 3))


// const getAverage = (array) => {
//     let  sum = 0
//     let result = 0
//    for (let i = 0 ; i<array.length; i++){
// sum += array[i]
//        result = sum/array.length
//    }
//    return Math.round(result)
// }
// console.log(getAverage([2,2,2,2]))
//
// const quarterOf = (month) => {
//     if (month > 1 && month<= 3  ){
//         return 1
//     }else if (month >=4 && month<=6){
//         return  2
//     }else if (month>=7 && month<=9){
//         return 3
//     }else if (month >=10 && month<=12){
//         return 4
//     }
// }
// console.log(quarterOf(4))
// console.log(quarterOf(12))
//
// const reverseWords = (str) => {
//     for (let i = str.length - 1; i>=str[0]; i--) {
//     }
//
// }
// console.log(reverseWords("yoda doesn't speak like this"))


// const checkAlive =(health) => health > 0? true: false
// console.log(checkAlive(3))

// const litres =(time) => {
//     return Math.floor(time *0.5- 0.5)
// }
// console.log(litres(12))

//
// const humanYearsCatYearsDogYears = function(humanYears) {
//  let CatYears = 0
//   let DogYears = 0
//
//   if (humanYears ===1)return [1, 15, 15]
//   if (humanYears ===2)return [1, 24, 24]
//   if (humanYears > 2 ){
//     CatYears = 24+ (humanYears -2) *4
//     DogYears = 24+ (humanYears -2) *5
//   }
//   return  [humanYears, CatYears, DogYears];
// }
// console.log(humanYearsCatYearsDogYears(3))



// const sumStr =(a,b)=> {
//   return `${+a+ +b}`
// }
// console.log(sumStr('2', '4'))

// const reverseWords=(str)=>{
//   return str.split(' ').reverse().join(' ')
// }
// console.log(reverseWords("hello world!"))


const flip = (a, b) => {
  if ()  a.sort((c, d) => c<d? 1:-1)
}

