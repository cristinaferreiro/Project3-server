const router = require("express").Router()
const Artwork = require('./../models/Artwork.model');
const { isAuthenticated } = require('./../middleware/jwt.middleware');


router
    .post('/', isAuthenticated, (req, res, next) => {

        const { title, technique, dimension, year, image, price } = req.body;
        const userId = req.payload._id;

        Artwork
            .create({
                title,
                artist: userId,
                technique,
                dimension,
                year,
                image,
                price,

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


router
    .get('/:id', isAuthenticated, (req, res, next) => {

        const { id: artworkId } = req.params

        console.log(artworkId)

        Artwork
            .findById(artworkId)
            .then(response => res.json(response))
            .catch(err => next(err))
    });


router
    .put('/:id', isAuthenticated, (req, res, next) => {
        const { title, technique, dimension, year, image, price } = req.body

        Artwork
            .findByIdAndUpdate(
                req.params.id, { title, technique, dimension, year, image, price }, { new: true })
            .then(artworks => res.status(200).json(artworks))
            .catch(err => next(err))
    });

router
    .delete('/:id', (req, res, next) => {


        Artwork
            .findByIdAndDelete(req.params.id)
            .then(artworks => res.status(200).json(artworks))
            .catch(err => next(err))
    })




module.exports = router;
