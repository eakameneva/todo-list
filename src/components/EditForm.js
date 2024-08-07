import React, { useState } from 'react'
import PropTypes from 'prop-types'

function EditForm({ label, onEscInEditForm, onEditFormSubmit, id }) {
  const [editLabel, setEditLabel] = useState(label)

  const onLabelChange = (event) => {
    setEditLabel(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const trimmedLabel = editLabel.trim()
    if (trimmedLabel === '') {
      return
    }
    onEditFormSubmit(id, trimmedLabel)
    setEditLabel('')
  }

  const onOutsideFormClick = (e) => {
    if (e.key === 'Escape') {
      onEscInEditForm(id)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        className='edit'
        placeholder='Editing'
        /* eslint-disable-next-line jsx-a11y/no-autofocus */
        autoFocus
        onKeyDown={onOutsideFormClick}
        onBlur={() => onEscInEditForm(id)}
        onChange={onLabelChange}
        value={editLabel}
      />
    </form>
  )
}

EditForm.propTypes = {
  id: PropTypes.number.isRequired,
}

export default EditForm
