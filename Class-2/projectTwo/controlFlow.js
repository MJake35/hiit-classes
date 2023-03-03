let students = ["Joseph", "Aba", "Jethro", "Esther", 'Uche', 'Ayo']

// For Loop
// console.log(students)

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i])
// }

students.forEach((student) => {
    console.log(student)
})

// while loop
let i = 6

while (i < students.length) {
    console.log(students[i])
    i++
}

// do while
// let i = 6

do {
    console.log(students[i])
    i++
}
while (i < students.length)