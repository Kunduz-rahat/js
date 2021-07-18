///// объекты/

// let user ={
//     name: "Kunduz",
//     age: 18,
//     "happy birthday" : "today"
// }
// console.log(user.name)
// console.log(user["name"])
// console.log(user["happy birthday"])
//
// const car ={
//     color :"red",
//     model: "Tesla",
//     year: 2021
// }
// console.log(car)
// car.wheels =4
// car.color="magenta"
// delete car.color
// console.log(car)

//
// const book ={
//     name : "Romeo and Julieta",
//     author : "William Shakespeare"
// }
// let item = "name"
// console.log(book[item])
// let item = "name"
// const book ={
//     [item] : "Romeo and Julieta",
//     author : "William Shakespeare"
// }
//
// console.log(book)

// const user ={
//     name: "Ivan",
//     age : 18,
//     address : {
//         email: "ivan@gmail.com",
//         website : "ivan.com",
//         phone : "+996 000 000 0000"
//     }
// }
// console.log(user)
// console.log(user.name)
// console.log(user.address.website)

// const movie ={
//     title : "Avatar",
//     year : 2009,
//     actors : ["Mirber Apabekov", " Oman", "Ivan"]
// }
// console.log(movie.actors[1])




// const task3 = (array) =>{
//     return array.map(item => item.id)
// }
// console.log(task3( [{id: 1},{id: 2},{id: 3},{id: 4}]))

// const task3 = (array) =>{
//     return array.reduce((acc, item) => {
//         return [...acc, item.id]
//     }, [])
//
// }
// console.log(task3( [{id: 1},{id: 2},{id: 3},{id: 4}]))

// const task3 = (array) =>{
//     return array.reduce((acc, item) => {
//         return acc.concat(item.id)
//     }, [])
//
// }
// console.log(task3( [{id: 1},{id: 2},{id: 3},{id: 4}]))


// const task11 =(array) =>{
//     return array.reduce((acc, item, index) => {
//         return {...acc, [`field${index+1}`]:item}
//     }, {})
// }
// console.log(task11([true,1,'wow','you are smart, bro']))
// Напишите функцию, которая принимает объект, как аргумент и возвращает новый объект. Только с полями, у которых тип значения - строка;
// const task12 = (obj) =>{
//   return Object.keys(obj).reduce((acc, item) =>{
//       if (typeof obj[item] === "string"){
//           return {...acc, [item]: obj[item]}
//       }
//       return  acc
//   } , {})
// }
// console.log(task12({ name: 'Baha', isAdmin: true }))



// const user ={
//     name : "ivan",
//     age : 67,
//     job: "ex-president"
// }
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

//
//
// Напишите функцию, которая принимает объект, как аргумент и возвращает новый массив с именами ключей - значение, которых false

// const task13 =(obj) =>{
//     return Object.keys(obj).reduce((acc, item) =>{
//         if (obj[item]){
//             return acc
//         }
//         return [...acc, item ]
//     }, [])
// }
// console.log(task13({ isAdmin: false, isBaha: true }))



//
// Напишите функцию, которая принимает массив объектов и возвращает объект с ключами
// взятыми из полей token и значения объекта. Каждый объект содержит уникальный ключ в token
//
// const task2 = array =>{
//     return array.reduce((acc, item, idx) => {
//         return {...acc, [`${idx +1}`] : {...item, token : +item.token}}
//     }, {})
// }
// console.log(task2([{token: '1'},{token: '2', value:23},{token: '3', name:'superman'},{token: '4'}]))
// Напишите функцию, которая принимает массив строк и возвращает объект с ключом - строка и значением - количество повторений этой строки в первом объекте

const task3 = arr=>{
    return arr.reduce((acc, rec)=> {
        return {...acc, [rec]: arr.filter(item => item ===rec).length}
    }, {})
}
console.log(task3(['a','b', 'a']))