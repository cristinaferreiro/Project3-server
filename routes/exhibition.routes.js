
const Exhibition = require('./../models/Exhibition.model');
const User = require('./../models/User.model');
const { isAuthenticated } = require('./../middleware/jwt.middleware');
const router = require("express").Router()

router.post('/', isAuthenticated, (req, res, next) => {
    const { title, date, description, place, owner, artworks } = req.body;
    const userId = req.payload._id;

    Exhibition
        .create({
            title,
            date,
            description,
            place,
            owner: userId,
            artworks
        })
        .then(exhibition => res.status(201).json(exhibition))
        .catch(err => next(err))
});

router
    .get('/', isAuthenticated, (req, res, next) => {
        Exhibition
            .find()
            .populate('owner artworks')
            .then(exhibitions => res.status(200).json(exhibitions))
            .catch(err => next(err))
    });


router
    .get('/:id', isAuthenticated, (req, res, next) => {

        const { id: artworkId } = req.params

        Exhibition
            .findById(artworkId)
            .populate('owner artworks')
            .then(response => res.json(response))
            .catch(err => next(err))
    });


router
    .put('/:id', isAuthenticated, (req, res, next) => {

        const { title, date, description, place, owner, artworks } = req.body

        Exhibition
            .findByIdAndUpdate(req.params.id, { title, date, description, place, owner, artworks }, { new: true })
            .then(exhibitions => res.status(200).json(exhibitions))
            .catch(err => next(err))
    });

router
    .delete('/:id', (req, res, next) => {


        Exhibition
            .findByIdAndDelete(req.params.id)
            .then(exhibitions => res.status(200).json(exhibitions))
            .catch(err => next(err))
    })




module.exports = router;
