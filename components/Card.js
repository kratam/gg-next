import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Card({ href, header, body, motionId }) {
  return (
    <Link href={href}>
      <motion.a
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={styles.card}
      >
        <motion.h3 layoutId={motionId}>{header} &rarr;</motion.h3>
        <p>{body}</p>
      </motion.a>
    </Link>
  )
}
