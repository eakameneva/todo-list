import React, { useState } from 'react'

import { convertToMilliseconds } from '../helpers/date'

const SECONDS_AMOUNT_MAX = 60

function NewTaskForm({ onItemAdded }) {
  const [itemLabel, setItemLabel] = useState('')
  const [timeAmount, setTimeAmount] = useState({
    minutesAmount: 0,
    secondsAmount: 0,
  })

  const onLabelChange = (event) => {
    setItemLabel(event.target.value)
  }

  const onTimeChange = (event, max) => {
    if (event.target.value === '') {
      setTimeAmount((time) => ({ ...time, [event.target.name]: 0 }))
    }

    const { value, name } = event.target
    let valueNumber = Number(value)

    if (Number.isNaN(valueNumber) || valueNumber <= 0) {
      return
    }

    if (max && valueNumber > max) {
      valueNumber = max
    }

    setTimeAmount((time) => ({ ...time, [name]: valueNumber }))
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const trimmedLabel = itemLabel.trim()
    if (trimmedLabel === '') {
      return
    }

    onItemAdded(trimmedLabel, convertToMilliseconds(timeAmount.minutesAmount, timeAmount.secondsAmount))
    setTimeAmount({
      minutesAmount: 0,
      secondsAmount: 0,
    })
    setItemLabel('')
  }
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit(e)
    }
  }

  return (
    <form className='new-todo-form' onSubmit={onSubmit}>
      <input
        className='new-todo'
        name='label'
        placeholder='Task'
        /* eslint-disable-next-line jsx-a11y/no-autofocus */
        autoFocus
        onChange={onLabelChange}
        value={itemLabel}
        onKeyDown={onKeyDown}
      />
      <input
        className='new-todo-form__timer'
        placeholder='Min'
        name='minutesAmount'
        onChange={onTimeChange}
        value={timeAmount.minutesAmount || ''}
        onKeyDown={onKeyDown}
        type='text'
        onWheel={() => document.activeElement.blur()}
      />
      <input
        className='new-todo-form__timer'
        placeholder='Sec'
        name='secondsAmount'
        onChange={(event) => onTimeChange(event, SECONDS_AMOUNT_MAX)}
        value={timeAmount.secondsAmount || ''}
        onKeyDown={onKeyDown}
        type='text'
        max='60'
        onWheel={() => document.activeElement.blur()}
      />
    </form>
  )
}

export default NewTaskForm
