import React, { useEffect, useState } from 'react'
import Search from './search/Search'
import styles from './App.module.scss'
import PostsTable from './postsTable/PostsTable'
import { IGetPosts, IPost, TypeOrder } from 'interfaces/post.interface'
import useActions from 'hooks/useActions'
import {
	ORDER_PARAM,
	SEARCH_PARAM,
	SORT_PARAM,
	START_PAGE,
} from 'config/index.config'
import Pagination from './pagination/Pagination'

const App = () => {
	const searchParams = new URLSearchParams(window.location.search)

	const orderParam = searchParams.get(ORDER_PARAM) as TypeOrder
	const sortParam = searchParams.get(SORT_PARAM) as keyof IPost
	const searchParam = searchParams.get(SEARCH_PARAM)

	const [page, setPage] = useState(START_PAGE)
	const [order, setOrder] = useState<TypeOrder>(orderParam || 'asc')
	const [sortType, setSortType] = useState<keyof IPost>(sortParam || 'id')
	const [searchValue, setSearchValue] = useState(searchParam || '')

	const { getPosts } = useActions()

	useEffect(() => {
		const request: Omit<IGetPosts, '_limit'> = {
			_page: page,
			_order: order,
			_sort: sortType,
		}

		if (searchValue) {
			request[SEARCH_PARAM] = searchValue
		}

		getPosts(request)
	}, [page, order, sortType, searchValue])

	return (
		<div className={styles.wrapper}>
			<Search setPage={setPage} setSearchValue={setSearchValue}></Search>
			<PostsTable
				setPage={setPage}
				setOrder={setOrder}
				setSortType={setSortType}
				order={order}
				sortType={sortType}
			></PostsTable>
			<Pagination setPage={setPage} page={page}></Pagination>
		</div>
	)
}

export default App
