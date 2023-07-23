import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGetPostsThunk, IPost } from 'interfaces/post.interface'
import { getPosts } from './Posts.actions'

interface CounterState {
	posts: IPost[] | null[]
	count: number
	error: string | null
	isLoading: boolean
	isError: boolean
}

const initialState: CounterState = {
	posts: [],
	count: 0,
	isLoading: false,
	isError: false,
	error: null,
}

export const PostsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(
			getPosts.rejected,
			(state, { payload }: PayloadAction<any>) => {
				state.isLoading = false
				state.error = payload
				state.isError = true
			}
		)
		builder.addCase(
			getPosts.fulfilled,
			(state, { payload }: PayloadAction<IGetPostsThunk>) => {
				state.posts = payload.posts
				state.count = payload.count
				state.isLoading = false
				state.error = null
				state.isError = false
			}
		)

		builder.addMatcher(isLoadingAction, state => {
			state.isLoading = true
		})
	},
})

function isLoadingAction(action: AnyAction) {
	return action.type.endsWith('pending')
}

export default PostsSlice.reducer
