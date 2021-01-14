import React from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import Page from '../components/Page'

export default function Automatizmus() {
  const [open, setOpen] = React.useState(false)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)
  return (
    <>
      <Page title="Szoftver" id="szoftver">
        Valósidejű <b>információs oldal</b>t adunk. Itt látod a költségek és
        bevételek alakulását, az elvégzett karbantartásokat és a folglalások
        listáját is. <a onClick={onOpenModal}>Példához kattints ide</a>.
      </Page>
      <Modal open={open} onClose={onCloseModal} center>
        <img src="/infooldal.png" width="100%" />
      </Modal>
    </>
  )
}
