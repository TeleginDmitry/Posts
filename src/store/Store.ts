import { configureStore } from '@reduxjs/toolkit'
import PostsReducer from './posts/Posts.slice'

const store = configureStore({
	reducer: {
		posts: PostsReducer,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
