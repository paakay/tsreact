import { useState } from 'react'

import styles from '../styles/style.module.css'

const users = [
  { name: 'Sarah Huxtable', age: 20 },
  { name: 'Alex Cryingso', age: 20 },
  { name: 'Michael Brumberg', age: 20 },
  { name: 'Johnathan Antubam', age: 20 },
  { name: 'Golda Armah', age: 20 },
  { name: 'Sarah Empeh', age: 20 },
  { name: 'Doris Minta', age: 20 },
  { name: 'Abraham Aikins', age: 20 },
]

interface User {
  name: string
  age: number
}

/**
 * User piece of STATE could be a string or undefined type when component is first rendered or no user is found during search.
 *
 * user = {name: string, age: number}
 * @returns string | undefined
 */
const UserSearch: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [user, setUser] = useState<User | undefined>()

  const handleClick = () => {
    const foundUser = users.find((user) => {
      // return user.name.toLowerCase() === name.toLowerCase() // matches exact name
      return user.name.toLowerCase().includes(name) // Search full text string
    })

    setUser(foundUser)
  }

  return (
    <div className={styles.container}>
      <h2>Alumni Search</h2>

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
        Search Noble
      </button>

      <hr />

      <div>
        {user && user.name} - {user && user.age}
      </div>
    </div>
  )
}

export default UserSearch
