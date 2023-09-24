import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { schedulerReducer } from './scheduler/scheduler-reducer'
import { UIReducer } from './ui/ui-reducer'

const store = configureStore({
  reducer: {
    scheduler: schedulerReducer,
    ui: UIReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type Appthunk = ThunkAction<void, RootState, null, Action<string>>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
