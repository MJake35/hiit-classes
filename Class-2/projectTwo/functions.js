let a = 5
let b = 6
let peri

const square = (num, another) => {
    let squared = num * another
    return squared
}

const perimeter = () => {
    peri = a + b
    const squaredVal = square(5, 6)
    return peri + squaredVal
}


// const numSquare = square(5)

// console.log(numSquare + 5)
// // console.log(square(5))

console.log(perimeter())
// perimeter()
// console.log(peri)

// const scores = [71, 60, 50, 4, 0, 20, 34, 55, 48, 39, 50, 89, 70, 63, 25, 20, 31, 15, 27, 9]


// const gradeStudents = (scores) => {
//     for (let i = 0; i < scores.length; i++) {
//         if (scores[i] >= 70) {
//             console.log('A')
//         }
//         else if (scores[i] >= 60 && scores[i] < 70) {
//             console.log('B')
//         }
//         else if (scores[i] >= 50 && scores[i] < 60) {
//             console.log('C')
//         }
//         else if (scores[i] >= 45 && scores[i] < 50) {
//             console.log('D')
//         }
//         else if (scores[i] >= 40 && scores[i] < 45) {
//             console.log('E')
//         }
//         else {
//             console.log('F')
//         }
//     }
// }

// gradeStudents(scores)