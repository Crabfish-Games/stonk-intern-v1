import React, { useContext } from "react";
import { MarketContext } from "../context/market-context";

export default () => {
  const context = useContext(MarketContext);
  return (
    <div className="mb-2">
      <i className="far fa-calendar-alt"></i> Day: {context.day}
    </div>
  );
};
