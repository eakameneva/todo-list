import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
    }
    this.onLabelChange = this.onLabelChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onLabelChange(event) {
    this.setState({
      label: event.target.value,
    })
  }

  onSubmit(event) {
    event.preventDefault()
    const { label } = this.state
    const trimmedLabel = label.trim()
    if (trimmedLabel === '') {
      return
    }
    const { onItemAdded } = this.props
    onItemAdded(label)
    this.setState({
      label: '',
    })
  }

  render() {
    const { label } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          /* eslint-disable-next-line jsx-a11y/no-autofocus */
          autoFocus
          onChange={this.onLabelChange}
          value={label}
        />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func.isRequired,
}

export default NewTaskForm
