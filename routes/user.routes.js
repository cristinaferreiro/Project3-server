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
            Artwork.find({ artist: userId })
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


router
    .post('/', (req, res, next) => {
        const { username, email, password, lastname, country, birthyear, avatar, userbio } = req.body

        if (!username || !email || !password || !lastname || !country || !birthyear) {
            return res.status(400).json({ message: "All fields are required" })
        }

        User.create({ username, email, password, lastname, country, birthyear, avatar, userbio })
            .then(user => res.status(201).json(user))
            .catch(err => next(err))
    })


router
    .put('/:id', isAuthenticated, (req, res, next) => {
        const { country, birthyear, avatar, userbio } = req.body

        User.findByIdAndUpdate(req.params.id, { country, birthyear, avatar, userbio }, { new: true })
            .then(updatedUser => {
                if (!updatedUser) {
                    res.status(404).json({ message: "User not found" })
                } else {
                    res.json(updatedUser)
                }
            })
            .catch(err => next(err))
    })


router
    .delete('/:id', isAuthenticated, (req, res, next) => {
        User.findByIdAndRemove(req.params.id)
            .then(deletedUser => {
                if (!deletedUser) {
                    res.status(404).json({ message: "User not found" })
                } else {
                    res.json({ message: "User deleted successfully" })
                }
            })
            .catch(err => next(err))
    })

module.exports = router;