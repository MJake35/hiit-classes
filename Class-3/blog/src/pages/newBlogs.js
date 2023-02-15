import '../styles/newBlog.css'
import { useState } from 'react';

const NewBlog = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')
    let blog = {}

    const handleSubmit = (e) => {
        e.preventDefault()
        blog = {
            title: title,
            author: author,
            body: body
        }
        setTitle('')
        setAuthor('')
        setBody('')
        console.log(blog)
    }


    return (
        <main>
            <h1>Create New Blogs</h1>
            <form>
                <label>Title</label> <br />
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /> <br />
                <label>Author</label> <br />
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} /> <br />
                <label>Body</label> <br />
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea><br />
                <button onClick={handleSubmit}>Add Blog</button>
            </form>
        </main>
    );
}

export default NewBlog;