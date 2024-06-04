const router = require("express").Router()
const Artwork = require('./../models/Artwork.model');
const { isAuthenticated } = require('./../middleware/jwt.middleware');


router
    .post('/:artworkId', isAuthenticated, (req, res, next) => {

        const { title, technique, dimension, year, image, price, auction } = req.body;
        const { _id: user } = req.payload._id;

        const bigData = (user, amount, date)
        Artwork
            .findByIdAndUpdate(bigData)
            .then(artwork => res.status(201).json(artwork))
            .catch(err => next(err))
    });

router
    .get('/', (req, res, next) => {
        Artwork.find()
            .populate('owner')
            .then(artwork => res.status(200).json(artworks))
            .catch(err => next(err))
    });


router
    .get('/:id', isAuthenticated, (req, res, next) => {

        const { id: artworkId } = req.params

        Artwork
            .findById(artworkId)
            .populate('owner')
            .then(response => res.json(response))
            .catch(err => next(err))
    });

router
    .get('/artist/:id', isAuthenticated, (req, res, next) => {

        const { id: artistId } = req.params

        Artwork.find({ owner: artistId })
            .populate('owner')
            .then(response => res.json(response))
            .catch(err => next(err))
    });


module.exports = router;
