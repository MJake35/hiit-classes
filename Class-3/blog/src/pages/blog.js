import { useParams } from "react-router-dom";

const Blog = ({ blogs }) => {

    // useParams provides the url for data extraction
    const params = useParams()
    const blog = blogs.filter(blog => blog.id === Number(params.id))
    return (
        <main>
            <h1>{blog[0].title}</h1>
            <p>{blog[0].author}</p>
            <p>{blog[0].body}</p>
        </main>
    );
}

export default Blog;