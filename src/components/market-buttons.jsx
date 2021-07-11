import React, { useContext, Fragment } from "react";
import { MarketContext } from "../context/market-context";

export default () => {
  const context = useContext(MarketContext);
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-success"
        onClick={context.buy}
        style={{ marginRight: 20 }}
      >
        Buy Stonk
      </button>{" "}
      <button type="button" className="btn btn-danger" onClick={context.sell}>
        Sell Stonk
      </button>
      <button
        type="button"
        onClick={() => {
          window.location.reload();
        }}
        className="btn btn-secondary"
        style={{ float: "right" }}
      >
        Restart
      </button>
    </Fragment>
  );
};
