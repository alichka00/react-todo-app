import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { todoSlice } from './todoSlice'

const store = configureStore({
    reducer: {
        [todoSlice.reducerPath]: todoSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
