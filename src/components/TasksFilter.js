import React, { Component } from 'react'
import './tasksFilter.css'
import PropTypes from 'prop-types'

export default class TasksFilter extends Component {
  constructor(props) {
    super(props)
    this.buttons = [
      { name: 'all', label: 'All' },
      { name: 'active', label: 'Active' },
      { name: 'completed', label: 'Completed' },
    ]
  }

  render() {
    const { activeTab, onFilterChange } = this.props
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = activeTab === name
      const buttonClass = isActive ? 'selected' : 'btn'
      return (
        <li key={name}>
          {' '}
          <button type='button' className={buttonClass} onClick={() => onFilterChange(name)}>
            {label}
          </button>{' '}
        </li>
      )
    })
    return <ul className='filters'>{buttons}</ul>
  }
}

TasksFilter.propTypes = {
  activeTab: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
}
TasksFilter.defaultProps = {
  activeTab: 'all',
}
