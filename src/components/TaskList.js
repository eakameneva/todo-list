import React from 'react'
import PropTypes from 'prop-types'

import Task from './Task'
import './TaskList.css'

export const TaskList = ({ todos, onDeleted, onEdit, onEditFormSubmit, onToggleDone }) => {
  const elements = todos.map((item) => {
    return (
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
      ></Task>
    )
  })
  if (todos.length === 0) {
    return <div className='no-items'>No items added</div>
  }
  return <ul className='todo-list'>{elements}</ul>
}

TaskList.propTypes = {
  todos: PropTypes.array,
  onDeleted: PropTypes.func,
  onEdit: PropTypes.func,
  onEditFormSubmit: PropTypes.func,
  onToggleDone: PropTypes.func,
}
