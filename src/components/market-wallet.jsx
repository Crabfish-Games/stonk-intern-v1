import React, { useContext, Fragment } from "react";
import { MarketContext } from "../context/market-context";
import { formatNumber } from "../utilities/formatters";

export default () => {
  const context = useContext(MarketContext);
  return (
    <Fragment>
      <div className="mb-1">
        <i className="fas fa-wallet"></i> Wallet: $
        {formatNumber(context.gameState.wallet)}
      </div>
      <div className="mb-1">
        <i className="fas fa-coins"></i> Shares: $
        {formatNumber(context.gameState.shares)}
      </div>
      <div className="mb-1">
        <i className="fas fa-coins"></i> Current Worth: $
        {formatNumber(
          context.gameState.wallet +
            context.gameState.shares * context.gameState.value
        )}
      </div>
      <div className="mb-4">
        <i className="fas fa-coins"></i> Highest Worth: $
        {formatNumber(context.highScore)}
      </div>
    </Fragment>
  );
};
