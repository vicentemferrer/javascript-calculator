import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'
import './index.css'

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case "Enter":
      document.getElementById("equals").click()
      break
    case "Backspace":
      document.getElementById("clear").click()
      break
    default:
      const buttons = document.getElementsByTagName("button")
      for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].textContent === event.key) {
          buttons[i].click()
          break
        }
      }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = { store }>
    <App />
  </Provider>,
)
