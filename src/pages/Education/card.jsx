import { useState } from "react";
import "./card.css";
const Card = ({ id, grade, org, board }) => {
  const [hover, setHover] = useState(null);
  const handleMouseEnter = (getCurrentId) => {
    setHover(getCurrentId === hover ? null : getCurrentId);
  };
  const handleMouseLeave = () => {
    setHover(null);
  };
  return (
    <div
      className="card-wrap"
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`card card-${id}`}>
        <h3>{grade}</h3>
        {hover === id ? (
          <div className="hover">
            <p>{org}</p> <p>Board: {board}</p> <p>Grade: {grade}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
