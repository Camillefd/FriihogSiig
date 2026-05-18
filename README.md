# Teknisk Dokumentation: Hoest_Moen

## Om projektet:

MMD - 2. semester - Tema 9
I dette projekt, har vi valgt at fokusere på forsiden, programsiden og om Høst Møn.
Vi skal hete data fra vores egen database lavet gennem SupaBase:

Løsningen er udviklet med Atro, css og JavaScript.

## Navigationen af vores løsning:

- Forside
- Menu med oversigt over program og tidligere programmer.
- Vælg program.
- Læs om programmet.
- Menu med oversigt over om Høst, find rund & camping og galleri.
- Læs om Høst
- Footer med information med sociale medier og kontaktoplysninger.

## Installation og opsætning:

Klon os opsætning af reposiroty - Hvordan har vi gjordt det skridt for skridt.

## Projekt mappe opsætning:

```bash
Hoest_Moen/
├── public/
│   │   ├── favicon
│   │   ├── img
│   │   ├── video
├── src/
│   ├── compopnents/
│   │   ├── Buttons1.astro
│   │   ├── Buttons2.astro
│   │   ├──Cards.astro
│   │   ├──CardsForside.astro
│   ├── layouts/
│   │   ├── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── omhoest.astro
│   │   ├── program.astro
│   ├── styles/
│   │   ├── Global.css
├── .evn
├── .gitignore
└── README.md
```

## Filbeskrivelser

### Alle Astro sider:

- index.astro - Forsiden.
- omhoest.astro - Information om festivallen.
- Program.astro - Viser programmet for festivallen.

- cards.astro - Alle vores cards.

- Layout.astro - Samling af komponenter (de elementer som gentages)

### Alle CSS filer:

- Global.css - Fælles design for alle sider.

## Sådan fungerer koden:

Projektet er bygget op med mappestruktur, der adskiller filer, komponenter, layouts og sider for at skabe et overskueligt og skalerbart setup.

Projektet er bygget med komponentbaseret struktur:
**Pages** fungerer som indgang for hver side.
**Layout** bruges til at sikre ensartet design på hver side.
**Components** genbruges på tværs af sider for at undgå gentagelse af kode.
**CSS og JavaScript** håndterer styling og interaktivitet.

Opbyging af projektet på denne måde, gør projektet nemt at vedligeholde, skalerbart Og overskueligt for videreudvikling.

## Flow:

For at undgå at vi arbejder i de samme filer, fordeler vi arbejdet således:
Sara - Program
Isabella - Om Høst
Camille - Forsiden

Vi sørger for at commit-beskeder en passende overskrift.

## Hvordan koden fungerer:

Vi gør brug af kommentarer til vores primæere elementer, som beskriver kodens formål og funktion, så vi kan holde et godt overblik.

### Kommentarer

Bla bla bla Hvorfor har vi brugt kommentare

#### Eksempler på kommentarer:

/_ Gem dropdown ved default _/
/_ Hvert andet card vender billedet til højre _/

## Navngivning:

Vi har sørget for at navngive filer, classes, variabler, og funktioner så overskueligt og beskrivende som muligt.

## Komponenter i denne opgave

Cards, vores knapper, header og footer.

## Branches og hvordan de bruges

Branches er en central del, når man koder i grupper fremfor individuelt. Det muliggøre at alle gruppemedlemmer kan kode på det samme projekt, dog på hver deres branch, således at alles kodet del ikke overlapper hinanden. Når alle gruppermedlemmer er færdige med hver deres kodet del, så merger man sin branch (sin kodet del) ind i main, således at alles kodet dele samles til et endeligt site.

#### Eksempler på branches:

forside1
forside-done
variabler1
sidste_rettelser-done

## Udfordringer undervejs

En udfording kunne være hvis et eller flere gruppemedlemmer glemmer at branche og arbejder i main, der opstår der probmelber.

En anden udfording kunne også være en merge-konflikt - altså flere arbejder i den samme fil. Dog er det nemt at rette ved bare at kigge i GitHub, så fortæller den hvad problemet er.

## Gruppemedlemmer

- Sara
- Isabella
- Camille
