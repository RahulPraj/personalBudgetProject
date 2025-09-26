import React from "react";
//import "./BudgetSummary.css";

function BudgetSummary({ categories }) {
  if (!categories || categories.length === 0) {
    return <p>No categories added yet.</p>;
  }

  return (
    <div className="budget-summary">
      <h2>Budget Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Allocated Amount</th>
            <th>Spent Amount</th>
            <th>Remaining Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, index) => (
            <tr key={index}>
              <td>{cat.categoryName}</td>
              <td>{cat.allocatedAmount.toFixed(2)}</td>
              <td>{cat.spentAmount?.toFixed(2) ?? "0.00"}</td>
              <td>{cat.remainingAmount?.toFixed(2) ?? cat.allocatedAmount.toFixed(2)}</td>
              <td>{cat.description ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BudgetSummary;