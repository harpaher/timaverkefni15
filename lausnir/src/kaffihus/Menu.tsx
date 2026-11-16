// 03 · TÍMAVERKEFNI – LAUSN (skref 5)

import { useState } from "react";
import MenuItem from "./MenuItem";

const menu = [
  { id: 1, name: "Kaffi latte", price: 650, isVegan: false, soldOut: false },
  { id: 2, name: "Hafralatte", price: 720, isVegan: true, soldOut: false },
  { id: 3, name: "Kanilsnúður", price: 590, isVegan: false, soldOut: true },
  { id: 4, name: "Bananabrauð", price: 550, isVegan: true, soldOut: false },
  { id: 5, name: "Avókadóbrauð", price: 1290, isVegan: true, soldOut: false },
  { id: 6, name: "Súkkulaðikaka", price: 890, isVegan: false, soldOut: false },
];

function Menu() {
  // SKREF 5 – state er HÉR (ekki í MenuItem) því það stjórnar öllum listanum
  const [veganOnly, setVeganOnly] = useState(false);

  // Haldið ef: síunin er slökkt (!veganOnly) EÐA rétturinn er vegan
  const synilegt = menu.filter((item) => !veganOnly || item.isVegan);

  return (
    <div>
      <p>
        <button onClick={() => setVeganOnly(!veganOnly)}>
          {veganOnly ? "Sýna allt" : "🌱 Bara vegan"}
        </button>
      </p>

      <div className="grid">
        {synilegt.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            isVegan={item.isVegan}
            soldOut={item.soldOut}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
