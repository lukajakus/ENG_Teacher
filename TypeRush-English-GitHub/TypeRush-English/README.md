# TypeRush English — upute

TypeRush English je besplatna web-aplikacija za **brzo tipkanje i učenje engleskog jezika**. Radi na računalu i mobitelu, bez računa, bez vanjskih API-ja, bez praćenja korisnika i bez pretplate. Podaci ostaju lokalno spremljeni u pregledniku (`localStorage`).

## Što aplikacija sadrži

- **Quick Test:** test brzine u trajanju od 30, 60 ili 120 sekundi.
- **Paragraph:** prepisivanje cijelog odlomka, bez vremenskog ograničenja.
- **Endless:** neprekidno tipkanje, s gumbom **Finish / Završi** za spremanje rezultata.
- **Vocabulary:** rečenice s korisnim engleskim riječima, uključujući spremljeni osobni rječnik.
- **Mistakes:** ponavljanje riječi u kojima si prije pogriješio.
- Razine **A1, A2, B1, B2, C1, C2** i nasumična razina, osam tema ili nasumične teme.
- Označavanje točnih i pogrešnih znakova, Backspace, WPM, CPM, točnost, timer, graf rezultata.
- Popis engleskih riječi s hrvatskim prijevodima, značenjima i primjerima; spremanje u osobni rječnik.
- Graf napretka, osobni rekord, prosječna brzina, povijest, ciljevi i broj dana u nizu.
- Hrvatsko/englesko sučelje, američki/britanski engleski, svijetla/tamna tema, fokus način, opcionalni zvuk.
- Instalacija na početni zaslon i izvanmrežni rad nakon prvog uspješnog učitavanja.

## Objavi na GitHub Pages — korak po korak

**Nemoj zamijeniti datoteke postojeće aplikacije FS Rules Academy.** Za TypeRush otvori **novi repozitorij**.

1. Preuzmi ZIP i raspakiraj ga. Unutra se nalazi mapa `TypeRush-English`.
2. Otvori [github.com](https://github.com) → **New repository**. Naziv neka bude `typerush-english`, a vidljivost **Public**.
3. U novom repozitoriju klikni **Add file → Upload files** i prenesi **sadržaj mape `TypeRush-English`**. Sačuvaj podmapu `icons` (ne stavljaj sve ikone u glavni direktorij). Ako GitHub ne prenosi cijelu mapu jednostavno, možeš koristiti GitHub Desktop za prijenos foldera.
4. Kada su datoteke prenesene, klikni **Commit changes**.
5. Otvori **Settings → Pages**, pod **Build and deployment** odaberi **Deploy from a branch**, granu `main` i mapu `/(root)`, zatim **Save**.
6. Aplikacija će biti dostupna na adresi:

   `https://TVOJE-GITHUB-IME.github.io/typerush-english/`

7. Na iPhoneu u **Safariju** otvori tu stranicu → **Share (Dijeli) → Add to Home Screen (Dodaj na početni zaslon)**. Na Androidu u Chromeu odaberi opciju instalacije aplikacije.

**Važno:** datoteka `index.html` mora se nalaziti u korijenu repozitorija. ZIP se ne učitava kao jedna datoteka na GitHub Pages — prvo ga raspakiraj.

### Struktura datoteka

```text
typerush-english/           ← korijen GitHub repozitorija
  index.html
  styles.css
  app.js
  data.js
  sw.js
  manifest.webmanifest
  README.md
  icons/
    favicon.svg
    icon-192.png
    icon-512.png
```

## Pokretanje na računalu bez GitHuba

Možeš otvoriti `index.html` izravno dvoklikom i koristiti vježbe. Za provjeru instalacije i rada service workera preporučuje se lokalni HTTP poslužitelj, npr. u direktoriju aplikacije:

```bash
python -m http.server 8000
```

Zatim otvori `http://localhost:8000` u pregledniku. Na GitHub Pagesu PWA radi putem HTTPS-a.

## Kako se računaju rezultati

- **WPM** (neto brzina) = `(broj trenutno točno upisanih znakova ÷ 5) ÷ proteklo vrijeme u minutama`.
- **CPM** = `trenutačan broj upisanih znakova ÷ proteklo vrijeme u minutama`.
- **Točnost** = `broj ispravnih pritisaka znakova ÷ ukupan broj upisanih znakova`, uključujući pogreške koje poslije ispraviš tipkom Backspace.
- Brisanje znaka ne računa se kao novi upis znaka.
- Rezultat se sprema kada završi vremenski test, kada prepišeš zadani odlomak ili kada u Endless načinu klikneš **Finish**.

## Važne napomene

- Aplikacija sastavlja nove vježbe iz **ručno pripremljenih gramatički točnih rečenica**, a ne iz plaćenog AI sustava. Kombinacije su brojne, no pojedine rečenice mogu se nakon duljeg korištenja ponovno pojaviti.
- Rječnik sadrži odabrane riječi, a ne sve riječi engleskog jezika. Nakon testa prikazuju se samo riječi koje se nalaze u pripremljenom rječniku i pojavljuju se u tekstu.
- Podaci se **ne sinkroniziraju** između mobitela i računala. Brisanje podataka web-preglednika briše i lokalnu povijest učenja.
- Na nekim mobilnim tipkovnicama automatska korekcija može raditi drugačije, iako je aplikacija isključuje kada preglednik to podržava.
- Kada kasnije mijenjaš datoteke objavljene aplikacije, povećaj verziju `CACHE` u `sw.js` da se nova verzija učita i na već instaliranim uređajima.

## English quick start

Unzip the archive, upload the contents of `TypeRush-English` to a new public GitHub repository, and enable GitHub Pages using **main / (root)**. Add the HTTPS page to your phone's home screen. Your vocabulary and test results are stored only in the current browser.
