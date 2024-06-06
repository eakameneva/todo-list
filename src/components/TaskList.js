import React from 'react'
import PropTypes from 'prop-types'

import Task from './Task'
import './TaskList.css'

export default function TaskList({ todos, onDeleted, onEdit, onEditFormSubmit, onToggleDone }) {
  const elements = todos.map((item) => (
    <Task
      key={item.id}
      id={item.id}
      createdAt={item.createdAt}
      label={item.label}
      condition={item.condition}
      onDeleted={onDeleted}
      onEdit={onEdit}
      onEditFormSubmit={onEditFormSubmit}
      onToggleDone={onToggleDone}
    />
  ))
  if (todos.length === 0) {
    return <div className='no-items'>No items added</div>
  }
  return <ul className='todo-list'>{elements}</ul>
}

TaskList.propTypes = {
  todos: PropTypes.instanceOf(Array).isRequired,
  onDeleted: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onEditFormSubmit: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
}
