# Lausnir – hvernig við leysum dæmin

Útskýringar fyrir kennarann, skref fyrir skref. Fullbúinn kóði er í `lausnir/src/`.

Sama hugsun liggur á bak við öll verkefnin:

1. **Hvað þarf componentinn að muna?** → það verður state.
2. **Hvaða týpa er það?** → `boolean` (já/nei), `number` (tala), `string` (texti).
3. **Hvað breytir því?** → smellur (`onClick`) eða innsláttur (`onChange`) sem kallar á set-fallið.
4. **Hvað á að birtast?** → `&&` ef eitthvað eða ekkert, `? :` ef A eða B.

Gott að skrifa þessar fjórar spurningar á töfluna og láta nemendur svara þeim áður en þau byrja að kóða.

---

## 01 · Upphitun

### 💡 Ljósrofi

| Spurning | Svar |
|---|---|
| Hvað þarf að muna? | Hvort kveikt er |
| Týpa | `boolean` |
| Hvað breytir því? | Smellur á takka |
| Hvað birtist? | Litur og texti, A eða B → ternary |

```tsx
const [on, setOn] = useState(false);

<div className="ljosrofi" style={{ background: on ? "#fff6c2" : "#1f2937" }}>
  <button onClick={() => setOn(!on)}>{on ? "Slökkva" : "Kveikja"}</button>
</div>
```

**Lykilatriði:**
- `!on` snýr boolean við. Þetta er mynstrið fyrir allt sem kveikir og slekkur.
- `style={{ }}` er nýtt: ytri `{ }` = „hér kemur JavaScript“, innri `{ }` = JS-hlutur með CSS-eiginleikum.
  CSS-nöfn verða camelCase: `font-weight` → `fontWeight`.

### 🎲 Teningur

```tsx
const [tala, setTala] = useState(1);

function kasta() {
  setTala(Math.floor(Math.random() * 6) + 1);
}

<p>{hlidar[tala - 1]}</p>
<button onClick={kasta}>Kasta</button>
{tala === 6 && <p className="sexa">SEXA! 🎉</p>}
```

**Lykilatriði:**
- `onClick={kasta}` sendir **fallið**. `onClick={kasta()}` myndi kalla á það strax í hverri teikningu → „Too many re-renders“.
  Munurinn á þessu og `onClick={() => setTala(...)}`: þegar fallið tekur engin viðföng má senda það beint.
- `Math.random()` gefur 0 til 0,999… → `* 6` gefur 0 til 5,99… → `Math.floor` gefur 0–5 → `+ 1` gefur 1–6.
- `hlidar[tala - 1]`: fylki byrja í 0, teningur í 1.
- **Auka (köst):** annað state, `setKost(kost + 1)` inni í `kasta()`. Sýnir að einn smellur getur uppfært tvö state.

### ✍️ Stafateljari

```tsx
const [text, setText] = useState("");
const ofLangt = text.length > HAMARK;

<textarea value={text} onChange={(e) => setText(e.target.value)} />
<p style={{ color: ofLangt ? "#c0392b" : "#5b6475" }}>{text.length} / {HAMARK}</p>
{ofLangt && <p className="vidvorun">Of langt!</p>}
```

**Lykilatriði:**
- **Controlled input:** `value` les úr state og `onChange` skrifar í state. Ef `onChange` vantar er ekki hægt að skrifa í reitinn.
- `const ofLangt = …` er **ekki state**. Það er reiknað út frá state í hverri teikningu.
  Mikilvæg regla: ef hægt er að reikna eitthvað út frá öðru state á það ekki að vera sérstakt state.
- **Auka:** `Math.max(HAMARK - text.length, 0)` svo talan fari aldrei í mínus.

---

## 02 · Fylgiæfing – Teymissíðan

Allt gerist í `ProfileCard.tsx`. Byggið upp eitt skref í einu og prófið í vafranum eftir hvert skref.

### Skref 1 – Like-takki

