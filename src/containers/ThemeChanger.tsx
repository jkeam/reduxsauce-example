import { connect } from 'react-redux'
import ThemeChanger from '../components/ThemeChanger'
import ThemeActions, { ThemeState } from '../redux/themes'
import { Dispatch } from 'react'
import { AnyAction } from 'redux'

const mapStateToProps = (state: {themes: ThemeState}) => ({
  isDarkTheme: state.themes.isDarkTheme
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  changeAppTheme: () => dispatch(ThemeActions.changeAppTheme())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeChanger)
