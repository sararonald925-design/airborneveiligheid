import Link from "next/link";
import { summaryPoints } from "@/data/research";
import styles from "./page.module.css";

const systemSteps = [
  ["01", "Territorium", "Rivieren, hoogteverschillen, wegen en steden bepalen welke beweging mogelijk of moeilijk wordt."],
  ["02", "Infrastructuur", "Bruggen en routes verbinden gebieden, maar maken het systeem ook afhankelijk van specifieke doorgangen."],
  ["03", "Informatie", "Waarneming, communicatie en commandovoering bepalen welke werkelijkheid een organisatie op tijd kan zien."],
  ["04", "Organisatie", "Militaire, bestuurlijke en logistieke functies moeten gecoördineerd worden om op schaal te kunnen handelen."],
  ["05", "Gevolg", "Wanneer verbindingen uitvallen, kunnen lokale verstoringen grotere gevolgen krijgen dan één plek alleen."],
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} id="top">
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}><span /> AIRBORNE 1944</div>
          <h1>De Slag om Arnhem<br />begrijpen als systeem</h1>
          <p>Niet alleen wat er gebeurde,<br />maar hoe het mogelijk werd.</p>
          <Link className={styles.shareLink} href="/system"><span>↗</span> ONDERZOEK HET SYSTEEM</Link>
        </div>
        <div className={styles.imageCredit}>Luchtfoto Neder-Rijnbrug, Arnhem, september 1944 · IWM MH 2061 · publiek domein</div>
      </section>

      <section className={styles.metadata} id="airborne">
        <div className={styles.metaItem}><span className={styles.metaIcon}>▦</span><div><strong>17–26 SEPTEMBER 1944</strong><small>SLAG OM ARNHEM / MARKET GARDEN</small></div></div>
        <div className={styles.metaItem}><span className={styles.metaIcon}>⌖</span><div><strong>GELDERLAND, NEDERLAND</strong><small>ARNHEM · OOSTERBEEK · EDE · DRIEL · NIJMEGEN · BETUWE</small></div></div>
        <div className={styles.metaItem}><span className={styles.metaIcon}>◎</span><div><strong>MEERDERE SYSTEMEN</strong><small>MILITAIR · BURGERS · BESTUUR · INFRASTRUCTUUR · INFORMATIE</small></div></div>
        <div className={styles.metaItem}><span className={styles.metaIcon}>◷</span><div><strong>ONDERZOEK</strong><small>FEIT · ANALYSE · ONZEKERHEID · BRON</small></div></div>
      </section>

      <section className={styles.summarySection}>
        <div className={styles.sectionLead}><h2>In het kort</h2><span className={styles.rule} /><p>Operatie Market Garden was geen los gevecht, maar een netwerk van beweging, doorgangen, informatie en bevoorrading. De uitkomst veranderde zodra cruciale verbindingen niet meer functioneerden zoals gepland.</p></div>
        <div className={styles.summaryGrid}>{summaryPoints.map(point=><article className={styles.summaryPoint} key={point.number}><strong>{point.number}</strong><h3>{point.title}</h3><p>{point.text}</p></article>)}</div>
        <div className={styles.summaryMobile}>{summaryPoints.map(point=><details key={point.number}><summary><span>{point.number}</span>{point.title}<b>+</b></summary><p>{point.text}</p></details>)}</div>
        <div style={{marginTop:32}}><Link className={styles.oliveButton} href="/airborne-1944">OPEN AIRBORNE 1944 <span>→</span></Link></div>
      </section>

      <section className={styles.mapSection} id="map">
        <div className={styles.mapIntro}><h2>Waarom hier?</h2><span className={styles.rule} /><p>De oorlog creëerde de betekenis van Gelderland niet uit het niets. Rivieren, bruggen, wegen, open terrein en stedelijke concentraties maakten sommige plaatsen tot drempel, gateway, landingsruimte, eindknooppunt of buffer.</p><Link className={styles.oliveButton} href="/map">BEKIJK DE KAART <span>→</span></Link></div>
        <div className={styles.mapVisual} aria-label="Schematische kaart van de Airborne-regio">
          <div className={`${styles.route} ${styles.routeOne}`} /><div className={`${styles.route} ${styles.routeTwo}`} /><div className={`${styles.route} ${styles.routeThree}`} /><div className={`${styles.river} ${styles.riverOne}`} /><div className={`${styles.river} ${styles.riverTwo}`} />
          <span className={`${styles.place} ${styles.ede}`}>EDE</span><span className={`${styles.place} ${styles.oosterbeek}`}>OOSTERBEEK</span><span className={`${styles.place} ${styles.arnhem}`}>ARNHEM</span><span className={`${styles.place} ${styles.driel}`}>DRIEL</span><span className={`${styles.place} ${styles.nijmegen}`}>NIJMEGEN</span><span className={`${styles.place} ${styles.betuwe}`}>BETUWE</span>
          <div className={`${styles.node} ${styles.nodeEde}`} /><div className={`${styles.node} ${styles.nodeOosterbeek}`} /><div className={`${styles.node} ${styles.nodeArnhem}`} /><div className={`${styles.node} ${styles.nodeDriel}`} /><div className={`${styles.node} ${styles.nodeNijmegen}`} /><div className={`${styles.node} ${styles.nodeBetuwe}`} />
          <p className={styles.mapCaption}>Schematische onderzoekskaart · niet bedoeld als geografisch nauwkeurige routekaart</p>
        </div>
      </section>

      <section className={styles.systemSection} id="system">
        <div className={styles.systemHeading}><span>SYSTEEMANALYSE</span><h2>Oorlog begint niet op het slagveld.</h2><p>Een militaire gebeurtenis is het zichtbare eindpunt van grotere ketens. Airborneveiligheid volgt daarom niet alleen gebeurtenissen, maar ook de voorwaarden waardoor zij mogelijk, uitvoerbaar of kwetsbaar werden.</p></div>
        <div className={styles.systemGrid}>{systemSteps.map(([number,title,text])=><article key={number}><strong>{number}</strong><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div style={{marginTop:36}}><Link className={styles.shareLink} href="/system">OPEN HET VOLLEDIGE SYSTEEM →</Link></div>
      </section>

      <section className={styles.questionSection}><div><span>DE CENTRALE VRAAG</span><h2>Welke verbinding moest eerst veranderen voordat de volgende gebeurtenis mogelijk werd?</h2></div><p>De website wordt opgebouwd als een netwerk van plaatsen, personen, instituties, informatie, infrastructuur, beslissingen en gevolgen. Daardoor kan een bezoeker van één gebeurtenis steeds verder terug naar de voorwaarden die eraan voorafgingen.</p></section>

      <section className={styles.sourcesSection} id="sources">
        <div className={styles.sectionLead}><h2>De bewijslaag</h2><span className={styles.rule} /><p>Het systeemmodel mag nooit sterker worden gepresenteerd dan het bewijs. Daarom worden feit, analyse, onzekerheid en bronherkomst zichtbaar van elkaar gescheiden.</p></div>
        <div className={styles.sourceGrid}>
          <article><span>ONDERZOEKSMODEL</span><h3>De Tweede Wereldoorlog als systeem</h3><p>Territorium, macht, informatie, infrastructuur en vernietiging worden als verbonden processen onderzocht.</p><Link href="/system">OPEN MODEL →</Link></article>
          <article><span>METHODE</span><h3>Feit, analyse en onzekerheid gescheiden</h3><p>De site maakt zichtbaar wat een bron ondersteunt, wat interpretatie is en waar kennis ontbreekt.</p><Link href="/sources">BRONNENBELEID →</Link></article>
          <article><span>ARCHIEF</span><h3>Iedere conclusie terug naar bronnen</h3><p>Gebeurtenissen, plaatsen en relaties worden stapsgewijs gekoppeld aan controleerbare historische collecties.</p><Link href="/archive">OPEN ARCHIEF →</Link></article>
        </div>
      </section>

      <section className={styles.aboutSection} id="about"><div><span>AIRBORNEVEILIGHEID</span><h2>Herinner wat er gebeurde.<br />Begrijp hoe.</h2></div><p>Geen evenementen- of toerismesite, maar een onafhankelijk onderzoeks- en educatieplatform in ontwikkeling.</p></section>
    </main>
  );
}
