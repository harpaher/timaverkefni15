// 🎲 TENINGUR – LAUSN
// Hugtök: number state · &&

import { useState } from "react";

const hlidar = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function Teningur() {
  // 1. Number state fyrir töluna
  const [tala, setTala] = useState(1);
  // AUKA: teljari fyrir köst
  const [kost, setKost] = useState(0);

  // 2. Kasta = reikna nýja tölu og vista hana með set-fallinu
  function kasta() {
    setTala(Math.floor(Math.random() * 6) + 1);
    setKost(kost + 1);
  }

  return (
    <div className="card">
      <h3>🎲 Teningur</h3>

      {/* 3. Fylki byrja í 0, teningar í 1 → tala - 1 */}
      <p className="teningur-andlit">{hlidar[tala - 1]}</p>

      {/* 4. Sendum fallið sjálft – köllum ekki á það: onClick={kasta}, ekki onClick={kasta()} */}
      <button onClick={kasta}>Kasta</button>

      {/* 5. && – sýna eða sýna ekkert */}
      {tala === 6 && <p className="sexa">SEXA! 🎉</p>}

      <p className="muted">Köst: {kost}</p>
    </div>
  );
}

export default Teningur;
