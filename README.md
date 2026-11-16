# React – State, useState og conditional rendering

Kóði fyrir tímann: upphitun, fylgiæfing, tímaverkefni og bónus.

## Möppurnar

```
react-state-verkefni/
├── README.md          ← þú ert hér
├── LAUSNIR.md         ← hvernig við leysum hvert verkefni, skref fyrir skref (fyrir kennara)
├── byrjun/            ← BYRJUNARKÓÐI fyrir nemendur, með TODO-um
│   ├── VERKEFNI.md    ← verkefnalisti / todo með gátreitum
│   └── src/
│       ├── App.tsx                 ← sýnir öll verkefnin hvert undir öðru
│       ├── upphitun/
│       │   ├── Ljosrofi.tsx        ← 💡 boolean · ? :
│       │   ├── Teningur.tsx        ← 🎲 number · &&
│       │   └── Stafateljari.tsx    ← ✍️ string · && · ? :
│       ├── teymi/
│       │   ├── Team.tsx            ← frá síðasta tíma, óbreytt
│       │   └── ProfileCard.tsx     ← fylgiæfingin
│       ├── kaffihus/
│       │   ├── Menu.tsx            ← tímaverkefni, skref 5
│       │   └── MenuItem.tsx        ← tímaverkefni, skref 1–4
│       └── bonus/
│           └── GiskaLeikur.tsx     ← 🎯 bónus
└── lausnir/           ← sama verkefni, fullklárað
```

Báðar möppurnar eru sjálfstæð Vite + React + TypeScript verkefni.

## Keyra

```bash
cd byrjun        # eða: cd lausnir
npm install
npm run dev
```

Opnið slóðina sem birtist (venjulega http://localhost:5173).

## Tenging við glærurnar

| Glæra | Verkefni | Skrá |
|---|---|---|
| 01 · Upphitun | Ljósrofi, Teningur, Stafateljari | `src/upphitun/` |
| 02 · Fylgiæfing | Teymissíðan lifnar við | `src/teymi/ProfileCard.tsx` |
| 03 · Tímaverkefni | Kaffihúsið tekur við pöntunum | `src/kaffihus/` |
| Bónus | Giskaðu á töluna | `src/bonus/GiskaLeikur.tsx` |

## Ábendingar fyrir kennara

- Látið nemendur fá **bara `byrjun/`**. `lausnir/` og `LAUSNIR.md` eru fyrir ykkur.
- Ef nemendur eiga sitt eigið teymis- og kaffihúsverkefni frá síðasta tíma geta þau unnið í því í staðinn
  og notað TODO-in í `byrjun/` sem leiðbeiningar.
- Tvennt nýtt sem gæti þurft að útskýra: `style={{ ... }}` (upphitun) og `filter()` (kaffihús, skref 5).
