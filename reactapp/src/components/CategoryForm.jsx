
import React, { useState } from "react";
// import './CategoryForm.css'
export default function CategoryForm({ onAdd }) {
  const [categoryName, setCategoryName] = useState("");
  const [allocatedAmount, setAllocatedAmount] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!categoryName.trim()) newErrors.categoryName = "Category name is required";
    if (allocatedAmount === "" || Number(allocatedAmount) < 0)
      newErrors.allocatedAmount = "Allocated amount must be a non-negative number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;

    onAdd({
      categoryName,
      allocatedAmount: Number(allocatedAmount),
      description,
    });

    setCategoryName("");
    setAllocatedAmount("");
    setDescription("");
    setErrors({});
  };

  return (
    <form className="category-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="categoryName">Category Name</label>
        <input
          id="categoryName"
          type="text"
          placeholder="e.g. Groceries"
          value={categoryName}
          onChange={e => setCategoryName(e.target.value)}
          aria-describedby="categoryNameError"
        />
        {errors.categoryName && (
          <p id="categoryNameError" style={{ color: "red" }}>
            {errors.categoryName}
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="allocatedAmount">Allocated Amount</label>
        <input
          id="allocatedAmount"
          type="number"
          min="0"
          step="0.01"
          placeholder="e.g. 500"
          value={allocatedAmount}
          onChange={e => setAllocatedAmount(e.target.value)}
          aria-describedby="allocatedAmountError"
        />
        {errors.allocatedAmount && (
          <p id="allocatedAmountError" style={{ color: "red" }}>
            {errors.allocatedAmount}
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="description">Description (optional)</label>
        <textarea
          id="description"
          placeholder="Optional description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>

      <button type="submit">Add Category</button>
    </form>
  );
}
