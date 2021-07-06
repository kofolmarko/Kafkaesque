const express = require('express');
const router = express.Router();

const Thought = require('../models/Thought');


// GET all thoughts
router.get('/', async (req, res) => {

    try {
        const thoughts = await Thought.find();
        res.status(200).json(thoughts);
    } catch(err) {
        res.staus(400).json({ message: err });
    }

});


// POST new thought
router.post('/', async (req, res) => {

    const thought = new Thought({
        id: req.body.id,
        text: req.body.text
    });

    try {
        const savedThought = await thought.save();
        res.status(201).json(savedThought);
    } catch (err) {
        res.status(400).json({ message: err });
    }
    
});

// DELETE thought
router.delete('/:_id', async (req, res) => {

    const thought_id = req.params._id;

    try {
        await Thought.findByIdAndDelete(thought_id);
        res.status(200).json(thought_id);
    } catch(err) {
        res.status(400).json({ message: err });
    }
});

module.exports = router;