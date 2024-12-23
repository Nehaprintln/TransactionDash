import React, { useState, useEffect } from "react";
import { getStatistics } from "../api";

export default function StatisticsBox({ selectedMonth }) {
    const [statistics, setStatistics] = useState({});
    console.log("static data");
  useEffect(() => {
    const fetchStatistics = async () => {
      const data  = await getStatistics(selectedMonth);
      console.log("data=>",data);
      setStatistics(data);
    };

    fetchStatistics();
  }, [selectedMonth]);
  return (
    <div>
    <h3>Statistics - {selectedMonth}</h3>
    {statistics ? (
      <ul>
        <li>Total Sale: ${statistics.totalSale}</li>
        <li>Total Sold Items: {statistics.totalSoldItems}</li>
        <li>Total Not Sold Items: {statistics.totalNotSoldItems}</li>
      </ul>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
}
