import { createActions, createReducer } from 'reduxsauce'


// Actions
const { Types, Creators } = createActions({
  changeAppTheme: null
})

export const ThemeTypes = Types
export default Creators;


// Initial State
export interface ThemeState {
  isDarkTheme: boolean
}

export const INITIAL_STATE = {
  isDarkTheme: false
}


// Reducers
const changeAppTheme = (state: ThemeState = INITIAL_STATE) => ({
  ...state,
  isDarkTheme: !state.isDarkTheme,
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_APP_THEME]: changeAppTheme
})
