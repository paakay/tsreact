import ReactDOM from 'react-dom'
import GuestList from './02-state-types/GuestList'

import styles from './styles/style.module.css'

const App = () => {
  return (
    <div className={styles.container}>
      <GuestList />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
