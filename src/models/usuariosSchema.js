const mongoose = require("mongoose");


const usuariosSchema = mongoose.Schema({
  CUENTA: {
    type: String,
    required: true,
  },
  NOMBRES: {
    type: String,
    required: true,
  },
  CEDUNIT: {
    type: String,
    required: false,
  },
  FECHINGRESO: {
    type: Date,
    required: true,
  },
});


module.exports = mongoose.model("usuarios", usuariosSchema);