```tsx
const [liked, setLiked] = useState(false);

<button onClick={() => setLiked(!liked)}>{liked ? "❤️" : "🤍"}</button>
```

Sama mynstur og ljósrofinn: boolean, `!`, ternary.

### Skref 2 – Like-teljari

```tsx
const [likes, setLikes] = useState(0);

function handleLike() {
  setLikes(liked ? likes - 1 : likes + 1);
  setLiked(!liked);
}

<button onClick={handleLike}>{liked ? "❤️" : "🤍"} {likes}</button>
```

**Lykilatriði:**
- Þegar onClick gerir meira en eitt er snyrtilegra að búa til eigið fall (`handleLike`).
- Inni í `handleLike` er `liked` **gamla gildið**, þ.e. eins og það var fyrir smellinn. State breytist ekki fyrr en
  React teiknar næst. Þess vegna: var ekki like-að → +1, var like-að → −1.
- Góð umræðuspurning: „Hvað gerist ef við víxlum línunum tveimur?“ Svar: ekkert breytist, því `liked` er
  enn gamla gildið í báðum línunum. Það kemur mörgum á óvart.

### Skref 3 – „Sýna meira“

```tsx
const [open, setOpen] = useState(false);

<button onClick={() => setOpen(!open)}>{open ? "Sýna minna" : "Sýna meira"}</button>
{open && <p>{bio}</p>}
```

Hér sjást báðar leiðirnar hlið við hlið: **ternary** fyrir texta takkans (A eða B) og **&&** fyrir bio (eitthvað eða ekkert).

### Skref 4 – Tilraun 🔬

Látið nemendur **spá fyrst**, svo prófa.

**Svar:** Hvert `<ProfileCard />` sem `map()` býr til er sérstakt eintak, og hvert eintak á sitt eigið state.
Like hjá Önnu hefur engin áhrif á Jón. Þetta er það sem „state tilheyrir componentinum“ þýðir í raun.

---

## 03 · Tímaverkefni – Kaffihúsið

### Skref 1 – Teljari (`MenuItem.tsx`)

```tsx
const [qty, setQty] = useState(0);

<button onClick={() => setQty(qty - 1)}>–</button>
<span className="qty">{qty}</span>
<button onClick={() => setQty(qty + 1)}>+</button>
```

Sama og teljarinn á glærunum. Hvert MenuItem á sinn eigin teljara (sama og tilraunin í fylgiæfingunni).

### Skref 2 – Ekki undir 0

```tsx
<button disabled={qty === 0} onClick={() => setQty(qty - 1)}>–</button>
```

`disabled` tekur boolean. `qty === 0` er boolean. Þetta er conditional á eiginleika, ekki á element.
Önnur lausn sem nemendur stinga oft upp á: `setQty(Math.max(qty - 1, 0))`. Hún virkar líka, en `disabled` sýnir
notandanum að ekki sé hægt að fara neðar.

### Skref 3 – Karfa

```tsx
{qty > 0 && <p className="karfa">{qty} í körfu · {qty * price} kr.</p>}
```

**Gildran:** `{qty && …}` sýnir „0“ á skjánum þegar qty er 0, því React teiknar töluna 0 (en ekki `false`).
Látið nemendur endilega lenda í þessu og laga það sjálf.

### Skref 4 – Uppselt

```tsx
{soldOut ? (
  <span className="badge uppselt">Uppselt</span>
) : (
  <div className="row">…takkarnir…</div>
)}
```

**Lykilatriði:**
- Ternary af því að annað hvort á að birtast, uppselt EÐA takkarnir.
- Svigar `( )` utan um margra lína JSX gera kóðann læsilegri.
- `soldOut` kemur úr **props**, ekki state. Conditional rendering virkar alveg eins á props.
  Gott að benda á: props = það sem foreldrið ákveður, state = það sem breytist inni í componentinum.

### Skref 5 – „🌱 Bara vegan“ (`Menu.tsx`)

