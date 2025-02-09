import React, { useState } from "react";

export default function Education() {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = ()=>{
    setHover(true)
  }
  const handleMouseLeave = ()=>{
    setHover(false)
  }
  return (
    <div className="edu-container">
      <div className="card card-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h3>Grade 10</h3>
        {
          hover && <p className= "hover">
          Namuna English Secondary School
        </p>
        }
      </div>
      <div className="card card-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h3>Grade 12</h3>
        {
          hover && <p className= "hover">
          Milestone International College
        </p>
        }
      </div>
      <div className="card card-3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h3>Bachelor</h3>
        {
          hover && <p className= "hover">
          Shikshyalaya College
        </p>
        }
      </div>
    </div>
  );
}
