import { AxiosResponse } from 'axios'
import instance from '../api/api.interceptor'
import { IGetPosts, IPost } from 'interfaces/post.interface'

export const PostService = {
	getPosts(params: IGetPosts): Promise<AxiosResponse<IPost[]>> {
		return instance.get('posts', { params })
	},
}
