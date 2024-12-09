const mongoose = require("mongoose");


const dimensionesSchema = mongoose.Schema({
  VOLUBASU: {
    type: Number,
    required: false,
    min: 0,
  },
  PORCPART: {
    type: Number,
    required: false,
    min: 0,
  },
  DENSMEDI: {
    type: Number,
    required: false,
    min: 0,
  },
  SUSCASEO: {
    type: Number,
    required: false,
  },
  ID_PROV_APROVECHA: {
    type: String,
    required: false,
  },
  VOLUBASU_APROVECHA: {
    type: String,
    required: false,
  },
});


module.exports = mongoose.model("dimesiones", dimensionesSchema);