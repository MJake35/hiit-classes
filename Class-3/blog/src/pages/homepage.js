import '../styles/homepage.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Homepage = ({ blogs }) => {
    const [dropDown, setDropdown] = useState(false)


    return (
        <main className='homepage'>
            <h1>My Blogs</h1>
            <div className="blogs-container">
                {blogs.map((blog, index) => (
                    <Link to={`/blog/${blog.id}/${blog.title}`} key={index} className='blog'>
                        <p>{blog.title}</p>
                        <p>By: {blog.author}</p>
                        <p>{blog.body}</p>
                    </Link>
                ))}
            </div>
            <button className='new-blog' onClick={() => { setDropdown(!dropDown); }}>Create New Blog</button>

        </main>
    );
}

export default Homepage;