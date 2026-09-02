import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import styles from "../research.module.css";

const requirements = [
  ["Troepen", "Luchtlandingseenheden en grondtroepen moesten op verschillende plaatsen en tijden dezelfde corridor ondersteunen."],
  ["Landingszones", "Open terrein moest bereikbaar, bruikbaar en voldoende dicht bij de doelen liggen."],
  ["Bruggen", "De corridor was afhankelijk van opeenvolgende rivierovergangen; verlies of vertraging bij één overgang werkte door."],
  ["Wegen", "Grondtroepen, bevoorrading en versterkingen waren sterk afhankelijk van een smalle bewegingsas."],
  ["Communicatie", "Commandanten moesten kunnen weten wat elders gebeurde om plannen tijdig aan de werkelijkheid aan te passen."],
  ["Bevoorrading", "Munitie, voedsel, brandstof en medische ondersteuning moesten geïsoleerde eenheden blijven bereiken."],
];

export default function Airborne1944Page() {
  return (
    <main className={styles.page}>
      <PageHero eyebrow="AIRBORNE 1944" title="Market Garden als afhankelijkheidsnetwerk." intro="De operatie probeerde de Duitse verdediging niet alleen terug te dringen, maar via een snelle corridor over meerdere grote rivieren heen te springen." meta="17–26 september 1944 · Gelderland en de corridor vanuit het zuiden" />
      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.introGrid}>
            <div><span className={styles.kicker}>HET PLAN</span><p className={styles.quote}>Iedere volgende stap was afhankelijk van verbindingen die eerder open moesten blijven.</p></div>
            <p className={styles.body}>Daarom is “de Slag om Arnhem” op dit platform niet één geïsoleerd gevecht. Arnhem was het noordelijke einddoel van een grotere route waarin bruggen, wegen, landingsgebieden, informatie en bevoorrading elkaar moesten ondersteunen.</p>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.sectionHeader}><div><span className={styles.kicker}>OPERATIONELE VOORWAARDEN</span><h2>Wat moest tegelijkertijd functioneren?</h2></div><p>Militaire kracht bestaat niet op één plek. Ze ontstaat uit het vermogen verschillende functies sneller en coherenter te verbinden dan de tegenstander.</p></div>
          <div className={styles.grid3}>{requirements.map(([title,text])=><article className={styles.card} key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>
        <section className={styles.section}>
          <span className={styles.kicker}>WAAR DE TOESTAND VERANDERDE</span>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}><time>17 SEP</time><div><h3>Landing en corridor beginnen</h3><p>Meerdere luchtlandingsterreinen en grondbewegingen worden onderdeel van één operationeel plan.</p></div></div>
            <div className={styles.timelineItem}><time>18–19 SEP</time><div><h3>Vertraging en weerstand werken door</h3><p>De tijd die op één plaats verloren gaat, verandert de mogelijkheden van eenheden verderop in het netwerk.</p></div></div>
            <div className={styles.timelineItem}><time>20–21 SEP</time><div><h3>De Waal wordt een kritieke gateway</h3><p>De oversteek bij Nijmegen is noodzakelijk voordat de grondcorridor richting Arnhem verder kan functioneren.</p></div></div>
            <div className={styles.timelineItem}><time>25–26 SEP</time><div><h3>Terugtrekking uit Oosterbeek</h3><p>De operationele functie verschuift van doorbraak naar het behouden en terugtrekken van overgebleven capaciteit.</p></div></div>
          </div>
        </section>
        <section className={styles.section}><div className={styles.ctaRow}><Link className={styles.button} href="/map">Onderzoek het territorium →</Link><Link className={styles.buttonSecondary} href="/system">Bekijk het grotere oorlogssysteem</Link></div></section>
      </div>
    </main>
  );
}
