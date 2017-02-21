import './index.css'

document.addEventListener('DOMContentLoaded', () => {
  var span = document.createElement('span')
  span.innerHTML = 'hello world'
  document.querySelector('body').appendChild(span)
})
