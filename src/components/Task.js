import React, { Component } from 'react'
import './task.css'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

import Timer from './Timer'

class Task extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.forceUpdate(), 60000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { condition, onToggleDone, id, label, createdAt, onEdit, onDeleted, seconds, minutes } = this.props
    return (
      <div className='view'>
        <input
          className='toggle'
          id='chekbox'
          type='checkbox'
          checked={condition === 'completed'}
          onChange={() => onToggleDone(id)}
        />
        <label htmlFor='checkbox'>
          <span className='title'>{label}</span>
          <Timer minutes={minutes} seconds={seconds} />
          <span className='description'>{`created ${formatDistanceToNow(createdAt)} ago`}</span>
        </label>
        <button type='button' aria-label='Edit' className='icon icon-edit' onClick={() => onEdit(id)} />
        <button type='button' aria-label='Delete' className='icon icon-destroy' onClick={() => onDeleted(id)} />
      </div>
    )
  }
}

Task.propTypes = {
  condition: PropTypes.string.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  createdAt: PropTypes.number,
}

Task.defaultProps = {
  createdAt: Date.now(),
}

export default Task
