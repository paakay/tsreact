import ReactDOM from 'react-dom'
import GuestList from './02-state-types/GuestList'

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <GuestList />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
