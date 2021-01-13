import Card from '../components/Card'
import styles from '../styles/Home.module.css'

export default function Cards() {
  return (
    <div className={styles.grid}>
      <Card
        href="/miertmi"
        header="Miért mi?"
        body="Mi különböztet meg minket mindenki mástól?"
        motionId="miertmi"
      />

      <Card
        href="/automatizmus"
        header="Automatizmusok"
        body="Olvass szoftveres megoldásinkról és azok hatásáról."
        motionId="automatizmus"
      />

      <Card
        href="/arak"
        header="Árak"
        body="Mennyibe kerül mindez és hogy lehetünk ennyire olcsók?"
        motionId="arak"
      />

      <Card
        href="/rolunk"
        header="Rólunk"
        body="Kik vagyunk és mit mondanak rólunk?"
        motionId="rolunk"
      />
    </div>
  )
}
