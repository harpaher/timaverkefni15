// 🎯 BÓNUS – LAUSN
// Giskaðu á töluna

import { useState } from "react";

function nyLeynitala() {
  return Math.floor(Math.random() * 100) + 1;
}

function GiskaLeikur() {
  // useState(nyLeynitala()) reiknar nýja tölu í hverri teikningu, en React notar
  // bara þá fyrstu. Lengra komnir: useState(nyLeynitala) – án () – keyrir fallið bara einu sinni.
  const [leynitala, setLeynitala] = useState(nyLeynitala());
  const [agiskun, setAgiskun] = useState("");
  const [skilabod, setSkilabod] = useState("");
  const [tilraunir, setTilraunir] = useState(0);
  // AUKA: met (fæstar tilraunir). null = ekkert met enn.
  const [met, setMet] = useState<number | null>(null);

  const unnid = skilabod === "Rétt! 🎉";

  function giska() {
    // ⚠ Input skilar alltaf texta → breytum í tölu
    const tala = Number(agiskun);
    if (agiskun === "" || tala < 1 || tala > 100) {
      setSkilabod("Sláðu inn tölu frá 1 til 100");
      return;
    }

    const nyjarTilraunir = tilraunir + 1;
    setTilraunir(nyjarTilraunir);

    if (tala > leynitala) {
      setSkilabod("Of hátt ⬇️");
    } else if (tala < leynitala) {
      setSkilabod("Of lágt ⬆️");
    } else {
      setSkilabod("Rétt! 🎉");
      // Notum nyjarTilraunir, ekki tilraunir – state uppfærist ekki fyrr en í næstu teikningu!
      if (met === null || nyjarTilraunir < met) {
        setMet(nyjarTilraunir);
      }
    }
    setAgiskun("");
  }

  function spilaAftur() {
    setLeynitala(nyLeynitala());
    setAgiskun("");
    setSkilabod("");
    setTilraunir(0);
  }

  // AUKA: litur skilaboða
  const litur = unnid ? "#1d6b3a" : skilabod.startsWith("Of hátt") ? "#c0392b" : skilabod.startsWith("Of lágt") ? "#1a5fb4" : "#5b6475";

  return (
    <div className="card leikur">
      <p className="muted">Ég er að hugsa um tölu frá 1 til 100…</p>

      <div className="row">
        <input
          type="number"
          placeholder="Þín ágiskun"
          value={agiskun}
          onChange={(e) => setAgiskun(e.target.value)}
          disabled={unnid}
        />
        <button onClick={giska} disabled={unnid}>
          Giska
        </button>
      </div>

      {skilabod !== "" && <p style={{ color: litur, fontWeight: 700, fontSize: "1.3rem" }}>{skilabod}</p>}

      <p className="muted">Tilraunir: {tilraunir}</p>
      {met !== null && <p className="muted">🏆 Met: {met} tilraunir</p>}

      {unnid && <button onClick={spilaAftur}>Spila aftur</button>}
    </div>
  );
}

export default GiskaLeikur;
