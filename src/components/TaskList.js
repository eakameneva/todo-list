import React from 'react'
import PropTypes from 'prop-types'

import Task from './Task'
import './TaskList.css'
import EditForm from './EditForm'

const isItemVisible = (activeTab, condition) => {
  if (activeTab === 'all' || condition === 'editing') {
    return true
  }

  return activeTab === condition
}

export default function TaskList({
  todos,
  activeTab,
  onDeleted,
  onEdit,
  onEditFormSubmit,
  onToggleDone,
  onEscInEditForm,
}) {
  const elements = todos.map((item) => (
    <li className={`${item.condition}${isItemVisible(activeTab, item.condition) ? '' : ' hidden'}`} key={item.id}>
      <Task
        id={item.id}
        createdAt={item.createdAt}
        label={item.label}
        condition={item.condition}
        onDeleted={onDeleted}
        onEdit={onEdit}
        onToggleDone={onToggleDone}
        seconds={item.secondsAmount}
        minutes={item.minutesAmount}
      />
      {item.condition === 'editing' && (
        <EditForm
          onEditFormSubmit={onEditFormSubmit}
          onEscInEditForm={onEscInEditForm}
          label={item.label}
          id={item.id}
        />
      )}
    </li>
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
