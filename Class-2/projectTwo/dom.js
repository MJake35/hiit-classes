// const container = document.querySelector("div.password")
// const container = document.querySelectorAll(".password")
// const queryContainer = document.querySelectorAll("div")

// const tagContainer = document.getasByTagName('div')

// console.log(queryContainer)
// console.log(tagContainer)
// console.log(container)

// queryContainer.forEach(element => {
//     console.log(element)
// })

// tagContainer.forEach(element => {
//     console.log(element)
// })

const allInputs = document.querySelectorAll('input')
const btn = document.querySelector('button')
// const pwd_err = document.querySelector('p.err-pwd')
// const email_err = document.querySelector('p.err-email')

// pwd_err.innerHTML = ('Password not strong enough')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('p.err-pwd').innerText = ''
    document.querySelector('p.err-email').innerText = ''

    let email = '';
    let pwd = '';

    allInputs.forEach(element => {
        if (element.id === 'email') email = element.value
        else if (element.id === 'password') pwd = element.value
    })

    if (email.includes('@')) {
        if (pwd.length > 8) {
            let user = { email, password: pwd }
            console.log(user)

            allInputs.forEach(element => {
                element.value = ''
            })
        }
        else {
            document.querySelector('p.err-pwd').innerText = 'Password not strong enough'
        }
    }
    else {
        document.querySelector('p.err-email').innerText = 'invalid email'
    }
})
