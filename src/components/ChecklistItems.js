import React from 'react'
import ChecklistItem from './ChecklistItem'
import { generateId } from '../helpers/helpers'

export const ChecklistItems = (props) => {
  return (
    <ul className='items'>
      {props.items.map(item => {
        return <ChecklistItem
          name={item.name}
          isCompleted={item.isCompleted}
          key={generateId()}
        />
      })}
    </ul>
  )
}

ChecklistItems.propTypes = {
  items: React.PropTypes.array.isRequired
}
