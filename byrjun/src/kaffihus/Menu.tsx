// 03 · TÍMAVERKEFNI – Kaffihúsið tekur við pöntunum
// SKREF 5 er í þessari skrá. Skref 1–4 eru í MenuItem.tsx.

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
  // SKREF 5 – „🌱 Bara vegan“
  // TODO: Búðu til boolean state, t.d. [veganOnly, setVeganOnly], sem byrjar sem false.

  const [veganOnly, setVeganOnly] = useState(false);

  // TODO: Búðu til lista sem inniheldur bara vegan rétti þegar veganOnly er true,
  //       en ALLA rétti annars.
  //       Vísbending: menu.filter((item) => !veganOnly || item.isVegan)
  //       filter() skilar NÝJU fylki með þeim stökum þar sem fallið skilar true.
  const synilegt = menu.filter((item) => !veganOnly || item.isVegan);

  return (
    <div>
      {/* TODO: Takkinn snýr veganOnly við.
                Texti: „Sýna allt“ ef veganOnly, annars „🌱 Bara vegan“. */}
      <p>
        <button onClick={() => setVeganOnly(!veganOnly)}>{veganOnly ? "Sýna allt" : "🌱 Bara vegan"}</button>
      </p>

      <div className="grid">
        {synilegt.map((item) => (
          <MenuItem key={item.id} name={item.name} price={item.price} isVegan={item.isVegan} soldOut={item.soldOut} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
