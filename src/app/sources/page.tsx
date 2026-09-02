import { EvidenceBadge } from "@/components/EvidenceBadge";
import { PageHero } from "@/components/PageHero";
import { researchSources } from "@/data/research";
import styles from "../research.module.css";

export default function SourcesPage() {
  return (
    <main className={styles.page}>
      <PageHero eyebrow="SOURCES" title="Iedere conclusie moet terug kunnen naar bewijs." intro="Airborneveiligheid maakt zichtbaar wat feitelijk is vastgesteld, wat sterk wordt ondersteund, wat interpretatie is en waar onzekerheid blijft bestaan." meta="Bronnenbeleid v0.1" />
      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}><div><span className={styles.kicker}>EVIDENCE MODEL</span><h2>Niet alle uitspraken hebben dezelfde status.</h2></div><p>Een historisch systeemmodel mag nooit sterker worden gepresenteerd dan de bronnen waarop het rust.</p></div>
          <div className={styles.grid3}>
            <article className={styles.card}><EvidenceBadge status="established"/><h3>Feitelijk vastgesteld</h3><p>Direct ondersteund door sterke historische documentatie of breed bevestigde feiten.</p></article>
            <article className={styles.card}><EvidenceBadge status="supported"/><h3>Sterk onderbouwd</h3><p>Meerdere relevante bronnen ondersteunen de conclusie, maar de formulering bevat analytische samenhang.</p></article>
            <article className={styles.card}><EvidenceBadge status="interpretation"/><h3>Interpretatie</h3><p>Een expliciet analytische verklaring die verder gaat dan wat één bron rechtstreeks bewijst.</p></article>
          </div>
        </section>
        <section className={styles.section}>
          <span className={styles.kicker}>HUIDIGE ONDERZOEKSBASIS</span>
          <div className={styles.grid2}>{researchSources.map(source=><article className={styles.card} key={source.id}><div className={styles.cardTop}><small>{source.type}</small><EvidenceBadge status={source.status}/></div><h3>{source.title}</h3>{source.institution?<p><strong>{source.institution}</strong>{source.year?` · ${source.year}`:""}</p>:null}<p>Ondersteunt: {source.supports.join(", ")}.</p><p><strong>Beperking:</strong> {source.limitations.join(" ")}</p></article>)}</div>
        </section>
        <section className={styles.section}>
          <span className={styles.kicker}>BRONVRAGEN</span>
          <table className={styles.table}><thead><tr><th>Vraag</th><th>Waarom</th></tr></thead><tbody>
            <tr><td>Wie produceerde de bron?</td><td>Positie en doel beïnvloeden wat iemand kon waarnemen en vastleggen.</td></tr>
            <tr><td>Wanneer werd de bron gemaakt?</td><td>Een verslag tijdens een gebeurtenis verschilt van een herinnering decennia later.</td></tr>
            <tr><td>Wat ondersteunt de bron werkelijk?</td><td>Een document kan een handeling bewijzen zonder automatisch de bedoeling erachter te bewijzen.</td></tr>
            <tr><td>Welke informatie ontbreekt?</td><td>Afwezigheid van bewijs wordt niet automatisch bewijs van afwezigheid.</td></tr>
          </tbody></table>
        </section>
      </div>
    </main>
  );
}
