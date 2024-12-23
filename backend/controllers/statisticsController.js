const Transaction = require("../models/Transaction");

const getStatistics = async (req, res) => {
  try {
    const { month } = req.query;
    console.log("input", month)
    // const startOfMonth = new Date(`${month} 1, 2023`);
    // const endOfMonth = new Date(`${month} 31, 2023`);

    if (!month || typeof month !== 'string') {
      return res.status(400).json({ message: "Invalid or missing 'month' parameter" });
    }

    const monthIndex = new Date(Date.parse(`${month} 1`)).getMonth() + 1;
    console.log("input11", monthIndex)
    const transactions = await Transaction.find({
      $expr: { $eq: [{ $month: "$dateOfSale" }, monthIndex] },
    });

    // const transactions = await Transaction.find({
    //   dateOfSale: { $gte: startOfMonth, $lte: endOfMonth },
    // });

    const totalSale = transactions.reduce((sum, t) => sum + t.price, 0);
    const totalSoldItems = transactions.filter((t) => t.sold).length;
    const totalNotSoldItems = transactions.filter((t) => !t.sold).length;
    console.log({totalSale})
    console.log({totalSoldItems})
    console.log({totalNotSoldItems})

    res.status(200).json({ totalSale, totalSoldItems, totalNotSoldItems });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getStatistics };
