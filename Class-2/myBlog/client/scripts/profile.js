import { allBlogs } from "../data/allBlogs.js"

const user = 'Uche'

const blogs = allBlogs.filter(blog => blog.authur === user)

console.log(blogs)

const main = document.querySelector('main')

const profile = document.createElement('div')
profile.className = 'profile'
main.appendChild(profile)

const welcomeMsg = document.createElement('h2')
welcomeMsg.className = 'welcome'
welcomeMsg.innerText = `Hi, ${user}`
profile.appendChild(welcomeMsg)

const userBlogs = document.createElement('div')
userBlogs.className = 'userBlogs'
main.appendChild(userBlogs)

blogs.forEach((blog, index) => {

    const blog_container = document.createElement('div')
    blog_container.key = index
    blog_container.setAttribute('class', 'blog-container')

    const blog_title = document.createElement('h3')
    blog_title.setAttribute('class', 'blog-title')
    blog_title.innerText = blog.title

    const blog_body = document.createElement('p')
    blog_body.setAttribute('class', 'blog-body')
    blog_body.innerText = blog.body

    const btn_container = document.createElement('div')
    btn_container.setAttribute('class', 'btn-container')
    const view_btn = document.createElement('button')
    view_btn.innerText = 'View'

    view_btn.addEventListener('click', () => {
        let params = new URLSearchParams();
        params.set('blogId', blog.id);
        window.location.href = `blog.html?${params.toString()}`
    })
    btn_container.appendChild(view_btn)

    userBlogs.appendChild(blog_title)
    userBlogs.appendChild(blog_body)
    userBlogs.appendChild(btn_container)
})