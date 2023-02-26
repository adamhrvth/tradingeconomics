const te = require("tradingeconomics");

const DEVKEY = "2dc26c41ac34419:b6f4jpt64i0wdqx";

const getIndicators = async (req, res) => {
  try {
    const { countryName, indicatorName, startDate, endDate } = req.query;

    te.login(DEVKEY);

    const historicalData = await te.getHistoricalData(country = countryName, indicator = indicatorName, start_date = startDate, 
    end_date = endDate);
    res.status(200).json({ "message": "Indicators sent.", historicalData });
  }
  catch (err) {
    console.log(err.message);
    if (err.message === "No Access to this country as free user.") {
      res.status(401).json({ "message": err.message });
    }
    else {
      res.status(500).json({ "message": err.message });
    }
  }
};

module.exports = getIndicators;