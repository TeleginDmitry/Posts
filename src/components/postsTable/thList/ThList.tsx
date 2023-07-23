import React from 'react'
import { ReactComponent as Line } from '@assets/icons/line.svg'
import { thList } from './data'
import { ORDER_PARAM, SORT_PARAM, START_PAGE } from 'config/index.config'
import { changeLink } from 'utils/changeLink/changeLink'
import { IPost } from 'interfaces/post.interface'

interface IThList {
	order: 'asc' | 'desc'
	sortType: keyof IPost
	setOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>
	setSortType: React.Dispatch<React.SetStateAction<keyof IPost>>
	setPage: React.Dispatch<React.SetStateAction<number>>
}

const ThList = ({
	order,
	sortType,
	setOrder,
	setSortType,
	setPage,
}: IThList) => {
	const searchParams = new URLSearchParams(window.location.search)

	function handleSort(type: keyof IPost) {
		setPage(START_PAGE)

		searchParams.set(SORT_PARAM, type)

		setSortType(type)

		setOrder(state => {
			if (state === 'asc') {
				searchParams.set(ORDER_PARAM, 'desc')
				return 'desc'
			} else {
				searchParams.set(ORDER_PARAM, 'asc')
				return 'asc'
			}
		})

		changeLink(searchParams)
	}

	return (
		<>
			{thList.map(({ title, type, id }) => {
				return (
					<th onClick={() => handleSort(type)} key={id}>
						{title}
						<Line
							style={{
								transform:
									order === 'desc' && sortType === type && 'rotate(180deg)',
							}}
						></Line>
					</th>
				)
			})}
		</>
	)
}

export default ThList
