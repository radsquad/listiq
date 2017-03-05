import './common.css'
import './index.css'
import './checklist.css'
import '../public/listiq.svg'
import '../public/radsquad.svg'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { NewChecklistForm, Checklist } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={NewChecklistForm} />
        <Route path='/checklist' component={Checklist} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
