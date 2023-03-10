const user = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@gmail.com',
    phone: [{
        home: '0201451254',
        mobile: '8584685745'
    }],
    age: 30,
    children: ['Aba', 'Esther'],
    logChildren: function () {
        return this.children
        // this.children.forEach((child) => {
        //     // console.log(child)
        //     return child
        // })
    }
}

console.log(user.age)
console.log(user.children)
console.log(user.first_name)

console.log(user.logChildren())


// TASK
// 1. Write a function that takes two numbers as inputs and returns the sum of all the even numbers between them. Use a loop and conditional statements to accomplish this task.

// 2. Write a program that prints the first 100 Fibonacci numbers. Use a loop and conditional statements to accomplish this task.

// 3. Write a program that takes an array of integers and returns the largest number in the array. Use a loop and conditional statements to accomplish this task.

// 4. Write a program that takes an array of integers and returns the sum of all the even numbers in the array. Use a loop and conditional statements to accomplish this task.

// 5. Write a program that takes an array of integers and returns a new array with only the even numbers. Use a loop and conditional statements to accomplish this task.