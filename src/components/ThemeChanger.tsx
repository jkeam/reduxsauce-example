import React from 'react'
import PropTypes from 'prop-types'

const ThemeChanger = ({ changeAppTheme, isDarkTheme }: {changeAppTheme: () => void, isDarkTheme: boolean}) => {
    return (
        <div style={{marginBottom: 50}}>
            <button className="button is-secondary" onClick={changeAppTheme}>
                Toggle Theme
            </button>
        
            <br />
            {isDarkTheme ? 'Dark Theme' : 'Light Theme'}
        </div>
    );
}

ThemeChanger.propTypes = {
    changeAppTheme: PropTypes.func.isRequired,
    isDarkTheme: PropTypes.bool.isRequired
}

export default ThemeChanger
