import React, { useEffect, useState } from 'react'
import styles from './Search.module.scss'
import { ReactComponent as SearchIcon } from '@assets/icons/search.svg'
import { SEARCH_PARAM, START_PAGE } from 'config/index.config'
import { changeLink } from 'utils/changeLink/changeLink'

interface ISearch {
	setSearchValue: React.Dispatch<React.SetStateAction<string>>
	setPage: React.Dispatch<React.SetStateAction<number>>
}

const Search = ({ setSearchValue, setPage }: ISearch) => {
	const searchParams = new URLSearchParams(window.location.search)

	const valueInput = searchParams.get(SEARCH_PARAM)

	const [inputValue, setInputValue] = useState(valueInput || '')

	function onChangeValue(event: React.ChangeEvent<HTMLInputElement>) {
		const value = event.target.value

		setInputValue(value)

		if (value) {
			searchParams.set(SEARCH_PARAM, value)
		} else {
			searchParams.delete(SEARCH_PARAM)
		}

		changeLink(searchParams)
	}

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSearchValue(inputValue)

			setPage(START_PAGE)
		}, 300)

		return () => {
			clearTimeout(timeout)
		}
	}, [inputValue])

	return (
		<form className={styles.form}>
			<label className={styles.label}>
				<input
					className={styles.input}
					placeholder='Поиск'
					onChange={onChangeValue}
					type='text'
					value={inputValue}
				/>
				<SearchIcon className={styles.search}></SearchIcon>
			</label>
		</form>
	)
}

export default Search
