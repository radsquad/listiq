import React from 'react'
import { ChecklistHeader,
         ChecklistTitle,
         ChecklistToolbar,
         ChecklistItems,
         ChecklistAddItemForm,
         ChecklistFooter } from './'
import { generateId } from '../helpers/common'

export class Checklist extends React.Component {

  constructor () {
    super()

    this.state = {
      items: [
        { id: 1, title: 'Item One', isCompleted: false },
        { id: 2, title: 'Item Two', isCompleted: false },
        { id: 3, title: 'Item Three', isCompleted: true }
      ],
      newItemTitle: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (e) {
    this.setState({
      newItemTitle: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    if (!this.state.newItemTitle) return
    const newItem = {
      id: generateId(),
      title: this.state.newItemTitle,
      isCompleted: false
    }
    this.setState({
      items: [...this.state.items, newItem],
      newItemTitle: ''
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
            newItemTitle={this.state.newItemTitle}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />

        </main>

        <ChecklistFooter />

      </div>
    )
  }
}
