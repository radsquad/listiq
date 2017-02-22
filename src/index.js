import React from 'react'
import { render } from 'react-dom'
import Hello from './Hello/Hello'
import './index.css'

document.addEventListener('DOMContentLoaded', () => {
  var span = document.createElement('span')
  span.innerHTML = 'hello world'
  document.querySelector('body').appendChild(span)
})

render(<Hello />, document.getElementById('app'))
