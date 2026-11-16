// 💡 LJÓSROFI – LAUSN
// Hugtök: boolean state · ternary ? :

import { useState } from "react";

function Ljosrofi() {
  // 1. Boolean state: er kveikt eða ekki?
  const [on, setOn] = useState(false);

  return (
    <div
      className="ljosrofi"
      // 2. Ternary velur lit eftir state
      style={{
        background: on ? "#fff6c2" : "#1f2937",
        color: on ? "#1f2937" : "#f9fafb",
      }}
    >
      {/* AUKA: peran er dauf þegar slökkt er */}
      <p className="pera" style={{ opacity: on ? 1 : 0.3 }}>
        💡
      </p>

      {/* 3. !on snýr gildinu við  ·  4. ternary velur texta */}
      <button onClick={() => setOn(!on)}>{on ? "Slökkva" : "Kveikja"}</button>
    </div>
  );
}

export default Ljosrofi;
