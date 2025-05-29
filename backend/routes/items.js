const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Obtener todos los items
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Crear un nuevo item
router.post('/', async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.json(newItem);
});

module.exports = router;
