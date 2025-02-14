import React, { useState } from "react";
import data from "./education";
export default function Education() {
  const [hover, setHover] = useState(null);

  const handleMouseEnter = (getCurrentId) => {
    setHover(getCurrentId === hover ? null : getCurrentId);
  };
  const handleMouseLeave = () => {
    setHover(null);
  };

  return (
    <div className="edu-body">
      {data && data.length > 0 ? (
        <div className="edu-container">
          {data.map((dataItem) => (
            <div
              key={dataItem.id}
              className={`card card-${dataItem.id}`}
              onMouseEnter={() => handleMouseEnter(dataItem.id)}
              onMouseLeave={handleMouseLeave}
            >
              <h3>{dataItem.grade}</h3>
              {hover === dataItem.id ? (
                <div className="hover">
                  <p>{dataItem.org}</p> <p>Board: {dataItem.board}</p>{" "}
                  <p>Grade: {dataItem.Grade}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}
