const express = require('express');
const plantSchema = require("../models/plant")

const router = express.Router();

// Get all plants
router.get('/plants', (req, res) => {
    plantSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// Get plant
router.get('/plants/:id', (req, res) => {
    const { id } = req.params;

    plantSchema.findById(id)
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// Create plant
router.post('/createPlant', (req, res) => {
    const newPlant = new plantSchema(req.body);
    
    newPlant
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// Create plants
router.post('/createPlants', (req, res) => {
    const newPlants = req.body;
    
    plantSchema.insertMany(newPlants)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// Update plant
router.put("/updatePlant/:id", (req, res) => {
    const { id } = req.params;
    const {image, family, genus, species, name, hybrid, description, cares, toxicity, stock} = req.body;

    plantSchema
        .updateOne({_id: id},{$set: {image, family, genus, species, name, hybrid, description, cares, toxicity, stock}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// Delete plant by id
router.delete('/deletePlant/:id', (req, res) => {
    const { id } = req.params;

    plantSchema.deleteOne({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

//Delete plants by condition
router.delete('/deletePlants', (req, res) => {
    const { condition } = req.body;

    plantSchema.deleteMany(condition)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

module.exports = router;