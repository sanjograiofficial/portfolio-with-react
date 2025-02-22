import data from "./eduData";
import "./edu.css";
import Card from "./card";
export default function Education() {
  return (
    <div className="edu-body">
      {data && data.length > 0 ? (
        <div className="edu-container">
          {data.map((dataItem) => (
            <Card
              key={dataItem.id}
              id={dataItem.id}
              grade={dataItem.grade}
              org={dataItem.org}
              board={dataItem.board}
            />
          ))}
        </div>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}
