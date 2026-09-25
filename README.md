# 🧪 AI Radionica Beograd

Zajednički sajt i knowledge base za AI radionicu: GitHub AI agenti, izrada web aplikacija i AI automatizacija.

## Struktura

```
index.html          Početna — wiki sekcije, baze, principi, pojmovnik
zadatak.html        Zadatak za polaznike, korak po korak
ljudi/index.html    Lista svih polaznika
ljudi/<ime>/        Tvoj folder  ← OVO MENJAŠ
  index.html        Tvoja glavna stranica (na dnu su startni promptovi)
  slike/            Tvoje slike
  *.html, */        Dodatne stranice i podfolderi koje praviš
assets/             Zajednički stilovi i skripte (ne menjaj)
```

## Zadatak (ukratko)

1. Prihvati poziv za repozitorijum na mejlu.
2. `git clone https://github.com/n8nlab/aiworkshop.git && cd aiworkshop`
3. `git checkout -b tvoje-ime/moja-stranica`
4. Otvori svoju stranicu, kopiraj startne promptove redom i daj ih AI agentu. Menja se **samo** `ljudi/tvoje-ime/`.
5. `git add ljudi/tvoje-ime/ && git commit -m "Ime: moja stranica"`
6. `git push -u origin tvoje-ime/moja-stranica` i otvori Pull Request.

Detaljna uputstva: otvori `zadatak.html`.

## Pokretanje

Nema build koraka — samo otvori `index.html` u browseru. Sajt se automatski objavljuje na GitHub Pages sa grane `main`: https://n8nlab.github.io/aiworkshop/

> ⚠️ Nikad ne stavljaj API ključeve, lozinke ni privatne podatke u repo. Repo je javan.
