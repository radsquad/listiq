import React from 'react'
import { ChecklistHeader,
         ChecklistTitle,
         ChecklistToolbar,
         ChecklistItems,
         ChecklistAddItemForm,
         ChecklistFooter } from './'
import { addArrayItem, generateId } from '../helpers/helpers'

export class Checklist extends React.Component {

  constructor () {
    super()

    this.state = {
      items: [
        { id: 1, name: 'Item One', isCompleted: false },
        { id: 2, name: 'Item Two', isCompleted: false },
        { id: 3, name: 'Item Three', isCompleted: true }
      ],
      newItem: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (e) {
    this.setState({
      newItem: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const newItem = {
      id: generateId(),
      name: this.state.newItem,
      isCompleted: false
    }
    if (!this.state.newItem) return
    this.setState({
      items: addArrayItem(newItem, this.state.items),
      newItem: ''
    })
  }

  render () {
    return (
      <div className='app'>

        <ChecklistHeader />

        <main role='main' className='checklist-wrapper'>

          <ChecklistTitle />

          <ChecklistToolbar />

          <ChecklistItems items={this.state.items} />

          <ChecklistAddItemForm
            newItem={this.state.newItem}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />

        </main>

        <ChecklistFooter />

      </div>
    )
  }
}
