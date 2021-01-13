import styles from '../styles/Home.module.css'
import Header from './Header'

export default function Layout({ children, showHeader = true, footer = null }) {
  return (
    <div className={styles.container}>
      {showHeader && <Header />}
      <main className={styles.main}>{children}</main>
      {footer}
    </div>
  )
}
