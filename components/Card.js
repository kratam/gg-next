import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Card({ title, description, id }) {
  return (
    <Link href={`/${id}`}>
      <motion.a
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={styles.card}
      >
        <motion.h3 layoutId={id}>{title} &rarr;</motion.h3>
        <p>{description}</p>
      </motion.a>
    </Link>
  )
}
