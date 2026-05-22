# Teknisk Dokumentation: FriihogSiig

## Om projektet:

MMD - 2. semester - Eksamen
Vi har udarbejdet en webshop manuelt og fokuseret på komponenter og brugen af dem på tværs af de forskellige pages.
Vi henter data fra vores egen database lavet gennem Supabase.

Løsningen er udviklet med Astro og CSS.

## Eksempel på en brugerrejse gennem løsningen:

- Forside
- Menu med oversigt over smykker, gaveidéer, Om Friihof + Siig, dine favoritter, kurv og et søgefelt.
- Vælg smykker.
- Vælg nyheder.
- Kig de forskellige smykker igennem.
- Filtre på højre side - vælg guld.
- Vælg et guld smykke.
- Læs om smykket.
- Læg det i kurven.
- Udfyld leveringsoplysninger.

## Installation og opsætning af Astro:

1. Opret et nyt repository på GitHub.

2. Få repositoryet ned i VS Code:
   - Tryk på "Clone Git Repository..."
   - Indsæt linket fra dit repository
   - Vælg en mappe på din computer at gemme projektet i

3. Opret et nyt Astro-projekt i mappen via terminalen:

```bash
npm create astro@latest .
```

4. Installér afhængigheder:

```bash
npm install
```

5. Opret en `.env`-fil:

```bash
PUBLIC_SUPABASE_URL=din-supabase-url
PUBLIC_SUPABASE_ANON_KEY=din-supabase-anon-nøgle
```

6. Start serveren:

```bash
npm run dev
```

## Projekt mappe opsætning:

```bash
Friihogsiig/
├── public/
│   │   ├── img/
│   │   │  ├── ikoner
│   │   ├── favicon.ico
├── src/
│   ├── compopnents/
│   │   ├── breadcrumb.astro
│   │   ├── buttons.astro
│   │   ├── filterSidebar.astro
│   │   ├── footer.astro
│   │   ├── kurvItems.astro
│   │   ├── leveringsoplysninger.astro
│   │   ├── menu.astro
│   │   ├── ordreoversigt.astro
│   │   ├── productCard.astro
│   │   ├── searchBar.astro
│   │   ├── sidstKiggetPaa.astro
│   ├── layouts/
│   │   ├── layout.astro
│   ├── pages/
│   │   ├── farvoritter.astro
│   │   ├── index.astro
│   │   ├── kurv.astro
│   │   ├── omFS.astro
│   │   ├── productlist.astro
│   │   ├── singleproduct.astro
│   ├── styles/
│   │   ├── global.css
├── .env
├── .gitignore
└── README.md
```

## Filbeskrivelser

### Alle Astro sider:

- index.astro - Forsiden.
- farvoritter.astro - Alle produkter som er blevet gjort til farvorit af brugeren.
- kurv.astro - Viser hvad brugeren har lagt i kurven.
- omFS.astro - Information om Friihof + Siig.
- productlist.astro - Listview med alle produkterne.
- singleproduct.astro - Singleview med hvert enkelt produkt.

### Alle Astro komponenter:

- breadcrumb.astro - Brødkrummestien, som bruges i productlist.astro og singleproduct.astro.
- buttons.astro - Alle knapper, som bruges på hjemmesiden.
- filterSidebar.astro - Filter, som bruges i productlist.astro.
- footer.astro - Footeren, som bruges på alle sider.
- kurvItems.astro - Viser de ting man har i kurven, som bruges på kurv.astro.
- leveringsoplysninger.astro - En forms hvor brugeren skal udfylde sine oplysninger, som bruges på kurv.astro.
- menu.astro - Navbaren, som bruges på alle sider.
- ordreoversigt.astro - Viser en oversigt over hvor mange penge det bliver i alt, som bruges på kurv.astro.
- productCard.astro - Hvordan hvert product er sat op, som bruges på productlist.astro.
- searchBar.astro - Findes i navbaren, som bruges på alle sider.
- sidstKiggetPaa.astro - Viser hvilket product man sidst har klikket ind på, som bruges på productlist.astro, singleproduct.astro og farvoritter.astro.

### Alle layouts:

- layout.astro - Samling af komponenter (de elementer som gentages på siderne)

### Alle CSS filer:

- global.css - Fælles design for alle sider.

## Sådan fungerer koden:

Projektet er bygget op med mappestruktur, der adskiller filer, komponenter, layouts og sider for at skabe et overskueligt og skalerbart setup.

Projektet er bygget med komponentbaseret struktur:
**Pages** fungerer som indgang for hver side.
**Layout** bruges til at sikre ensartet design på hver side.
**Components** genbruges på tværs af sider for at undgå gentagelse af kode.
**CSS** håndterer styling.

Opbyging af projektet på denne måde, gør projektet nemt at vedligeholde, skalerbart og overskueligt for videreudvikling.

## Flow:

For at undgå at vi arbejder i de samme filer, fordeler vi arbejdet således:

#### komponenter:

- footer.astro - Sara
- menu.astro - Sara
- seacarchbar.astro - Isabella
- kurv.astro - Isabella
- orderoversigt.astro - Isabella
- leveringsoplysninger.astro - Isabella
- Productcard.astro - Camille
- sidstkiggetpaa.astro - Camille
- filtersidebar.astro - Sara
- breadCrum.astro - Sara
- Buttons.astro - Camille

#### Layout

- Layout.astro - Sara

#### Pages

- index.astro - Camille
- farvoritter.astro - Sara
- kurv.astro - Isabella
- omFS.astro - Isabella
- productlist.astro - Camille / Sara
- sinlgeproduct.astro - Camille

#### styles

- global.css - Fælles

#### Readme

- Readme.md - Camille

Vi sørger for at commit-beskeder en passende overskrift.

## Kommentarer:

Vi gør brug af kommentarer til vores primæere elementer, som beskriver kodens formål og funktion, så vi kan holde et godt overblik.

### Eksempler på kommentarer:

```bash
/ Gem dropdown ved default /.

/ API-nøglen sendes med i headers /.
```

## Navngivning:

Vi har sørget for at navngive filer, classes, variabler, og funktioner så overskueligt og beskrivende som muligt.

## Komponenter i denne opgave

Brødkrummesti, knapper, filter, footer, kurvitems, leveringsoplysninger (forms), menu/navbar, ordreoversigt, card med produkt på, søgebaren og "sidst kigget på"-card.

## Branches og hvordan de bruges

Branches er en central del, når man koder i grupper fremfor individuelt. Det muliggøre at alle gruppemedlemmer kan kode på det samme projekt, dog på hver deres branch, således at alles kodet del ikke overlapper hinanden. Når alle gruppermedlemmer er færdige med hver deres kodet del, så merger man sin branch (sin kodet del) ind i main, således at alles kodet dele samles til et endeligt site.

#### Eksempler på branches:

- opstart_1/første
- kurv-components/kurv+kompnenter1
- oprettelse_af_supabase/supabase1

## Udfordringer undervejs

En udfording kunne være hvis et eller flere gruppemedlemmer glemmer at branche og arbejder i main, der opstår der problemer.

En anden udfording kunne også være en merge-konflikt - altså flere arbejder i den samme fil. Dog er det nemt at rette ved bare at kigge i GitHub, så fortæller den hvad problemet er.

## Gruppemedlemmer

- Sara
- Isabella
- Camille
