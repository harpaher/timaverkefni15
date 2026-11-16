// ✍️ STAFATELJARI – LAUSN
// Hugtök: string state · controlled input · && · ? :

import { useState } from "react";

const HAMARK = 50;

function Stafateljari() {
  // 1. String state fyrir textann
  const [text, setText] = useState("");

  const ofLangt = text.length > HAMARK;

  return (
    <div className="card">
      <h3>✍️ Stafateljari</h3>

      {/* 2. Controlled input: state ræður hvað stendur í reitnum */}
      <textarea
        placeholder="Skrifaðu eitthvað..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* 3 + 4. Fjöldi stafa, litur með ternary */}
      <p style={{ color: ofLangt ? "#c0392b" : "#5b6475", fontWeight: ofLangt ? 700 : 400 }}>
        {text.length} / {HAMARK}
      </p>

      {/* 5. Viðvörun bara þegar við á */}
      {ofLangt && <p className="vidvorun">Of langt! Styttu textann.</p>}

      {/* AUKA: stafir eftir (eða „0“ ef farið er yfir) */}
      <p className="muted">Eftir: {Math.max(HAMARK - text.length, 0)} stafir</p>
    </div>
  );
}

export default Stafateljari;
