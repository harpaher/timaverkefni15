// 🎯 BÓNUS – Giskaðu á töluna
// Fyrir þau sem klára snemma. Allt sem þarf höfum við lært í kvöld.
//
// Kröfur:
//   [ ] Leynitala frá 1 til 100 er valin í byrjun.
//   [ ] Input-reitur og takki „Giska“.
//   [ ] Skilaboð: „Of hátt ⬇️“, „Of lágt ⬆️“ eða „Rétt! 🎉“
//   [ ] Teljari: „Tilraunir: 4“
//   [ ] „Spila aftur“ birtist aðeins þegar rétt er giskað (&&).
//
// Auka-áskorun 🔥
//   [ ] Skilaboðin skipta um lit: rautt (of hátt), blátt (of lágt), grænt (rétt).
//   [ ] Geymið metið – fæstar tilraunir.

import { useState } from "react";

function nyLeynitala() {
  return Math.floor(Math.random() * 100) + 1;
}

function GiskaLeikur() {
  // TODO 1: State fyrir leynitöluna:   useState(nyLeynitala())
  const [leynitala, setLeynitala] = useState(nyLeynitala());
  // TODO 2: State fyrir það sem er skrifað í reitinn (string)
  const [agiskun, setAgiskun] = useState("");
  // TODO 3: State fyrir skilaboðin (string, byrjar "")
  const [skilabod, setSkilabod] = useState("");
  // TODO 4: State fyrir fjölda tilrauna (number)
  const [tilraunir, setTilraunir] = useState(0);
  const [met, setMet] = useState(0);

  function giska() {
    // TODO 5: Breyttu textanum úr reitnum í tölu.
    //         ⚠ Input skilar alltaf texta! Number("42") gefur töluna 42.+
    const tala = Number(agiskun);
    // TODO 6: Hækkaðu tilraunateljarann um 1.
    setTilraunir(tilraunir + 1);
    // TODO 7: Berðu saman við leynitöluna og settu rétt skilaboð.
    //         Hægt að nota if/else – eða tvöfaldan ternary ef þið eruð hugrökk.
    if (tala > leynitala) {
      setSkilabod("Of hátt ⬇️");
    } else if (tala < leynitala) {
      setSkilabod("Of lágt ⬆️");
    } else {
      setSkilabod("Rétt! 🎉");

      if (met === 0 || tilraunir + 1 < met) {
        setMet(tilraunir + 1);
      }
    }
  }

  function spilaAftur() {
    // TODO 8: Ný leynitala, tómur reitur, engin skilaboð, 0 tilraunir.
    setLeynitala(nyLeynitala());
    setAgiskun("");
    setSkilabod("");
    setTilraunir(0);
  }

  return (
    <div className="card leikur">
      <p className="muted">Ég er að hugsa um tölu frá 1 til 100…</p>

      <div className="row">
        {/* TODO: Tengdu reitinn við state (value + onChange). */}
        <input type="number" placeholder="Þín ágiskun" value={agiskun} onChange={(e) => setAgiskun(e.target.value)} />
        {/* TODO: Tengdu takkann við giska(). */}
        <button onClick={giska}>Giska</button>
      </div>

      {/* TODO: Sýndu skilaboðin, bara ef það eru einhver skilaboð. */}
      {skilabod && (
        <p
          style={{
            color: skilabod === "Of hátt ⬇️" ? "red" : skilabod === "Of lágt ⬆️" ? "blue" : "green",
          }}
        >
          {skilabod}
        </p>
      )}
      {/* TODO: Sýndu „Tilraunir: X“ */}
      <p>Tilraunir: {tilraunir}</p>
      {met > 0 && <p>Met: {met} tilraunir</p>}
      {/* TODO: Sýndu „Spila aftur“-takkann BARA ef rétt var giskað. */}
      {skilabod === "Rétt! 🎉" && <button onClick={spilaAftur}>Spila aftur</button>}
    </div>
  );
}

export default GiskaLeikur;
