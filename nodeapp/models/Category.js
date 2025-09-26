const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  allocatedAmount: { type: Number, default: 0 },
  description: { type: String, default: "" }
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
