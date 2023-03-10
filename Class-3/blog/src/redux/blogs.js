import { createSlice } from '@reduxjs/toolkit'


export const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogs: [
            {
                id: 1,
                title: 'My First blog',
                author: 'Micheal',
                body: 'This is an example of my first blog. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quis eveniet iure vero deserunt obcaecati facere assumenda doloribus eos omnis.'
            },
            {
                id: 2,
                title: 'My Second blog',
                author: 'Emmanuel',
                body: 'This is an example of my second blog. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quis eveniet iure vero deserunt obcaecati facere assumenda doloribus eos omnis.'
            },
            {
                id: 3,
                title: 'My Third blog',
                author: 'James',
                body: 'This is an example of my third blog. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quis eveniet iure vero deserunt obcaecati facere assumenda doloribus eos omnis.'
            }
        ]
    },
    reducers: {
        addBlog: (state, action) => {
            state.blogs = [...state.blogs, action.payload]

        },

        deleteBlog: (state, action) => {
            state.blogs = state.blogs.filter(blog => blog.id !== action.payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const { addBlog, deleteBlog } = blogSlice.actions

export default blogSlice.reducer