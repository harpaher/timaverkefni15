// 03 · TÍMAVERKEFNI – Kaffihúsið tekur við pöntunum
// Skref 1–4 eru í þessari skrá. Skref 5 er í Menu.tsx.

import { useState } from "react";

type MenuItemProps = {
  name: string;
  price: number;
  isVegan?: boolean;
  soldOut?: boolean;
};

function MenuItem({ name, price, isVegan = false, soldOut = false }: MenuItemProps) {
  // SKREF 1 – Teljari
  // TODO: Búðu til number state fyrir fjöldann: const [qty, setQty] = useState(0);
  const [qty, setQty] = useState(0);

  return (
    <div className="card">
      <div className="card-top">
        <h3>{name}</h3>
        <p>{price.toLocaleString("is-IS").replace(",", ".")} kr.</p>
      </div>
      {/* Dæmi um && sem er þegar til: merkið birtist bara á vegan réttum. */}
      {isVegan && <span className="badge vegan">🌱 Vegan</span>}
      {/* SKREF 4 – Uppselt
          TODO: Ef soldOut er true á að sýna <span className="badge uppselt">Uppselt</span>
                Í STAÐ takkanna hér fyrir neðan. Notið ternary:
                {soldOut ? ( ...uppselt... ) : ( ...takkarnir... )} */}

      {/* SKREF 1: –takkinn lækkar qty um 1, +takkinn hækkar um 1. SKREF 2: –takkinn á að vera óvirkur þegar qty er 0: disabled={qty === 0}{" "}
       */}
      {soldOut ? (
        <span className="badge uppselt">Uppselt</span>
      ) : (
        <div className="row">
          <button className="secondary" onClick={() => setQty(qty - 1)} disabled={qty === 0}>
            –
          </button>
          <span className="qty">{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>
      )}
      {/* SKREF 3 – Karfa
          TODO: Sýnið <p className="karfa">{qty} í körfu · {qty * price} kr.</p>
                BARA ef qty er stærra en 0 (notið &&).
                Ath: skrifið qty > 0 &&  –  ekki bara  qty &&  (annars birtist 0 á skjánum!) */}
      {qty > 0 && (
        <p className="karfa">
          {qty} í körfu · {(qty * price).toLocaleString("is-IS").replace(",", ".")} kr.
        </p>
      )}
      {/* AUKA: Fallegri verð: {price.toLocaleString("is-IS")} sýnir 1.290 í stað 1290 */}
    </div>
  );
}

export default MenuItem;
