import React from 'react'
import './TasksFilter.css'

export default function TasksFilter({ activeTab, onFilterChange }) {
  let buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ]

  buttons = buttons.map(({ name, label }) => {
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
