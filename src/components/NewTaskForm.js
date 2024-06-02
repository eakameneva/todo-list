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
    this.props.onItemAdded(this.state.label)
    this.setState({
      label: '',
    })
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          autoFocus
          onChange={this.onLabelChange}
          value={this.state.label}
        ></input>
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func,
}

export default NewTaskForm
