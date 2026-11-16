# Verkefni kvöldsins – State og conditional rendering

Keyrið verkefnið:

```bash
npm install
npm run dev
```

Í hverri skrá eru `TODO`-athugasemdir sem segja hvað á að gera. Hakið við hér jafnóðum.

---

## 01 · Upphitun – veljið eitt (eða fleiri)

### 💡 Ljósrofi — `src/upphitun/Ljosrofi.tsx`
- [ ] Boolean state sem byrjar sem `false`
- [ ] Bakgrunnurinn ljós/dökkur eftir state (ternary)
- [ ] Takkinn snýr state við
- [ ] Takkinn segir „Kveikja“ eða „Slökkva“
- [ ] ⭐ Auka: peran er dauf þegar slökkt er

### 🎲 Teningur — `src/upphitun/Teningur.tsx`
- [ ] Number state fyrir töluna
- [ ] `kasta()` vistar slembitölu 1–6
- [ ] Rétt teningshlið birtist
- [ ] „SEXA! 🎉“ birtist bara á 6 (`&&`)
- [ ] ⭐ Auka: teljari yfir fjölda kasta

### ✍️ Stafateljari — `src/upphitun/Stafateljari.tsx`
- [ ] String state tengt við textareitinn (`value` + `onChange`)
- [ ] „23 / 50“ birtist undir reitnum
- [ ] Talan verður rauð yfir 50 (ternary)
- [ ] Viðvörun birtist bara þegar textinn er of langur (`&&`)
- [ ] ⭐ Auka: „Eftir: 27 stafir“

---

## 02 · Fylgiæfing – Teymissíðan lifnar við

Skrá: `src/teymi/ProfileCard.tsx`. Við gerum þetta saman.

- [ ] **Skref 1:** ❤️ Like-takki – boolean state, 🤍 eða ❤️ með ternary
- [ ] **Skref 2:** Like-teljari – number state, +1 við like, −1 við unlike
- [ ] **Skref 3:** „Sýna meira“ – bio birtist bara þegar opið (`&&`), takkinn skiptir um texta
- [ ] **Skref 4:** Tilraun 🔬 – smellið á like hjá Önnu. Breytist eitthvað hjá Jóni? Af hverju ekki?

---

## 03 · Tímaverkefni – Kaffihúsið tekur við pöntunum

- [ ] **Skref 1** (`MenuItem.tsx`): Teljari `[qty, setQty]` með – og + tökkum
- [ ] **Skref 2** (`MenuItem.tsx`): –takkinn óvirkur í 0: `disabled={qty === 0}`
- [ ] **Skref 3** (`MenuItem.tsx`): „2 í körfu · 1300 kr.“ birtist bara ef `qty > 0`
- [ ] **Skref 4** (`MenuItem.tsx`): „Uppselt“ í stað takkanna ef `soldOut` (ternary)
- [ ] **Skref 5** (`Menu.tsx`): Takki „🌱 Bara vegan“ sem felur aðra rétti
- [ ] ⭐ Auka: verð með þúsundaskilum: `price.toLocaleString("is-IS")`

---

## 🎯 Bónus – Giskaðu á töluna

Skrá: `src/bonus/GiskaLeikur.tsx`

- [ ] Leynitala 1–100 valin í byrjun
- [ ] Input-reitur og takki „Giska“
- [ ] Skilaboð: „Of hátt ⬇️“, „Of lágt ⬆️“ eða „Rétt! 🎉“
- [ ] Teljari: „Tilraunir: 4“
- [ ] „Spila aftur“ birtist bara þegar rétt er giskað
- [ ] 🔥 Skilaboðin skipta um lit
- [ ] 🔥 Met: fæstar tilraunir

---

## Algengustu villurnar

| Einkenni | Orsök | Lausn |
|---|---|---|
| „Too many re-renders“ | `onClick={setCount(count + 1)}` | `onClick={() => setCount(count + 1)}` |
| „useState is not defined“ | import vantar | `import { useState } from "react";` |
| Talan 0 birtist á skjánum | `{count && …}` | `{count > 0 && …}` |
| Skjárinn uppfærist ekki | Breytt beint eða `push()` | Nota set-fallið og nýtt fylki |
| Get ekki skrifað í reitinn | `value` án `onChange` | Bæta við `onChange` |
| „Rendered more hooks…“ | `useState` inni í `if` | Færa efst í componentinn |
