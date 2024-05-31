const router = require("express").Router()
const User = require('../models/User.model')
const { isAuthenticated } = require('../middleware/jwt.middleware')
const Exhibition = require("../models/Exhibition.model")
const Artwork = require("../models/Artwork.model")


router
    .get('/', isAuthenticated, (req, res, next) => {
        User.find()
            .then(users => res.json(users))
            .catch(err => next(err))
    })


router
    .get('/:id', isAuthenticated, (req, res, next) => {

        const { id: userId } = req.params

        console.log(userId)

        const promises = [
            User.findById(userId),
            Exhibition.find({ owner: userId }),
            Artwork.find({ owner: userId })
        ]

        Promise
            .all(promises)
            .then(responses => {
                const userInfo = responses[0]
                const exhibitionsInfo = responses[1]
                const artworksInfo = responses[2]

                const fullResponse = { userInfo, exhibitionsInfo, artworksInfo }

                res.json(fullResponse)
            })
            .catch(err => next(err))
    })

router.get('/:id', (req, res, next) => {
    Exhibition.findById(req.params.id)
        .populate('owner', 'username lastname birthyear')
        .populate('artworks', 'title technique dimension artworkyear artworkimage price')
        .then(user => res.status(201).json(user))
        .catch(err => next(err))
});


router
    .post('/', (req, res, next) => {
        const { username, email, password, lastname, country, birthyear, userimage, userbio } = req.body

        if (!username || !email || !password || !lastname || !country || !birthyear || !userimage) {
            return res.status(400).json({ message: "All fields are required" })
        }

        User.create({ username, email, password, lastname, country, birthyear, userimage, userbio })
            .then(user => res.status(201).json(user))
            .catch(err => next(err))
    })

router
    .put('/:id', isAuthenticated, (req, res, next) => {
        const { username, country, birthyear, avatar, userbio } = req.body

        User.findByIdAndUpdate(req.params.id, { username, country, birthyear, userimage, userbio }, { new: true })
            .then(user => res.status(201).json(user))
            .catch(err => next(err))
    })


router
    .delete('/:id', isAuthenticated, (req, res, next) => {
        User.findByIdAndDelete(req.params.id)
            .then(user => res.status(201).json(user))
            .catch(err => next(err))
    })

module.exports = router;