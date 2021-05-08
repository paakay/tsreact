import { useState } from 'react'

import styles from '../styles/style.module.css'

/**
 * Array Type Annotation
 *
 * Annotate useState function name with elements type in array eg: array of strings
 * useState<string[]>([])
 * @returns string[]
 */

const GuestList: React.FC = () => {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState<string[]>([])

  const handleClick = () => {
    setName('') // Clears input field

    if (name) {
      if (name) {
        setGuests([...guests, name]) // Append guest name to guests list
      }
    }
  }

  return (
    <div>
      <h2>Guest List</h2>

      <hr style={{ opacity: 0.2, marginBottom: 'var(--sp-lg)' }} />

      <input
        className={styles.input}
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className={styles.btn} type="button" onClick={handleClick}>
        {' '}
        Add Guest
      </button>

      <hr />

      <ol className={styles.numberList}>
        {guests.length !== 0
          ? guests.map((guest, index) => <li key={index}>{guest}</li>)
          : `Sorry! No guests added yet.`}
      </ol>
    </div>
  )
}

export default GuestList
