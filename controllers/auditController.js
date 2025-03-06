const Audit = require('../models/Audit');

exports.getAudits = async (req, res) => {
  const audits = await Audit.find();
  res.status(200).json({ success: true, data: audits });
};

exports.getAudit = async (req, res) => {
  const audit = await Audit.findById(req.params.id);
  res.status(200).json({ success: true, data: audit });
};

exports.createAudit = async (req, res) => {
  const audit = await Audit.create(req.body);
  res.status(201).json({ success: true, data: audit });
};

exports.updateAudit = async (req, res) => {
  const audit = await Audit.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  res.status(200).json({ success: true, data: audit });
};

exports.deleteAudit = async (req, res) => {
  await Audit.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true, message: 'Auditoría eliminada' });
};