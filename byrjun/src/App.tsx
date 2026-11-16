import "./App.css";
import Ljosrofi from "./upphitun/Ljosrofi";
import Teningur from "./upphitun/Teningur";
import Stafateljari from "./upphitun/Stafateljari";
import Team from "./teymi/Team";
import Menu from "./kaffihus/Menu";
import GiskaLeikur from "./bonus/GiskaLeikur";

// Öll verkefni kvöldsins birtast hér hvert undir öðru.
// Ef ykkur finnst of mikið á skjánum: setjið {/* */} utan um það sem þið eruð ekki að vinna í.

function App() {
  return (
    <main>
      <h1>React – State og conditional rendering</h1>

      <section>
        <h2>01 · Upphitun</h2>
        <div className="grid">
          <Ljosrofi />
          <Teningur />
          <Stafateljari />
        </div>
      </section>

      <section>
        <h2>02 · Fylgiæfing – Teymissíðan</h2>
        <Team />
      </section>

      <section>
        <h2>03 · Tímaverkefni – Kaffihúsið</h2>
        <Menu />
      </section>

      <section>
        <h2>Bónus – Giskaðu á töluna 🎯</h2>
        <GiskaLeikur />
      </section>
    </main>
  );
}

export default App;
