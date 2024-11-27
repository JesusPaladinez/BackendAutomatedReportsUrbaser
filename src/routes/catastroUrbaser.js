const express = require("express");
const router = express.Router();
const catastroUrbaserSchema = require("../models/catastroUrbaser");


// Show all data of Catastro Urbaser
router.get("/catastroUrbaser", async (req, res) => {
    try {
        const data = await catastroUrbaserSchema.find();
        res.status(200).json({ message: "Estos son todos los datos registrados en Catastro Urbaser", data });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los datos de Catastro Urbaser", error });
    }
});


// Show one data of Catastro Urbaser
router.get("/catastroUrbaser/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await catastroUrbaserSchema.findById(id);
        if (data) {
            res.status(200).json({ message: "El dato que solicitaste es el siguiente: ", data });
        } else {
            res.status(404).json({ message: "No se encontró el dato." });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el dato en Catastro Urbaser", error });
    }
})


// Create data in Catastro Urbaser
router.post("/catastroUrbaser", async (req, res) => {
    const catastroUrbaser = new catastroUrbaserSchema(req.body);
    try {
        const data = await catastroUrbaser.save();
        res.status(201).json({ message: "Dato creado con exito", data });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el dato en Catastro Urbaser", error });
    }
})	


// Update data in Catastro Urbaser
router.put("/catastroUrbaser/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await catastroUrbaserSchema.updateOne({ _id: id }, { $set: req.body});
        if (data.modifiedCount > 0) {
            res.status(200).json({ message: "Dato actualizado con éxito.", data });
        } else {
            res.status(404).json({ message: "No se encontró el dato." });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el dato.", error });
    }
})


// Delete data in Catastro Urbaser
router.delete("/catastroUrbaser/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await catastroUrbaserSchema.deleteOne({ _id: id });
        if (data.deleteCount > 0) {
            res.status(204).json({ message: "Dato eliminado con exito." });
        } else { 
            res.status(404).json({ message: "No se encontró el dato que desea eliminar." });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el dato.", error });
    }
})


module.exports = router;
