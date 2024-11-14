const mongoose = require("mongoose");


const contactosSchema = mongoose.Schema({
  TELEFONO: {
    type: String,
    required: false,
  },
  CELULAR1: {
    type: String,
    required: false,
  },
  CELULAR2: {
    type: String,
    required: false,
  },
  CELULAR3: {
    type: String,
    required: false,
  },
  EMAIL: {
    type: String,
    required: false,
  },
});


module.exports = mongoose.model("contactos", contactosSchema);