```tsx
const [veganOnly, setVeganOnly] = useState(false);
const synilegt = menu.filter((item) => !veganOnly || item.isVegan);

<button onClick={() => setVeganOnly(!veganOnly)}>{veganOnly ? "Sýna allt" : "🌱 Bara vegan"}</button>
{synilegt.map((item) => <MenuItem key={item.id} … />)}
```

**Lykilatriði:**
- **Hvar á state að vera?** Í `Menu`, ekki í `MenuItem`, því það stjórnar því hvaða réttir birtast í listanum.
  State býr í þeim component sem þarf á því að halda.
- **`filter()`** skilar nýju fylki með þeim stökum sem fallið skilar `true` fyrir.
- **`!veganOnly || item.isVegan`** lesið upphátt: „haltu réttinum ef síunin er slökkt, EÐA ef rétturinn er vegan.“
  Ef nemendum finnst þetta flókið má skrifa það lengra:
  ```tsx
  const synilegt = veganOnly ? menu.filter((item) => item.isVegan) : menu;
  ```
  Það er ternary sem nemendur þekkja nú þegar.
- `synilegt` er **ekki state**, það er reiknað út frá `veganOnly` og `menu` (sama regla og í stafateljaranum).

**Auka:** `price.toLocaleString("is-IS")` → „1.290“.

### Brú yfir í næsta tíma

Spyrjið í lok tímans: **„Hvernig sýnum við heildarupphæð allrar körfunnar efst á síðunni?“**
Það gengur ekki eins og þetta er, því `qty` býr inni í hverju MenuItem og `Menu` veit ekkert um það.
Lausnin er að færa state upp í foreldrið, það sem kallast **lifting state up**. Það er gott efni í næsta tíma.

---

## 🎯 Bónus – Giskaðu á töluna

Fjögur state:

```tsx
const [leynitala, setLeynitala] = useState(nyLeynitala());
const [agiskun, setAgiskun] = useState("");      // string – það sem er í reitnum
const [skilabod, setSkilabod] = useState("");
const [tilraunir, setTilraunir] = useState(0);
const unnid = skilabod === "Rétt! 🎉";           // reiknað, ekki state
```

Giska-fallið:

```tsx
function giska() {
  const tala = Number(agiskun);          // ⚠ input skilar alltaf texta
  setTilraunir(tilraunir + 1);
  if (tala > leynitala) setSkilabod("Of hátt ⬇️");
  else if (tala < leynitala) setSkilabod("Of lágt ⬆️");
  else setSkilabod("Rétt! 🎉");
}
```

Birting:

```tsx
{skilabod !== "" && <p>{skilabod}</p>}
<p>Tilraunir: {tilraunir}</p>
{unnid && <button onClick={spilaAftur}>Spila aftur</button>}
```

**Lykilatriði:**
- `Number("42")` → 42. Án þess ber `"42" > 50` saman texta og tölu, og TypeScript kvartar.
- Fyrir hugrakka: tvöfaldur ternary
  `setSkilabod(tala > leynitala ? "Of hátt ⬇️" : tala < leynitala ? "Of lágt ⬆️" : "Rétt! 🎉")`.
  Virkar, en `if/else` er læsilegra. Góð umræða um læsileika.
- **Met (auka):** ef nemendur skrifa `setMet(tilraunir)` beint eftir `setTilraunir(tilraunir + 1)` fá þau tölu
  sem er einum of lág, því `tilraunir` er enn gamla gildið. Lausnin er að reikna `const nyjarTilraunir = tilraunir + 1`
  og nota það á báðum stöðum. Sama lexía og í like-teljaranum.
- `useState(nyLeynitala())` reiknar nýja tölu í hverri teikningu, en React notar bara þá fyrstu. Það er því
  í lagi fyrir byrjendur. Lengra komnir: `useState(nyLeynitala)` (án svigans) keyrir fallið bara einu sinni.
