const router = require("express").Router()
const Artwork = require('./../models/Artwork.model');
const { isAuthenticated } = require('./../middleware/jwt.middleware');


router
    .post('/', isAuthenticated, (req, res, next) => {

        const { title, technique, dimension, year, image, price } = req.body;
        const owner = req.payload._id;

        Artwork
            .create({
                title,
                owner,
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
            .populate('owner')
            .then(artworks => res.status(200).json(artworks))
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

router ///// NUEVA RUTA
    .get('/artist/:id', isAuthenticated, (req, res, next) => {

        const { id: artistId } = req.params

        Artwork
            .find({ owner: artistId })
            .populate('owner')
            .then(response => res.json(response))
            .catch(err => next(err))
    });


router
    .put('/:id', isAuthenticated, (req, res, next) => {
        const { title, technique, dimension, year, image, price } = req.body

        Artwork
            .findByIdAndUpdate(req.params.id, { title, technique, dimension, year, image, price }, { new: true })
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
