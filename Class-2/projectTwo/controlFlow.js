// let students = ["Joseph", "Aba", "Jethro", "Esther", 'Uche', 'Ayo']

// For Loop
// console.log(students)

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i])
// }

// students.forEach((student) => {
//     console.log(student)
// })

// while loop
// let i = 6

// while (i < students.length) {
//     console.log(students[i])
//     i++
// }

// do while
// let i = 6

// do {
//     console.log(students[i])
//     i++
// }
// while (i < students.length)

// alert and input
// alert('Hello World!!!')

// const user = window.prompt('Enter user')


const scores = [71, 60, 50, 4, 0, 20, 34, 55, 48, 39, 50, 89, 70, 63, 25, 20, 31, 15, 27, 9]
// const value = true

// console.log(scores


// If statementconsole

// if (value === true) {
//     console.log(value)
// }

// if (user === 'Ayo') {
//     alert(`Welcome ${user}`)
// }
// else if (user === 'Joseph') {
//     alert(`Welcome my second user: ${user}`)
// }
// else if (user === 'Aba') {
//     alert(`I know you ${user}, but you have no access`)
// }
// else {
//     alert('Invalid User')
// }

// switch

// switch (user) {
//     case 'Ayo':
//         alert(`Welcome ${user}`)
//         break;
//     case 'Joseph':
//         alert(`Welcome my second user: ${user}`)
//         break;
//     case 'Aba':
//         alert(`I know you ${user}, but you have no access`)
//         break;
//     default:
//         alert('Invalid User')
// }

// scores.forEach(score => {
//     if (score >= 70) {
//         console.log('A')
//     }
//     else if (score >= 60 && score < 70) {
//         console.log('B')
//     }
//     else if (score >= 50 && score < 60) {
//         console.log('C')
//     }
//     else if (score >= 45 && score < 50) {
//         console.log('D')
//     }
//     else if (score >= 40 && score < 45) {
//         console.log('E')
//     }
//     else {
//         console.log('F')
//     }
// })

for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 70) {
        console.log('A')
    }
    else if (scores[i] >= 60 && scores[i] < 70) {
        console.log('B')
    }
    else if (scores[i] >= 50 && scores[i] < 60) {
        console.log('C')
    }
    else if (scores[i] >= 45 && scores[i] < 50) {
        console.log('D')
    }
    else if (scores[i] >= 40 && scores[i] < 45) {
        console.log('E')
    }
    else {
        break;
        // console.log('F')
    }
}