const details = document.querySelectorAll('input')

const btn = document.querySelector('.submit')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    let user = {
        name: "",
        password: ""
    }

    details.forEach(detail => {
        if (detail.type === 'email') user.name = detail.value
        if (detail.type === 'password') user.password = detail.value
    })

    // window.location.href = 'index.html'
})