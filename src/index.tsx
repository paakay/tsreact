import ReactDOM from 'react-dom'

import styles from './styles/style.module.css'
import Logo from './images/nsein-senior-high-school-logo-400x400.png'

import GuestList from './02-state-types/GuestList'
import UserSearch from './02-state-types/UserSearch'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img
          src={Logo}
          alt="Nsein Senior High School logo"
          width="200"
          height="200"
        />
        <p className="logo">Nsein Senior High School</p>
      </div>
      <section className={styles.section}>
        <GuestList />
        <UserSearch />
      </section>
      <footer>
        <div className={styles.copyright}>
          <h4>Nsein Senior High School</h4>
          <p className={styles.mutedSmall}>(Founded: 1960)</p>

          <address>
            <p>Axim, Ghana</p>
          </address>
        </div>
        <div className="footerNav">Footer navigation</div>
      </footer>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
