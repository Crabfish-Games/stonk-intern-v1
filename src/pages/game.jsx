import React from "react";
import { MarketProvider } from "../context/market-context";
import MarketDay from "../components/market-day";
import MarketValue from "../components/market-value";
import MarketWallet from "../components/market-wallet";
import MarketChart from "../components/market-chart";
import MarketButtons from "../components/market-buttons";

export default () => {
  return (
    <MarketProvider>
      <MarketDay />
      <MarketChart />
      <MarketValue />
      <MarketWallet />
      <MarketButtons />
    </MarketProvider>
  );
};
