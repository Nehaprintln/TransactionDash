const Transaction = require("../models/Transaction");

const getTransactions = async (req, res) => {
  try {
    const { month, search, page = 1, perPage = 10 } = req.query;

    const monthIndex = new Date(Date.parse(`${month} 1`)).getMonth() + 1;
    // const startOfMonth = new Date(`${month} 1, 2023`);
    // const endOfMonth = new Date(`${month} 31, 2023`);

  
    
    // const query = {
    //   dateOfSale: { $eq: [{ $month: "$dateOfSale" }, monthIndex] },
    // };

    const query = {
      $expr: { 
        $eq: [{ $month: "$dateOfSale" }, monthIndex] }  // Directly compare the month of dateOfSale
    };

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { price: { $regex: search, $options: "i" } },
      ];
    }

    const transactions = await Transaction.find(query)
      .skip((page - 1) * perPage)
      .limit(perPage);
    console.log("transactions => ", transactions)
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTransactions };
