import { PageHero } from "@/components/PageHero";
import { places } from "@/data/research";
import styles from "../research.module.css";

export default function MapPage() {
  return (
    <main className={styles.page}>
      <PageHero eyebrow="TERRITORIUM" title="Waarom juist hier?" intro="De kaart laat niet alleen zien waar iets gebeurde, maar welke functie een plaats in verschillende fasen van de oorlog kreeg." meta="Schematische onderzoekskaart · geen navigatiekaart" />
      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.introGrid}>
            <div><span className={styles.kicker}>TERRITORIUM ALS SYSTEEM</span><p className={styles.quote}>De fysieke kaart verandert weinig. De functionele betekenis kan volledig veranderen.</p></div>
            <p className={styles.body}>Rivieren, bruggen, wegen, stedelijke concentratie en open terrein beperkten en vergrootten steeds andere mogelijkheden. Het platform onderzoekt daarom plaats als functie, niet alleen als coördinaat.</p>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.mapCanvas} aria-label="Schematische kaart van Arnhem, Oosterbeek, Ede, Driel, Nijmegen en de Betuwe">
            <span className={`${styles.place} ${styles.pArnhem}`}>ARNHEM</span>
            <span className={`${styles.place} ${styles.pOosterbeek}`}>OOSTERBEEK</span>
            <span className={`${styles.place} ${styles.pEde}`}>EDE</span>
            <span className={`${styles.place} ${styles.pDriel}`}>DRIEL</span>
            <span className={`${styles.place} ${styles.pNijmegen}`}>NIJMEGEN</span>
            <span className={`${styles.place} ${styles.pBetuwe}`}>BETUWE</span>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionHeader}><div><span className={styles.kicker}>PLAATSEN</span><h2>Functies in het netwerk</h2></div><p>De labels zijn analytische functies, geen totale beschrijving van de geschiedenis van een plaats.</p></div>
          <div className={styles.grid2}>{places.map(place=><article className={styles.card} key={place.slug}><div className={styles.cardTop}><small>{place.role}</small><small>{place.connections.length} verbindingen</small></div><h3>{place.name}</h3><p>{place.summary}</p><div className={styles.facts}>{place.functions.map(f=><span className={styles.fact} key={f}>{f}</span>)}</div></article>)}</div>
        </section>
      </div>
    </main>
  );
}
