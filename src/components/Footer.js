import React from 'react'
import PropTypes from 'prop-types'

import './footer.css'
import TasksFilter from './TasksFilter'

function Footer({ todo, onClearCompleted, activeTab, onFilterChange }) {
  return (
    <footer className='footer'>
      <span className='todo-count'>{todo} items left</span>
      <TasksFilter activeTab={activeTab} onFilterChange={onFilterChange} />
      <button type='button' className='clear-completed' onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.propTypes = {
  todo: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
}

export default Footer
