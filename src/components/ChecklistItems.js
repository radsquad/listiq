import React from 'react'
import ChecklistItem from './ChecklistItem'

export const ChecklistItems = (props) => {
  const items = props.items.map(item => {
    return (
      <ChecklistItem
        title={item.title}
        isCompleted={item.isCompleted}
        key={item.id}
      />
    )
  })

  return <ul className='items'>{items}</ul>
}

ChecklistItems.propTypes = {
  items: React.PropTypes.array.isRequired
}
