import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleButtonClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let nameDisplay = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    nameDisplay = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {nameDisplay}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleButtonClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
