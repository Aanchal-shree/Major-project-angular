const express = require('express');
const router = express.Router();
const Alumni = require('../models/alumni');

// POST route for registering an alumni
router.post('/register', async (req, res) => {
    try {
        const newAlumni = new Alumni(req.body);
        await newAlumni.save();
        res.status(201).send({ message: "Alumni registered successfully!" });
    } catch (error) {
        console.error("Error registering alumni:", error);  // Log the error
        res.status(400).send({ message: "Error registering alumni", error });
    }
});


module.exports = router;
