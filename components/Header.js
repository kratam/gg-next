import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <Link href="/">
      <a className={styles.header}>
        <motion.img
          layoutId="gglogo"
          src="/gglogo.svg"
          className={styles.logo}
        />
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          vissza a főoldalra
        </motion.span>
      </a>
    </Link>
  )
}
