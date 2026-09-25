# 🧪 AI Radionica Beograd

Zajednički sajt i knowledge base za AI radionicu: GitHub AI agenti, izrada web aplikacija i AI automatizacija.

## Struktura

```
index.html          Početna — wiki sekcije, baze, principi, pojmovnik
zadatak.html        Zadatak za polaznike, korak po korak
ljudi/index.html    Lista svih polaznika
ljudi/<ime>.html    Lična stranica svakog polaznika  ← OVO MENJAŠ
ljudi/slike/<ime>/  Tvoje slike
assets/             Zajednički stilovi i skripte (ne menjaj)
```

## Zadatak (ukratko)

1. Prihvati poziv za repozitorijum na mejlu.
2. `git clone https://github.com/n8nlab/aiworkshop.git && cd aiworkshop`
3. `git checkout -b tvoje-ime/moja-stranica`
4. Zamoli AI agenta da izmeni **samo** `ljudi/tvoje-ime.html`.
5. `git add ljudi/tvoje-ime.html && git commit -m "Ime: moja stranica"`
6. `git push -u origin tvoje-ime/moja-stranica` i otvori Pull Request.

Detaljna uputstva: otvori `zadatak.html`.

## Pokretanje

Nema build koraka — samo otvori `index.html` u browseru. Deploy: poveži repo sa Vercel-om (Framework: *Other*) ili uključi GitHub Pages.

> ⚠️ Nikad ne stavljaj API ključeve, lozinke ni privatne podatke u repo. Repo je javan.
