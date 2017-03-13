import React from 'react'
import ChecklistItem from './ChecklistItem'

export const ChecklistItems = (props) => {
  return (
    <ul className='items'>
      {props.items.map(item => {
        return <ChecklistItem
          name={item.name}
          isCompleted={item.isCompleted}
          key={item.id}
        />
      })}
    </ul>
  )
}

ChecklistItems.propTypes = {
  items: React.PropTypes.array.isRequired
}
