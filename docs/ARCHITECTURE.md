# Architectuur

## Doel

De codebase moet twee dingen tegelijk ondersteunen:

1. een rustige editorial website voor het publiek;
2. een steeds dieper relationeel onderzoeksmodel achter die interface.

Daarom worden presentatie, onderzoeksdata en toekomstige opslag van elkaar gescheiden.

## Frontend

Next.js App Router levert de routes. React-componenten onder `src/components` worden gedeeld door meerdere pagina's. Paginaspecifieke opmaak staat in CSS Modules; globale reset en typografische basis staan in `src/app/globals.css`.

## Data

De prototypegegevens staan nu in `src/data/research.ts`. Dit is bewust tijdelijk. Het bestand weerspiegelt het gewenste model, maar is geen database.

Toekomstige hoofdentiteiten:

- Person
- Place
- Organisation
- Event
- Source
- Claim
- Relation
- Infrastructure
- Decision

## Relations

Een relatie moet later minimaal bevatten:

- source node
- target node
- relation type
- start/end date indien bekend
- evidence status
- supporting source ids
- analyst note

Voorbeeld:

```text
Nijmegen bridge
  -- enables movement toward -->
Arnhem corridor
```

Een pijl is dus nooit alleen een visuele lijn; zij moet een controleerbare relatie vertegenwoordigen.

## Evidence

Claims en relaties krijgen een expliciete status:

- established
- supported
- interpretation
- disputed
- unknown

Een bron moet daarnaast vastleggen wat zij ondersteunt én wat zij niet bewijst.

## Toekomstige backend

Een relationele database zoals PostgreSQL/Supabase past goed bij de eerste productiefase. Voor knowledge-graph-weergave hoeft niet direct een aparte graph database te worden geïntroduceerd: relaties kunnen eerst relationeel worden opgeslagen en als graaf worden geprojecteerd.

## Zoeklaag

Het huidige `/archive` is alleen een UI-prototype. Later zijn minimaal nodig:

- full-text search;
- filters op type, datum, plaats en evidence status;
- relationele resultaten;
- bronverwijzingen;
- permalinks naar records.

## Veiligheidsgrens

Niet-publiceerbare operationele of persoonsgegevens horen niet in de publieke dataset. Het platform is een historisch onderzoeksproduct, geen systeem voor actuele opsporings- of veiligheidsinformatie.
