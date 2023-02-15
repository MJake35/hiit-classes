import '../styles/homepage.css'
import { useEffect, useState } from 'react'

const Homepage = ({ blogs }) => {
    // let name = 'James'
    const [name, setName] = useState('James')
    const [dropDown, setDropdown] = useState(false)

    // const handleClick = () => {
    //     setName('Micheal')
    //     // console.log(name)
    // }

    // useEffect(() => {
    //     console.log('dom re-rendered for name')
    //     console.log(name)
    // }, [name])

    // useEffect(() => {
    //     console.log('dom re-rendered for dropdown')
    //     console.log(dropDown)
    // }, [dropDown])

    return (
        <main className='homepage'>
            <h1>My Blogs</h1>
            {/* <p>{name}</p>
            <button onClick={handleClick}>Change Name</button> */}
            <div className="blogs-container">
                {blogs.map((blog, index) => (
                    <div key={index} className='allBlogs'>
                        <p>{blog.title}</p>
                        <p>By: {blog.author}</p>
                        <p>{blog.body}</p>
                    </div>
                ))}
            </div>
            <button className='new-blog' onClick={() => { setDropdown(!dropDown); }}>Create New Blog</button>

        </main>
    );
}

export default Homepage;