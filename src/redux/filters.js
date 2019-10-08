import { VisibilityFilters } from '../constants'
import { createActions, createReducer } from 'reduxsauce'

const { Types, Creators } = createActions({
  setFilter: ['filter']
})

export const VisibilityTypes = Types
export default Creators;

export const INITIAL_STATE = {
  filter: VisibilityFilters.SHOW_ALL
}

const setFilter = (state = INITIAL_STATE, { filter }) => ({ filter })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_FILTER]: setFilter
})

