import styles from "./page.module.css";

const summaryPoints = [
  {
    number: "01",
    title: "Het plan",
    text: "Market Garden probeerde via een snelle corridor meerdere rivierovergangen te verbinden en de route richting Arnhem en de Rijn te openen.",
  },
  {
    number: "02",
    title: "Afhankelijkheden",
    text: "Bruggen, wegen, landingszones, bevoorrading, communicatie en commandovoering moesten als één keten blijven functioneren.",
  },
  {
    number: "03",
    title: "Contact met de werkelijkheid",
    text: "Vertraging, weerstand en verbroken verbindingen veranderden de mogelijkheden van de operatie terwijl zij al bezig was.",
  },
  {
    number: "04",
    title: "Gevolg",
    text: "Arnhem werd niet duurzaam bereikt door de grondcorridor; een deel van Gelderland veranderde daarna in front- en buffergebied.",
  },
  {
    number: "05",
    title: "De vraag erachter",
    text: "Welke losse functies moesten met elkaar verbonden zijn voordat militaire beweging werkelijk mogelijk werd?",
  },
];

const systemSteps = [
  ["01", "Territorium", "Rivieren, hoogteverschillen, wegen en steden bepalen welke beweging mogelijk of moeilijk wordt."],
  ["02", "Infrastructuur", "Bruggen en routes verbinden gebieden, maar maken het systeem ook afhankelijk van specifieke doorgangen."],
  ["03", "Informatie", "Waarneming, communicatie en commandovoering bepalen welke werkelijkheid een organisatie op tijd kan zien."],
  ["04", "Organisatie", "Militaire, bestuurlijke en logistieke functies moeten gecoördineerd worden om op schaal te kunnen handelen."],
  ["05", "Gevolg", "Wanneer verbindingen uitvallen, kunnen lokale verstoringen grotere gevolgen krijgen dan één plek alleen."],
];

