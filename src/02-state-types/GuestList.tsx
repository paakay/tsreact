import { useState } from 'react'

import styles from '../styles/style.module.css'

const GuestList: React.FC = () => {
  const [name, setName] = useState('')

  return (
    <div>
      <h2>Guest List</h2>

      <hr />

      <input className={styles.input} type="text" />
      <button className={styles.btn}> Add Guest</button>
    </div>
  )
}

export default GuestList
