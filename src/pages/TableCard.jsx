import React from "react";
import { useApp } from "../hooks/useApp";

const TableCard = () => {
  const { drugData, setState, state } = useApp();
  return (
    <div className="table-wrap">
      <div className="box">
        <div className="box-header">Drug Data</div>
        <div className="box-conent">
          {drugData.map((data, i) => {
            console.log(data.id === i + 1);
            return (
              <p
                className={`${data.id === state.id ? "active" : ""}`}
                onClick={() => setState(data)}
                key={data.id}
              >
                {data.drugName}
              </p>
            );
          })}
        </div>
      </div>
      <div className="box">
        <div className="box-header">Drug Details</div>
        <div className="box-conent" style={{ textAlign: "center" }}>
          <p style={{ color: "#3ec1d5", fontSize: "18px", fontWeight: 600 }}>
            {state.drugName}
          </p>
          <p style={{ height: "70%", padding: 0 }}>{state.drugDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default TableCard;
