# EmaQualcosa

- [x] False/True in caso di sito nazionale sulle regioni senza sito regionale
    - [x] Link feltre e belluno che sono divisi

- [ ] sorta di documentazione o qualche commento, oppure la prossima volta non capisco più nulla del funzionemento
- [x] "se manca la tua provincia clicca qui!" => da aggiungere
- [x] Refactor index.html-start.html, infatti la index.html deve essere l'attuale start.html
- [x] change the card sections, change link in the click functions

## TO DO BEFORE ONLINE
- [x] check names and spelling
- [ ] check compatibility thought mobile phones
- [x] update site name and content
- [x] update copiryght site name 
- [x] update mailto footer and google contacts

## Spiegazione:

- dati nel file `json` sono disposti:
```json
"el1": {
        "id": string,
        "name": string,
        "linkDonatori": string,
        "linkAspiranti": string,
        "info": string,
        "divisione": bool,
        "regionale": bool
    }
```
    (serve sempre la virgola a parte se è l'ultimo elemento)
    - `divisione` serve per le regioni che hanno più di un associazione per le donazioni, e quindi hanno 4 o più link diversi
    - `regionale: true` se hanno un sito regionale, se no riporta al sito nazionale di fidas