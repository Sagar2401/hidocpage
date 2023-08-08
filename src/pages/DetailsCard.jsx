import React from "react";
import { useApp } from "../hooks/useApp";

const DetailsCard = () => {
  const { btnData } = useApp();
  return (
    <div className="fourth-container">
      <p>
        Dailymed Drug Database The DailyMed database contains 143072 labeling
        submitted to the Food and Drug Administration (FDA) by companies.
        DailyMed does not contain a complete listing of labeling for
        FDA-regulated products (eg, labeling that is not submitted to the FDA).
      </p>
      <div className="btn-wrap">
        {btnData.map((data) => {
          return <button className="btn">{data}</button>;
        })}
      </div>
    </div>
  );
};

export default DetailsCard;
