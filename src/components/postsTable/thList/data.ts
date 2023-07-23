import { TypeAllFields } from 'interfaces/post.interface'

interface IThList {
	title: string
	type: TypeAllFields
	id: number
}

export const thList: IThList[] = [
	{ title: 'ID', type: 'id', id: 1 },
	{ title: 'Заголовок', type: 'title', id: 2 },
	{ title: 'Описание', type: 'body', id: 3 },
]
