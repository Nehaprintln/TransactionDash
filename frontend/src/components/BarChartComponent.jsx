import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { getBarChartData } from "../api";

export default function BarChartComponent({ selectedMonth }) {
    const [barData, setBarData] = useState([]);

  useEffect(() => {
    const fetchBarChartData = async () => {
      const  data  = await getBarChartData(selectedMonth) || {};
      console.log(data)

      if (data && data.ranges) {
        const rangeLabels = [
          "0-100", "101-200", "201-300", "301-400", "401-500",
          "501-600", "601-700", "701-800", "801-900", "900+"
        ];

        // Map the ranges to have a name and count
        setBarData(
          data.ranges.map((count, index) => ({
            name: rangeLabels[index],  // Assign the correct label for each range
            count: count,
          }))
        );
      }
    };


    fetchBarChartData();
  }, [selectedMonth]);

  return (
     <BarChart width={600} height={300} data={barData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  )
}