const sourceCards = [
  {
    label: "ONDERZOEKSMODEL",
    title: "De Tweede Wereldoorlog als systeem",
    text: "Territorium, macht, informatie, infrastructuur en vernietiging worden als verbonden processen onderzocht.",
  },
  {
    label: "METHODE",
    title: "Feit, analyse en onzekerheid gescheiden",
    text: "De site maakt zichtbaar wat een bron ondersteunt, wat interpretatie is en waar kennis ontbreekt.",
  },
  {
    label: "HISTORISCH BEWIJS",
    title: "Iedere conclusie terug naar bronnen",
    text: "Gebeurtenissen, plaatsen en relaties worden gekoppeld aan controleerbare documenten en historische collecties.",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <details className={styles.mobileMenu}>
            <summary aria-label="Open navigatie"><span /><span /><span /></summary>
            <nav className={styles.mobileMenuPanel}>
              <a href="#system">Systeem</a>
              <a href="#airborne">Airborne 1944</a>
              <a href="#map">Kaart</a>
              <a href="#sources">Bronnen</a>
            </nav>
          </details>

          <a className={styles.brand} href="#top" aria-label="Airborneveiligheid home">
            <strong>AIRBORNEVEILIGHEID</strong>
            <span>BEGRIJP HOE HET KON GEBEUREN</span>
          </a>

          <nav className={styles.nav} aria-label="Hoofdnavigatie">
            <a href="#top">Home</a>
            <a href="#system">Systeem</a>
            <a href="#airborne">Airborne 1944</a>
            <a href="#map">Kaart</a>
            <a href="#sources">Bronnen</a>
            <a href="#about">Over ons</a>
          </nav>

          <button className={styles.searchButton} type="button" aria-label="Zoeken">
            <span className={styles.searchCircle} />
          </button>
        </div>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}><span /> AIRBORNE 1944</div>
          <h1>De Slag om Arnhem<br />begrijpen als systeem</h1>
          <p>Niet alleen wat er gebeurde,<br />maar hoe het mogelijk werd.</p>
          <a className={styles.shareLink} href="#system"><span>↗</span> ONDERZOEK HET SYSTEEM</a>
        </div>
        <div className={styles.imageCredit}>
          Luchtfoto Neder-Rijnbrug, Arnhem, september 1944 · IWM MH 2061 · publiek domein
        </div>
      </section>

      <section className={styles.metadata} id="airborne">
        <div className={styles.metaItem}><span className={styles.metaIcon}>▦</span><div><strong>17–26 SEPTEMBER 1944</strong><small>SLAG OM ARNHEM / MARKET GARDEN</small></div></div>
        <div className={styles.metaItem}><span className={styles.metaIcon}>⌖</span><div><strong>GELDERLAND, NEDERLAND</strong><small>ARNHEM · OOSTERBEEK · EDE · DRIEL · NIJMEGEN · BETUWE</small></div></div>
        <div className={styles.metaItem}><span className={styles.metaIcon}>◎</span><div><strong>MEERDERE SYSTEMEN</strong><small>MILITAIR · BURGERS · BESTUUR · INFRASTRUCTUUR · INFORMATIE</small></div></div>
        <div className={styles.metaItem}><span className={styles.metaIcon}>◷</span><div><strong>LEESTIJD</strong><small>9 MINUTEN</small></div></div>
      </section>

      <section className={styles.summarySection}>
        <div className={styles.sectionLead}>
          <h2>In het kort</h2>
          <span className={styles.rule} />
          <p>
            Operatie Market Garden was geen los gevecht, maar een netwerk van beweging, doorgangen,
            informatie en bevoorrading. De uitkomst veranderde zodra cruciale verbindingen niet meer
            functioneerden zoals gepland.
          </p>
        </div>

        <div className={styles.summaryGrid}>
          {summaryPoints.map((point) => (
            <article className={styles.summaryPoint} key={point.number}>
              <strong>{point.number}</strong>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.summaryMobile}>
          {summaryPoints.map((point) => (
            <details key={point.number}>
              <summary><span>{point.number}</span>{point.title}<b>+</b></summary>
              <p>{point.text}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.mapSection} id="map">
        <div className={styles.mapIntro}>
          <h2>Waarom hier?</h2>
          <span className={styles.rule} />
          <p>
            De oorlog creëerde de betekenis van Gelderland niet uit het niets. Rivieren, bruggen,
            wegen, open terrein en stedelijke concentraties maakten sommige plaatsen tot drempel,
            gateway, landingsruimte, eindknooppunt of buffer.
          </p>
          <a className={styles.oliveButton} href="#system">BEKIJK DE STRUCTUUR <span>→</span></a>
        </div>

        <div className={styles.mapVisual} aria-label="Schematische kaart van de Airborne-regio">
          <div className={`${styles.route} ${styles.routeOne}`} />
          <div className={`${styles.route} ${styles.routeTwo}`} />
          <div className={`${styles.route} ${styles.routeThree}`} />
          <div className={`${styles.river} ${styles.riverOne}`} />
          <div className={`${styles.river} ${styles.riverTwo}`} />
          <span className={`${styles.place} ${styles.ede}`}>EDE</span>
          <span className={`${styles.place} ${styles.oosterbeek}`}>OOSTERBEEK</span>
          <span className={`${styles.place} ${styles.arnhem}`}>ARNHEM</span>
          <span className={`${styles.place} ${styles.driel}`}>DRIEL</span>
          <span className={`${styles.place} ${styles.nijmegen}`}>NIJMEGEN</span>
          <span className={`${styles.place} ${styles.betuwe}`}>BETUWE</span>
          <div className={`${styles.node} ${styles.nodeEde}`} />
          <div className={`${styles.node} ${styles.nodeOosterbeek}`} />
          <div className={`${styles.node} ${styles.nodeArnhem}`} />
          <div className={`${styles.node} ${styles.nodeDriel}`} />
          <div className={`${styles.node} ${styles.nodeNijmegen}`} />
          <div className={`${styles.node} ${styles.nodeBetuwe}`} />
          <p className={styles.mapCaption}>Schematische onderzoekskaart · niet bedoeld als geografisch nauwkeurige routekaart</p>
        </div>
      </section>

      <section className={styles.systemSection} id="system">
        <div className={styles.systemHeading}>
          <span>SYSTEEMANALYSE</span>
          <h2>Oorlog begint niet op het slagveld.</h2>
          <p>
            Een militaire gebeurtenis is het zichtbare eindpunt van grotere ketens. Airborneveiligheid
            volgt daarom niet alleen gebeurtenissen, maar ook de voorwaarden waardoor zij mogelijk,
            uitvoerbaar of kwetsbaar werden.
          </p>
        </div>

        <div className={styles.systemGrid}>
          {systemSteps.map(([number, title, text]) => (
            <article key={number}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.questionSection}>
        <div>
          <span>DE CENTRALE VRAAG</span>
          <h2>Welke verbinding moest eerst veranderen voordat de volgende gebeurtenis mogelijk werd?</h2>
        </div>
        <p>
          De website wordt opgebouwd als een netwerk van plaatsen, personen, instituties, informatie,
          infrastructuur, beslissingen en gevolgen. Daardoor kan een bezoeker van één gebeurtenis steeds
          verder terug naar de voorwaarden die eraan voorafgingen.
        </p>
      </section>

      <section className={styles.sourcesSection} id="sources">
        <div className={styles.sectionLead}>
          <h2>De bewijslaag</h2>
          <span className={styles.rule} />
          <p>
            Het systeemmodel mag nooit sterker worden gepresenteerd dan het bewijs. Daarom worden feit,
            analyse, onzekerheid en bronherkomst zichtbaar van elkaar gescheiden.
          </p>
        </div>
        <div className={styles.sourceGrid}>
          {sourceCards.map((card) => (
            <article key={card.title}>
              <span>{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <a href="#about">MEER OVER DE METHODE →</a>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.aboutSection} id="about">
        <div>
          <span>AIRBORNEVEILIGHEID</span>
          <h2>Herinner wat er gebeurde.<br />Begrijp hoe.</h2>
        </div>
        <p>
          Airborneveiligheid is in ontwikkeling als onafhankelijk onderzoeks- en educatieplatform.
          Het doel is historische gebeurtenissen niet te romantiseren, maar hun menselijke,
          institutionele en territoriale samenhang controleerbaar te maken.
        </p>
      </section>

      <footer className={styles.footer}>
        <a className={styles.brandFooter} href="#top">
          <strong>AIRBORNEVEILIGHEID</strong>
          <span>BEGRIJP HOE HET KON GEBEUREN</span>
        </a>
        <div className={styles.footerLinks}>
          <a href="#system">Systeem</a>
          <a href="#map">Kaart</a>
          <a href="#sources">Bronnen</a>
          <a href="#about">Over ons</a>
        </div>
        <p>Prototype v0.1 · historische onderzoeksinterface in ontwikkeling</p>
      </footer>
    </main>
  );
}
