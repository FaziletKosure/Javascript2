const {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings
} = require(`./maartjes-work`).default;

describe("maartjes_work", () => {
  test("earnings rounded to euro cents", () => {
    const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);
    const result = earnings.toFixed(2);
    expect(result).toBe("373.33");
  });
});
