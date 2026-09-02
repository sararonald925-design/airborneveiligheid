import { PageHero } from "@/components/PageHero";
import styles from "../research.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <PageHero eyebrow="ABOUT" title="Herinner wat er gebeurde. Begrijp hoe." intro="Airborneveiligheid is een onafhankelijk onderzoeks- en educatieplatform in ontwikkeling. Het onderzoekt de Slag om Arnhem en de Tweede Wereldoorlog als verbonden systemen van mensen, territorium, macht, ideologie, informatie, instituties en infrastructuur." meta="Platformdocumentatie · publieke samenvatting" />
      <div className={styles.contentNarrow}>
        <section className={styles.section}><span className={styles.kicker}>MISSIE</span><h2>Historische gebeurtenissen verbinden met de mechanismen die ze mogelijk maakten.</h2><p className={styles.body}>Het platform wil niet alleen vastleggen wat er gebeurde. Het maakt zichtbaar welke omstandigheden, organisaties, ideeën, infrastructuren en beslissingen met elkaar verbonden moesten raken voordat oorlog, bezetting en vervolging op grote schaal uitvoerbaar werden.</p></section>
        <section className={styles.section}><span className={styles.kicker}>GEEN OORLOGSROMANTIEK</span><h2>Geen evenementensite. Geen militaire fanpagina.</h2><p className={styles.body}>Historische beelden worden gebruikt als bron en context, niet als decoratie. Persoonlijke verhalen worden niet gereduceerd tot heroïsche archetypen. Militair handelen wordt onderzocht binnen de gevolgen voor burgers, bestuur, infrastructuur en samenleving.</p></section>
        <section className={styles.section}><span className={styles.kicker}>METHODISCHE GRENS</span><h2>Structuur is niet hetzelfde als intentie.</h2><p className={styles.body}>Dat organisaties samen een patroon produceren betekent niet automatisch dat één actor het volledige patroon heeft ontworpen. Airborneveiligheid onderscheidt daarom aantoonbare coördinatie, individuele keuze, institutionele logica en structurele gevolgen.</p></section>
        <section className={styles.section}><span className={styles.kicker}>WAAROM NU</span><h2>Geschiedenis levert vragen, geen automatische hedendaagse gelijkstellingen.</h2><p className={styles.body}>Het platform gebruikt historische mechanismen om vragen te leren stellen over informatie, macht, rechten, classificatie en institutionele verantwoordelijkheid. Vergelijkingen met het heden moeten afzonderlijk worden onderbouwd en worden nooit alleen door analogie als waarheid gepresenteerd.</p></section>
      </div>
    </main>
  );
}
