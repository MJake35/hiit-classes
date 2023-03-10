import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/blog.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBlog } from "../redux/blogs";

// const Blog = ({ blogs, updateBlog }) => {
const Blog = () => {

    // useParams provides the url for data extraction
    const params = useParams()
    const blogs = useSelector((state) => state.allBlogs.blogs)
    const [blog] = blogs.filter(blog => blog.id === Number(params.id))
    const navigate = useNavigate()
    const [deletePopup, setDeletePopup] = useState(false)
    const updateBlog = useDispatch()

    const handlDelete = () => {
        updateBlog(deleteBlog(blog.id))
        navigate('/')
    }


    return (
        <main className="blog-page">
            <div className="blog-content">
                <h1>{blog?.title}</h1>
                <p className="author">{blog?.author}</p>
                <p className="body">{blog?.body}</p>
            </div>

            <div className="btns">
                <button onClick={() => { navigate('/') }}>Back</button>
                <button onClick={() => setDeletePopup(true)}>Delete</button>
            </div>

            {deletePopup && <div className="delete-popup">
                <div className="pop-up">
                    <p>Do you want to delete?</p>
                    <div className="btns">
                        <button onClick={handlDelete}>Yes</button>
                        <button onClick={() => setDeletePopup(false)}>No</button>
                    </div>
                </div>
            </div>}
        </main>
    );
}

export default Blog;