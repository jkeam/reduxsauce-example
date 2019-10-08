import { VisibilityFilters } from '../constants'
import { createActions, createReducer } from 'reduxsauce'

const { Types, Creators } = createActions({
  setVisibilityFilter: ['visibilityFilter']
})

export const VisibilityTypes = Types
export default Creators;

export const INITIAL_STATE = {
  visibilityFilter: VisibilityFilters.SHOW_ALL
}

const setVisibilityFilter = (state = INITIAL_STATE, { visibilityFilter }) => ({ visibilityFilter })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_VISIBILITY_FILTER]: setVisibilityFilter
})

