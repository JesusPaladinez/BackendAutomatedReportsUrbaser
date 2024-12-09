const mongoose = require("mongoose");


const pagosSchema = mongoose.Schema({
  CICLO: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 2,
  },
  ESTAPUNTO: {
    type: String,
    required: false,
    maxlength: 1,
  },
  COBRO: {
    type: String,
    required: false,
  },
  COBRO_INTERESE: {
    type: String,
    required: true,
    maxlength: 1,
  },
  CONTRATO: {
    type: String,
    required: false,
  },
  MESDEUDA: {
    type: Number,
    required: false,
  },
  ES_VIP: {
    type: String,
    required: true,
    maxlength: 1,
  },
  ES_VIS: {
    type: String,
    required: true,
    maxlength: 1,
  },
  ESTAPROC: {
    type: String,
    required: true,
    maxlength: 1,
  },
  NIS_RAD: {
    type: String,
    required: false,
  },
});


module.exports = mongoose.model("pagos", pagosSchema);