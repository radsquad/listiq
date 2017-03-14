import React from 'react'

const ChecklistItem = (props) => {
  return (
    <li className='item'>
      <label>
        <input type='checkbox' defaultChecked={props.isCompleted} />
        <span className='title'>{props.title}</span>
      </label>
    </li>
  )
}

ChecklistItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  isCompleted: React.PropTypes.bool.isRequired
}

export default ChecklistItem
