import React from 'react'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectPosts } from 'store/posts/Posts.selectors'

const PostsList = () => {
	const posts = useTypedSelector(selectPosts)

	return (
		<>
			{posts.map((post, index) => {
				return (
					<tr key={index}>
						<td>{post?.id}</td>
						<td>{post?.title}</td>
						<td>{post?.body}</td>
					</tr>
				)
			})}
		</>
	)
}

export default PostsList
