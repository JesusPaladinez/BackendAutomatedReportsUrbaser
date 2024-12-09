const mongoose = require("mongoose");


const ubicacionesSchema = mongoose.Schema({
  DIRENVIO: {
    type: String,
    required: true,
  },
  DIRPREDIO: {
    type: String,
    required: true,
  },
  DIRECCION_NORMALIZADA: {
    type: String,
    required: false,
  },
  MUNICIPIO: {
    type: String,
    required: true,
    maxlength: 3,
  },
  COD_BARRIO: {
    type: Number,
    required: false,
    min: 1,
  },
  DESC_BARRIO: {
    type: String,
    required: true,
  },
  CODIGO_BARRIADA: {
    type: String,
    required: false,
  },
  NOMBRE_BARRIADA: {
    type: String,
    required: false,
  },
  ZONA: {
    type: String,
    required: false,
  },
  MANZANA: {
    type: String,
    required: false,
  },
  LOTE: {
    type: String,
    required: false,
  },
  CASA: {
    type: String,
    required: false,
  },
  ZONA_SUPERVISION: {
    type: String,
    required: false,
    maxlength: 6,
  },
  COD_UNICO_BARRIADA: {
    type: String,
    required: false,
  },
  COOR_X: {
    type: Number,
    required: false,
  },
  COOR_Y: {
    type: Number,
    required: false,
  },
  NRO_PREDIAL: {
    type: String,
    required: false,
  },
  NRO_PREDIAL_ANT: {
    type: String,
    required: false,
  },
});


module.exports = mongoose.model("ubicaciones", ubicacionesSchema);