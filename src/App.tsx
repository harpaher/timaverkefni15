import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import MenuSection from "./components/MenuSection";
import Footer from "./components/Footer";
import "./App.css";

const drinks = [
  { id: 1, name: "Latte", description: "Espresso með flóaðri mjólk", price: 690 },
  { id: 2, name: "Haframjólkurlatte", description: "Með haframjólk", price: 740, isVegan: true },
  { id: 3, name: "Cappuccino", description: "Espresso með heitri mjólk og mjólkurfroðu", price: 650 },
  { id: 4, name: "Americano", description: "Espresso með heitu vatni", price: 590 },
  { id: 5, name: "Macchiato", description: "Espresso með mjólkurfroðu", price: 590 },
  { id: 6, name: "Heitt súkkulaði", description: "Heitt súkkulaði með rjóma", price: 750 },
];

const food = [
  { id: 1, name: "Króssant", description: "Nýbakað smjördeigshorn", price: 590, emoji: "🥐" },
  { id: 2, name: "Samloka", description: "Samloka með osti, kjúklingi, grænmeti og sinnepssósu", price: 990, emoji: "🥪" },
  { id: 3, name: "Kanilsnúður", description: "Nýbakaður kanilsnúður", price: 650, emoji: "🍥" },
  { id: 4, name: "Súkkulaðikaka", description: "Súkkulaðikaka með rjóma", price: 890, emoji: "🍰" },
];

function App() {
  return (
    <main>
      <Header name="Kaffi Kóði" slogan="Gott kaffi og enn betri kóði" />

      <MenuSection title="Drykkir">
        {drinks.map((drink) => (
          <MenuItem key={drink.id} name={drink.name} description={drink.description} price={drink.price} isVegan={drink.isVegan} />
        ))}
      </MenuSection>

      <MenuSection title="Matur">
        {food.map((item) => (
          <MenuItem key={item.id} name={item.name} description={item.description} price={item.price} emoji={item.emoji} />
        ))}
      </MenuSection>

      <Footer address="Hafnarstræti 110, 600 Akureyri" openingHours="Opið alla daga kl. 9–17" />
    </main>
  );
}

export default App;
