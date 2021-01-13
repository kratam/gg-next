import { motion } from 'framer-motion'
import Head from 'next/head'
import Cards from '../components/Cards'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout showHeader={false} footer={<Cards />}>
      <Head>
        <title>GuestGuru - rövidtávú lakáskiadás</title>
      </Head>
      <motion.img
        layoutId="gglogo"
        src="/gglogo.svg"
        width="211"
        height="197"
      />

      <motion.p
        className={styles.description}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        Szia, mi vagyunk a GuestGuru.
        <br />
        Rövidtávú lakáskiadással foglalkozunk.{' '}
        <a href="mailto:hello@guest.guru">Írj nekünk!</a>
      </motion.p>
    </Layout>
  )
}
