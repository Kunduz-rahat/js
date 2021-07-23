// Codewars Stage 1:

// String


// строка в обратном порядке
// function solution(str){
// return str.split('').reverse().join('')
// }
// console.log(solution('world'))

// Вывести строку без первого и последнего символа.
// 'eloquent' => 'loquen'

// function removeChar(str) {
//     return str.slice(1, -1)
// }
// console.log(removeChar('eloquent'))

// Определить, является ли строка палиндромом.
// const isPalindrome = str =>{
//     return str.split('').reverse().join('')===str
// }
// console.log(isPalindrome('anna'))


// Определить является ли анаграмой

// const isAnagram = (srt1, srt2) =>{
//     let anagram1 = srt1.toLowerCase().split('').sort((a, b)=> a> b? 1:-1).join('')
//     let anagram2 = srt2.toLowerCase().split('').sort((a, b)=> a> b? 1:-1).join('')
//
//         return anagram1===anagram2
//
//
// }
// console.log(isAnagram('foefet', 'toffee'))


// Number.

// Четное число или не четное (Even или Odd)
// const task1 = (array) => (array.length %2=== 0)? 'Even': 'Odd'


// Определить век
// function century(year) {
//     return Math.ceil(year / 100)
// }
// console.log(century(1705))
//
// Получить из массива число дубликат.
//     Например [1,2,2,3] ответ будет 2

// function findDup( arr ){
//
//     return arr[0]===arr
// }
// console.log(findDup([1,2,2,3]))

// Определить является ли число простым
//
// function isPrime(num){
//     if (num>0 && num % 1===0){
//         return `${num} is prime`
//     }
//     return `${num} is not prime`
// }
//
//
// console.log(isPrime(1))
// console.log(isPrime(-1))


// Array

// Убрать дубликаты из массива и вернуть новый без дубликатов.


// function distinct(a) {
//     return a.filter((item, idx) => a.indexOf(item)=== idx)
// }
// console.log(distinct([1,1,2]))


// Вывести сумму положительных чисел в массиве

// const findSquares = num => {
//     return  `${Math.pow(Math.ceil(num/2), 2)}-${Math.pow(Math.ceil(num/2), 2)-num}`
//
//
// }
// console.log(findSquares(81))


// function sumTriangularNumbers(n) {
//     return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;
// }
//
// console.log(sumTriangularNumbers(6))
//
// function DNAStrand(dna){
//   return (dna.replace(/gi"A"/, /gi"T"/)){
//       return
//     }
// }
//
// console.log(DNAStrand("AAAA"))
//
// const maxRedigit = num =>{
//    if (num >= 100 && num <1000){
//        return +num.toString().split('').sort((a, b)=> b - a).join('')
//    }
//    return null
// };
// console.log(maxRedigit(234))

function maskify(num) {
    return num.slice(0, -4).replace(/./g, "#") + num.slice(-4);
}

console.log(maskify('789787897987979'))