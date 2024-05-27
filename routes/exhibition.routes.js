
const Exhibition = require('./../models/Exhibition.model');
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

router.get('/', (req, res, next) => {
    Exhibition
        .find()
        .populate('user', 'username lastname birthyear') //--------MODIFICAR
        .populate('artworks', 'title technique dimension artworkyear artworkimage price') //--------MODIFICAR
        .then(exhibitions => res.status(200).json(exhibitions))
        .catch(err => next(err))
});




module.exports = router;
