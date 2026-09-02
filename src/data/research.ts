import type { Place, PersonRecord, ResearchSource, SystemNode } from "@/types/research";

export const summaryPoints = [
  { number: "01", title: "Het plan", text: "Market Garden probeerde via een snelle corridor meerdere rivierovergangen te verbinden en de route richting Arnhem en de Rijn te openen." },
  { number: "02", title: "Afhankelijkheden", text: "Bruggen, wegen, landingszones, bevoorrading, communicatie en commandovoering moesten als één keten blijven functioneren." },
  { number: "03", title: "Contact met de werkelijkheid", text: "Vertraging, weerstand en verbroken verbindingen veranderden de mogelijkheden van de operatie terwijl zij al bezig was." },
  { number: "04", title: "Gevolg", text: "Arnhem werd niet duurzaam bereikt door de grondcorridor; een deel van Gelderland veranderde daarna in front- en buffergebied." },
  { number: "05", title: "De vraag erachter", text: "Welke losse functies moesten met elkaar verbonden zijn voordat militaire beweging werkelijk mogelijk werd?" },
];

export const systemNodes: SystemNode[] = [
  { id: "instability", label: "Politieke instabiliteit", description: "Crisis verandert welke verklaringen, risico's en politieke oplossingen geloofwaardig of aantrekkelijk worden.", next: ["ideology"] },
  { id: "ideology", label: "Radicale ideologie", description: "Complexe problemen worden gekoppeld aan eenvoudige vijandbeelden, hiërarchieën en herstelbeloften.", next: ["classification", "power"] },
  { id: "classification", label: "Classificatie", description: "Bestuurlijke en juridische categorieën veranderen de rechten, bescherming en handelingsruimte van groepen.", next: ["administration"] },
  { id: "power", label: "Concentratie van macht", description: "Tegenmacht neemt af terwijl meer beslissingscapaciteit in dezelfde politieke richting wordt georganiseerd.", next: ["administration", "militarisation"] },
  { id: "administration", label: "Administratie", description: "Registratie, politie, transport en lokale instituties maken beleid op grote schaal uitvoerbaar.", next: ["occupation", "persecution"] },
  { id: "militarisation", label: "Militarisering", description: "Industriële, logistieke en menselijke capaciteit wordt steeds sterker rond militaire doelen georganiseerd.", next: ["expansion"] },
  { id: "expansion", label: "Territoriale expansie", description: "Nieuwe gebieden, bevolking en infrastructuur komen onder militaire en bestuurlijke controle.", next: ["occupation"] },
  { id: "occupation", label: "Bezetting", description: "Veroverd territorium verandert in bestuurlijk, economisch en militair bruikbaar gebied.", next: ["persecution"] },
  { id: "persecution", label: "Vervolging", description: "Ideologie, categorie, wet, registratie en uitvoeringsmacht raken met elkaar verbonden.", next: ["destruction"] },
  { id: "destruction", label: "Georganiseerde vernietiging", description: "Geweld wordt schaalbaar wanneer verschillende gespecialiseerde functies op één richting aansluiten." },
];

export const places: Place[] = [
  { slug: "arnhem", name: "Arnhem", role: "Strategisch eindknooppunt", summary: "De Rijnbrug maakte Arnhem tot het einddoel van de geallieerde corridor en tegelijk tot een bijzonder kwetsbaar knooppunt.", functions: ["rivierovergang", "stedelijke concentratie", "bestuur", "militair doel"], connections: ["Oosterbeek", "Driel", "Nijmegen", "Betuwe"] },
  { slug: "oosterbeek", name: "Oosterbeek", role: "Verbindings- en terugtrekkingsgebied", summary: "Oosterbeek kreeg tijdens de strijd tijdelijk hoge militaire centraliteit door de positie tussen landingsgebieden, Arnhem en de Rijn.", functions: ["ontvangst", "verdediging", "terugtrekking"], connections: ["Arnhem", "Ede", "Driel"] },
  { slug: "ede", name: "Ede", role: "Capaciteitsruimte", summary: "Open terrein, kazernes en militaire infrastructuur maakten de omgeving geschikt voor verzamelen, landen en bewegen.", functions: ["landingsruimte", "militaire capaciteit", "verbinding"], connections: ["Oosterbeek", "Wageningen", "Arnhem"] },
  { slug: "nijmegen", name: "Nijmegen", role: "Gateway over de Waal", summary: "De Waalovergang was een noodzakelijke voorwaarde voordat de corridor richting Arnhem verder kon functioneren.", functions: ["gateway", "brug", "corridor"], connections: ["Betuwe", "Arnhem"] },
  { slug: "driel", name: "Driel", role: "Verbindingspunt", summary: "Driel werd onderdeel van pogingen om geïsoleerde geallieerde eenheden ten noorden van de Rijn te ondersteunen en te verbinden.", functions: ["verbinding", "rivier", "ondersteuning"], connections: ["Oosterbeek", "Arnhem", "Betuwe"] },
  { slug: "betuwe", name: "Betuwe", role: "Front- en bufferzone", summary: "Na het mislukken van de doorbraak veranderde het rivierengebied in een langdurige ruimte tussen tegenover elkaar staande legers.", functions: ["buffer", "front", "evacuatie"], connections: ["Nijmegen", "Arnhem", "Driel"] },
];

export const people: PersonRecord[] = [
  { slug: "john-frost", name: "John Frost", role: "Brits officier", location: "Arnhem", summary: "Verbonden met de verdediging van de noordelijke toegang tot de Rijnbrug tijdens de Slag om Arnhem." },
  { slug: "stanislaw-sosabowski", name: "Stanisław Sosabowski", role: "Pools generaal", location: "Driel", summary: "Commandant van de 1e Poolse Onafhankelijke Parachutistenbrigade, ingezet in de strijd rond de Rijn." },
];

export const researchSources: ResearchSource[] = [
  { id: "ww2-system", title: "De Tweede Wereldoorlog als systeem", type: "research-model", status: "supported", supports: ["territoriale analyse", "afhankelijkheden", "institutionele ketens", "Market Garden als netwerk"], limitations: ["Analytisch model; iedere historische claim moet afzonderlijk naar primaire of gezaghebbende secundaire bronnen terug te voeren zijn."] },
  { id: "crime-system", title: "Criminaliteit als systeem", type: "research-model", status: "interpretation", supports: ["informatieoverdracht", "classificatie", "gedeelde verantwoordelijkheid", "overgangen meten"], limitations: ["Wordt alleen methodologisch gebruikt; criminaliteit en oorlog worden niet inhoudelijk gelijkgesteld."] },
  { id: "iwm-mh2061", title: "IWM MH 2061 — Arnhem Rhine bridge aerial photograph", type: "primary", institution: "Imperial War Museums", year: "1944", status: "established", supports: ["visuele documentatie van Arnhem en de Rijnbrug"], limitations: ["Een foto bewijst niet zelfstandig de oorzaak of bedoeling van gebeurtenissen."] },
];
