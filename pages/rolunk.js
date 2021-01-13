import { motion } from 'framer-motion'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Rolunk() {
  return (
    <Layout>
      <Head>
        <title>GuestGuru - rólunk</title>
      </Head>
      <motion.h1 layoutId="rolunk" className={styles.title}>
        Rólunk
      </motion.h1>

      <motion.div
        className={styles.page_body}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        Stormtrooper
      </motion.div>
    </Layout>
  )
}
