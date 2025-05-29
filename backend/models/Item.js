const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String
});

module.exports = mongoose.model('Item', ItemSchema);
