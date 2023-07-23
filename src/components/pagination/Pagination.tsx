import React, { useState, useEffect } from 'react'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectCount } from 'store/posts/Posts.selectors'
import styles from './Pagination.module.scss'
import { LIMIT, START_PAGE } from 'config/index.config'

interface IPagination {
	page: number
	setPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination = ({ page, setPage }: IPagination) => {
	const count = useTypedSelector(selectCount)
	const [pagesList, setPagesList] = useState<number[]>([])

	useEffect(() => {
		const result = []
		const countPages = Math.ceil(count / LIMIT)
		for (let i = START_PAGE; i <= countPages; i++) {
			result.push(i)
		}
		setPagesList(result)
	}, [count])

	function onClickPage(page: number) {
		setPage(page)
	}

	function onClickPreviousButton() {
		if (page <= 1) return
		setPage(state => state - 1)
	}

	function onClickNextButton() {
		const countPages = Math.ceil(count / LIMIT)

		if (countPages <= page) return

		setPage(state => state + 1)
	}

	return (
		<div className={styles.wrapper}>
			<button onClick={onClickPreviousButton} className={styles.previous}>
				Назад
			</button>
			<ul className={styles.pages}>
				{pagesList.map(pageItem => {
					const itemClass =
						page === pageItem
							? [styles.page__item, styles.page__item_active].join(' ')
							: styles.page__item
					return (
						<li
							onClick={() => onClickPage(pageItem)}
							className={itemClass}
							key={pageItem}
						>
							{pageItem}
						</li>
					)
				})}
			</ul>
			<button onClick={onClickNextButton} className={styles.next}>
				Далее
			</button>
		</div>
	)
}

export default Pagination
