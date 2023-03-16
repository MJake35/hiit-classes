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

const login = () => {
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
            notLogin()
        }
        else {
            document.querySelector('p.err-pwd').innerText = 'Password not strong enough'
            notLogin()
        }
    }
    else {
        document.querySelector('p.err-email').innerText = 'invalid email'
        notLogin()
    }

}

const notLogin = () => {
    const removePopup = document.querySelector('.confirm')
    removePopup.remove()
}

const popup = document.createElement('div')
// popup.className = 'status'
popup.setAttribute('class', 'confirm')
popup.innerHTML = '<p>Are you sure you want to login in?</p>'
// console.log(popup)

yes_btn = document.createElement('button')
yes_btn.setAttribute('onclick', 'login()')
yes_btn.innerText = 'Yes'
popup.appendChild(yes_btn)

no_btn = document.createElement('button')
no_btn.setAttribute('onclick', 'notLogin()')
no_btn.innerText = 'No'
popup.appendChild(no_btn)


btn.addEventListener('click', (e) => {
    e.preventDefault()
    document.body.appendChild(popup)
})