const express = require("express");
const router = express.Router();
const contactosSchema = require("../models/contactos-schema");


router.get("/contactos", async (req, res) => {
    try {
        const contactos = await contactosSchema.find();
        if (contactos.length > 0) {
            res.status(200).json(contactos);
        } else {
            res.status(204).json({ message: "La lista de contactos está vacía." })
        }        
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los contactos.", error });
    }
});


router.get("/contactos/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const contacto = await contactosSchema.findById(id);
        if (contacto) {
            res.status(200).json(contacto);
        } else {
            res.status(404).json({ message: "El contacto no existe."});
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el contacto.", error });
    }
});


router.post("/contactos", async (req, res) => {
    const contacto = new contactosSchema(req.body);
    try {
        const data = await contacto.save();
        res.status(201).json({ message: "Contacto creado.", data });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el contacto.", error });
    }
});


router.put("/contactos/:id", async (req, res) => {
    const { id } = req.params
    try {
        const contacto = await contactosSchema.updateOne({ _id: id }, { $set: req.body });

        if (!contacto.matchedCount) {
            res.status(404).json({ message: "El contacto no existe." });
        };

        if (contacto.modifiedCount > 0) {
            res.status(200).json({ message: "Contacto actualizado.", contacto });
        } else {
            res.status(204).json({ message: "No hubieron modificaciones en el contacto." })
        };
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el contacto.", error })
    };
});


router.delete("/contactos/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const contacto = contactosSchema.deleteOne({ _id: id });
        if (contacto.deleteCount > 0) {
            res.status(204).json({ message: "Contacto eliminado." });
        } else {
            res.status(404).json({ message: "El contacto no existe." })
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el contacto.", error });
    }
});


module.exports = router;
