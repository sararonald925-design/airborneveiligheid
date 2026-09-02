import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SystemFlow } from "@/components/SystemFlow";
import { systemNodes } from "@/data/research";
import styles from "../research.module.css";

export default function SystemPage() {
  return (
    <main className={styles.page}>
      <PageHero
        eyebrow="THE SYSTEM"
        title="Hoe afzonderlijke systemen één oorlog konden vormen."
        intro="De Tweede Wereldoorlog wordt hier niet behandeld als één rechte keten, maar als een netwerk van politieke, juridische, economische, militaire en administratieve veranderingen."
        meta="Onderzoeksmodel · feit, structuur en intentie worden afzonderlijk beoordeeld"
      />
      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.introGrid}>
            <div>
              <span className={styles.kicker}>CENTRALE VRAAG</span>
              <p className={styles.quote}>Welke verandering maakte een volgende verandering mogelijk?</p>
            </div>
            <p className={styles.body}>Het model beweert niet dat iedere stap onvermijdelijk naar de volgende leidde. Het onderzoekt waar afhankelijkheden ontstonden, welke alternatieven verdwenen en hoe capaciteit, informatie en macht op elkaar gingen aansluiten.</p>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionHeader}><div><span className={styles.kicker}>CAUSALE WEERGAVE</span><h2>Van instabiliteit naar georganiseerde vernietiging</h2></div><p>Iedere node is een onderzoeksvraag. De verbinding wordt pas als historische claim gebruikt wanneer bronnen die verbinding ondersteunen.</p></div>
          <SystemFlow nodes={systemNodes} />
        </section>
        <section className={styles.section}>
          <div className={styles.grid3}>
            <article className={styles.card}><small>01 · ACTOR</small><h3>Wat wilde iemand bereiken?</h3><p>Intentie, ideologie, bevelen en bewuste keuzes blijven afzonderlijke verklaringslagen.</p></article>
            <article className={styles.card}><small>02 · STRUCTUUR</small><h3>Wat maakte handelen mogelijk?</h3><p>Infrastructuur, bevoegdheden, administratie, geld, logistiek en informatie bepalen uitvoerbaarheid.</p></article>
            <article className={styles.card}><small>03 · GEVOLG</small><h3>Wat veranderde daarna?</h3><p>Een ingreep kan nieuwe afhankelijkheden, beperkingen en reacties creëren die niemand afzonderlijk controleert.</p></article>
          </div>
          <div className={styles.ctaRow}><Link className={styles.button} href="/airborne-1944">Pas het model toe op Airborne 1944 →</Link><Link className={styles.buttonSecondary} href="/sources">Bekijk het bronnenbeleid</Link></div>
        </section>
      </div>
    </main>
  );
}
