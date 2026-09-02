import { PageHero } from "@/components/PageHero";
import { people } from "@/data/research";
import styles from "../research.module.css";

export default function PeoplePage() {
  return (
    <main className={styles.page}>
      <PageHero eyebrow="PEOPLE" title="Systemen worden werkelijk wanneer ze mensen bereiken." intro="Airborneveiligheid gebruikt personen niet als illustratie van een abstract model. Persoonlijke trajecten laten zien hoe besluiten, instituties en territoriale veranderingen in levens ingrijpen." meta="Personendatabase · eerste onderzoeksset" />
      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}><div><span className={styles.kicker}>MENSEN</span><h2>Van persoon naar netwerk</h2></div><p>Een persoon kan tegelijk militair, burger, bestuurder, slachtoffer, verzetsdeelnemer of getuige zijn. De historische identiteit wordt niet gereduceerd tot één institutionele categorie.</p></div>
          <div className={styles.grid2}>{people.map(person=><article className={styles.card} key={person.slug}><div className={styles.cardTop}><small>{person.role}</small><small>{person.location}</small></div><h3>{person.name}</h3><p>{person.summary}</p><a href={`/archive?person=${person.slug}`}>Bekijk gekoppelde bronnen →</a></article>)}</div>
        </section>
        <section className={styles.section}>
          <div className={styles.warning}><strong>Redactionele regel.</strong> Persoonlijke verhalen worden pas uitgebreid wanneer bronnen identiteit, gebeurtenissen en context voldoende ondersteunen. Het platform vult ontbrekende biografische details niet speculatief in.</div>
        </section>
      </div>
    </main>
  );
}
