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
    const { label } = this.state
    const trimmedLabel = label.trim()
    if (trimmedLabel === '') {
      return
    }
    const { onEditFormSubmit, id } = this.props
    onEditFormSubmit(id, label)
    this.setState({
      label: '',
    })
  }

  render() {
    const { label } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <input type='text' className='edit' placeholder='Editing' onChange={this.onLabelChange} value={label} />
      </form>
    )
  }
}

EditForm.propTypes = {
  id: PropTypes.number.isRequired,
}

export default EditForm
