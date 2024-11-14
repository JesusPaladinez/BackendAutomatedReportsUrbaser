const mongoose = require("mongoose");


const serviciosSchema = mongoose.Schema({
  TARIFA: {
    type: String,
    required: true,
  },
  TARIFA_PLAN: {
    type: Number,
    required: false,
  },
  PLANCOME: {
    type: String,
    required: false,
  },
  FRECUENCIA_BARRIDO: {
    type: Number,
    required: false,
    min: 0,
    max: 6,
  },
  FRECUENCIA_RECOLECCION: {
    type: Number,
    required: false,
    min: 0,
    max: 7,
  },
  FACT_ENV_CORREO: {
    type: String,
    required: false,
    maxlength: 1,
  },
  PERI_INI_DESO: {
    type: String,
    required: false,
  },
  PERI_FIN_DESO: {
    type: String,
    required: false,
  },
  ACTIVIDAD: {
    type: Number,
    required: false,
    min: 0,
    max: 34,
  },
});


module.exports = mongoose.model("servicios", serviciosSchema);