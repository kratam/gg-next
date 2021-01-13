import { motion } from 'framer-motion'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function MiertMi() {
  return (
    <Layout>
      <Head>
        <title>GuestGuru - miért mi?</title>
      </Head>
      <motion.h1 layoutId="miertmi" className={styles.title}>
        Miért mi?
      </motion.h1>

      <motion.div
        className={styles.page_body}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        Beszélhetnénk arról, hogy mennyire megbízhatóak vagyunk, hogy hány éve
        vagyunk már a piacon, hogy hányezer vendéget fogadtunk már, de ezt
        mindenki elmondja magáról, nem szeretnénk egy újabb{' '}
        <a href="https://youtu.be/tBouTxpbwN0" target="_blank">
          unalmas próféta
        </a>{' '}
        lenni csak. Három dolog van, amiben markánsan különbözünk:
        <ul>
          <li>
            Alapvetően technológiai cégnek tartjuk magunkat: amit lehet, azt
            automatizálunk. Ez neked azért jó, mert így hatékonyabban és mégis
            olcsóbban tudunk dolgozni, nekünk meg azért, mert nem hullik ki a
            hajunk a napi őrületben. Megoldásainkról és előnyeikről részletesen
            olvashatsz az Automatizmusok oldalon.
          </li>
          <li>
            Áttörjük a megszokott céges struktúrákat. Újfajta árazási módszerünk
            egyszerre olcsóbb neked és kiszámíthatóbb azoknak, akik a lakásodat
            karbantartják és az ügyeit intézik. Dedikált kapcsolattartót kapsz,
            aki mindig képben van a lakásod ügyeivel és havonta minimum egyszer
            a helyszínen ellenőrzi, hogy minden a megfelelő állapotban legyen.
          </li>
          <li>
            Semmilyen információt nem rejtünk el. Ez két dolgot jelent: a
            lakásoddal kapcsolatos minden foglalást, bevételt és költséget
            megtalálsz a valósidejű infooldalunkon.
            <br />
            Másrészt az évek során felgyűlt tudásunkat ingyenes megosztottunk
            mindenkivel (nem csak az ügyfeleinkkel!). Erre létrehoztunk és a{' '}
            <a href="https://apartmankiadok.hu" target="_blank">
              MAKE
            </a>
            -val közösen üzemeltetjük az első magyar{' '}
            <a href="https://forum.vendegkonyv.online" target="_blank">
              apartmankiadó tudásbázist
            </a>
            .
          </li>
        </ul>
      </motion.div>
    </Layout>
  )
}
