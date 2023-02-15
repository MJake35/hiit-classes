import '../styles/homepage.css'

const Homepage = ({ blogs }) => {

    return (
        <main className='homepage'>
            <h1>My Blogs</h1>
            <div className="blogs-container">
                {blogs.map((blog, index) => (
                    <div key={index} className='allBlogs'>
                        <p>Title: {blog.title}</p>
                        <p>Author: {blog.author}</p>
                        <p>Content: {blog.body}</p>
                    </div>
                ))}
            </div>
            <button>Create New Blog</button>

        </main>
    );
}

export default Homepage;