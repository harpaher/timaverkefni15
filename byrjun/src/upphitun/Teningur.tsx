// 🎲 TENINGUR – upphitun
// Hugtök: number state · &&
//
// Markmið: Takkinn „Kasta“ gefur slembitölu frá 1 til 6.
//   - Talan (eða teningshlið) birtist á skjánum.
//   - „SEXA! 🎉“ birtist BARA þegar upp kemur 6.

import { useState } from "react";

// Teningshliðarnar: hlidar[0] er 1, hlidar[5] er 6
const hlidar = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function Teningur() {
  // TODO 1: Búðu til number state fyrir töluna, byrjar t.d. í 1.
  const [tala, setTala] = useState(1);
  const [fjoldiKasta, setFjoldiKasta] = useState(0);

  // TODO 2: Skrifaðu fall sem kastar teningnum og vistar nýju töluna með set-fallinu.
  //         Slembitala 1–6: Math.floor(Math.random() * 6) + 1
  function kasta() {
    setTala(Math.floor(Math.random() * 6) + 1);
    setFjoldiKasta(fjoldiKasta + 1);
  }
  // ...

  return (
    <div className="card">
      <h3>🎲 Teningur</h3>

      {/* TODO 3: Sýndu rétta hlið í stað ⚀. Vísbending: hlidar[tala - 1] */}
      <p className="teningur-andlit">{hlidar[tala - 1]}</p>

      {/* TODO 4: Tengdu takkann við kasta-fallið. */}
      <button onClick={kasta}>Kasta teningi</button>

      {/* TODO 5: Sýndu <p className="sexa">SEXA! 🎉</p> BARA ef talan er 6 (notið &&). */}
      {tala === 6 && <p className="sexa">SEXA! 🎉</p>}

      {/* AUKA: Teljið hversu oft hefur verið kastað: „Köst: 7“ */}
      <p>Köst: {fjoldiKasta}</p>
    </div>
  );
}

export default Teningur;
