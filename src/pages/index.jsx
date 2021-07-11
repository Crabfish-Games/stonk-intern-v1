import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import {
  changeProbability,
  spikeProbability,
  minAdjust,
  maxAdjust,
  spikeMultiplyer,
  startValue,
  startMoney
} from "../data/settings";

export default () => {
  return (
    <Fragment>
      <h1 className="mb-4">Stonk Markeetz Intern</h1>
      <p>
        You just landed your first job, and 90 day internship at a day trader.
        You have no experience and these idiots just gave you $2000. Try to make
        as much cash as you can before these people find out and fire you!
      </p>
      <p>
        <b>How to play:</b> Every half second the market will increase or
        decrease in value, which will represent one day of trading. At which
        point you can buy or sell. You will start with $2000, and the goal is to
        reach the highest amount of stock by the end of a 90 day period.
      </p>
      <p>
        <b>Technical:</b> The market is truely random so you may want to try it
        a few times to get the feel of the game. Every day the market will
        adjust by randomly chosing a value between ${minAdjust} and ${maxAdjust}{" "}
        with a {changeProbability * 100}% chance to change direction. There is a{" "}
        {spikeProbability * 100}% chance that the market will spike up or down
        by {spikeMultiplyer}x the current market adjustment. You start with $
        {startMoney} and the market starts with a value of ${startValue}
      </p>
      <p>
        <NavLink to="/start" className="btn btn-info">
          Start
        </NavLink>
      </p>
    </Fragment>
  );
};
