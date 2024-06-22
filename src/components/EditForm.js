import React, { Component } from 'react'
import PropTypes from 'prop-types'

class EditForm extends Component {
  constructor(props) {
    super(props)
    const { label } = this.props
    this.state = {
      label,
    }
    this.onLabelChange = this.onLabelChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onOutsideFormCLick = this.onOutsideFormCLick.bind(this)
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

  onOutsideFormCLick(e) {
    const { onEscInEditForm, id } = this.props
    if (e.key === 'Escape') {
      onEscInEditForm(id)
    }
  }

  render() {
    const { label } = this.state
    const { onEscInEditForm, id } = this.props
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          className='edit'
          placeholder='Editing'
          /* eslint-disable-next-line jsx-a11y/no-autofocus */
          autoFocus
          onKeyDown={this.onOutsideFormCLick}
          onBlur={() => onEscInEditForm(id)}
          onChange={this.onLabelChange}
          value={label}
        />
      </form>
    )
  }
}

EditForm.propTypes = {
  id: PropTypes.number.isRequired,
}

export default EditForm
