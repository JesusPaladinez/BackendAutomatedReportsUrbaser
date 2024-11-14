const mongoose = require("mongoose");


const prediosSchema = mongoose.Schema({
  Unidades: {
    type: Number,
    required: true,
    min: 1,
    max: 120,
  },
  NUMEPRED: {
    type: String,
    required: false,
  },
  TIPOPROD: {
    type: Number,
    required: true,
    min: 1,
    max: 11,
  },
  ESTRATO: {
    type: Number,
    required: true,
    min: 1,
    max: 6,
  },
  UNIDHABI: {
    type: Number,
    required: true,
    min: 0,
    max: 120,
  },
  UNIDNOHABI: {
    type: Number,
    required: true,
    min: 0,
    max: 65,
  },
  DESOHABI: {
    type: Number,
    required: false,
    min: 0,
    max: 5,
  },
  DESONOHABI: {
    type: Number,
    required: false,
    min: 0,
    max: 1,
  },
  PREDDESO: {
    type: Number,
    required: false,
    min: 0,
    max: 3,
  },
  ESTASERV: {
    type: Number,
    required: true,
    max: 1,
  },
  COD_ALCALDIA: {
    type: String,
    required: true,
    maxlength: 1,
  },
  NOMBRE_ALCALDIA: {
    type: String,
    required: true,
  },
  PUERTA: {
    type: String,
    required: true,
    maxlength: 1,
  },
  AFORO_PERMANENTE: {
    type: Number,
    required: false,
    min: 0,
    max: 1,
  },
});


module.exports = mongoose.model("predios", prediosSchema);