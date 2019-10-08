import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ filter, visibilityFilter, children, onClick }) => {
  const active = filter === visibilityFilter;
  return (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
  )
}

Link.propTypes = {
  filter: PropTypes.string.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
