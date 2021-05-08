import { useState } from 'react'

import styles from '../styles/style.module.css'

/**
 * Array Type Annotation
 *
 * Annotate useState function name with elements' type in array eg: array of strings
 * useState<string[]>([])
 * @returns string[]
 */

const GuestList: React.FC = () => {
  const [name, setName] = useState('')
  const [alumnis, setAlumnis] = useState<string[]>([])

  const handleClick = () => {
    setName('') // Clears input field

    if (name) {
      if (name) {
        setAlumnis([...alumnis, name]) // Append guest name to alumnis list
      }
    }
  }

  return (
    <div className={styles.container}>
      <h2>Alumni List</h2>

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
        Add Noble
      </button>

      <hr />

      {alumnis.length !== 0 ? (
        <ol className={styles.numberList}>
          {' '}
          {alumnis.map((guest, index) => (
            <li key={index}>{guest}</li>
          ))}{' '}
        </ol>
      ) : (
        <>
          <h4>Sorry! No Noble added yet. 😭</h4>
        </>
      )}
    </div>
  )
}

export default GuestList
