import { motion } from 'framer-motion'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Page({ title, id, children }) {
  return (
    <Layout>
      <Head>
        <title>GuestGuru {title}</title>
      </Head>
      <motion.h1 layoutId={id} className={styles.title}>
        {title}
      </motion.h1>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={styles.page_body}
      >
        {children}
      </motion.div>
    </Layout>
  )
}
