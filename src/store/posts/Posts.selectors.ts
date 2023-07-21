import type { RootState } from '../Store'

export const selectCount = (state: RootState) => state.posts.count
export const selectPosts = (state: RootState) => state.posts.posts
export const selectError = (state: RootState) => state.posts.error
export const selectIsError = (state: RootState) => state.posts.isError
export const selectIsLoading = (state: RootState) => state.posts.isLoading
export const selectAll = (state: RootState) => state.posts
