# Airborneveiligheid

Airborneveiligheid is een onafhankelijk onderzoeks- en educatieplatform over de Slag om Arnhem, Operatie Market Garden en de bredere systemen waardoor oorlog, bezetting, vervolging en georganiseerd geweld uitvoerbaar werden.

De website is **geen evenementen- of toerismesite**. De centrale productvraag is:

> Welke verandering maakte een volgende verandering mogelijk?

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- CSS Modules
- ESLint

## Lokale installatie

Vereisten: Node.js LTS en Git.

```bash
npm install
npm run dev
```

Open daarna `http://localhost:3000`.

Extra controles:

```bash
npm run typecheck
npm run lint
npm run build
```

## Routes

- `/` — editorial homepage
- `/system` — overkoepelend systeemmodel
- `/airborne-1944` — Market Garden als afhankelijkheidsnetwerk
- `/map` — territoriale analyse
- `/people` — personen en menselijke gevolgen
- `/archive` — prototype van het onderzoeksarchief
- `/sources` — bronnen- en evidencemodel
- `/about` — missie en methodische grenzen

## Projectstructuur

```text
src/
  app/              Next.js routes en route-styling
  components/       gedeelde React-componenten
  data/             statische onderzoeksdata voor het prototype
  types/            TypeScript datamodellen

docs/               platform- en architectuurdocumentatie
```

## Onderzoeksprincipes

1. Feit, analyse en onzekerheid worden zichtbaar gescheiden.
2. Structuur is niet automatisch intentie.
3. Geen historische claim wordt sterker gepresenteerd dan de beschikbare bronnen.
4. Persoonlijke verhalen worden niet gereduceerd tot systeemnodes.
5. Hedendaagse vergelijkingen worden niet alleen door analogie als bewijs gebruikt.

## Huidige status

Dit is een inhoudelijk prototype. De pagina's en datamodellen bestaan, maar een echte database, interactieve knowledge graph, full-text search en bronimport zijn nog niet gekoppeld. De repository moet die toekomstige uitbreiding ondersteunen zonder nu functies te simuleren die er nog niet zijn.
