

const loginForm = document.querySelectorAll('form input')
const btn = document.querySelector('button')
const loginDetails = []

btn.addEventListener('click', (e) => {
    e.preventDefault()
    let loginObj = {
        email: '',
        password: ''
    }

    loginForm.forEach(tag => {
        switch (tag.className) {
            case 'email':
                loginObj.email = tag.value
                break
            case 'pw':
                loginObj.password = tag.value
                break
        }
        tag.value = ''
    })
    loginDetails.push(loginObj)
    console.log(loginDetails)
})