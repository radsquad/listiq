import React from 'react'

export class Checklist extends React.Component {
  render () {
    return (
      <div className='app'>

        <header role='header'>
          <img className='logo' src='../../public/listiq.svg' alt='listiq logo' />
          <span className='slogan' aria-label='slogan'>checklists at their simplest</span>
        </header>

        <main role='main' className='checklist-wrapper'>
          <div className='title'>
            <h1>Checklist Title</h1>
            <span className='small muted'>click to edit</span>
          </div>
          <div className='toolbar'>
            <span className='small'><a href='#'>share this checklist</a></span>
          </div>
          <ul className='items'>
            <li className='item'>
              <input type='checkbox' />
              <span className='title'>Item One</span>
            </li>
            <li className='item'>
              <input type='checkbox' />
              <span className='title'>Item Two</span>
            </li>
            <li className='item done'>
              <input type='checkbox' defaultChecked='checked' />
              <span className='title'>Item Three</span>
            </li>
          </ul>
          <form>
            <input className='item-title-input' type='text' aria-label='new item title' placeholder='item title' />
            <button className='add-item' type='submit'>Add item</button>
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
