import { allBlogs } from "../data/allBlogs.js";

const main = document.querySelector('main')

allBlogs.slice(0, 7).forEach((blog, index) => {

    const blog_container = document.createElement('div')
    blog_container.key = index
    blog_container.setAttribute('class', 'blog-container')

    const blog_title = document.createElement('h3')
    blog_title.setAttribute('class', 'blog-title')
    blog_title.innerText = blog.title

    const blog_authur = document.createElement('p')
    blog_authur.setAttribute('class', 'blog-authur')
    blog_authur.innerText = `by: ${blog.authur}`

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


    blog_container.appendChild(blog_title)
    blog_container.appendChild(blog_authur)
    blog_container.appendChild(blog_body)
    blog_container.appendChild(btn_container)
    main.appendChild(blog_container)
})

