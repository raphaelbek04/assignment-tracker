const express = require('express');
const router = express.Router();
const Assignment = require('../models/assignment');

// READ — list
router.get('/', async (req, res) => {
  const assignments = await Assignment.find().sort({ dueDate: 1 });
  res.render('assignments/list', { assignments });
});

// CREATE — form
router.get('/new', (req, res) => {
  res.render('assignments/new');
});

// CREATE — submit
router.post('/', async (req, res) => {
  await Assignment.create(req.body);
  res.redirect('/assignments');
});

// UPDATE — form
router.get('/:id/edit', async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);
  res.render('assignments/edit', { assignment });
});

// UPDATE — submit
router.put('/:id', async (req, res) => {
  await Assignment.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/assignments');
});

// DELETE — confirmation
router.get('/:id/delete', async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);
  res.render('assignments/delete', { assignment });
});

// DELETE — submit
router.delete('/:id', async (req, res) => {
  await Assignment.findByIdAndDelete(req.params.id);
  res.redirect('/assignments');
});

module.exports = router;
