import React, { useState } from "react";
import data from "./data";
export default function Education() {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  console.log(data);

  return (
    <div>
      {data && data.length > 0 ? (
        <div className="edu-container">
          {data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="card card-1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <h3>{dataItem.grade}</h3>
              {hover && <p className="hover">{dataItem.org}</p>}
            </div>
          ))}
        </div>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}
