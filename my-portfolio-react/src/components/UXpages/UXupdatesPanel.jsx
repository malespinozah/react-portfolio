import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

export default function UXUpdatesPanel({ title, updates }) {
  const [showUpdates, setShowUpdates] = useState(false);

  return (
    <div className="updates">
      <button onClick={() => setShowUpdates(!showUpdates)}>
        <FontAwesomeIcon icon={faBolt} className="iconUpdate" />
        <span>{title}</span>
      </button>

      <div className={`UXprotoup ${showUpdates ? "show" : ""}`}>
        <div className="scroll_update">
          {updates.map((update, i) => (
            <p key={i}>
              <span>{update.date}</span> {update.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}