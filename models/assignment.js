const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  courseCode: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  dueDate: { type: Date, required: true },
  status: { type: String, default: "Not Started" },
  priority: { type: String, default: "Medium" }
}, {
  timestamps: true
});

module.exports = mongoose.model("Assignment", assignmentSchema);
