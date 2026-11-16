// TEYMISSÍÐAN – frá síðasta tíma
// Hér þarf ekkert að breyta. Öll vinnan í kvöld er í ProfileCard.tsx.

import ProfileCard from "./ProfileCard";

const team = [
  { id: 1, name: "Anna", role: "Hönnuður", bio: "Elskar liti, letur og góðan kaffibolla." },
  { id: 2, name: "Jón", role: "Forritari", bio: "Skrifar React á daginn og spilar skák á kvöldin." },
  { id: 3, name: "Sara", role: "Verkefnastjóri", bio: "Heldur öllum á tánum og man alla fresti." },
];

function Team() {
  return (
    <div className="grid">
      {team.map((person) => (
        <ProfileCard key={person.id} name={person.name} role={person.role} bio={person.bio} />
      ))}
    </div>
  );
}

export default Team;
