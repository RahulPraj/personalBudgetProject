const Category = require('../models/Category');

// GET all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST add a category
exports.addCategory = async (req, res) => {
  try {
    const { categoryName, allocatedAmount = 0, description = "" } = req.body;
    if (!categoryName) {
      return res.status(400).json({ error: "Category name is required" });
    }

    const category = new Category({ categoryName, allocatedAmount, description });
    await category.save();
    res.json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a category
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Category.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json({ message: "Category deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET budget summary
exports.getBudgetSummary = async (req, res) => {
  try {
    const categories = await Category.find();
    const summary = categories.map(c => {
      const spentAmount = 0; // placeholder (mocked)
      const remainingAmount = c.allocatedAmount - spentAmount;
      return {
        categoryName: c.categoryName,
        allocatedAmount: c.allocatedAmount,
        spentAmount,
        remainingAmount
      };
    });
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
