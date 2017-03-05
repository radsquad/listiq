import React from 'react'

export class NewChecklistForm extends React.Component {
  render () {
    return (
      <div className='checklist-picker'>
        <header role='header'>
          <img className='logo' src='../../public/listiq.svg' alt='listiq logo' />
          <span className='slogan' aria-label='slogan'>checklists at their simplest</span>
        </header>
        <main role='main' className='form-wrapper'>
          <form action='checklist.html' method='get'>
            <div><input className='title-input' type='text' aria-label='checklist title' placeholder='name your checklist' autoFocus /></div>
            <button type='submit' className='create-checklist'>Create</button>
          </form>
        </main>
        <footer role='footer'>
          <a href='https://github.com/radsquad'>
            <img className='logo' src='../../public/radsquad.svg' alt='radsquad logo' />
          </a>
        </footer>
      </div>
    )
  }
}
