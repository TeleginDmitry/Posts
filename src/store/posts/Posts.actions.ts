import { createAsyncThunk } from '@reduxjs/toolkit'
import { IGetPosts, IGetPostsThunk } from 'interfaces/post.interface'
import { PostService } from 'services/post.service'
import { LIMIT } from '@config/index.config'

export const getPosts = createAsyncThunk<
	IGetPostsThunk,
	Omit<IGetPosts, '_limit'>
>(
	'posts/getPosts',
	async ({ _page, _order, _sort, q }, { rejectWithValue }) => {
		try {
			const params: IGetPosts = {
				_limit: LIMIT,
				_page,
				_order,
				_sort,
				q,
			}

			const response = await PostService.getPosts(params)

			const count = +response.headers['x-total-count']

			const hasEnoughData = response.data.length >= LIMIT

			const adaptivedData = hasEnoughData
				? response.data
				: [...response.data, ...Array(LIMIT - response.data.length).fill(null)]

			const data: IGetPostsThunk = {
				posts: adaptivedData,
				count,
			}

			return data
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)
