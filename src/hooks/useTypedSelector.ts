import { useSelector, TypedUseSelectorHook } from 'react-redux'
import type { RootState } from 'store/Store'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
