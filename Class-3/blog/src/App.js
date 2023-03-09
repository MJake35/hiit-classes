import Blog from "./pages/blog";
import Header from "./components/header";
import Homepage from "./pages/homepage";
import NewBlog from "./pages/newBlogs";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from "./pages/about";
// import { useState } from "react";
import Error404 from "./pages/Error404";


const App = () => {

  // const [blogs, setBlogs] = useState(
  //   [
  //     {
  //       id: 1,
  //       title: 'My First blog',
  //       author: 'Micheal',
  //       body: 'This is an example of my first blog. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quis eveniet iure vero deserunt obcaecati facere assumenda doloribus eos omnis.'
  //     },
  //     {
  //       id: 2,
  //       title: 'My Second blog',
  //       author: 'Emmanuel',
  //       body: 'This is an example of my second blog. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quis eveniet iure vero deserunt obcaecati facere assumenda doloribus eos omnis.'
  //     },
  //     {
  //       id: 3,
  //       title: 'My Third blog',
  //       author: 'James',
  //       body: 'This is an example of my third blog. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quis eveniet iure vero deserunt obcaecati facere assumenda doloribus eos omnis.'
  //     }
  //   ]
  // )

  // const addBlog = (newBlog) => {
  //   setBlogs([...blogs, newBlog])
  // }

  // const deleteBlog = (id) => {
  //   // const updatedBlog = blogs.filter(blog => blog.id !== id)
  //   // setBlogs(updatedBlog)
  //   setBlogs(blogs.filter(blog => blog.id !== id))
  // }

  return (
    // the browserRouter wrap the app and provides react-router-dom to the app
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* wraps all the routes in out app. Makes it possible to navigate to different pages. */}
        <Routes>
          {/* The route binds the url to the pages */}

          {/* <Route path="/" element={<Homepage blogs={blogs} />} /> */}
          {/* The above is for props while the below is for redux */}
          <Route path="/" element={<Homepage />} />

          {/* <Route path="/create" element={<NewBlog updateBlog={addBlog} blogs={blogs} />} /> */}
          {/* The above is for props while the below is for redux */}
          <Route path="/create" element={<NewBlog />} />

          {/* the colon (:) informs the browser to expect a dynamic value and then saves the value as the name stated after the colon */}

          {/* <Route path="/blog/:id/:blog_title" element={<Blog blogs={blogs} updateBlog={deleteBlog} />} /> */}e
          {/* The above is for props while the below is for redux */}
          <Route path="/blog/:id/:blog_title" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
