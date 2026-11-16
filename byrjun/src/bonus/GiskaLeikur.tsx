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
  // TODO 2: State fyrir það sem er skrifað í reitinn (string)
  // TODO 3: State fyrir skilaboðin (string, byrjar "")
  // TODO 4: State fyrir fjölda tilrauna (number)

  function giska() {
    // TODO 5: Breyttu textanum úr reitnum í tölu.
    //         ⚠ Input skilar alltaf texta! Number("42") gefur töluna 42.
    // TODO 6: Hækkaðu tilraunateljarann um 1.
    // TODO 7: Berðu saman við leynitöluna og settu rétt skilaboð.
    //         Hægt að nota if/else – eða tvöfaldan ternary ef þið eruð hugrökk.
  }

  function spilaAftur() {
    // TODO 8: Ný leynitala, tómur reitur, engin skilaboð, 0 tilraunir.
  }

  return (
    <div className="card leikur">
      <p className="muted">Ég er að hugsa um tölu frá 1 til 100…</p>

      <div className="row">
        {/* TODO: Tengdu reitinn við state (value + onChange). */}
        <input type="number" placeholder="Þín ágiskun" />
        {/* TODO: Tengdu takkann við giska(). */}
        <button>Giska</button>
      </div>

      {/* TODO: Sýndu skilaboðin, bara ef það eru einhver skilaboð. */}
      {/* TODO: Sýndu „Tilraunir: X“ */}
      {/* TODO: Sýndu „Spila aftur“-takkann BARA ef rétt var giskað. */}
    </div>
  );
}

export default GiskaLeikur;
