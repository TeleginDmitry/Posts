export interface IPost {
	id: number
	title: string
	body: string
	userId: number
}

export type TypeAllFields = keyof Omit<IPost, 'userId'>

export interface IGetPosts {
	_limit: number
	_page: number
	_sort?: keyof IPost
	_order?: TypeOrder
	q?: string
}

export interface PayloadPosts {
	posts: IPost[]
	count: number
}

export interface IGetPostsThunk {
	count: number
	posts: IPost[]
}

export type TypeOrder = 'asc' | 'desc'
