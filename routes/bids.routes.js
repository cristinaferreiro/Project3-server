const router = require("express").Router()
const Artwork = require('./../models/Artwork.model')
const { isAuthenticated } = require('./../middleware/jwt.middleware')


router
    .put('/:artworkId', isAuthenticated, (req, res, next) => {

        const { artworkId } = req.params
        const { amount, date } = req.body
        const { _id: user } = req.payload

        const bidData = { amount, date, user }

        Artwork
            .findByIdAndUpdate(artworkId, { $push: { 'auction.bids': bidData } }, { new: true })
            .populate('auction.bids.user')
            .then(artwork => res.status(201).json(artwork))
            .catch(err => next(err))
    })

router
    .get('/:id', isAuthenticated, (req, res, next) => {

        const { id: artworkId } = req.params

        Artwork
            .findById(artworkId)
            .populate('auction.bids.user')
            .select('auction')
            .then(artwork => res.json(artwork))
            .catch(err => next(err))
    })




module.exports = router
