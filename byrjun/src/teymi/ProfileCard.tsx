// 02 · FYLGIÆFING – Teymissíðan lifnar við
// Við gerum þetta saman, skref fyrir skref.

import { useState } from "react";

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
};

function ProfileCard({ name, role, bio }: ProfileCardProps) {
  // SKREF 1 – ❤️ Like-takki
  // TODO: Búðu til boolean state: const [liked, setLiked] = useState(false);
  const [liked, setLiked] = useState(false);

  // SKREF 2 – Like-teljari
  // TODO: Búðu til number state fyrir fjölda like-a, byrjar í 0.
  const [likeCount, setLikeCount] = useState(0);

  // SKREF 3 – „Sýna meira“
  // TODO: Búðu til boolean state fyrir hvort bio sé opið.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card">
      <h3>{name}</h3>
      <p className="muted">{role}</p>

      <div className="row">
        {/* SKREF 1: Takkinn sýnir ❤️ ef liked, annars 🤍 (ternary)
                     og snýr liked við þegar smellt er.
            SKREF 2: Sýnið fjölda like-a við hliðina á hjartanu.
                     Smellur á 🤍 → +1, smellur á ❤️ → −1. */}
        <button
          className="secondary"
          onClick={() => {
            setLiked(!liked);
            setLikeCount(liked ? likeCount - 1 : likeCount + 1);
          }}
        >
          {liked ? "❤️" : "🤍"}
        </button>
        <span>{likeCount}</span>
        {/* SKREF 3: Takkinn opnar og lokar bio.
                     Texti: „Sýna minna“ ef opið, annars „Sýna meira“. */}
        <button className="secondary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Sýna minna" : "Sýna meira"}
        </button>
      </div>

      {/* SKREF 3: Sýnið bio BARA ef opið (notið &&): <p>{bio}</p> */}
      {isOpen && <p>{bio}</p>}

      {/* SKREF 4 – TILRAUN 🔬
          Smellið á like hjá Önnu. Breytist eitthvað hjá Jóni eða Söru?
          Af hverju ekki? Skrifið svarið ykkar hér: Ekkert breytist hjá Jóni eða Söru því hvert ProfileCard
// hefur sitt eigið state.
          ...
      */}
    </div>
  );
}

export default ProfileCard;
