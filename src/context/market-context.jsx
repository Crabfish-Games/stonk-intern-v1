import React, { useState } from "react";
import useInterval from "../hooks/use-interval";

import {
  dayLengthInMs,
  numberOfDays,
  changeProbability,
  spikeProbability,
  minAdjust,
  maxAdjust,
  spikeMultiplyer,
  startValue,
  startMoney,
  highScoreKeyName
} from "../data/settings";

const DefaultMarketState = {
  wallet: startMoney,
  value: startValue,
  shares: 0,
  market: [startValue],
  direction: 1
};

// TODO: Ensure interval finishes and does not continue

// TODO: Ensure that the market price doesnt stay negative or positve
//       for longer than 10-15 iterations because its pretty lame if
//       it takes off too far in the negative or positve.
//       Maybe if it his a floor, we trigger two spikes up?

// TODO: Add randomized windows to pop up and distract buy/sell

const MarketContext = React.createContext(DefaultMarketState);

const MarketProvider = ({ children }) => {
  const [gameState, setGameState] = useState(DefaultMarketState);
  const [day, setDay] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const _getRandomChangeInMarket = (prob) => {
    return Math.random() < prob;
  };

  // const _getRandomStockIndex = () => {
  //   // TODO: replace 6 with length of stonks.json array
  //   return Math.floor(Math.random() * (6 - 0) + 0);
  // };

  const _getRandomNewAdjustment = () => {
    return Math.random() * (maxAdjust - minAdjust) + minAdjust;
  };

  const _executeTrades = () => {
    _getHighScore();
    let clone = { ...gameState };
    let _newvalue = _getRandomNewAdjustment();
    let _changed = _getRandomChangeInMarket(changeProbability);
    let _direction = _changed === true ? clone.direction * -1 : clone.direction;
    let _adjustment = _newvalue * _direction;
    let _price = clone.value + _adjustment;
    let _origValue = clone.value;
    let marketPrice = Math.floor(_price);

    if (marketPrice < 0) {
      clone.market.push(0);
      clone.value = 0;
    } else {
      clone.direction = _direction;
      clone.market.push(marketPrice);
      clone.value = marketPrice;
      let _spiked = _getRandomChangeInMarket(spikeProbability);
      if (_spiked === true) {
        clone.value = Math.floor(_origValue + _adjustment * spikeMultiplyer);
      }
    }
    setDay(day + 1);
    setGameState(clone);
  };

  const _getHighScore = () => {
    const score = localStorage.getItem(highScoreKeyName);
    setHighScore(score === undefined ? 0 : score);
  };

  const _saveHighScore = () => {
    const highscore = gameState.shares * gameState.value + gameState.wallet;
    const score = localStorage.getItem(highScoreKeyName);
    const existingHighScore = score === undefined ? 0 : score;
    if (highscore > existingHighScore) {
      localStorage.setItem(highScoreKeyName, highscore);
      setHighScore(highscore);
    }
  };

  const buy = () => {
    if (
      gameState.wallet > gameState.value &&
      gameState.value > 0 &&
      day < numberOfDays
    ) {
      const clone = { ...gameState };
      clone.shares = clone.shares + 1;
      clone.wallet = clone.wallet - Math.floor(clone.value);
      setGameState(clone);
    }
  };

  const sell = () => {
    if (gameState.shares > 0 && day < numberOfDays) {
      const clone = { ...gameState };
      clone.shares = clone.shares - 1;
      clone.wallet = clone.wallet + Math.floor(clone.value);
      setGameState(clone);
    }
  };

  useInterval(() => {
    if (day < numberOfDays) {
      _executeTrades();
    } else {
      _saveHighScore();
    }
  }, dayLengthInMs);

  return (
    <MarketContext.Provider
      value={{
        numberOfDays,
        day,
        gameState,
        buy,
        sell,
        highScore
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};

export { MarketProvider, MarketContext, DefaultMarketState };
