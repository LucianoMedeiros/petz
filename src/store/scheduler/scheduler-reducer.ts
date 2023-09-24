import { createSlice } from '@reduxjs/toolkit'
import { emptyItem } from '../../atoms/select/select'
import { schedulerInitialState } from './scheduler-initialstate'

const slice = createSlice({
  name: 'scheduler',
  initialState: schedulerInitialState,
  reducers: {
    setIsPending: (state, { payload }) => {
      state.isLoading = payload
    },
    setScheduleField: (state, { payload }) => {
      state.current = { ...state.current, ...payload }
    },
    setPokemonField: (state, { payload }) => {
      state.current.pokemons = [...state.current.pokemons, payload]
    },
    updatePokemon: (state, { payload }) => {
      state.current.pokemons[payload.index] = payload.updatedItem
    },
    addEmptyPokemon: (state) => {
      state.current.pokemons = [...state.current.pokemons, emptyItem]
    },
    removePokemon: (state, { payload }) => {
      const newList = [...state.current.pokemons.slice(0, payload), ...state.current.pokemons.slice(payload + 1)]
      state.current.pokemons = newList
    },
    setFormState: (state, { payload }) => {
      state.formState = payload
    },
    setSuccessMessage: (state, { payload }) => {
      state.requestMessage.success = payload
    },
    setErrorMessage: (state, { payload }) => {
      state.requestMessage.error = [...state.requestMessage.error, payload]
    },
    resetMessages: (state) => {
      state.requestMessage = schedulerInitialState.requestMessage
    },
    resetState: () => schedulerInitialState,
  },
})

export const SchedulerActions = slice.actions

export const schedulerReducer = slice.reducer
