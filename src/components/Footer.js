import React from 'react'
import PropTypes from 'prop-types'

import './Footer.css'
import TasksFilter from './TasksFilter'

function Footer({ count, onClearCompleted, activeTab, onFilterChange }) {
  return (
    <footer className='footer'>
      <span className='todo-count'>{count} items left</span>
      <TasksFilter activeTab={activeTab} onFilterChange={onFilterChange} />
      <button type='button' className='clear-completed' onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.propTypes = {
  count: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
}

export default Footer
