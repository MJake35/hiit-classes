import Blog from "./pages/blog";
import Header from "./components/header";
import Homepage from "./pages/homepage";
import NewBlog from "./pages/newBlogs";
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  const blogs = [
    {
      id: 1,
      title: 'My First blog',
      author: 'Micheal',
      body: 'This is an example of my first blog'
    },
    {
      id: 2,
      title: 'My Second blog',
      author: 'Emmanuel',
      body: 'This is an example of my second blog'
    },
    {
      id: 3,
      title: 'My Third blog',
      author: 'James',
      body: 'This is an example of my third blog'
    },
  ]

  return (
    <div className="App">
      <Header />
      {/* <Homepage blogs={blogs} /> */}
      <NewBlog />
      {/* <Blog /> */}
    </div>
  );
}

export default App;
