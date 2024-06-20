import React from 'react'
import PropTypes from 'prop-types'

import NewTaskForm from './NewTaskForm'
import './appHeader.css'

function AppHeader({ onItemAdded }) {
  return (
    <header className='header'>
      <h1>todos</h1>
      <NewTaskForm onItemAdded={onItemAdded} />
    </header>
  )
}

AppHeader.propTypes = {
  onItemAdded: PropTypes.func.isRequired,
}
export default AppHeader
