import Card from '../components/Card'
import styles from '../styles/Home.module.css'

export default function Cards({ cards }) {
  return (
    <div className={styles.grid}>
      <Card
        id="miertmi"
        title="Miért mi?"
        description="Mi különböztet meg minket mindenki mástól?"
      />

      <Card
        id="szoftver"
        title="Szoftver"
        description="Miért jó neked, hogy technológiai cég vagyunk?"
      />

      <Card
        id="arak"
        title="Árak"
        description="Mennyibe kerül mindez és hogy lehetünk ennyire olcsók?"
      />

      <Card
        id="rolunk"
        title="Rólunk"
        description="Kik vagyunk és mit mondanak rólunk?"
      />
    </div>
  )
}
