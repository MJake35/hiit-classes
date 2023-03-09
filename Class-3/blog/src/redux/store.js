import { configureStore } from '@reduxjs/toolkit'
import blogStore from './blogs'

export default configureStore({
    reducer: {
        allBlogs: blogStore
    }

})