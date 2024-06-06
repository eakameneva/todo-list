import React, { Component } from 'react'
import './Task.css'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

import EditForm from './EditForm'

class Task extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.forceUpdate(), 60000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { condition, onToggleDone, id, label, createdAt, onEdit, onDeleted, onEditFormSubmit } = this.props
    return (
      <li className={condition}>
        <div className='view'>
          <input
            className='toggle'
            type='checkbox'
            checked={condition === 'completed'}
            onChange={() => onToggleDone(id)}
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            <span className='description'>{label}</span>
            <span className='created'>
              created
              {formatDistanceToNow(createdAt)} ago
            </span>
          </label>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button type='button' className='icon icon-edit' onClick={() => onEdit(id)} />
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button type='button' className='icon icon-destroy' onClick={() => onDeleted(id)} />
        </div>
        {condition === 'editing' && <EditForm onEditFormSubmit={onEditFormSubmit} id={id} />}
      </li>
    )
  }
}

Task.propTypes = {
  condition: PropTypes.string.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  createdAt: PropTypes.number,
  onEditFormSubmit: PropTypes.func.isRequired,
}

Task.defaultProps = {
  createdAt: Date.now(),
}

export default Task
