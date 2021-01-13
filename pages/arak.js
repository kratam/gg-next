import { motion } from 'framer-motion'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Arak() {
  return (
    <Layout>
      <Head>
        <title>GuestGuru - árak</title>
      </Head>
      <motion.h1 layoutId="arak" className={styles.title}>
        Árak
      </motion.h1>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={styles.page_body}
      >
        15% + 20 000 Ft.
      </motion.div>
    </Layout>
  )
}
