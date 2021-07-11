import React, { useContext, Fragment } from "react";
import { MarketContext } from "../context/market-context";
import { formatNumber } from "../utilities/formatters";

export default () => {
  const context = useContext(MarketContext);
  return (
    <Fragment>
      <div className="mb-4">
        Stonk Value: ${formatNumber(context.gameState.value)}
      </div>
    </Fragment>
  );
};
