import '../styles/newBlog.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addBlog } from '../redux/blogs';

// const NewBlog = ({ blogs, updateBlog }) => {
const NewBlog = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')
    const [fieldError, setFieldError] = useState(false)
    const navigate = useNavigate()
    let blog = {}
    const blogs = useSelector((state) => state.allBlogs.blogs)
    const updateBlog = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        setFieldError(false)

        if (title && author && body) {
            blog = {
                id: blogs.length + 1,
                title: title,
                author: author,
                body: body
            }

            updateBlog(addBlog(blog))
            console.log(blog)
            navigate('/')
        }
        else {
            setFieldError(true)
        }
    }


    return (
        <main>
            <h1>Create New Blogs</h1>
            <form>
                <label>Title</label> <br />
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /> <br />
                {/* {titleError && <p>Title cannot be empty</p>} */}
                <label>Author</label> <br />
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} /> <br />
                {/* {authorError && <p>Authur cannot be empty</p>} */}
                <label>Body</label> <br />
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea><br />
                {/* {bodyError && <p>Body cannot be empty</p>} */}
                <button onClick={handleSubmit}>Add Blog</button>
                {fieldError && <p>All fields must be filled</p>}
            </form>
        </main>
    );
}

export default NewBlog;

// A Day in the life of an Electrician
// Saheed
// When I wake up, I brush my teeth, take a cold bath, have my breakfast and go to work!

// My Life as a Web Developer
// Micheal
// Web Development is a greate opportunity to have as it brings in a lot of money.