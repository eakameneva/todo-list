import React, { useEffect, useState } from 'react'
import './task.css'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

import Timer from './Timer'

function Task({ condition, onToggleDone, id, label, createdAt, onEdit, onDeleted, seconds, minutes }) {
  const [, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setCount((c) => c + 1), 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='view'>
      <input
        className='toggle'
        id={id}
        type='checkbox'
        checked={condition === 'completed'}
        onChange={() => onToggleDone(id)}
      />
      <label htmlFor={id}>
        <span className='title'>{label}</span>
        <Timer minutes={minutes} seconds={seconds} />
        <span className='description'>{`created ${formatDistanceToNow(createdAt)} ago`}</span>
      </label>
      {condition === 'active' && (
        <button type='button' aria-label='Edit' className='icon icon-edit' onClick={() => onEdit(id)} />
      )}
      <button type='button' aria-label='Delete' className='icon icon-destroy' onClick={() => onDeleted(id)} />
    </div>
  )
}

Task.propTypes = {
  condition: PropTypes.string.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
}

export default Task
