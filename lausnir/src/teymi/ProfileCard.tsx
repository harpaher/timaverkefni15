// 02 · FYLGIÆFING – LAUSN
// Teymissíðan lifnar við

import { useState } from "react";

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
};

function ProfileCard({ name, role, bio }: ProfileCardProps) {
  // SKREF 1 – er búið að like-a?
  const [liked, setLiked] = useState(false);
  // SKREF 2 – fjöldi like-a
  const [likes, setLikes] = useState(0);
  // SKREF 3 – er bio opið?
  const [open, setOpen] = useState(false);

  function handleLike() {
    // ATH: liked hér er GAMLA gildið (fyrir smellinn).
    // Ef það var ekki búið að like-a → +1, annars → −1.
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  }

  return (
    <div className="card">
      <h3>{name}</h3>
      <p className="muted">{role}</p>

      <div className="row">
        <button className="secondary" onClick={handleLike}>
          {liked ? "❤️" : "🤍"} {likes}
        </button>

        <button className="secondary" onClick={() => setOpen(!open)}>
          {open ? "Sýna minna" : "Sýna meira"}
        </button>
      </div>

      {open && <p>{bio}</p>}

      {/* SKREF 4 – TILRAUN 🔬
          Hvert <ProfileCard /> í map() er sérstakt eintak af componentinum,
          og hvert eintak á SITT EIGIÐ state. Like hjá Önnu breytir því engu hjá Jóni.
      */}
    </div>
  );
}

export default ProfileCard;
