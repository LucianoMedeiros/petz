import { createSlice } from '@reduxjs/toolkit'
import { uiInitialState } from './ui-initialstate'

const slice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    setIsPending: (state, { payload }) => {
      state.isLoading = payload
    },
    setCollapsebleLogo: (state, { payload }) => {
      state.isLogoCollapsible = payload
    },
  },
})

export const UIActions = slice.actions

export const UIReducer = slice.reducer
