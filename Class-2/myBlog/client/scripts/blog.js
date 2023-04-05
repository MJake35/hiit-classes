import { allBlogs } from "../data/allBlogs.js";

let params = new URLSearchParams(window.location.search);
let blogId = params.get('blogId');

const [blog] = allBlogs.filter(blog => blog.id === +blogId)
console.log(blog)

let allComments = blog.comments

const main = document.querySelector('main')

const blog_container = document.createElement('div')
blog_container.setAttribute('class', 'blog-container')

const blog_title = document.createElement('h2')
blog_title.setAttribute('class', 'blog-title')
blog_title.innerText = blog.title
blog_container.appendChild(blog_title)

const blog_authur = document.createElement('p')
blog_authur.setAttribute('class', 'blog-authur')
blog_authur.innerText = 'by: ' + blog.authur
blog_container.appendChild(blog_authur)

const blog_body = document.createElement('p')
blog_body.setAttribute('class', 'blog-body')
blog_body.innerText = blog.body
blog_container.appendChild(blog_body)

const comment_container = document.createElement('div')
comment_container.setAttribute('class', 'comment-container')

const comments = document.createElement('div')
comments.setAttribute('class', 'comments')

const displayComments = () => {
    allComments.forEach(comment => {
        const eachComments = document.createElement('div')
        eachComments.className = 'eachComments'

        const name = document.createElement('h3')
        name.className = 'name'
        name.innerText = comment.name
        eachComments.appendChild(name)

        const body = document.createElement('p')
        body.className = 'body'
        body.innerText = comment.content
        eachComments.appendChild(body)

        comments.appendChild(eachComments)
    })
}

comment_container.appendChild(comments)
displayComments()

const addComment = document.createElement('form')
addComment.className = 'addComment'

const input = document.createElement('input')
input.className = 'newComment'
input.setAttribute('placeholder', 'Add a comment...')
input.type = 'text'
addComment.appendChild(input)

const submit = document.createElement('button')
submit.className = 'sendComment'
submit.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
<path d="M120 896V256l760 320-760 320Zm60-93 544-227-544-230v168l242 62-242 60v167Zm0 0V346v457Z"/>
</svg>`

submit.addEventListener('click', (e) => {
    e.preventDefault()


    if (input.value) {
        const comment = {
            id: allComments.length + 1,
            name: 'User',
            content: input.value
        }

        allComments = [...allComments, comment]
        input.value = ''

        comments.innerHTML = ''
        displayComments()
    }
})

addComment.appendChild(submit)

comment_container.appendChild(addComment)


main.appendChild(blog_container)
main.appendChild(comment_container)