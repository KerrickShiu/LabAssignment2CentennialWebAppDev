import express from 'express';
import Education from '../models/educationmodel.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(201).json(education);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const educations = await Education.find();
    res.json(educations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;