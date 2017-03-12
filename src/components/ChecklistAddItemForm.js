import React from 'react'

export const ChecklistAddItemForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        className='item-title-input'
        type='text'
        aria-label='new item title'
        placeholder='item title'
        value={props.newItem}
        onChange={props.handleInputChange}
      />
      <button className='add-item' type='submit'>Add item</button>
    </form>
  )
}

ChecklistAddItemForm.propTypes = {
  newItem: React.PropTypes.string,
  handleInputChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
}
