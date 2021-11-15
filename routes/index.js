// Main page

const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

const Story = require('../models/Story');


// @desc   Login/Landing page
// @route  GET
router.get('/', ensureGuest, async (req, res) => {
    try {
        const stories = await Story.find({ user: req.user.id }).lean()
        res.render('login', {
            layout: 'login',
        })
    } catch (err) {
        
    }
})

// @desc   Dashboard
// @route  GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
    res.render('dashboard', {
        name: req.user.firstName,
    })
})

module.exports = router;