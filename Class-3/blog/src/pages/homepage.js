import '../styles/homepage.css'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Homepage = ({ blogs }) => {
    const navigate = useNavigate()
    const [allBlogs, setAllBlogs] = useState(blogs)

    useEffect(() => {
        setAllBlogs(blogs)
    }, [blogs])


    return (
        <main className='homepage'>
            <h1>My Blogs</h1>
            <div className="blogs-container">
                {allBlogs.map((blog, index) => (
                    <Link to={`/blog/${blog.id}/${blog.title}`} key={index} className='blog'>
                        <p>{blog.title}</p>
                        <p>By: {blog.author}</p>
                        <p>{blog.body}</p>
                    </Link>
                ))}

            </div>

            <button className='new-blog' onClick={() => { navigate('/create') }}>Create New Blog</button>

        </main>
    );
}

export default Homepage;