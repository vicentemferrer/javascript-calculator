import { buttonsList } from './data/buttons.json'
import Button from './components/Button'
import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const arrButtons = buttonsList.map(
    ({ button, type, id }) => (
     <Button key = {id} name = {button} type = {type} id = {id} />
    ))
  
  const display = useSelector((state) => state.display)

  return (
    <div className="App">
      <div className='calculator'>
        <div id='display'>
          { display.display }
        </div>
        { arrButtons }
      </div>
    </div>
  )
}

export default App
