const user = 'James'
let dropdownState = false

const header = document.querySelector('header')
const header_btn = document.querySelector('header button')


header_btn.innerHTML = `<p>${user}</p>`

const icon = document.createElement('div')
icon.setAttribute('class', `icon icon-${dropdownState}`)
icon.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
    <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
</svg>
`
header_btn.appendChild(icon)

const dropdown = document.createElement('div')
dropdown.setAttribute('class', `dropdown dropdown-${dropdownState}`)

const profile = document.createElement('a')
profile.setAttribute('href', 'profile.html')
profile.innerText = 'Profile'

const login = document.createElement('a')
login.setAttribute('href', 'login.html')
login.innerText = 'Login'

const signup = document.createElement('a')
signup.setAttribute('href', 'signup.html')
signup.innerText = 'Sign Up'

dropdown.appendChild(login)
dropdown.appendChild(signup)
dropdown.appendChild(profile)
header.appendChild(dropdown)


header_btn.addEventListener('click', () => {
    icon.classList.remove(`icon-${dropdownState}`)
    dropdown.classList.remove(`dropdown-${dropdownState}`)
    dropdownState = !dropdownState
    icon.classList.add(`icon-${dropdownState}`)
    dropdown.classList.add(`dropdown-${dropdownState}`)
})
