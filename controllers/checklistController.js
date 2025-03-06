const Checklist = require('../models/Checklist');

exports.getChecklists = async (req, res) => {
  const checklists = await Checklist.find();
  res.status(200).json({ success: true, data: checklists });
};

exports.getChecklist = async (req, res) => {
  const checklist = await Checklist.findById(req.params.id);
  res.status(200).json({ success: true, data: checklist });
};

exports.createChecklist = async (req, res) => {
  const checklist = await Checklist.create(req.body);
  res.status(201).json({ success: true, data: checklist });
};

exports.updateChecklist = async (req, res) => {
  const checklist = await Checklist.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  res.status(200).json({ success: true, data: checklist });
};

exports.deleteChecklist = async (req, res) => {
  await Checklist.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true, message: 'Checklist eliminado' });
};