import { PageHero } from "@/components/PageHero";
import { places, people, researchSources } from "@/data/research";
import styles from "../research.module.css";

export default function ArchivePage() {
  const records = [
    ...places.map(item => ({ type: "Plaats", title: item.name, detail: item.role })),
    ...people.map(item => ({ type: "Persoon", title: item.name, detail: `${item.role} · ${item.location}` })),
    ...researchSources.map(item => ({ type: "Bron", title: item.title, detail: item.institution ?? item.type })),
  ];

  return (
    <main className={styles.page}>
      <PageHero eyebrow="ARCHIVE" title="Zoek door het onderzoeksmodel." intro="Het archief wordt de toegang tot plaatsen, personen, organisaties, documenten, gebeurtenissen en relaties. In deze eerste versie is de datastructuur nog statisch." meta={`${records.length} prototype-records · databasekoppeling volgt later`} />
      <div className={styles.content}>
        <section className={styles.section}>
          <input className={styles.searchBox} type="search" placeholder="Zoeken in het archief — interfaceprototype" aria-label="Zoeken in het archief" disabled />
          <div className={styles.list}>{records.map((record,index)=><article className={styles.listItem} key={`${record.type}-${record.title}-${index}`}><span>{record.type}</span><div><strong>{record.title}</strong><p>{record.detail}</p></div><span>RECORD {String(index+1).padStart(3,"0")}</span></article>)}</div>
        </section>
        <section className={styles.section}><div className={styles.warning}><strong>Nog geen echte zoekmachine.</strong> De interface toont nu de gewenste informatievorm. Een database, full-text search en relationele knowledge graph worden pas toegevoegd wanneer het bron- en datamodel stabiel is.</div></section>
      </div>
    </main>
  );
}
