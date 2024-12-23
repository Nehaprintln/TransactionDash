import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import TransactionsTable from "./components/TransactionsTable";
import StatisticsBox from "./components/StatisticsBox";
import BarChartComponent from "./components/BarChartComponent";
import { MONTHS } from "./constants";
import "./App.css";

function App() {
  const [selectedMonth, setSelectedMonth] = useState("March");

  return (
    <div className="App">
    <h1>Transaction Dashboard</h1>
    <Dropdown
      months={MONTHS}
      selectedMonth={selectedMonth}
      onChange={setSelectedMonth}
    />
    <StatisticsBox selectedMonth={selectedMonth} />
    <BarChartComponent selectedMonth={selectedMonth} />
    <TransactionsTable selectedMonth={selectedMonth} />
  </div>
  );
}

export default App;
