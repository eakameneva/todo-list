import React, { Component } from 'react'
import PropTypes from 'prop-types'

const SECONDS_AMOUNT_MAX = 60

const getItemTime = (time) => {
  if (!time) {
    return 0
  }

  return time
}

class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
      minutesAmount: '',
      secondsAmount: '',
    }
    this.onLabelChange = this.onLabelChange.bind(this)
    this.onTimeChange = this.onTimeChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onLabelChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onTimeChange(event, max) {
    if (event.target.value === '') {
      this.setState({
        [event.target.name]: '',
      })
    }

    const { value, name } = event.target
    let valueNumber = Number(value)

    if (Number.isNaN(valueNumber) || valueNumber <= 0) {
      return
    }

    if (max && valueNumber > max) {
      valueNumber = max
    }

    this.setState({
      [name]: valueNumber,
    })
  }

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.onSubmit(e)
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    const { label, minutesAmount, secondsAmount } = this.state
    const trimmedLabel = label.trim()
    if (trimmedLabel === '') {
      return
    }
    const { onItemAdded } = this.props
    onItemAdded(label, getItemTime(minutesAmount), getItemTime(secondsAmount))
    this.setState({
      label: '',
      minutesAmount: '',
      secondsAmount: '',
    })
  }

  render() {
    const { label, minutesAmount, secondsAmount } = this.state
    return (
      <form className='new-todo-form' onSubmit={this.onSubmit}>
        <input
          className='new-todo'
          name='label'
          placeholder='Task'
          /* eslint-disable-next-line jsx-a11y/no-autofocus */
          autoFocus
          onChange={this.onLabelChange}
          value={label}
          onKeyDown={this.onKeyDown}
        />
        <input
          className='new-todo-form__timer'
          placeholder='Min'
          name='minutesAmount'
          onChange={this.onTimeChange}
          value={minutesAmount}
          onKeyDown={this.onKeyDown}
          type='text'
          onWheel={() => document.activeElement.blur()}
        />
        <input
          className='new-todo-form__timer'
          placeholder='Sec'
          name='secondsAmount'
          onChange={(event) => this.onTimeChange(event, SECONDS_AMOUNT_MAX)}
          value={secondsAmount}
          onKeyDown={this.onKeyDown}
          type='text'
          max='60'
          onWheel={() => document.activeElement.blur()}
        />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func.isRequired,
}

export default NewTaskForm
