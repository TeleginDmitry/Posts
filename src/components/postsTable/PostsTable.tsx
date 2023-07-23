import styles from './PostsTable.module.scss'
import ThList from './thList/ThList'
import PostsList from './postsList/PostsList'
import { IPost, TypeOrder } from 'interfaces/post.interface'

interface IPostsTable {
	order: TypeOrder
	sortType: keyof IPost
	setPage: React.Dispatch<React.SetStateAction<number>>
	setOrder: React.Dispatch<React.SetStateAction<TypeOrder>>
	setSortType: React.Dispatch<React.SetStateAction<keyof IPost>>
}

const PostsTable = ({
	order,
	sortType,
	setPage,
	setOrder,
	setSortType,
}: IPostsTable) => {
	return (
		<div className={styles.wrapper}>
			<table className={styles.table}>
				<thead>
					<tr>
						<ThList
							order={order}
							setPage={setPage}
							setOrder={setOrder}
							setSortType={setSortType}
							sortType={sortType}
						></ThList>
					</tr>
				</thead>
				<tbody>
					<PostsList></PostsList>
				</tbody>
			</table>
		</div>
	)
}

export default PostsTable
