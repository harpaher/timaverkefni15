// ✍️ STAFATELJARI – upphitun
// Hugtök: string state · controlled input · && · ? :
//
// Markmið: Textareitur með hámark 50 stafi, eins og á samfélagsmiðlum.
//   - Undir reitnum stendur t.d. „23 / 50“.
//   - Talan verður rauð þegar farið er yfir 50.
//   - Viðvörun birtist BARA þegar textinn er of langur.

import { useState } from "react";

const HAMARK = 50;

function Stafateljari() {
  // TODO 1: Búðu til string state fyrir textann, byrjar sem tómur strengur "".
  const [text, setText] = useState("");

  return (
    <div className="card">
      <h3>✍️ Stafateljari</h3>

      {/* TODO 2: Tengdu textareitinn við state (controlled input):
                  value={text}
                  onChange={(e) => setText(e.target.value)} */}
      <textarea placeholder="Skrifaðu eitthvað..." value={text} onChange={(e) => setText(e.target.value)} />

      {/* TODO 3: Sýndu fjölda stafa: {text.length} / {HAMARK}
          TODO 4: Litur tölunnar: rauður ("#c0392b") ef yfir HAMARK, annars grár ("#5b6475").
                  Vísbending: style={{ color: text.length > HAMARK ? "..." : "..." }} */}
      <p style={{ color: text.length > HAMARK ? "#c0392b" : "#5b6475" }}>Eftir: {HAMARK - text.length} stafir</p>
      {/* TODO 5: Sýndu <p className="vidvorun">Of langt! Styttu textann.</p>
                  BARA ef textinn er lengri en HAMARK (notið &&). */}
      {text.length > HAMARK && <p className="vidvorun">Of langt! Styttu textann.</p>}

      {/* AUKA: Sýndu „Eftir: 27 stafir“ í stað „23 / 50“. */}
    </div>
  );
}

export default Stafateljari;
