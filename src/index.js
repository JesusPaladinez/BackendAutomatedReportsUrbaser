const express = require("express");
const mongoose = require("mongoose");
const dataRoutes = require("./routes/catastroUrbaser");
require("dotenv").config();


const app = express();
const port = process.env.PORT || 9000;


// Middleware
app.use("/api", dataRoutes);


// Routes
app.get("/", (req, res) => {
  res.send("Inicio de la aplicación.");
});


// Connection to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((error) => console.error(error))

app.listen(port, () => console.log("Servidor ejecutandose en el puerto", port));
