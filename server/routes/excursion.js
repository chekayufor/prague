const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');


const User = require('../models/User');
const Excursion = require('../models/Excursion');

// @route     GET api/excursion
// @desc      Get all users excursion
// @access    Public
router.get('/', async (req, res) => {
    try {
        const excursion = await Excursion.find({}).sort({
            date: -1,
        });
        res.json(excursion);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route     POST api/excursion
// @desc      Add new excursion
// @access    Private
router.post(
    '/',
    [
        auth,
        [
            check('name', 'Name is required')
                .not()
                .isEmpty(),
        ],
        [
            check('section', 'Section is required')
                .not()
                .isEmpty(),
        ]
    ],
    async (req, res) => {
        // res.send('Add tour');
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, section, text, img: pic, cost1,cost2,cost3,cost4, start, duration, included, unincluded, necessary, location, language, type } = req.body;

        try {
            const newExcursion = new Excursion({
                name,
                section,
                text,
                img:[...pic],
                cost1,
                cost2,
                cost3,
                cost4,
                start,
                duration,
                included,
                unincluded,
                necessary,
                location,
                language,
                type,
                user: req.user.id,
            });

            const excursion = await newExcursion.save();

            res.json(excursion);
        } catch (err) {
            console.error(er.message);
            res.status(500).send('Server Error');
        }
    },
);

// @route     PUT api/excursion/:id
// @desc      Update excursion
// @access    Private
router.put('/:id', auth, async (req, res) => {
    const {  name, section, text, img, cost1,cost2,cost3,cost4, start, duration, included, unincluded, necessary, location, language, type } = req.body;

    // Build excursion object
    const excursionFields = {};
    if (name) excursionFields.name = name;
    if (section) excursionFields.section = section;
    if (text) excursionFields.text = text;
    if (img) excursionFields.img = img;
    if (cost1) excursionFields.cost1 = cost1;
    if (cost2) excursionFields.cost2 = cost2;
    if (cost3) excursionFields.cost2 = cost3;
    if (cost4) excursionFields.cost4 = cost4;
    if (start) excursionFields.start = start;
    if (duration) excursionFields.duration = duration;
    if (included) excursionFields.included = included;
    if (unincluded) excursionFields.unincluded = unincluded;
    if (necessary) excursionFields.necessary = necessary;
    if (location) excursionFields.location = location;
    if (language) excursionFields.language = language;
    if (type) excursionFields.type = type;

    try {
        let excursion = await Excursion.findById(req.params.id);

        if (!excursion) return res.status(404).json({ msg: 'excursion not found' });

        // Make sure user owns excursion
        if (excursion.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        excursion = await Excursion.findByIdAndUpdate(
            req.params.id,
            { $set: excursionFields },
            { new: true },
        );

        res.json(excursion);
    } catch (err) {
        console.error(er.message);
        res.status(500).send('Server Error');
    }
});

// @route     DELETE api/excursion/:id
// @desc      Delete excursion
// @access    Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let excursion = await Excursion.findById(req.params.id);

        if (!excursion) return res.status(404).json({ msg: 'excursion not found' });

        // Make sure user owns excursion
        if (excursion.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await Excursion.findByIdAndRemove(req.params.id);

        res.json({ msg: 'excursion removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;