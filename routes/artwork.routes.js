const router = require("express").Router()
const Artwork = require('./../models/Artwork.model');
const { isAuthenticated } = require('./../middleware/jwt.middleware');


router
    .post('/', isAuthenticated, (req, res, next) => {

        const { title, technique, dimension, year, image, price } = req.body;
        const user = req.payload._id;

        Artwork
            .create({
                title,
                artist,
                technique,
                dimension,
                year,
                image,
                price
            })
            .then(artwork => res.status(201).json(artwork))
            .catch(err => next(err))
    });

router
    .get('/', (req, res, next) => {
        Artwork.find()
            .populate('user', 'username lastname')
            .then(artworks => res.status(200).json(artworks))
            .catch(err => next(err))
    });

module.exports = router;
