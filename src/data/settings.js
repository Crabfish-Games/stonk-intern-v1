const settings = {
  dayLengthInMs: 500, // How long a day lasts in milliseconds
  numberOfDays: 90, // How long the internship is
  changeProbability: 0.4, // 40% Chance
  spikeProbability: 0.1, // 10% Chance
  minAdjust: 50, // Min random number for price flux
  maxAdjust: 150, // Max random number for price flux
  spikeMultiplyer: 2.5, // Price multiplyer when a spike hits (up or down)
  startValue: 300, // Market open price
  startMoney: 2000, // Starting cash
  startingShares: 0, // Starting shares
  startingDirection: 1, // Starting direction: 1 Up or -1 Down
  endGoal: 6000, // How much you need to make to keep the job,
  highScoreKeyName: "highscore", // Local storage key for highscore,
  gridMax: 2000, // Max scale on market chart
  gridMin: 0 // Min scale on market chart
};
module.exports = settings;
