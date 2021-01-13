import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'

export default function Automatizmus() {
  const [open, setOpen] = React.useState(false)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)
  return (
    <Layout>
      <Head>
        <title>GuestGuru - automatizmusok</title>
      </Head>
      <motion.h1 layoutId="automatizmus" className={styles.title}>
        Automatizmusok
      </motion.h1>

      <motion.p
        className={styles.page_body}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        Valósidejű <b>információs oldal</b>t adunk. Itt látod a költségek és
        bevételek alakulását, az elvégzett karbantartásokat és a folglalások
        listáját is. <a onClick={onOpenModal}>Példához kattints ide</a>.
      </motion.p>
      <Modal open={open} onClose={onCloseModal} center>
        <img src="/infooldal.png" width="100%" />
      </Modal>
    </Layout>
  )
}
