import React, { useState, useEffect } from "react";
import { getTransactions } from "../api";

export default function TransactionsTable({ selectedMonth }) {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const fetchTransactions = async () => {
    const  data  = await getTransactions(selectedMonth, search, page, 10);
    console.log(data)
    setTransactions(data);
  };

  useEffect(() => {
    fetchTransactions();
  }, [selectedMonth, search, page]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search transactions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Sold</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {(transactions || []).map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.title}</td>
              <td>{t.description}</td>
              <td>{t.price}</td>
              <td>{t.category}</td>
              <td>{t.sold ? "Yes" : "No"}</td>
              <td><img src={t.image} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  )
}
