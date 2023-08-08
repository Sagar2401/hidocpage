import React from "react";
import { useApp } from "../hooks/useApp";

const Ads = () => {
  const { adds } = useApp();
  console.log(adds);
  return (
    <div className="ads-container">
      {adds.length > 0
        ? adds.map((item, index) => (
            <div
              className="ads-card"
              key={index}
              onClick={() => {
                window.open(item.redirectionLink, "_blank");
              }}
            >
              <img
                height={230}
                width={"100%"}
                src={item.addImage}
                alt="adsImageNotFound"
              />
              <h2>{item.addName}</h2>
              <p>{item.addDetails}</p>
              <span style={{ alignSelf: "start" }}>
                Posted on {item.createdAt}
              </span>
            </div>
          ))
        : null}
    </div>
  );
};

export default Ads;
