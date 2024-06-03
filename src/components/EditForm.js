import React, { Component } from 'react'
import PropTypes from 'prop-types'

class EditForm extends Component {
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
    const trimmedLabel = this.state.label.trim()
    if (trimmedLabel === '') {
      return
    }
    this.props.onEditFormSubmit(this.props.id, this.state.label)
    this.setState({
      label: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          className='edit'
          placeholder='Editing'
          autoFocus
          onChange={this.onLabelChange}
          value={this.state.label}
        ></input>
      </form>
    )
  }
}

EditForm.propTypes = {
  id: PropTypes.number,
}

export default EditForm
