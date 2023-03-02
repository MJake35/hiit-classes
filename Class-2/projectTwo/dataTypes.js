// NUMBERS

// math operators

// console.log(2 + 2)
// console.log(10 - 4)
// console.log(10 * 2)
// console.log(10 / 2)
// console.log(10 ** 2)
// console.log(10 % 2)
// console.log(100 / 13)
// console.log(100 % 13)

// NaN

// console.log(2 + true)       // 3
// console.log(2 + false)       // 3
// console.log(2 + "true")     // 2true
// console.log(2 - "true")     // NaN
// console.log("100" - 4)     //  96
// console.log(100 - "4")     // 96
// console.log("10" * 2)       // 20
// console.log("true" * 2)       // NaN
// console.log(("true") * 2)       // NaN
// console.log("10" / 2)       // 5
// console.log("10" ** 2)      // 100
// console.log(10 ** "2")      // 100
// console.log("10" % 2)       // 0

// console.log(100 - - '2')
// console.log(100 - +'2')

// console.log(typeof -"2")

// console.log("2" - -"2")
// console.log("2" + String(2))
// console.log(Number("true"))

// math class
let r = 5
let area = Math.PI * r ** 2
let roundedArea = Math.round(area)
let floorArea = Math.floor(area)
let ceilArea = Math.ceil(area)
let areaToDP = area.toFixed(2)
console.log(area)
console.log(roundedArea)
console.log(floorArea)
console.log(ceilArea)
console.log(typeof areaToDP)
// console.log(Math)
console.log(Math.ceil(Math.random() * 100))



// STRING

// concatenation

let first_name = "Joseph"
let last_name = "Aba"
let country = 'Nigeria'
let age = 40
let height = "6'7"
let weight = 100
let email = "josephaba@hiit.dev"

// const full_name = first_name + last_name
// let full_name = "Joseph" + " " + "Aba"
// console.log(full_name)

// const userDetail = "The name of this user is " + first_name + " \n"
//     + last_name + ". The email is " + email +
//     " and has a nationality of " + country + ". "
//     + first_name + " is " + age + " years old, "
//     + height + " tall and weighs " + weight + "kg."
const userDetail = `The name of this user is ${first_name} ${last_name}. The email is ${email} and has a nationality of ${country}. ${first_name} is ${age} years old, ${height} tall and weighs ${weight} kg.`
console.log(userDetail)

// const text = "Lorem, ipsum dolor sit amet consectetur " +
//     "adipisicing elit. Eius praesentium ratione architecto " +
//     "rem saepe iste eveniet voluptates molestiae " +
//     "dolorum repudiandae?"




// string Indexing
// let full_name = "Joseph" + " " + "Aba"
// let students = ["Joseph", "Aba", "Jethro", "Esther"]
// let allStudents = "Joseph, Aba, Jethro, Esther"
// console.log(full_name[2])
// console.log(full_name[7])       // h, A
// console.log(full_name[9])       // a
// console.log(full_name[15])      // undefined
// console.log(full_name[-1])      // a
// console.log(students[-1])      // a


// string property
// console.log(full_name.length)

// string functions/methods
// console.log(full_name.toUpperCase())
// console.log(full_name.toLowerCase())
// console.log(full_name.indexOf("A"))
// console.log(full_name.split(' '))
// console.log(allStudents.split(','))
// console.log(full_name.slice(4, 9))