import React from 'react'

const ChecklistItem = (props) => {
  return (
    <li className='item'>
      <label>
        <input type='checkbox' defaultChecked={props.isCompleted} />
        <span className='title'>{props.name}</span>
      </label>
    </li>
  )
}

ChecklistItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  isCompleted: React.PropTypes.bool.isRequired
}

export default ChecklistItem
