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