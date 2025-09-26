import React, { useState, useEffect } from "react";
import CategoryForm from "./components/CategoryForm";
import BudgetSummary from "./components/BudgetSummary";
import { getBudgetSummary } from "./services/api";
//import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBudgetSummary = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getBudgetSummary();
      setCategories(data);
    } catch (err) {
      setError(err.message || "Failed to load budget summary");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBudgetSummary();
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>Personal Budget Tracker</h1>
      </header>

      <main>
        <CategoryForm onAdd={fetchBudgetSummary} />
        {loading && <p>Loading budget summary...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && <BudgetSummary categories={categories} />}
      </main>

      <footer>
        <p>© 2025 Personal Budget Tracker</p>
      </footer>
    </div>
  );
}
export default App;
