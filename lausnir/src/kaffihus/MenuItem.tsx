// 03 · TÍMAVERKEFNI – LAUSN (skref 1–4)

import { useState } from "react";

type MenuItemProps = {
  name: string;
  price: number;
  isVegan?: boolean;
  soldOut?: boolean;
};

function MenuItem({ name, price, isVegan = false, soldOut = false }: MenuItemProps) {
  // SKREF 1 – hvert MenuItem á sinn eigin teljara
  const [qty, setQty] = useState(0);

  return (
    <div className="card">
      <div className="card-top">
        <h3>{name}</h3>
        {/* AUKA: toLocaleString setur punkt sem þúsundaskil: 1.290 */}
        <p>{price.toLocaleString("is-IS")} kr.</p>
      </div>

      {isVegan && <span className="badge vegan">🌱 Vegan</span>}

      {/* SKREF 4 – annað hvort „Uppselt“ EÐA takkarnir */}
      {soldOut ? (
        <span className="badge uppselt">Uppselt</span>
      ) : (
        <div className="row">
          {/* SKREF 2 – óvirkur í 0 svo qty fari aldrei í mínus */}
          <button className="secondary" disabled={qty === 0} onClick={() => setQty(qty - 1)}>
            –
          </button>
          <span className="qty">{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>
      )}

      {/* SKREF 3 – qty > 0, ekki bara qty (annars birtist 0) */}
      {qty > 0 && (
        <p className="karfa">
          {qty} í körfu · {(qty * price).toLocaleString("is-IS")} kr.
        </p>
      )}
    </div>
  );
}

export default MenuItem;
