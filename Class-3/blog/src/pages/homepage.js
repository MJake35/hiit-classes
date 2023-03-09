import '../styles/homepage.css'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

// const Homepage = ({ blogs }) => {
const Homepage = () => {
    const navigate = useNavigate()
    const blogs = useSelector((state) => state.allBlogs.blogs)


    return (
        <main className='homepage'>
            <h1>My Blogs</h1>
            {blogs.length ? (
                <div className="blogs-container">
                    {blogs.map((blog, index) => (
                        <Link to={`/blog/${blog.id}/${blog.title}`} key={index} className='blog'>
                            <p>{blog.title}</p>
                            <p>By: {blog.author}</p>
                            <p>{blog.body}</p>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="no-blog">
                    <p >Oops!!! No Blog Available</p>
                </div>
            )}

            <button className='new-blog' onClick={() => { navigate('/create') }}>Create New Blog</button>

        </main>
    );
}

export default Homepage;